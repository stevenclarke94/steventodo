(this.webpackJsonpstevenstodolist=this.webpackJsonpstevenstodolist||[]).push([[0],{120:function(e,t,n){e.exports=n(402)},124:function(e,t,n){},402:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),l=n(14),c=n.n(l),r=(n(124),n(119)),i=n(29),s=(n(72),n(46)),u=(n(125),function(e){var t=e.text,n=e.postData,l=e.id,c=e.setPostData,r=(e.filterstate,e.setFilterState,Object(a.useState)("")),u=Object(i.a)(r,2),m=u[0],p=u[1];return o.a.createElement("div",null,o.a.createElement("h3",{className:m},t),o.a.createElement("button",{onClick:function(){console.log({id:l});var e=l;c(n.filter((function(t){return t.id!==e})))}},"Delete"),o.a.createElement("button",{onClick:function(){var e=l;n.map((function(e){!0!==e.complete?p("true"):p("false")})),c(n.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{complete:!t.complete}):Object(s.a)({},t)})))}},"Completed"))});var m=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)([]),s=Object(i.a)(c,2),m=s[0],p=s[1],d=Object(a.useState)(""),f=Object(i.a)(d,2);return f[0],f[1],o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Hello World"),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),p([].concat(Object(r.a)(m),[{id:1e3*Math.random(),text:n,complete:!1}])),l(""),console.log(m)}},o.a.createElement("input",{value:n,onChange:function(e){l(e.target.value),console.log(n)},type:"text"}),o.a.createElement("button",null,"Todo Post")),o.a.createElement("div",null,o.a.createElement("label",{for:"options"}),o.a.createElement("select",{onChange:function(e){console.log(e.target.value)},id:"filter",name:"options"},o.a.createElement("option",{value:"All"},"All"),o.a.createElement("option",{value:"Complete"},"Complete"),o.a.createElement("option",{value:"Incomplete"},"Incomplete"))),m.map((function(e){return o.a.createElement(u,{postData:m,setPostData:p,key:e.id,id:e.id,text:e.text,complete:e.completed,status:e.status})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.1c2a188f.chunk.js.map