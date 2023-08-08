export async function basicCompute(){
    const adapter = await navigator.gpu?.requestAdapter();
    const device = await adapter?.requestDevice();
    if (!device) {
      console.error('need a browser that supports WebGPU');
      return;
    }

    const module = device.createShaderModule({
        label:'doubling compute module',
        code:computeShader
    })

    const pipeline = device.createComputePipeline({
        label:'compute pipeline',
        layout:'auto',
        compute:{
            module,
            entryPoint:'computeSomething'
        }
    })

    const input = new Float32Array([1,3,5]);
    const workBuffer = device.createBuffer({
        label:'work buffer',
        size:input.byteLength,
        usage:GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST
    });

    const resultBuffer = device.createBuffer({
        label:'result buffer',
        size:input.byteLength,
        usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST
    });

  
    device.queue.writeBuffer(workBuffer, 0, input);

    const encoder = device.createCommandEncoder({
        label:'compute encoder'
    });
    const pass = encoder.beginComputePass({
        label:'compute pass'
    });
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bindGroup);
    pass.dispatchWorkgroups(input.length);
    pass.end();

    encoder.copyBufferToBuffer(workBuffer,0,resultBuffer,0,resultBuffer.size);

    const commandBuffer = encoder.finish();
    device.queue.submit([commandBuffer]);

    await resultBuffer.mapAsync(GPUMapMode.READ);
    const result = new Float32Array(resultBuffer.getMappedRange());

    console.log('input', input);
    console.log('result', result);
    resultBuffer.unmap();
}
