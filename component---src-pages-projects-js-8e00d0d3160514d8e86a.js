(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{141:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(254),i=n(153),c=n(151),l=n(6),u=n.n(l),s=n(147),m=n(148),f=n(145),d=n(200),h={center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},p=Object(f.css)(["align-items:",";"],function(e){return h[e.align]}),g={around:"space-around",between:"space-between",center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},b=Object(f.css)(["align-content:",";"],function(e){return g[e.alignContent]}),y={center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},v=Object(f.css)(["justify-items:",";"],function(e){return y[e.justify]}),w={around:"space-around",between:"space-between",center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},j=Object(f.css)(["justify-content:",";"],function(e){return w[e.justifyContent]}),O={flex:"1fr",full:"100%","1/2":"50%","1/4":"25%","2/4":"50%","3/4":"75%","1/3":"33.33%","2/3":"66.66%"},k=function(e,t){return"minmax("+(t.global.size[e]||e)+", 1fr)"},E=function(e,t,n){var r=O[e];return!n||!r||t.fillContainer&&"horizontal"!==t.fillContainer||console.warn("Grid needs `fill` when using fractional row sizes"),r||t.theme.global.size[e]||e},x=f.default.div.withConfig({displayName:"StyledGrid",componentId:"sc-1wofa1l-0"})(["display:grid;box-sizing:border-box;"," "," "," "," "," "," "," "," "," "," ",""],d.e,function(e){return e.fillContainer&&("horizontal"===(t=e.fillContainer)?"width: 100%;":"vertical"===t?"height: 100%;":t?"\n      width: 100%;\n      height: 100%;\n    ":void 0);var t},function(e){return e.align&&p},function(e){return e.alignContent&&b},function(e){return e.areas&&function(e){Array.isArray(e.rowsProp)&&Array.isArray(e.columns)||console.warn("Grid `areas` requires `rows` and `columns` to be arrays.");var t=e.rowsProp.map(function(){return e.columns.map(function(){return"."})});return e.areas.forEach(function(e){for(var n=e.start[1];n<=e.end[1];n+=1)for(var r=e.start[0];r<=e.end[0];r+=1)t[n][r]=e.name}),"grid-template-areas: "+t.map(function(e){return'"'+e.join(" ")+'"'}).join(" ")+";"}(e)},function(e){return e.columns&&function(e){return Array.isArray(e.columns)?Object(f.css)(["grid-template-columns:",";"],e.columns.map(function(t){return Array.isArray(t)?"minmax("+E(t[0],e)+", "+E(t[1],e)+")":E(t,e)}).join(" ")):"object"==typeof e.columns?Object(f.css)(["grid-template-columns:repeat( ",","," );"],"number"==typeof(t=e.columns.count)?t:"auto-"+t,k(e.columns.size,e.theme)):Object(f.css)(["grid-template-columns:repeat( auto-fill,"," );"],k(e.columns,e.theme));var t}(e)},function(e){return e.gap&&function(e){if("string"==typeof e.gap){var t=e.theme.global.edgeSize[e.gap];return"grid-gap: "+t+" "+t+";"}return e.gap.row&&e.gap.column?"\n      grid-row-gap: "+e.theme.global.edgeSize[e.gap.row]+";\n      grid-column-gap: "+e.theme.global.edgeSize[e.gap.column]+";\n    ":e.gap.row?"\n      grid-row-gap: "+e.theme.global.edgeSize[e.gap.row]+";\n    ":e.gap.column?"\n      grid-column-gap: "+e.theme.global.edgeSize[e.gap.column]+";\n    ":""}(e)},function(e){return e.justify&&v},function(e){return e.justifyContent&&j},function(e){return e.rowsProp&&function(e){return Array.isArray(e.rowsProp)?Object(f.css)(["grid-template-rows:",";"],e.rowsProp.map(function(t){return Array.isArray(t)?"minmax("+E(t[0],e,!0)+", "+E(t[1],e,!0)+")":E(t,e,!0)}).join(" ")):Object(f.css)(["grid-auto-rows:",";"],e.theme.global.size[e.rowsProp])}(e)},function(e){return e.theme.grid&&e.theme.grid.extend});function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var S={div:x},z=function(e){var t=e.fill,n=e.rows,r=e.tag,a=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["fill","rows","tag"]),i=S[r];return i||(i=x.withComponent(r),S[r]=i),o.a.createElement(i,C({fillContainer:t,rowsProp:n},a))};z.defaultProps={tag:"div"};var P=Object(s.a)(m.d)(z);P.available="undefined"!=typeof window&&window.CSS&&window.CSS.supports&&window.CSS.supports("display","grid");var I={cover:"cover",contain:"contain"},A=Object(f.css)(["flex:1 1;overflow:hidden;object-fit:",";"],function(e){return I[e.fit]}),T=f.default.img.withConfig({displayName:"StyledImage",componentId:"ey4zx9-0"})([""," "," ",""],d.e,function(e){return e.fit&&A},function(e){return e.theme.image&&e.theme.image.extend});var _=Object(s.a)(m.d)(function(e){return o.a.createElement(T,e)}),N=n(247),J=f.default.div.withConfig({displayName:"StyledStack",componentId:"ajspsk-0"})(["position:relative;"," "," ",""],d.e,function(e){return e.fillContainer&&"\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  flex-grow: 1;\n  display: flex;\n"},function(e){return e.theme.stack&&e.theme.stack.extend}),B={fill:"\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  ",center:"\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  ",left:"\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n  ",right:"\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n  ",top:"\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ",bottom:"\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ","top-left":"\n    top: 0;\n    left: 0;\n  ","bottom-left":"\n    bottom: 0;\n    left: 0;\n  ","top-right":"\n    top: 0;\n    right: 0;\n  ","bottom-right":"\n    bottom: 0;\n    right: 0;\n  "},G=f.default.div.withConfig({displayName:"StyledStack__StyledStackLayer",componentId:"ajspsk-1"})(["position:",";"," "," ",""],function(e){return e.guiding?"relative":"absolute"},function(e){return e.guiding&&"display: block;"},function(e){return!e.guiding&&B[e.anchor||"fill"]+";"},function(e){return e.fillContainer&&"\n    width: 100%;\n    height: 100%;\n  "});function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var L=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.anchor,n=e.children,a=e.fill,i=e.guidingChild,c=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["anchor","children","fill","guidingChild"]),l=i;"first"!==l&&l?"last"===l&&(l=o.a.Children.count(n)-1):l=0;var u=0,s=r.Children.map(n,function(e){var n;return e?(n=u===l?o.a.createElement(G,{guiding:!0,fillContainer:a},e):o.a.createElement(G,{anchor:t},e),u+=1,n):e});return o.a.createElement(J,K({fillContainer:a},c),s)},a}(r.Component);var M=Object(s.a)(m.d)(L),R=(n(70),n(50),n(245),n(255)),V=n(186),D=n(187),F=n(185),H=function(e){switch(e){case"github":return o.a.createElement(V.a,{size:"large"});case"url":return o.a.createElement(D.a,{size:"large"});case"file":return o.a.createElement(F.a,{size:"large"})}},X=function(e){var t=e.links;return o.a.createElement(a.a,{direction:"row"},Object.keys(t).map(function(e,n){return o.a.createElement(R.a,{key:n,icon:H(e),href:t[e]})}))},Y=function(e){var t=e.children,n=e.links,r=e.showOverlay,i=e.accentKey;return o.a.createElement(M,null,o.a.createElement(a.a,null,t),r&&o.a.createElement(a.a,{fill:!0,align:"center",justify:"center",background:{color:"accent-"+(i%4+1),opacity:"strong"}},o.a.createElement(X,{links:n})))},q=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).state={showOverlay:!1},t.handleEvent=function(e){var n=e.type;switch(n){case"mouseenter":return t.setState({showOverlay:!0});case"mouseleave":return t.setState({showOverlay:!1});case"click":return t.setState(function(e){return{showOverlay:!e.showOverlay}});default:return console.warn("No case for event type: "+n)}},t}return u()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.description,r=e.links,i=e.accentKey,c=this.state.showOverlay;return o.a.createElement(a.a,{basis:"medium",margin:"xsmall",onMouseEnter:this.handleEvent,onMouseLeave:this.handleEvent,onClick:this.handleEvent},o.a.createElement(Y,{accentKey:i,showOverlay:c,links:r},o.a.createElement(a.a,{height:"small"},o.a.createElement(_,{src:"https://via.placeholder.com/300x150",fit:"cover"})),o.a.createElement(N.a,{size:"large",weight:"bold",margin:{vertical:"small"}},t),o.a.createElement(a.a,{height:"small"},o.a.createElement(N.a,null,n))))},t}(r.Component),U=function(e){var t=e.projects;return o.a.createElement(P,{direction:"row",columns:"medium"},t.map(function(e,t){return o.a.createElement(q,{key:t,accentKey:t,title:e.title,description:e.description,links:e.links})}))},Q=n(149),W=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){return o.a.createElement(U,{projects:Q.b})},t}(r.Component);t.default=function(){return o.a.createElement(c.a,{title:"Projects"},o.a.createElement(i.a,{title:"My projects"},o.a.createElement(a.a,{pad:{horizontal:"medium"}},o.a.createElement(W,null))))}},149:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"d",function(){return o}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return i});var r=[{to:"/",name:"HOME"},{to:"/about",name:"ABOUT"},{to:"/blog",name:"BLOG"},{to:"/contact",name:"CONTACT"},{to:"/projects",name:"PROJECTS"}],o=["Javascript","Ethereum","Tools"],a=[{category:"Javascript",name:"ES6+",level:85},{category:"Javascript",name:"TypeScript",level:85},{category:"Javascript",name:"React / React Native",level:80},{category:"Javascript",name:"Node",level:70},{category:"Tools",name:"Git",level:75},{category:"Tools",name:"Travis CI / Circle CI",level:60},{category:"Tools",name:"Docker",level:60},{category:"Ethereum",name:"Solidity",level:70},{category:"Ethereum",name:"Truffle Framework",level:80},{category:"Ethereum",name:"web3.js",level:85}],i=[{title:"dongha.kim",description:"My personal website built with gatsby.",keywords:["react","gatsby"],links:{github:"https://github.com/dakingha69/dakingha69.github.io",url:"dongha.kim"}},{title:"trustlines.network clientlib",description:"People powered money - Ethereum based social credit protocol, where I contributed a lot to the TypeScript client library.",keywords:["ethereum","web3","typescript"],links:{github:"https://github.com/trustlines-network/clientlib"}},{title:"CITES Blockchain Challenge",description:"",keywords:["ethereum","web3","truffle","solidity"],links:{github:"https://github.com/cites-on-blocks/cites-on-blocks_dapp"}},{title:"CITES Blockchain Challenge Paper",description:"",keywords:["ethereum","scientific paper"],links:{file:""}}]},151:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(155),i=n.n(a),c=n(253),l=n(150),u=n(48);t.a=function(e){var t=e.children,n=e.title,a=Object(r.useContext)(u.a).theme;return o.a.createElement(c.a,{theme:l[a],style:{height:"100%"}},o.a.createElement(i.a,{title:(n&&n+" | ")+"DH.Kim",meta:[{name:"keywords",content:"web development, blockchain, student, blog, javascript, dongha, kim, dong-ha"}]}),t)}},153:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(254),i=n(256),c=n(150),l=n(48),u=(n(152),n(28)),s=n(147),m=n(250),f=n(182),d=n(148),h=n(145),p=n(200),g=Object(h.css)(["opacity:",";cursor:default;"],function(e){return e.theme.button.disabled.opacity});var b=Object(h.css)(["&:hover{"," ",";}"],function(e){return e.hoverIndicator&&(t=e.hoverIndicator,n=e.theme,r=!0===t||"background"===t?n.global.hover.background:t,Object(h.css)([""," color:",";"],Object(m.c)(r,n),Object(f.c)(n.global.hover.color,n)));var t,n,r},function(e){return!e.plain&&Object(h.css)(["box-shadow:0px 0px 0px 2px ",";"],function(e){return e.colorValue?Object(f.c)(e.colorValue,e.theme):Object(f.c)(e.theme.button.border.color||"control",e.theme)}(e))}),y=Object(h.css)(["color:inherit;border:none;padding:0;text-align:inherit;"]),v=h.default.button.withConfig({displayName:"StyledButton",componentId:"sc-323bzc-0"})(["display:inline-block;box-sizing:border-box;cursor:pointer;outline:none;font:inherit;text-decoration:none;margin:0;background:transparent;overflow:visible;text-transform:none;"," "," "," "," "," "," "," "," "," "," "," ",""],p.e,function(e){return e.plain&&y},function(e){return!e.plain&&function(e){return Object(h.css)(["border:"," solid ",";border-radius:",";color:",";padding:"," ",";font-size:",";line-height:",";"],e.theme.button.border.width,Object(f.c)(e.colorValue||e.theme.button.border.color||"control",e.theme),e.theme.button.border.radius,Object(f.c)(e.theme.button.color||"text",e.theme),e.theme.button.padding.vertical,e.theme.button.padding.horizontal,e.theme.text.medium.size,e.theme.text.medium.height)}(e)},function(e){return e.primary&&function(e){return Object(h.css)([""," border-radius:",";"],Object(m.c)(Object(f.c)(e.colorValue||e.theme.button.primary.color||"control",e.theme),e.theme,e.theme.button.color),e.theme.button.border.radius)}(e)},function(e){return!e.disabled&&!e.focus&&b},function(e){return!e.disabled&&e.active&&m.a},function(e){return e.disabled&&g},function(e){return e.focus&&(!e.plain||e.focusIndicator)&&p.d},function(e){return!e.plain&&"\n    transition: 0.1s ease-in-out;\n  "},function(e){return e.fillContainer&&"\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  flex: 1 0 auto;\n"},function(e){return e.hasIcon&&!e.hasLabel&&"\n    padding: "+e.theme.global.edgeSize.small+";\n  "},function(e){return e.theme.button.extend});function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var j,O,k,E=function(e){var t,n;function i(t){var n;n=e.call(this,t)||this;var r=t.children,o=t.icon,a=t.label;return(o||a)&&r&&console.warn("Button should not have children if icon or label is provided"),n}return n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.prototype.render=function(){var e,t,n=this.props,i=n.a11yTitle,c=n.color,l=n.forwardRef,u=n.children,s=n.disabled,d=n.icon,h=n.fill,p=n.focus,g=n.href,b=n.label,y=n.onClick,j=n.plain,O=n.primary,k=n.reverse,E=n.theme,x=n.type,C=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,["a11yTitle","color","forwardRef","children","disabled","icon","fill","focus","href","label","onClick","plain","primary","reverse","theme","type"]),S=d;O&&d&&!d.props.color&&(S=Object(r.cloneElement)(d,{color:E.global.colors.text[(e=this.props,t=Object(m.d)(Object(f.c)(e.color||e.theme.button.primary.color||e.theme.global.colors.control||"brand",e.theme),e.theme),Object(f.a)(t,e.theme)?"dark":"light")]}));var z=k?b:S,P=k?S:b;return o.a.createElement(v,w({},C,{as:g?"a":void 0,ref:l,"aria-label":i,colorValue:c,disabled:s,hasIcon:!!d,hasLabel:!!b,fillContainer:h,focus:p,href:g,onClick:y,plain:void 0!==j?j:r.Children.count(u)>0||d&&!b,primary:O,theme:E,type:g?void 0:x}),z||P?o.a.createElement(a.a,{direction:"row",align:"center",justify:"center",gap:"small"},z,P):u)},i}(r.Component);k={type:"button",focusIndicator:!0},(O="defaultProps")in(j=E)?Object.defineProperty(j,O,{value:k,enumerable:!0,configurable:!0,writable:!0}):j[O]=k;var x=Object(s.a)(d.a,d.d,d.b)(E),C=n(255),S=n(184),z=n(149),P=function(e){return o.a.createElement(a.a,{direction:"row",style:{justifyContent:"space-around"}},o.a.createElement(x,{icon:o.a.createElement(S.a,null),onClick:function(){return Object(u.navigate)("/")}}),o.a.createElement(a.a,{direction:"row"},z.a.map(function(e,t){var n=e.to,r=e.name;return o.a.createElement(a.a,{pad:"small",key:t},o.a.createElement(C.a,{label:r,onClick:function(){return Object(u.navigate)(n)}}))})))};t.a=function(e){var t=e.title,n=e.children,u=Object(r.useContext)(l.a).theme;return o.a.createElement(a.a,{animation:"fadeIn",background:c[u].global.colors.background},o.a.createElement(P,null),o.a.createElement(i.a,{alignSelf:"center"},t),n)}},245:function(e,t,n){var r=n(32),o=n(31);n(246)("keys",function(){return function(e){return o(r(e))}})},246:function(e,t,n){var r=n(12),o=n(24),a=n(22);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],i={};i[e]=t(n),r(r.S+r.F*a(function(){n(1)}),"Object",i)}},247:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(147),i=n(148),c=n(145),l=n(182),u=n(200),s={center:"center",end:"right",start:"left"},m=Object(c.css)(["text-align:",";"],function(e){return s[e.textAlign]}),f=Object(c.css)(["color:",";"],function(e){return Object(l.c)(e.colorProp,e.theme)}),d=Object(c.css)(["font-weight:",";"],function(e){return e.weight}),h=c.default.span.withConfig({displayName:"StyledText",componentId:"sc-1sadyjn-0"})([""," "," "," "," "," "," "," ",""],u.e,function(e){return function(e){var t=e.size||"medium",n=e.theme.text[t];return n?Object(c.css)(["font-size:",";line-height:",";"],n.size,n.height):Object(c.css)(["font-size:",";line-height:normal;"],t)}(e)},function(e){return e.margin&&function(e){if("string"==typeof e.margin){var t=e.theme.global.edgeSize[e.margin];return"\n      margin-top: "+t+";\n      margin-bottom: "+t+";\n      margin-left: "+t+";\n      margin-right: "+t+";\n    "}return e.margin.vertical?"\n      margin-top: "+e.theme.global.edgeSize[e.margin.vertical]+";\n      margin-bottom: "+e.theme.global.edgeSize[e.margin.vertical]+";\n    ":e.margin.horizontal?"\n      margin-left: "+e.theme.global.edgeSize[e.margin.horizontal]+";\n      margin-right: "+e.theme.global.edgeSize[e.margin.horizontal]+";\n    ":e.margin.top?"margin-top: "+e.theme.global.edgeSize[e.margin.top]+";":e.margin.bottom?"margin-bottom: "+e.theme.global.edgeSize[e.margin.bottom]+";":e.margin.left?"margin-left: "+e.theme.global.edgeSize[e.margin.left]+";":e.margin.right?"margin-right: "+e.theme.global.edgeSize[e.margin.right]+";":""}(e)},function(e){return e.textAlign&&m},function(e){return e.truncate&&"\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"},function(e){return e.colorProp&&f},function(e){return e.weight&&d},function(e){return e.theme.text&&e.theme.text.extend});function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",function(){return y});var g={span:h},b=function(e){var t=e.color,n=e.tag,r=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["color","tag"]),a=g[n];return a||(a=h.withComponent(n),g[n]=a),o.a.createElement(a,p({colorProp:t},r))};b.defaultProps={level:1,tag:"span"};var y=Object(a.a)(i.d)(b)}}]);
//# sourceMappingURL=component---src-pages-projects-js-8e00d0d3160514d8e86a.js.map