"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[395],{2825:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"Using Modern Warfare Cubed/Shaders/the-shader-system","title":"The Shader System","description":"Documentation on Modern Warfare Cubed\'s custom shaders","source":"@site/docs/Using Modern Warfare Cubed/Shaders/the-shader-system.md","sourceDirName":"Using Modern Warfare Cubed/Shaders","slug":"/Using Modern Warfare Cubed/Shaders/the-shader-system","permalink":"/Modern-Warfare-Cubed-Documentation/Using Modern Warfare Cubed/Shaders/the-shader-system","draft":false,"unlisted":false,"editUrl":"https://github.com/Cubed-Development/Modern-Warfare-Cubed-Documentation/tree/main/packages/create-docusaurus/templates/shared/docs/Using Modern Warfare Cubed/Shaders/the-shader-system.md","tags":[],"version":"current","frontMatter":{"pagination_next":null,"pagination_prev":null,"description":"Documentation on Modern Warfare Cubed\'s custom shaders","keywords":["mwc","shaders"]},"sidebar":"defaultSidebar"}');var a=n(4848),o=n(8453);const s={pagination_next:null,pagination_prev:null,description:"Documentation on Modern Warfare Cubed's custom shaders",keywords:["mwc","shaders"]},d="The Shader System",i={},l=[{value:"Vertex and Fragment Shaders",id:"vertex-and-fragment-shaders",level:2},{value:"billboard.frag Example",id:"billboardfrag-example",level:3}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"the-shader-system",children:"The Shader System"})}),"\n",(0,a.jsxs)(r.admonition,{type:"warning",children:[(0,a.jsx)(r.p,{children:"The Modern Warfare Cubed documentation is under construction."}),(0,a.jsxs)(r.p,{children:["Documenting things takes time, like ",(0,a.jsx)(r.strong,{children:"a lot"})," of time, so please be patient."]})]}),"\n",(0,a.jsx)(r.p,{children:"Modern Warfare Cubed's shader system is pretty extensive, but here's some quick notes:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Shaders can be overwritten with resource packs"}),"\n",(0,a.jsx)(r.li,{children:"Shaders have poor compatibility with shaders from other mods"}),"\n",(0,a.jsxs)(r.li,{children:["All shaders are loaded at ",(0,a.jsx)(r.code,{children:"com.paneedah.weaponlib.render.Shaders"})]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"vertex-and-fragment-shaders",children:"Vertex and Fragment Shaders"}),"\n",(0,a.jsxs)(r.p,{children:["Shaders are written in ",(0,a.jsx)(r.a,{href:"https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)",children:"GLSL"}),", a C-like language, where files use the ",(0,a.jsx)(r.code,{children:".frag"})," and '",(0,a.jsx)(r.code,{children:".vert"})," for the Vertex and Fragment shaders."]}),"\n",(0,a.jsxs)(r.p,{children:["As an example, ",(0,a.jsx)(r.code,{children:"billboard.frag"})," and ",(0,a.jsx)(r.code,{children:"billboard.vert"})," both work together to make up the ",(0,a.jsx)(r.code,{children:"billboard"})," shader"]}),"\n",(0,a.jsx)(r.h3,{id:"billboardfrag-example",children:"billboard.frag Example"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-glsl",children:"#version 120\n\nuniform sampler2D tex;       // Main texture\nuniform sampler2D depthTex;  // Depth texture\nvarying vec2 tex_coord;      // Texture coordinates from vertex shader\nvarying vec4 color;          // Input color from vertex shader\n\nuniform vec2 viewportSize;   // Size of the viewport in pixels\n\n// Function to linearize depth\nfloat linearize_depth(float depth, float zNear, float zFar)\n{\n\treturn zNear * zFar / (zFar + depth * (zNear - zFar));\n}\n\nvoid main()\n{\n\t// Sample the base texture\n\tvec4 primary = texture2D(tex, tex_coord);\n\tprimary.a *= color.a;\n\n\t// Avoid rounding issues in screen coordinates\n\tvec2 coords = (gl_FragCoord.xy + vec2(0.5)) / viewportSize;\n\n\t// Sample and linearize the depth texture\n\tfloat geometryZ = linearize_depth(texture2D(depthTex, coords).r, 0.01, 100.0);\n\tfloat sceneZ = linearize_depth(gl_FragCoord.z, 0.01, 100.0);\n\n\t// Compute the depth difference\n\tfloat depthDiff = clamp((geometryZ - sceneZ), 0.0, 1.0);\n\n\t// Smooth blending based on depth\n\tfloat blendFactor = smoothstep(0.0, 0.7, depthDiff);\n\n\t// Combine the color with the depth effect\n\tgl_FragColor = primary * blendFactor;\n}\n"})})]})}function c(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>d});var t=n(6540);const a={},o=t.createContext(a);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);