"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[310],{6740:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(4848),o=t(8453);const r={pagination_prev:null,description:"Create a new model for an equipment or refresh an existing one",tags:["Assets"],sidebar_class_name:"assets",sidebar_position:0},s="Modeling Equipment",a={id:"Making Modern Warfare Cubed/Equipment/modeling-equipment",title:"Modeling Equipment",description:"Create a new model for an equipment or refresh an existing one",source:"@site/docs/Making Modern Warfare Cubed/Equipment/modeling-equipment.md",sourceDirName:"Making Modern Warfare Cubed/Equipment",slug:"/Making Modern Warfare Cubed/Equipment/modeling-equipment",permalink:"/Modern-Warfare-Cubed-Documentation/Making Modern Warfare Cubed/Equipment/modeling-equipment",draft:!1,unlisted:!1,editUrl:"https://github.com/Cubed-Development/Modern-Warfare-Cubed-Documentation/tree/main/packages/create-docusaurus/templates/shared/docs/Making Modern Warfare Cubed/Equipment/modeling-equipment.md",tags:[{inline:!0,label:"Assets",permalink:"/Modern-Warfare-Cubed-Documentation/tags/assets"}],version:"current",sidebarPosition:0,frontMatter:{pagination_prev:null,description:"Create a new model for an equipment or refresh an existing one",tags:["Assets"],sidebar_class_name:"assets",sidebar_position:0},sidebar:"defaultSidebar",next:{title:"Importing Equipment",permalink:"/Modern-Warfare-Cubed-Documentation/Making Modern Warfare Cubed/Equipment/importing-equipment"}},l={},d=[{value:"Creating the Blockbench project",id:"creating-the-blockbench-project",level:2},{value:"Modeling",id:"modeling",level:2},{value:"Exporting",id:"exporting",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"modeling-equipment",children:"Modeling Equipment"}),"\n",(0,i.jsx)(n.p,{children:"Modeling equipment is a fairly simple process, but there still are rules to respect."}),"\n",(0,i.jsx)(n.h2,{id:"creating-the-blockbench-project",children:"Creating the Blockbench project"}),"\n",(0,i.jsxs)(n.p,{children:["Start by downloading the ",(0,i.jsx)(n.a,{href:"https://github.com/Cubed-Development/Modern-Warfare-Cubed/blob/master/assets/templates/EquipmentTemplate.bbmodel",children:"equipment template"}),".\nOn the right of this page, click on the ",(0,i.jsx)(n.code,{children:"..."})," button it should open a drop-down menu, under ",(0,i.jsx)(n.code,{children:"Raw file content"})," click ",(0,i.jsx)(n.code,{children:"Download"}),".\nOnce the download is complete, open the file using Blockbench."]}),"\n",(0,i.jsxs)(n.p,{children:["Navigate to ",(0,i.jsx)(n.code,{children:"File > Project..."})," in Blockbench.\nModify the file name and model identifier using ",(0,i.jsx)(n.code,{children:"PascalCase"}),", for example, the magazine belt model is named ",(0,i.jsx)(n.code,{children:"MagazineBelt"}),".\nConfirm your changes and move on to the next section."]}),"\n",(0,i.jsx)(n.h2,{id:"modeling",children:"Modeling"}),"\n",(0,i.jsx)(n.p,{children:"Everything you create must be organized in folders.\nFor example, the magazine belt consists of several parts arranged in a hierarchical structure:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"body"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"belt"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"holders"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"magazines"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"satchel"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Each folder within a folder is a child, which is necessary for attaching parts to the base player model.\nIt is important to think of the hierarchy of folders as it will determine how rotations and movement are applied to each part, for example, the holders and satchel where not child of the belt they would move independently"}),"\n",(0,i.jsx)(n.p,{children:"Make sure to name all parts of your model.\nFortunately, you can rename cubes in bulk, simply click on the first cube you want to rename, then hold shift and click on the last cube.\nThis will select all the cubes between the two selections; you can also select multiple independent cubes using the ctrl key."}),"\n",(0,i.jsxs)(n.p,{children:["Model elements such as folders, cubes, etc. should be named using ",(0,i.jsx)(n.code,{children:"camelCase"}),", for example, the magazine holder inside the magazine belt model is named ",(0,i.jsx)(n.code,{children:"magazineHolder"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Remember that the player model isn't static like in Blockbench; legs move when animating sneaking makes the body clip into the legs etc..."})}),"\n",(0,i.jsx)(n.h2,{id:"exporting",children:"Exporting"}),"\n",(0,i.jsxs)(n.p,{children:["After completing the modeling and texturing process, it's time to export your equipment model.\nNavigate to ",(0,i.jsx)(n.code,{children:"File > Export > Export Java Entity"}),", choose the desired saving folder, and hit save."]}),"\n",(0,i.jsxs)(n.p,{children:["Don't forget to also save the project.\nTo do this, go to ",(0,i.jsx)(n.code,{children:"File > Save Project As"}),", select the appropriate saving folder, and confirm your save."]}),"\n",(0,i.jsxs)(n.p,{children:["You are now ready to proceed to the next step of creating equipment, ",(0,i.jsx)(n.a,{href:"importing-equipment",children:"importing equipment"}),"!"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);