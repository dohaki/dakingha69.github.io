(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,t,n){"use strict";n.r(t);n(29);var a=n(6),i=n.n(a),r=n(0),o=n.n(r),c=n(254),l=n(256),s=n(240),m=n.n(s),u=n(242),g=n.n(u),p=n(151),d=(n(152),n(193),n(4)),f=n.n(d),h=n(28);n(194),o.a.createContext({});f.a.object,f.a.string.isRequired,f.a.func,f.a.func;var v=n(255),y=n(145),x=Object(y.default)(v.a).withConfig({displayName:"RotatedAnchor",componentId:"soq4z6-0"})(["&&&{transform:",";}"],function(e){return"left"===e.direction?"rotate(90deg)":"rotate(270deg)"}),E=function(e){var t=e.direction,n=e.link,a=e.name,i=e.onPageLeave;return o.a.createElement(c.a,{justify:"center",width:"xsmall"},o.a.createElement(x,{direction:t,label:a,onClick:function(){i(a),setTimeout(function(){Object(h.navigate)(n)},1e3)}}))},b=function(e){var t=e.link,n=e.name,a=e.onPageLeave;return o.a.createElement(c.a,{justify:"center",pad:"medium"},o.a.createElement(v.a,{label:n,onClick:function(){a(n),setTimeout(function(){Object(h.navigate)(t)},1e3)}}))},T=n(48),k=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={inTransition:!1,nextPageName:"home",subTitles:["Dong-Ha Kim.","Web3 Developer.","Blockchain Enthusiast.","M. Sc. Student TU Berlin."]},t.handlePageLeave=function(e){t.setState({inTransition:!0,nextPageName:e.toLowerCase()})},t}return i()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(p.a,{title:"Welcome ♥"},o.a.createElement(m.a,{in:this.state.inTransition,timeout:500},function(t){return o.a.createElement("div",{style:Object.assign({},L,w[e.state.nextPageName][t])},o.a.createElement(b,{link:"/about",name:"ABOUT",onPageLeave:e.handlePageLeave}),o.a.createElement(c.a,{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}},o.a.createElement(E,{direction:"left",link:"/contact",name:"CONTACT",onPageLeave:e.handlePageLeave}),o.a.createElement(T.a.Consumer,null,function(t){var n=t.toggleTheme;return o.a.createElement(c.a,{width:"250px",onClick:function(){return n()}},o.a.createElement(l.a,null,"DH.Kim"),o.a.createElement(c.a,{height:"50px"},o.a.createElement(g.a,{cursor:{show:!1},avgTypingDelay:100},e.state.subTitles.map(function(t,n){return o.a.createElement("div",{key:n},o.a.createElement("span",null,t),o.a.createElement(g.a.Backspace,{count:n!==e.state.subTitles.length-1?t.length:0,delay:2e3}))}))))}),o.a.createElement(E,{direction:"right",link:"/projects",name:"PROJECTS",onPageLeave:e.handlePageLeave})),o.a.createElement(b,{link:"/blog",name:"BLOG",onPageLeave:e.handlePageLeave}))}))},t}(r.Component),L={height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",textAlign:"center",transition:"margin-right 1s ease-in-out, margin-left 1s ease-in-out, margin-top 1s ease-in-out, opacity 500ms"},w={about:{entering:{marginTop:"500px",opacity:1},entered:{marginTop:"500px",opacity:0}},contact:{entering:{marginLeft:"500px",marginRight:"-500px",opacity:1},entered:{marginLeft:"500px",marginRight:"-500px",opacity:0}},home:{entering:{marginTop:"500px",opacity:1},entered:{marginTop:"500px",opacity:0}},projects:{entering:{marginLeft:"-500px",marginRight:"500px",opacity:1},entered:{marginLeft:"-500px",marginRight:"500px",opacity:0}},blog:{entering:{marginTop:"-500px",opacity:1},entered:{marginTop:"-500px",opacity:0}}};t.default=k},151:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(155),o=n.n(r),c=n(253),l=n(150),s=n(48);t.a=function(e){var t=e.children,n=e.title,r=Object(a.useContext)(s.a).theme;return i.a.createElement(c.a,{theme:l[r],style:{height:"100%"}},i.a.createElement(o.a,{title:(n&&n+" | ")+"DH.Kim",meta:[{name:"keywords",content:"web development, blockchain, student, blog, javascript, dongha, kim, dong-ha"}]}),t)}},194:function(e,t,n){var a;e.exports=(a=n(244))&&a.default||a},244:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(65),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s}}]);
//# sourceMappingURL=component---src-pages-index-js-1d3c81f367411e7c4ac9.js.map