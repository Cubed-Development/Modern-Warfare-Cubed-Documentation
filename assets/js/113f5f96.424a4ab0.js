"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[722],{9096:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"Making Modern Warfare Cubed/creating-and-modifing-weapons","title":"Creating and Modifying Weapons","description":"How to create a new gun for Modern Warfare Cubed","source":"@site/docs/Making Modern Warfare Cubed/creating-and-modifing-weapons.md","sourceDirName":"Making Modern Warfare Cubed","slug":"/Making Modern Warfare Cubed/creating-and-modifing-weapons","permalink":"/Modern-Warfare-Cubed-Documentation/Making Modern Warfare Cubed/creating-and-modifing-weapons","draft":false,"unlisted":false,"editUrl":"https://github.com/Cubed-Development/Modern-Warfare-Cubed-Documentation/tree/main/packages/create-docusaurus/templates/shared/docs/Making Modern Warfare Cubed/creating-and-modifing-weapons.md","tags":[{"inline":true,"label":"MWC","permalink":"/Modern-Warfare-Cubed-Documentation/tags/mwc"},{"inline":true,"label":"Weapons","permalink":"/Modern-Warfare-Cubed-Documentation/tags/weapons"},{"inline":true,"label":"Adding","permalink":"/Modern-Warfare-Cubed-Documentation/tags/adding"}],"version":"current","frontMatter":{"pagination_next":null,"pagination_prev":null,"description":"How to create a new gun for Modern Warfare Cubed","tags":["MWC","Weapons","Adding"]},"sidebar":"defaultSidebar"}');var o=a(4848),s=a(8453);const r={pagination_next:null,pagination_prev:null,description:"How to create a new gun for Modern Warfare Cubed",tags:["MWC","Weapons","Adding"]},d="Creating and Modifying Weapons",t={},l=[{value:"Making a new weapon",id:"making-a-new-weapon",level:2},{value:"Creating a new gun",id:"creating-a-new-gun",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"creating-and-modifying-weapons",children:"Creating and Modifying Weapons"})}),"\n",(0,o.jsxs)(n.p,{children:["Before we begin, you should make sure you understand the basics of ",(0,o.jsx)(n.a,{href:"https://www.baeldung.com/intellij-idea-java-builders",children:"Builders"})," in Java."]}),"\n",(0,o.jsx)(n.h2,{id:"making-a-new-weapon",children:"Making a new weapon"}),"\n",(0,o.jsx)(n.p,{children:"Each type of weapon uses its own builder:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Guns use Weapon.Builder() and should be placed in a file that ",(0,o.jsx)(n.a,{href:"https://www.w3schools.com/java/ref_keyword_implements.asp",children:"implements"})," GunFactory"]}),"\n",(0,o.jsx)(n.li,{children:"Melee weapons use ItemMelee.Builder() and should be placed in a file that implements MeleeFactory"}),"\n",(0,o.jsx)(n.li,{children:"Grenades use ItemGrenade.Builder() and should be placed in a file that implements GrenadeFactory"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"For the sake of brevity, I will only be going over how to make Guns, but many overlap between builders."}),"\n",(0,o.jsx)(n.h2,{id:"creating-a-new-gun",children:"Creating a new gun"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://github.com/Cubed-Development/Modern-Warfare-Cubed/blob/next/src/main/java/com/paneedah/mwc/items/guns/AK47Factory.java",children:"AK47 Factory"})," was used as an example for this page"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:'.withName("ak47")'}),'\nThe "ID" that will be used by Minecraft internally. This becomes: mwc',":ak47"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:".withFireRate(0.6F)"}),"\nThe max rate of fire (full auto or otherwise)"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:".withRecoil(4F)"}),'\nThe "basic" amount of recoil the gun will have when firing. You should still use a RecoilParam() for more complex recoil.']}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:".withZoom(0.9F)"}),"\nThe amount to zoom in-out when ADSing"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:".withConfigGroup(GunConfigurationGroup.RIFLES)"}),"\nThe Gun Configuration group this gun should use."]}),"\n",(0,o.jsx)(n.p,{children:"Options are: NONE, HANDGUN, LONG_GUN, RIFLE, SHOTGUN, CARBINE, ASSAULT_RIFLE, BATTLE_RIFLE, SNIPER_RIFLE, MACHINE_GUN, SUBMACHINE_GUN,"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:".hasFlashPedals()"}),'\nIf the gun should show the "flash" images when it is firing']}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:'.withShootSound("ak47")'}),"\nThe sound file used when the weapon is fired"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:'.withSilencedShootSound("ak15_silenced")'}),"\nThe sound file used when the weapon is fired and a suppressor is attached"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:'.withReloadSound("ak_reload")'}),"\nThe sound file used when the weapon is reloaded"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:'.withUnloadSound("ak_unload")'}),"\nThe sound file used when the weapon is unloaded"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:'.withInspectSound("inspection")'}),"\nThe sound file used when the weapon is being inspected.",(0,o.jsx)(n.br,{}),"\n","Most weapons do not need a custom inspect sound"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:'.withEndOfShootSound("gun_click")'}),"\nThe sound file used when the weapon is empty, and you try to fire it",(0,o.jsx)(n.br,{}),"\n","Most weapons do not need a custom end of shoot sound"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:'.withDrawSound("ak_draw")'}),"\nThe sound played when the weapon is held for the first time"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:".withReloadingTime(45)"}),"\nWeapon reloading time (in Ticks)"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:".withCreativeTab(MWC.WEAPONS_TAB)"}),"\nThe creative tab to place this weapon under"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:".useNewSystem()"}),"\nUse WS2 (TODO Document WS1 vs WS2)"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:".withMaxShots(1, Integer.MAX_VALUE)"}),"\nControls the fire modes for this weapon."]}),"\n",(0,o.jsx)(n.p,{children:"\u201c1\u201d For Semi-automatic shooting, \u201c3\u201d for burst shooting. and \u201cInteger.MAX_VALUE\u201d for automatic shooting"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>d});var i=a(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);