(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){var i={"./anna.jpeg":18,"./bambi.jpeg":19,"./daisy.jpeg":20,"./donald-duck.jpeg":21,"./elsa.jpeg":22,"./gaston.jpeg":23,"./genie.jpeg":24,"./goofy.jpeg":25,"./hercules.jpeg":26,"./jasmine.jpeg":27,"./mcqueen.jpeg":28,"./merida.jpeg":29,"./mickey-mouse.jpeg":30,"./minnie-mouse.jpeg":31,"./moana.jpeg":32,"./pinocchio.jpeg":33,"./pluto.jpeg":34,"./stitch.jpeg":35,"./tinkerbell.jpeg":36,"./violet.jpeg":37};function n(e){var t=a(e);return c(t)}function a(e){if(!c.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=a,e.exports=n,n.id=17},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/anna.8b52a67c.jpeg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/bambi.95dc12b1.jpeg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/daisy.d1b15b1b.jpeg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/donald-duck.c15b7057.jpeg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/elsa.ef7e4fc3.jpeg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/gaston.e24fbd2c.jpeg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/genie.e607e924.jpeg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/goofy.d331653e.jpeg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/hercules.36c99b55.jpeg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/jasmine.be39c4ac.jpeg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/mcqueen.b3a1a28c.jpeg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/merida.e0263918.jpeg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/mickey-mouse.38984aec.jpeg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/minnie-mouse.e63f4479.jpeg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/moana.cd44c44d.jpeg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/pinocchio.8ad9c86a.jpeg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/pluto.fa0f4f88.jpeg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/stitch.d4644d8c.jpeg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/tinkerbell.6e5b382a.jpeg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/violet.dd7a38bc.jpeg"},function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),a=c(7),r=c.n(a),s=(c(12),c(3)),u=(c(13),c(0));function d(e){return Object(u.jsxs)("header",{id:"app-header",children:[Object(u.jsx)("h2",{id:"header-title",children:"Memory Game"}),Object(u.jsxs)("p",{children:["Current score: ",e.score.current]}),Object(u.jsxs)("p",{children:["High score: ",e.score.high]})]})}var o=c(6),f=(c(15),function(e){return Object(u.jsxs)("div",{className:"card-frame",onClick:function(){e.handleClick(e.index)},children:[Object(u.jsx)("img",{src:e.src,alt:""}),Object(u.jsx)("p",{children:e.index})]})}),p=(c(16),function(e){var t=Object(i.useState)([]),c=Object(s.a)(t,2),n=c[0],a=c[1],r=function(t){if(n[t])e.userClick(!1),a([]);else{var c=Object(o.a)(n);c[t]=!0,a(c),e.userClick(!0)}},d=function(e){for(var t=Object(o.a)(e),c=t.length-1;c>0;c-=1){var i=Math.floor(Math.random()*(c+1)),n=[t[i],t[c]];t[c]=n[0],t[i]=n[1]}return t}(e.data.map((function(t){return Object(u.jsx)(f,{src:t,handleClick:r,index:e.data.indexOf(t)})})));return Object(u.jsx)("main",{id:"card-grid",children:d})}),j=function(){var e;return(e=c(17)).keys().map(e).map((function(e){return e.default}))}();var l=function(){var e=Object(i.useState)(0),t=Object(s.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)(0),r=Object(s.a)(a,2),o=r[0],f=r[1],l={current:c,high:o};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{score:l}),Object(u.jsx)(p,{data:j,userClick:function(e){e?n(c+1):(c>o&&f(c),n(0))}})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),i(e),n(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),g()}],[[38,1,2]]]);
//# sourceMappingURL=main.276ca26c.chunk.js.map