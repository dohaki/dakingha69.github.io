(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{127:function(e,t,n){"use strict";n.r(t);n(28);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),c=n(137),u=n.n(c),s=n(134),l=n(143),d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={in:!1},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({in:!0})},n.render=function(){return o.a.createElement(s.a,null,o.a.createElement(u.a,{in:this.state.in,timeout:100},function(e){return o.a.createElement("div",{style:Object.assign({},p,f[e])},o.a.createElement(l.a,null),o.a.createElement("div",{style:m.container},o.a.createElement("h1",null,"Contact"),o.a.createElement("div",{class:"textContainer"})))}))},t}(i.Component),p={transition:"opacity 500ms",opacity:0,padding:20},f={entering:{opacity:0},entered:{opacity:1},exiting:{},exited:{}},m={container:{textAlign:"center"}};t.default=d},133:function(e,t,n){var a;e.exports=(a=n(136))&&a.default||a},134:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(139),o=n.n(i);n(135);t.a=function(e){var t=e.children;return r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(o.a,{title:"DH.Kim",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),r.a.createElement("div",{style:{height:"100%"}},t))}},135:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(45),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},138:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(132),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(133),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var d=n(29);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,n){"use strict";n(140),n(141);var a=n(0),r=n.n(a),i=n(132),o=n(147),c={container:{flex:1,display:"flex",flexDirection:"row",justifyContent:"flex-start",padding:"10px"},arrow:{fontSize:"40px"}};t.a=function(e){e.direction,e.link,e.name,e.onPageLeave;return r.a.createElement("div",{style:c.container,onClick:function(){return Object(i.navigateTo)("/")}},r.a.createElement(o.a,{className:"pointer",style:c.arrow}))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-b0b14c556df91223bc16.js.map