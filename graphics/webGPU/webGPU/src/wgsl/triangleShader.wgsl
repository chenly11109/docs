struct OurStruct {
  color: vec4f,
  offset: vec2f,
}

struct OtherStruct {
  scale:vec2f
}
struct Vertex{
  @location(0) position:vec2f,
  @location(1) color:vec4f,
  @location(2) offset:vec2f,
  @location(3) scale:vec2f,
  @location(4) perVertexColor:vec3f
  }

struct VSOutput{
  @builtin(position)position:vec4f,
  @location(0)color:vec4f
}



  @group(0)@binding(0)var<storage, read>ourStructs: array<OurStruct>;
  @group(0)@binding(1)var<storage, read>otherStructs:array<OtherStruct>;



@vertex fn vs(
  vert:Vertex,
) -> VSOutput{

  var vsOut:VSOutput;
  vsOut.position = vec4f(
    vert.position*vert.scale + vert.offset, 0.0, 1.0
  );
  vsOut.color = vert.color * vec4f(vert.perVertexColor, 1);
  return vsOut;
      }



@fragment fn fs(vsOut:VSOutput) -> @location(0) vec4f {
        return vsOut.color;
}