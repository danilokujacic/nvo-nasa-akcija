(this.webpackJsonpnvo_nasa_akcija=this.webpackJsonpnvo_nasa_akcija||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(0),o=a.n(n),c=a(28),i=a.n(c),l=a(138),s=a(2),d=a(149),u=a(32),b=Object(u.b)({name:"counter",initialState:"light",reducers:{setTheme:function(e,t){return t.payload}}}),h=b.actions.setTheme,p=b.reducer,m=a(25),j=function(e){var t=Object(m.c)((function(e){return e.theme})),a=Object(m.b)();return{setTheme:function(r){if(e)return console.log(t),void a(h("dark"===t?"light":"dark"));a(h(r))},themeState:t}},k=function(){return Object(m.c)((function(e){return e.viewport}))},f=a(57),x=a(145),v=function(e){var t=Object(s.v)();return Object(r.jsx)(x.a,Object(f.a)(Object(f.a)({},e),{},{styles:{root:{color:t.palette.themeDark,background:"transparent",padding:"8px 16px",boxSizing:"border-box",borderBottom:"2px solid transparent"},label:{fontSize:"16px",fontWeight:600},rootHovered:{color:t.palette.themeDark,background:"transparent",borderBottom:"2px solid "+t.palette.themeDark}}}))},g=a(23),O=function(){return Object(r.jsxs)("div",{style:{height:"100%",alignItems:"center",display:"flex"},children:[Object(r.jsx)(v,{text:"Home",onClick:function(){return Object(g.b)("/")}}),Object(r.jsx)(v,{text:"About us",onClick:function(){return Object(g.b)("/about")}}),Object(r.jsx)(v,{text:"Contact",onClick:function(){return Object(g.b)("/contact")}})]})},y=a(44),D=a(140),C=a(141),L=function(){var e=o.a.useState(!1),t=Object(y.a)(e,2),a=t[0],n=t[1],c=Object(s.v)(),i=j().themeState;return Object(r.jsxs)("div",{style:{height:"100%",alignItems:"center",display:"flex"},children:[Object(r.jsx)(d.a,{iconProps:{iconName:"GlobalNavButton",style:{fontSize:20,color:c.palette.themeDark}},onClick:function(){return n(!0)},styles:{root:{selectors:{":hover .ms-Button-icon":{color:"".concat(c.palette.themeDarker," !important")}}},rootHovered:{backgroundColor:c.palette.white}}}),Object(r.jsx)(D.a,{onDismiss:function(){return n(!1)},onOuterClick:function(){return n(!1)},onLightDismissClick:function(){return n(!1)},isLightDismiss:!0,styles:{main:{zIndex:999,background:c.palette.black},headerText:{color:c.palette.themeDark},content:{color:c.palette.themeDark},contentInner:{marginTop:"24px"},overlay:{background:c.palette.black,opacity:.6,zIndex:5,position:"absolute"}},headerText:"Navigation",isOpen:a,children:Object(r.jsx)(C.a,{ariaLabel:"Navigation",onLinkClick:function(e,t){e.preventDefault(),Object(g.b)(t.url),n(!1)},styles:function(e){return{linkText:{zIndex:1,color:c.palette.themeDark},chevronIcon:{zIndex:1,color:c.palette.themeDark},link:{background:"dark"===i&&e.isSelected?c.palette.black:void 0,border:"none",":after":{borderLeft:"2px solid "+c.palette.themeDark}},compositeLink:{border:"none",":hover .ms-Nav-linkText":{color:c.palette.themeDarker},":hover .ms-Nav-chevron":{zIndex:1,color:c.palette.themeDarker+" !important"}}}},groups:[{links:[{name:"Home",url:"/"},{name:"About us",url:"/about",expandAriaLabel:"Expand About us",collapseAriaLabel:"Collapse About us",links:[{name:"Child link 4",url:"http://example.com",target:"_blank"}]},{name:"Contact",url:"/contact"}]}]})})]})},S=function(){var e=Object(s.v)(),t=j(!0),a=t.setTheme,n=t.themeState,o=k();return Object(r.jsxs)("div",{className:"header",style:{height:"52px",padding:"0px 24px",background:e.palette.black,borderBottom:"1px solid ".concat(e.palette.themeDark),display:"flex",justifyContent:"space-between"},children:["desktop"===o?Object(r.jsx)(O,{}):Object(r.jsx)(L,{}),Object(r.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(r.jsx)(d.a,{iconProps:{iconName:"light"===n?"ClearNight":"Sunny",style:{color:e.palette.themeDark,fontSize:"20px",marginTop:"dark"===n?"2px":void 0,marginLeft:"dark"===n?"6px":void 0}},styles:{root:{selectors:{":hover .ms-Button-icon":{color:"".concat(e.palette.themeDarker," !important")}}},rootHovered:{backgroundColor:e.palette.white}},title:"ClearNight",onClick:function(){return a()},ariaLabel:"ClearNight",disabled:!1})})]})},N=a(142),_=a(37),A=function(){var e=o.a.useState(!0),t=Object(y.a)(e,1)[0],a=Object(s.v)(),n=j().themeState,c=k(),i=Object(_.b)(t,null,{from:{position:"absolute",left:"10%",opacity:0,top:"desktop"===c?"30%":"15%"},enter:{left:"desktop"===c?"20%":"30%",top:"desktop"===c?"30%":"15%",opacity:1}}),l=Object(_.b)(t,null,{from:{position:"absolute",left:"60%",opacity:0,top:"desktop"===c?"50%":"30%"},enter:{left:"desktop"===c?"50%":"10%",top:"desktop"===c?"50%":"25%",opacity:1}});return Object(r.jsxs)(r.Fragment,{children:[i.map((function(e){var t=e.item,o=e.props,i=e.key;return t&&Object(r.jsx)(_.a.div,{style:o,className:"welcome-text",children:Object(r.jsx)(N.a,{styles:{root:{color:"light"===n?a.palette.black:a.palette.themeDark,userSelect:"none"}},variant:"desktop"===c?"mega":"xxLarge",children:"NVO \u201eNasa akcija\u201c"})},i)})),l.map((function(e){var t=e.item,o=e.props,c=e.key;return t&&Object(r.jsx)(_.a.div,{style:o,className:"welcome-text-description",children:Object(r.jsx)(N.a,{styles:{root:{color:"light"===n?a.palette.black:a.palette.themeDark,userSelect:"none"}},variant:"large",children:"Osnovana 2012 godine kao nevladino udruzenje ciji je opsti cilj razvoj svijesti gradjana kao i njihovo ukljucivanje u socijalni, ekonomski, ekoloski i kulturni razvoj drustva, kvaliteta zivota gradjana i lokalne zajednice u cijelini."})},c)}))]})},w=a(67),T=function(e){return Object(r.jsx)("div",{onClick:e.onClick?e.onClick:function(){},className:e.className,children:Object(r.jsx)(w.a,{style:e.style,iconName:"ChevronDownMed"})})},z=function(){var e=Object(s.v)(),t=j().themeState,a=k();return Object(r.jsxs)("section",{className:"home section",style:{backgroundImage:"dark"===t?"url(https://i2.wp.com/volimdanilovgrad.me/wp-content/uploads/2018/03/ee1c09fd9ca271941dd04fead87e0e2b.jpeg?resize=1035%2C425&ssl=1)":"url(https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/104469820_2638176146396714_609291864864041402_o.jpg?_nc_cat=107&ccb=2&_nc_sid=cdbe9c&_nc_ohc=J71lV_v4KV8AX9_Hgaa&_nc_oc=AQki3_Q_CaIbI5P4GRA93Xh9fim9MMUni262TrdEQfe74tuCNxybEOWC8hKibZpvKjY&_nc_ht=scontent-vie1-1.xx&oh=1fd2d42788d3139f2f3d4c1915b847d7&oe=60203680)"},children:[Object(r.jsx)(A,{}),Object(r.jsx)("div",{className:"backdrop"}),Object(r.jsx)(T,{style:{fontSize:"desktop"===a?50:30,color:"light"===t?e.palette.black:e.palette.themeDark},className:"chevrnon-scroll"})]})};var I=function(){Object(l.a)(),"dark"===j().themeState?Object(s.x)({palette:{themePrimary:"#0078d4",themeLighterAlt:"#eff6fc",themeLighter:"#deecf9",themeLight:"#c7e0f4",themeTertiary:"#71afe5",themeSecondary:"#2b88d8",themeDarkAlt:"#106ebe",themeDark:"#ffffff",themeDarker:"#323130",neutralLighterAlt:"#f8f8f8",neutralLighter:"#f4f4f4",neutralLight:"#eaeaea",neutralQuaternaryAlt:"#dadada",neutralQuaternary:"#d0d0d0",neutralTertiaryAlt:"#c8c8c8",neutralTertiary:"#c2c2c2",neutralSecondary:"#858585",neutralPrimaryAlt:"#4b4b4b",neutralPrimary:"#333333",neutralDark:"#272727",black:"#323130",white:"#e0e0e0"}}):Object(s.x)({palette:{themePrimary:"#0078d4",themeLighterAlt:"#eff6fc",themeLighter:"#deecf9",themeLight:"#c7e0f4",themeTertiary:"#71afe5",themeSecondary:"#2b88d8",themeDarkAlt:"#106ebe",themeDark:"#005a9e",themeDarker:"#005a9e",neutralLighterAlt:"#f8f8f8",neutralLighter:"#f4f4f4",neutralLight:"#eaeaea",neutralQuaternaryAlt:"#dadada",neutralQuaternary:"#d0d0d0",neutralTertiaryAlt:"#c8c8c8",neutralTertiary:"#c2c2c2",neutralSecondary:"#858585",neutralPrimaryAlt:"#4b4b4b",neutralPrimary:"#333333",neutralDark:"#272727",black:"#ffffff",white:"transparent"}});var e=Object(s.v)();return Object(r.jsxs)("div",{style:{width:"100%",height:"100%",background:e.palette.black},children:[Object(r.jsx)(S,{}),Object(r.jsx)("div",{children:Object(r.jsx)(g.a,{children:Object(r.jsx)(z,{path:"/"})})})]})},P=(a(100),a(18)),B=Object(u.b)({name:"counter",initialState:window.innerWidth<768?"mobile":"desktop",reducers:{getViewport:function(e){return e}}}).reducer,Q=Object(P.c)({theme:p,viewport:B}),H=Object(u.a)({reducer:Q});i.a.render(Object(r.jsx)(m.a,{store:H,children:Object(r.jsx)(I,{})}),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.1ce3d3dd.chunk.js.map