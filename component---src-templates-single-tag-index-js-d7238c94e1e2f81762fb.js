(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(146);t.default=function(e){e.data;var t=e.pageContext,a=t.posts,n=t.tagName;return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",fontFamily:"avenir"}},r.a.createElement("h1",null,"Post matching with ",n),a.map(function(e,t){return r.a.createElement(u.a,{key:t,to:e.frontmatter.path},r.a.createElement("h3",null,e.frontmatter.title))})))}},145:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),u=a(4),i=a.n(u),c=a(32),o=a.n(c);a.d(t,"a",function(){return o.a});a(145);var l=r.a.createContext({}),s=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},147:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),u=a(4),i=a.n(u),c=a(54),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=component---src-templates-single-tag-index-js-d7238c94e1e2f81762fb.js.map