import './style.css'
import triShader from './wgsl/triangleShader.wgsl?raw';
import computeShader from './wgsl/computeShader.wgsl?raw';
import checkboxShader from './wgsl/checkboxShader.wgsl?raw';

const rand = (min=0, max=1) => {
  return min + Math.random() * (max - min);
};
 
function createCircleVertices({
  radius = 1,
  numSubdivisions = 24,
  innerRadius = 0,
  startAngle = 0,
  endAngle = Math.PI * 2,
} = {}) {
  // 2 triangles per subdivision, 3 verts per tri, 2 values (xy) each.
  const numVertices = numSubdivisions * 3 * 2;
  const vertexData = new Float32Array(numSubdivisions * 2 * 3 * 2);
 
  let offset = 0;
  const addVertex = (x, y) => {
    vertexData[offset++] = x;
    vertexData[offset++] = y;
  };
 
  // 2 vertices per subdivision
  //
  // 0--1 4
  // | / /|
  // |/ / |
  // 2 3--5
  for (let i = 0; i < numSubdivisions; ++i) {
    const angle1 = startAngle + (i + 0) * (endAngle - startAngle) / numSubdivisions;
    const angle2 = startAngle + (i + 1) * (endAngle - startAngle) / numSubdivisions;
 
    const c1 = Math.cos(angle1);
    const s1 = Math.sin(angle1);
    const c2 = Math.cos(angle2);
    const s2 = Math.sin(angle2);
 
    // first triangle
    addVertex(c1 * radius, s1 * radius);
    addVertex(c2 * radius, s2 * radius);
    addVertex(c1 * innerRadius, s1 * innerRadius);
 
    // second triangle
    addVertex(c1 * innerRadius, s1 * innerRadius);
    addVertex(c2 * radius, s2 * radius);
    addVertex(c2 * innerRadius, s2 * innerRadius);
  }
 
  return {
    vertexData,
    numVertices,
  };
}

export async function basicRender(){
    const adapter = await navigator.gpu?.requestAdapter();
    const device = await adapter?.requestDevice() as GPUDevice ;
    if (!device) {
      console.error('need a browser that supports WebGPU');
      return;
    }
      // Get a WebGPU context from the canvas and configure it
  const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
  const context = canvas?.getContext('webgpu');
  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
  context?.configure({
    device,
    format: presentationFormat,
  });

 


  const module = device.createShaderModule({
    label:'shader module',
    code:triShader,
  });

  const pipeline = device.createRenderPipeline({
    label:'tri pipeline',
    layout:'auto',
    vertex:{
        module,
        entryPoint:'vs'
    },
    fragment:{
        module,
        entryPoint:'fs',
        targets:[{
            format:presentationFormat
        }]
    }
  });
  const kNumObjects = 100;

  // create 2 storage buffers
  const staticStorageUnitSize =
    4 * 4 + // color is 4 32bit floats (4bytes each)
    2 * 4 + // offset is 2 32bit floats (4bytes each)
    2 * 4;  // padding
  const storageUnitSize =
    2 * 4;  // scale is 2 32bit floats (4bytes each)
  const staticStorageBufferSize = staticStorageUnitSize * kNumObjects;
  const storageBufferSize = storageUnitSize * kNumObjects; // scale 需要重绘， 但其他（color & offset不需要）

  const staticStorageBuffer = device.createBuffer({
    label: 'static storage for objects',
    size: staticStorageBufferSize,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
  });

  const storageBuffer = device.createBuffer({
    label: 'changing storage for objects',
    size: storageBufferSize,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
  });

  const staticStorageValues = new Float32Array(staticStorageBufferSize / 4);
  const storageValues = new Float32Array(storageBufferSize / 4);

  // offsets to the various uniform values in float32 indices
  const kColorOffset = 0;
  const kOffsetOffset = 4;

  const kScaleOffset = 0;

  const objectInfos:Array<{scale:number}> = [];

  for (let i = 0; i < kNumObjects; ++i) {
    const staticOffset = i * (staticStorageUnitSize / 4);

    // These are only set once so set them now
    staticStorageValues.set([rand(), rand(), rand(), 1], staticOffset + kColorOffset);        // set the color
    staticStorageValues.set([rand(-0.9, 0.9), rand(-0.9, 0.9)], staticOffset + kOffsetOffset);      // set the offset

    objectInfos.push({
      scale: rand(0.2, 0.5),
    });
  }
  device.queue.writeBuffer(staticStorageBuffer, 0, staticStorageValues);

  const {vertexData, numVertices} = createCircleVertices({
    radius:0.5,
    innerRadius:0.25
  });
  const vertextStorageBuffer = device.createBuffer({
    label:'storage buffer vertices',
    size:vertexData.byteLength,
    usage:GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
  });

  device.queue.writeBuffer(vertextStorageBuffer,0,vertexData);

  const bindGroup = device.createBindGroup({
    label: 'bind group for objects',
    layout: pipeline.getBindGroupLayout(0),
    entries: [
      { binding: 0, resource: { buffer: staticStorageBuffer }},
      { binding: 1, resource: { buffer: storageBuffer }},
      {binding:2, resource:{buffer:vertextStorageBuffer}}
    ],
  });

  const renderPassDescriptor : GPURenderPassDescriptor = {
    label: 'our basic canvas renderPass',
    colorAttachments: [
      {
        // view: <- to be filled out when we render
        clearValue: [0.3, 0.3, 0.3, 1],
        loadOp: 'clear',
        storeOp: 'store',
      },
    ],
  };

  function render() {
    // Get the current texture from the canvas context and
    // set it as the texture to render to.
    renderPassDescriptor.colorAttachments[0].view =
        context!.getCurrentTexture().createView();

    const encoder = device.createCommandEncoder();
    const pass = encoder.beginRenderPass(renderPassDescriptor);
    pass.setPipeline(pipeline);

    // Set the uniform values in our JavaScript side Float32Array
    const aspect = canvas.width / canvas.height;

    objectInfos.forEach(({scale}, ndx) => {
      const offset = ndx * (storageUnitSize / 4);
      storageValues.set([scale / aspect, scale], offset + kScaleOffset); // set the scale
    });
    device.queue.writeBuffer(storageBuffer, 0, storageValues);

    pass.setBindGroup(0, bindGroup);
    pass.draw(numVertices,kNumObjects);  // call our vertex shader 3 times for several instances

    pass.end();

    const commandBuffer = encoder.finish();
    device.queue.submit([commandBuffer]);
  }

  const observer = new ResizeObserver(entries => {
    for (const entry of entries) {
      const canvas = entry.target;
      const width = entry.contentBoxSize[0].inlineSize;
      const height = entry.contentBoxSize[0].blockSize;
      canvas.width = Math.max(1, Math.min(width, device.limits.maxTextureDimension2D));
      canvas.height = Math.max(1, Math.min(height, device.limits.maxTextureDimension2D));
      // re-render
      render();
    }
  });
  observer.observe(canvas);
}



basicRender();