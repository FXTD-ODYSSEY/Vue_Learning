webpackJsonp([1],{"I7+w":function(n,e){},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=t("7+uW"),o=t("Dd8w"),i=t.n(o),r=t("NYxO"),u={computed:i()({},Object(r.d)(["count"]),Object(r.c)(["evenOrOdd"])),methods:i()({},Object(r.b)(["increment","decrement","incrementIfOdd","incrementAsync"]))},m={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("p",[n._v("click "+n._s(n.count)+" times ,count is "+n._s(n.evenOrOdd))]),n._v(" "),t("button",{on:{click:n.increment}},[n._v("+")]),n._v(" "),t("button",{on:{click:n.decrement}},[n._v("-")]),n._v(" "),t("button",{on:{click:n.incrementIfOdd}},[n._v("increment if odd")]),n._v(" "),t("button",{on:{click:n.incrementAsync}},[n._v("increment async")])])},staticRenderFns:[]};var s=t("VU/8")(u,m,!1,function(n){t("I7+w")},null,null).exports;c.a.use(r.a);var d={increment:function(n){(0,n.commit)("INCREMENT")},decrement:function(n){(0,n.commit)("DECREMENT")},incrementIfOdd:function(n){var e=n.commit;n.state.count%2==1&&e("INCREMENT")},incrementAsync:function(n){var e=n.commit;setTimeout(function(){e("INCREMENT")},1e3)}},a=new r.a.Store({state:{count:0},mutations:{INCREMENT:function(n){n.count++},DECREMENT:function(n){n.count--}},actions:d,getters:{evenOrOdd:function(n){return n.count%2==0?"偶数":"奇数"}}});new c.a({el:"#app",components:{App:s},template:"<App/>",store:a})}},["NHnr"]);
//# sourceMappingURL=app.118ea012236f4699807c.js.map