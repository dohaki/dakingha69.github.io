(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{180:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(277),i=(n(28),n(24),n(12),n(45),n(23),n(182)),l=n(199),c=n(245),u=n(185),s=Object(i.css)(["color:",";"],function(e){return Object(l.c)(e.colorProp,e.theme)}),f={center:"center",end:"right",start:"left"},h=Object(i.css)(["text-align:",";"],function(e){return f[e.textAlign]}),p=i.default.p.withConfig({displayName:"StyledParagraph",componentId:"tbetod-0"})([""," "," "," "," ",""],c.e,function(e){return function(e){var t=e.size||"medium",n=e.theme.paragraph[t];return Object(i.css)(["font-size:",";line-height:",";max-width:",";"],n.size,n.height,n.maxWidth)}(e)},function(e){return e.textAlign&&h},function(e){return e.colorProp&&s},function(e){return e.theme.paragraph&&e.theme.paragraph.extend});function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}p.defaultProps={},Object.setPrototypeOf(p.defaultProps,u.a);var d=function(e){var t=e.color,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["color"]);return a.a.createElement(p,m({colorProp:t},n))},g=n(278),v=n(279),b=n(190),y=(n(33),n(195)),k=n(194),O=n(244),w=Object(i.css)(["border-radius:",";"],function(e){return e.theme.global.edgeSize[e.round.size]}),E=i.default.svg.withConfig({displayName:"StyledMeter",componentId:"nsxarx-0"})(["max-width:100%;overflow:hidden;"," "," path{transition:stroke 0.3s,stroke-width 0.3s;}",";"],c.e,function(e){return e.round&&w},function(e){return e.theme.meter&&e.theme.meter.extend});E.defaultProps={},Object.setPrototypeOf(E.defaultProps,u.a);var j=function(e,t){var n={};return e&&("object"==typeof e?(n.stroke=Object(l.c)(e.color,t),e.opacity&&(n.strokeOpacity=""+(!0===e.opacity?t.global.opacity.medium:t.global.opacity[e.opacity]))):n.stroke=Object(l.c)(e,t)),n},x=/^neutral-\d+/,P=function(e,t){var n=Object.keys(t.global.colors).filter(function(e){return x.test(e)});return n[e%n.length]};function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var T=function(e){var t=e.background,n=e.max,r=e.round,o=e.size,i=e.theme,l=e.thickness,c=e.values,u=z(e,["background","max","round","size","theme","thickness","values"]),s="full"===o?288:Object(O.b)(i.global.size[o]||o),f=Object(O.b)(i.global.edgeSize[l]||l),h=r?f/2:0,p=f/2,m=(c||[]).some(function(e){return e.highlight}),d=h,g=(c||[]).filter(function(e){return e.value>0}).map(function(e,o){var l,u=e.color,g=e.highlight,v=(e.label,e.onHover),b=e.value,y=z(e,["color","highlight","label","onHover","value"]),k="p-"+o,O=b*(s-2*h)/n,w="M "+d+","+p+" L "+(d+O)+","+p,E=u||(o===c.length-1?i.meter.color:P(o,i));return v&&(l={onMouseOver:function(){return v(!0)},onMouseLeave:function(){return v(!1)}}),d+=O,a.a.createElement("path",C({key:k,d:w,fill:"none"},j(m&&!g?t:E,i),{strokeWidth:f,strokeLinecap:r?"round":"butt"},l,y))}).reverse();return a.a.createElement(E,C({viewBox:"0 0 "+s+" "+f,preserveAspectRatio:"none",width:"full"===o?"100%":s,height:f,round:r?{size:l}:void 0},u),a.a.createElement("path",C({d:"M "+h+","+p+" L "+(s-h)+","+p,fill:"none"},j(t,i),{strokeWidth:f,strokeLinecap:r?"round":"square"})),g)};T.defaultProps={background:"light-1"},Object.setPrototypeOf(T.defaultProps,u.a);var M=Object(k.a)(i.withTheme)(T),S=function(e,t,n,r){var a=(r-90)*Math.PI/180;return{x:e+n*Math.cos(a),y:t+n*Math.sin(a)}},I=function(e,t,n,r,a){var o=a;a-r>=360&&(o=r+359.99);var i=S(e,t,n,o),l=S(e,t,n,r),c=o-r<=180?"0":"1";return["M",i.x.toFixed(10),i.y.toFixed(10),"A",n.toFixed(10),n.toFixed(10),0,c,0,l.x.toFixed(10),l.y.toFixed(10)].join(" ")};function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var A=function(e){var t=e.background,n=e.max,r=e.round,o=e.size,i=e.theme,l=e.thickness,c=e.values,u=B(e,["background","max","round","size","theme","thickness","values"]),s="full"===o?288:Object(O.b)(i.global.size[o]||o),f=Object(O.b)(i.global.edgeSize[l]||l),h=s/2,p=s/2-f/2,m=360/n,d=(c||[]).some(function(e){return e.highlight}),g=0,v=0,b=[],y=[];return(c||[]).filter(function(e){return e.value>0}).forEach(function(e,o){var l,u,h=e.color,k=e.highlight,O=(e.label,e.onHover),w=e.value,E=B(e,["color","highlight","label","onHover","value"]),x="p-"+o,C=h||(o===c.length-1?i.meter.color:P(o,i));l=g+w>=n?360:Math.min(360,function(e,t,n){return Math.min(360,Math.max(0,e+t*n))}(v,m,w)),O&&(u={onMouseOver:function(){return O(!0)},onMouseLeave:function(){return O(!1)}});var z=j(d&&!k?t:C,i);if(r){var T=I(s/2,s/2,p,v,l);b.unshift(a.a.createElement("path",L({key:x,d:T,fill:"none"},z,{strokeWidth:f,strokeLinecap:"round"},u,E)));var M=I(s/2,s/2,p,l-.5,l),S=a.a.createElement("path",L({key:x+"-",d:M,fill:"none"},z,{strokeWidth:f,strokeLinecap:"round"},u,E));l-v>2*m&&(y=[]),y.unshift(S)}else{var A=I(s/2,s/2,p,v,l);b.push(a.a.createElement("path",L({key:x,d:A,fill:"none"},z,{strokeWidth:f,strokeLinecap:"butt"},u,E)))}g+=w,v=l}),a.a.createElement(E,L({viewBox:"0 0 "+s+" "+s,width:"full"===o?"100%":s,height:"full"===o?"100%":s},u),a.a.createElement("circle",L({cx:h,cy:h,r:p},j(t,i),{strokeWidth:f,strokeLinecap:r?"round":"square",fill:"none"})),b,y)};A.defaultProps={},Object.setPrototypeOf(A.defaultProps,u.a);var H=Object(k.a)(i.withTheme)(A);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return J(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t=e.call.apply(e,[this].concat(r))||this),"state",{}),t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.getDerivedStateFromProps=function(e,t){var n=t.max,r=function(e){var t=100;return e&&e.length>1&&(t=0,e.forEach(function(e){t+=e.value})),t}(e.values);return n&&r===n?null:{max:r}},r.prototype.render=function(){var e,t=this.props,n=t.type,r=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["type"]),o=this.state.max;return"bar"===n?e=a.a.createElement(M,F({max:o},r)):"circle"===n&&(e=a.a.createElement(H,F({max:o},r))),e},r}(r.Component);J(W,"defaultProps",{background:{color:"light-2",opacity:"medium"},size:"medium",thickness:"medium",type:"bar"});var _=W,D=function(e){var t=e.name,n=e.level;return a.a.createElement(o.a,null,a.a.createElement(y.a,null,t),a.a.createElement(_,{type:"bar",values:[{value:n}],margin:{vertical:"small"},background:"light-2"}))},N=function(e){var t=e.category,n=e.skills;return a.a.createElement(o.a,{align:"center",pad:{vertical:"medium"}},a.a.createElement(v.a,{size:"small"},t),n&&n.map(function(e){var t=e.name,n=e.level;return a.a.createElement(D,{key:t,name:t,level:n})}))},R=function(e){var t=e.skills;return e.skillCategories.map(function(e,n){return a.a.createElement(N,{key:n,category:e,skills:t.filter(function(t){return t.category===e})})})},G=n(187);var K=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement(R,{skills:G.c,skillCategories:G.d})},r}(r.Component),U=n(189);t.default=function(){return a.a.createElement(U.a,{title:"About"},a.a.createElement(b.a,{title:"Hello world!"},a.a.createElement(o.a,{align:"center",pad:{horizontal:"small"}},a.a.createElement(d,null,"Welcome to my website. My name is Dong-Ha Kim and I am a Fullstack Javascript Developer, Blockchain Enthusiast and M. Sc. Student at the TU Berlin."),a.a.createElement(d,null,"This site is unfortunately still WIP. You will find different projects and blog posts of mine in the near future here. Until then check out my   ",a.a.createElement(g.a,{label:"GitHub",href:"https://github.com/dakingha69"}),"   or  "," ",a.a.createElement(g.a,{label:"LinkedIn",href:"https://www.linkedin.com/in/dhkim0210"}),"."),a.a.createElement(v.a,null,"Skills"),a.a.createElement(d,null,"Below you can find a list of my skills with an estimated proficiency level."),a.a.createElement(K,null))))}},187:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return i});var r=[{to:"/",name:"HOME"},{to:"/about",name:"ABOUT"},{to:"/blog",name:"BLOG"},{to:"/contact",name:"CONTACT"},{to:"/projects",name:"PROJECTS"}],a=["Javascript","Ethereum","Tools"],o=[{category:"Javascript",name:"ES6+",level:85},{category:"Javascript",name:"TypeScript",level:85},{category:"Javascript",name:"React / React Native",level:80},{category:"Javascript",name:"Node",level:70},{category:"Tools",name:"Git",level:75},{category:"Tools",name:"Travis CI / Circle CI",level:60},{category:"Tools",name:"Docker",level:60},{category:"Ethereum",name:"Solidity",level:70},{category:"Ethereum",name:"Truffle Framework",level:80},{category:"Ethereum",name:"web3.js",level:85}],i=[{title:"dongha.kim",description:"My personal website built with gatsby.",keywords:["react","gatsby"],links:{github:"https://github.com/dakingha69/dakingha69.github.io",url:"dongha.kim"}},{title:"trustlines.network clientlib",description:"People powered money - Ethereum based social credit protocol, where I contributed a lot to the TypeScript client library.",keywords:["ethereum","web3","typescript"],links:{github:"https://github.com/trustlines-network/clientlib"}},{title:"CITES Blockchain Challenge",description:"",keywords:["ethereum","web3","truffle","solidity"],links:{github:"https://github.com/cites-on-blocks/cites-on-blocks_dapp"}},{title:"CITES Blockchain Challenge Paper",description:"",keywords:["ethereum","scientific paper"],links:{file:""}}]},189:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(192),i=n.n(o),l=n(276),c=n(188),u=n(84);t.a=function(e){var t=e.children,n=e.title,o=Object(r.useContext)(u.a).theme;return a.a.createElement(l.a,{theme:c[o],style:{height:"100%"}},a.a.createElement(i.a,{title:(n&&n+" | ")+"DH.Kim",meta:[{name:"keywords",content:"web development, blockchain, student, blog, javascript, dongha, kim, dong-ha"}]}),t)}},190:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(277),i=n(279),l=n(188),c=n(84),u=(n(33),n(58)),s=n(278),f=n(195),h=n(187),p=function(e){return a.a.createElement(o.a,{direction:"row",style:{justifyContent:"space-around"}},a.a.createElement(o.a,{pad:"small"},a.a.createElement(s.a,{onClick:function(){return Object(u.navigate)("/")}},a.a.createElement(f.a,{color:"dark-1"},"DH"),a.a.createElement(f.a,{color:"brand"},"."),a.a.createElement(f.a,{color:"dark-1"},"Kim"))),a.a.createElement(o.a,{direction:"row"},h.a.map(function(e,t){var n=e.to,r=e.name;return a.a.createElement(o.a,{pad:"small",key:t},a.a.createElement(s.a,{label:r,onClick:function(){return Object(u.navigate)(n)}}))})))};t.a=function(e){var t=e.title,n=e.children,u=Object(r.useContext)(c.a).theme;return a.a.createElement(o.a,{animation:"fadeIn",background:l[u].global.colors.background},a.a.createElement(p,null),a.a.createElement(i.a,{alignSelf:"center"},t),n)}},195:function(e,t,n){"use strict";n(28),n(24),n(12),n(45),n(23);var r=n(0),a=n.n(r),o=n(182),i=n(199),l=n(245),c=n(185),u={center:"center",end:"right",start:"left"},s=Object(o.css)(["text-align:",";"],function(e){return u[e.textAlign]}),f=Object(o.css)(["color:",";"],function(e){return Object(i.c)(e.colorProp,e.theme)}),h=Object(o.css)(["font-weight:",";"],function(e){return e.weight}),p=Object(o.css)(["word-break:",";"],function(e){return e.wordBreak}),m=o.default.span.withConfig({displayName:"StyledText",componentId:"sc-1sadyjn-0"})([""," "," "," "," "," "," "," ",""],l.e,function(e){return function(e){var t=e.size||"medium",n=e.theme.text[t];return n?Object(o.css)(["font-size:",";line-height:",";"],n.size,n.height):Object(o.css)(["font-size:",";line-height:normal;"],t)}(e)},function(e){return e.textAlign&&s},function(e){return e.truncate&&"\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"},function(e){return e.colorProp&&f},function(e){return e.weight&&h},function(e){return e.wordBreak&&p},function(e){return e.theme.text&&e.theme.text.extend});function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}m.defaultProps={},Object.setPrototypeOf(m.defaultProps,c.a),n.d(t,"a",function(){return v});var g=function(e){var t=e.color,n=e.tag,r=e.as,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["color","tag","as"]);return a.a.createElement(m,d({as:!r&&n?n:r,colorProp:t},o))};g.defaultProps={level:1};var v=g}}]);
//# sourceMappingURL=component---src-pages-about-js-0eb43ac26cc76480f8b6.js.map