(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,n,t){e.exports=t(43)},39:function(e,n,t){},41:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(16),c=t.n(a),i=t(3),s=t(8),l=t(20),u=t.n(l),d=t(21),h=(t(37),t(5)),f=t(6),b=t(9),g=t(7),p=t(10),E=function(){return function(e){var n;e({type:"REQUEST_ROBOTS_PENDING"}),(n="https://jsonplaceholder.typicode.com/users",fetch(n).then(function(e){return e.json()})).then(function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})}).catch(function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})})}},m=function(e){var n=e.name,t=e.email,r=e.id;return o.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,t)))},v=function(e){var n=e.robots;return o.a.createElement("div",null,n.map(function(e,t){return o.a.createElement(m,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})}))},w=function(e){e.searchfield;var n=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"text",placeholder:"search robots",onChange:n,name:"search","aria-label":"search-robots"}))},O=function(e){return o.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},R=function(e){function n(e){var t;return Object(h.a)(this,n),(t=Object(b.a)(this,Object(g.a)(n).call(this,e))).state={hasError:!1},t}return Object(p.a)(n,e),Object(f.a)(n,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),n}(r.Component),y=(t(39),function(e){function n(){return Object(h.a)(this,n),Object(b.a)(this,Object(g.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.robots,t=e.searchField,r=e.onSearchChange,a=e.isPending,c=n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(w,{searchChange:r}),o.a.createElement(O,null,a?o.a.createElement("h1",null,"Loading"):o.a.createElement(R,null,o.a.createElement(v,{robots:c}))))}}]),n}(r.Component)),S=Object(s.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}},function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCHFIELD",payload:n.target.value})},onRequestRobots:function(){return e(E())}}})(y),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var k={searchField:""},_={robots:[],isPending:!0},N=(t(41),Object(d.createLogger)()),T=Object(i.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:n.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:n.payload});default:return e}}}),F=Object(i.d)(T,Object(i.a)(u.a,N));c.a.render(o.a.createElement(s.a,{store:F},o.a.createElement(S,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends-redux-1",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/robofriends-redux-1","/service-worker.js");j?function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):C(e)})}}()}},[[22,2,1]]]);
//# sourceMappingURL=main.1e157228.chunk.js.map