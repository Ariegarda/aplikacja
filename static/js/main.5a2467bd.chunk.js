(this.webpackJsonpaplikacja=this.webpackJsonpaplikacja||[]).push([[0],{26:function(e,a,t){e.exports=t(44)},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},38:function(e,a,t){},40:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(10),r=t.n(l),i=(t(31),t(32),t(15)),u=t(2),o=t(11),m=t(12),s=t(14),d=t(13),E=(t(33),function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"animate__animated animate__fadeIn"},c.a.createElement("div",{id:"home"},c.a.createElement("h3",{className:"animacja_tekstu"},"Aplikacja")))}}]),t}(c.a.Component)),p=(t(34),t(57)),v=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"aaa"},c.a.createElement("div",{id:"about"},c.a.createElement("div",{className:"animacja_tekstu"},c.a.createElement("p",null,"Youtube"),c.a.createElement(p.a,{variant:"contained",color:"primary"},"Hello World"))))}}]),t}(c.a.Component),f=(t(38),t(17)),h=t.n(f),b=t(22),j=t(23);t(40);function k(){var e=Object(n.useState)(null),a=Object(j.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(h.a.mark((function e(){var a,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=mgQtHbfrg0skbblm2RJZyqNgGSuAA9gJ5bJA9hze");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,l(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),t?c.a.createElement("div",{id:"photo"},c.a.createElement("img",{src:t.url,alt:t.title}),c.a.createElement("div",{id:"text"},c.a.createElement("h2",null,t.title),c.a.createElement("p",null,t.date),c.a.createElement("p",null,t.explanation))):c.a.createElement("div",null)}var y=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"animate__animated animate__fadeIn"},c.a.createElement("div",{id:"search"},c.a.createElement("div",{className:"animacja_tekstu"},c.a.createElement(p.a,{variant:"contained",color:"primary"},"Show picture"),c.a.createElement(k,null))))}}]),t}(c.a.Component);t(41);function O(){return c.a.createElement(i.a,null,c.a.createElement("div",{id:"nawigacja"},c.a.createElement("div",{id:"tytul"},c.a.createElement("h1",null,"Moja Apka")),c.a.createElement("ul",{id:"navi"},c.a.createElement("li",null,c.a.createElement(i.b,{exact:!0,to:"/",className:"menu",activeClassName:"menu-active"},c.a.createElement("p",null,"Home"))),c.a.createElement("li",null,c.a.createElement(i.b,{exact:!0,to:"/about",className:"menu",activeClassName:"menu-active"},c.a.createElement("p",null,"Youtube"))),c.a.createElement("li",null,c.a.createElement(i.b,{exact:!0,to:"/dashboard",className:"menu",activeClassName:"menu-active"},c.a.createElement("p",null,"Zdj\u0119cie Dnia"))))),c.a.createElement("div",{id:"tresc"},c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/"},c.a.createElement(N,null)),c.a.createElement(u.a,{path:"/about"},c.a.createElement(g,null)),c.a.createElement(u.a,{path:"/dashboard"},c.a.createElement(w,null)))))}function N(){return c.a.createElement(E,null)}function g(){return c.a.createElement(v,null)}function w(){return c.a.createElement(y,null)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.5a2467bd.chunk.js.map