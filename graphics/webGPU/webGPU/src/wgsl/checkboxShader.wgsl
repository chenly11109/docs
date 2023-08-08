 //inter-stage variable
 struct OurVertexShaderOutput {
  @builtin(position)position:vec4f,
 }
 
 @vertex fn vs(
        @builtin(vertex_index) vertexIndex : u32
      ) -> OurVertexShaderOutput{
        let pos = array(
          vec2f( 0.0,  0.5),  // top center
          vec2f(-0.5, -0.5),  // bottom left
          vec2f( 0.5, -0.5)   // bottom right
        );
 var vsOutput:OurVertexShaderOutput;
 vsOutput.position = vec4f(pos[vertexIndex],0.0, 1.0);
        return vsOutput;
      }
 
 //KEY:this @location(0)color refers to the same variable in vertex shader and fragment shader
 // where the @builtin(position)is different in these two shaders
      @fragment fn fs(@builtin(position)position:vec4f) -> @location(0) vec4f {
              let red = vec4f(1, 0, 0, 1);
        let cyan = vec4f(0, 1, 1, 1);
 
        let grid = vec2u(position.xy)/64;
        let checker = (grid.x + grid.y) % 2 == 1;
 
        return select(red, cyan, checker);
      }