---
pagination_next: null
pagination_prev: null
description: Documentation on Modern Warfare Cubed's custom shaders
keywords:
  - mwc
  - shaders
---

:::warning

The Modern Warfare Cubed documentation is under construction.

Documenting things takes time, like **a lot** of time, so please be patient.

:::

# The Shader System

Modern Warfare Cubed's shader system is pretty extensive, but here's some quick notes:

* Shaders can be overwritten with resource packs
* Shaders have poor compatibility with shaders from other mods

## Vertex and Fragment Shaders
Shaders are written in [GLSL], a C-like language, where files use the `.frag` and '`.vert` for the Vertex and Fragment shaders.

As a example, `billboard.frag` and `billboard.vert` both work together to make up the `billboard` shader 

### billboard.frag Example 
```glsl
#version 120

uniform sampler2D tex;       // Main texture
uniform sampler2D depthTex;  // Depth texture
varying vec2 tex_coord;      // Texture coordinates from vertex shader
varying vec4 color;          // Input color from vertex shader

uniform vec2 viewportSize;   // Size of the viewport in pixels

// Function to linearize depth
float linearize_depth(float depth, float zNear, float zFar)
{
	return zNear * zFar / (zFar + depth * (zNear - zFar));
}

void main()
{
	// Sample the base texture
	vec4 primary = texture2D(tex, tex_coord);
	primary.a *= color.a;

	// Avoid rounding issues in screen coordinates
	vec2 coords = (gl_FragCoord.xy + vec2(0.5)) / viewportSize;

	// Sample and linearize the depth texture
	float geometryZ = linearize_depth(texture2D(depthTex, coords).r, 0.01, 100.0);
	float sceneZ = linearize_depth(gl_FragCoord.z, 0.01, 100.0);

	// Compute the depth difference
	float depthDiff = clamp((geometryZ - sceneZ), 0.0, 1.0);

	// Smooth blending based on depth
	float blendFactor = smoothstep(0.0, 0.7, depthDiff);

	// Combine the color with the depth effect
	gl_FragColor = primary * blendFactor;
}
```

[GLSL]: https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)