(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{101:function(e,n,t){e.exports=t(133)},106:function(e,n,t){},133:function(e,n,t){"use strict";t.r(n);var a,r=t(0),o=t.n(r),l=t(10),c=t.n(l),i=(t(106),t(31)),u=t(9),m=t(33),d=t(81),s=t.n(d),p=o.a.createContext({token:"",isLoggedIn:!1,login:function(e,n){},logout:function(){}}),f=function(e){var n=(new Date).getTime();return new Date(e).getTime()-n},g=function(e){var n,t=function(){var e=localStorage.getItem("token"),n=localStorage.getItem("expirationTime"),t=f(n);return t<=3600?(localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),null):{token:e,duration:t}}();t&&(n=t.token);var l=Object(r.useState)(n),c=Object(m.a)(l,2),i=c[0],u=c[1],d=!!i,s=Object(r.useCallback)((function(){u(null),localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),a&&clearTimeout(a)}),[]);Object(r.useEffect)((function(){t&&(console.log(t.duration),a=setTimeout(s,t.duration))}),[t,s]);var g={token:i,isLoggedIn:d,login:function(e,n){u(e),localStorage.setItem("token",e),localStorage.setItem("expirationTime",n);var t=f(n);a=setTimeout(s,t)},logout:s};return o.a.createElement(p.Provider,{value:g},e.children)},b=p,h=t(16),v=t(17);function E(){var e=Object(h.a)(["\n    margin: 3rem auto;\n    width: 95%;\n    max-width: 25rem;\n    border-radius: 6px;\n    background-color: #38015c;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n    padding: 1rem;\n    text-align: center;\n    color: white;\n\n    h1 {\n          text-align: center;\n          color: white;\n     }\n\n     .control {\n          margin-bottom: 0.5rem;\n        }\n        \n        .control label {\n          display: block;\n          color: white;\n          font-weight: bold;\n          margin-bottom: 0.5rem;\n        }\n        \n        .control input {\n          font: inherit;\n          background-color: #f1e1fc;\n          color: #38015c;\n          border-radius: 4px;\n          border: 1px solid white;\n          width: 100%;\n          text-align: left;\n          padding: 0.25rem;\n        }\n        \n        .actions {\n          margin-top: 1.5rem;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n        }\n        \n        .actions button {\n          cursor: pointer;\n          font: inherit;\n          color: white;\n          background-color: #9f5ccc;\n          border: 1px solid #9f5ccc;\n          border-radius: 4px;\n          padding: 0.5rem 2.5rem;\n        }\n        \n        .actions button:hover {\n          background-color: #873abb;\n          border-color: #873abb;\n        }\n        \n        .actions .toggle {\n          margin-top: 1rem;\n          background-color: transparent;\n          color: #9f5ccc;\n          border: none;\n          padding: 0.15rem 1.5rem;\n        }\n        \n        .actions .toggle:hover {\n          background-color: transparent;\n          color: #ae82cc;\n        }\n"]);return E=function(){return e},e}var x=v.a.section(E()),w=function(){var e=Object(r.useRef)(null),n=Object(r.useRef)(null),t=Object(r.useContext)(b),a=Object(r.useState)(!1),l=Object(m.a)(a,2),c=l[0],i=l[1];return o.a.createElement(x,null,o.a.createElement("section",null,o.a.createElement("form",{onSubmit:function(a){var r,o;a.preventDefault();var l={email:null===(r=e.current)||void 0===r?void 0:r.value,password:null===(o=n.current)||void 0===o?void 0:o.value};return s.a.post("https://powerful-plateau-38267.herokuapp.com/https://qo7vrra66k.execute-api.eu-west-1.amazonaws.com/choco/login",l).then((function(e){if(console.log(e),e.data.token){var n=new Date((new Date).getTime()+36e4);localStorage.setItem("token",JSON.stringify(e.data)),t.login(e.data.token,n.toISOString())}return i(!1),e.data}))}},o.a.createElement("div",{className:"control"},o.a.createElement("label",{htmlFor:"email"},"Your Email"),o.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Enter Your Email",required:!0,ref:e,"data-testid":"email"})),o.a.createElement("div",{className:"control"},o.a.createElement("label",{htmlFor:"password"},"Your Password"),o.a.createElement("input",{type:"password",id:"password",placeholder:"Enter Your Password",required:!0,ref:n,"data-testid":"password"})),o.a.createElement("div",{className:"actions"},!c&&o.a.createElement("button",null,"Login"),c&&o.a.createElement("p",null,"Sending request...")))))};function j(){var e=Object(h.a)(["\n.header {  \nheight: 5rem;\n  background-color: #38015c;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10%;\n}\n\n  .logo {\n    font-family: 'Lato', sans-serif;\n    font-size: 2rem;\n    color: white;\n    margin: 0;\n  }\n  \n  .header ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: baseline;\n  }\n  \n  .header li {\n    margin: 0 1rem;\n  }\n  \n  .header a {\n    text-decoration: none;\n    color: white;\n    font-weight: bold;\n  }\n  \n  .header button {\n    font: inherit;\n    background-color: transparent;\n    border: 1px solid white;\n    color: white;\n    font-weight: bold;\n    padding: 0.5rem 1.5rem;\n    border-radius: 6px;\n    cursor: pointer;\n  }\n  \n  .header a:hover {\n    color: #c291e2;\n  }\n  \n  .header button:hover {\n    background-color: #c291e2;\n    color: #38015c;\n  }\n"]);return j=function(){return e},e}var k=v.a.header(j()),O=function(){var e=Object(r.useContext)(b),n=e.isLoggedIn;return o.a.createElement(k,null,o.a.createElement("header",{className:"header"},o.a.createElement(i.b,{to:"/"},o.a.createElement("div",{className:"logo"},"Choco")),o.a.createElement("nav",null,o.a.createElement("ul",null,!n&&o.a.createElement("li",null,o.a.createElement(i.b,{to:"/login"},"Login")),n&&o.a.createElement("li",null,o.a.createElement(i.b,{to:"/profile"},"Profile")),n&&o.a.createElement("li",null,o.a.createElement("button",{onClick:function(){e.logout()}},"Logout"))))))},I=function(e){return o.a.createElement(r.Fragment,null,o.a.createElement(O,null),o.a.createElement("main",null,e.children))},y=t(54),C=t(34),S=t(57),T=t.n(S),L=t(86),N=t(44),F=t(161);function z(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  width: 100%;\n  border: 1px solid lightblue;\n  border-radius: 20px;\n  height: 100%;\n\n  button {\n    border-radius: 0 0 20px 20px;\n  }\n\n  img {\n    max-height: 250px;\n    object-fit: cover;\n    border-radius: 20px 20px 0 0;\n  }\n\n  div {\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 1rem;\n    height: 100%;\n  }\n"]);return z=function(){return e},e}var A=v.a.div(z()),D=function(e){var n=e.item,t=e.handleAddToCart;return o.a.createElement(A,null,o.a.createElement("img",{src:n.photo,alt:n.name}),o.a.createElement("div",null,o.a.createElement("h3",null,n.name),o.a.createElement("p",null,n.Description),o.a.createElement("h3",null,"$",n.price)),o.a.createElement(F.a,{onClick:function(){return t(n)}},"Add to cart"))};function P(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  font-family: Arial, Helvetica, sans-serif;\n  border-bottom: 1px solid lightblue;\n  padding-bottom: 20px;\n\n  div {\n    flex: 1;\n  }\n\n  .information,\n  .buttons {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  img {\n    max-width: 80px;\n    object-fit: cover;\n    margin-left: 40px;\n  }\n"]);return P=function(){return e},e}var q=v.a.div(P()),Y=function(e){var n=e.item,t=e.addToCart,a=e.removeFromCart;return o.a.createElement(q,null,o.a.createElement("div",null,o.a.createElement("h3",null,n.name),o.a.createElement("div",{className:"information"},o.a.createElement("p",null,"Price: $",n.price),o.a.createElement("p",null,"Total: $",(n.amount*n.price).toFixed(2))),o.a.createElement("div",{className:"buttons"},o.a.createElement(F.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return a(n.Id)}},"-"),o.a.createElement("p",null,n.amount),o.a.createElement(F.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return t(n)}},"+"))),o.a.createElement("img",{src:n.photo,alt:n.name}))};function $(){var e=Object(h.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  width: 500px;\n  padding: 20px;\n"]);return $=function(){return e},e}var B=v.a.aside($()),H=function(e){var n,t=e.cartItems,a=e.addToCart,r=e.removeFromCart;return o.a.createElement(B,null,o.a.createElement("h2",null,"Your Shopping Cart"),0===t.length?o.a.createElement("p",null,"No items in cart."):null,t.map((function(e){return o.a.createElement(Y,{key:e.Id,item:e,addToCart:a,removeFromCart:r})})),o.a.createElement("h2",null,"Total: $",(n=t,n.reduce((function(e,n){return e+n.amount*n.price}),0)).toFixed(2)))},J=t(168),Q=t(165),W=t(167),R=t(87),G=t.n(R),K=t(166),M=t(164);function U(){var e=Object(h.a)(["\n  position: fixed;\n  z-index: 100;\n  right: 20px;\n  top: 20px;\n"]);return U=function(){return e},e}function V(){var e=Object(h.a)(["\n  margin: 40px;\n"]);return V=function(){return e},e}var X=v.a.div(V()),Z=Object(v.a)(M.a)(U()),_=function(){var e=Object(L.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://powerful-plateau-38267.herokuapp.com/https://qo7vrra66k.execute-api.eu-west-1.amazonaws.com/choco/products?token=".concat((console.log("IN"),localStorage.getItem("token"))));case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(r.useState)(!1),n=Object(m.a)(e,2),t=n[0],a=n[1],l=Object(r.useState)([]),c=Object(m.a)(l,2),i=c[0],u=c[1],d=Object(N.useQuery)("products",_),s=d.data,p=d.isLoading,f=d.error;console.log(s);var g,b=function(e){u((function(n){return n.find((function(n){return n.Id===e.Id}))?n.map((function(n){return n.Id===e.Id?Object(C.a)(Object(C.a)({},n),{},{amount:n.amount+1}):n})):[].concat(Object(y.a)(n),[Object(C.a)(Object(C.a)({},e),{},{amount:1})])}))};return p?o.a.createElement(Q.a,null):f?o.a.createElement("div",null,"Something went wrong ..."):o.a.createElement(X,null,o.a.createElement(J.a,{anchor:"right",open:t,onClose:function(){return a(!1)}},o.a.createElement(H,{cartItems:i,addToCart:b,removeFromCart:function(e){u((function(n){return n.reduce((function(n,t){return t.Id===e?1===t.amount?n:[].concat(Object(y.a)(n),[Object(C.a)(Object(C.a)({},t),{},{amount:t.amount-1})]):[].concat(Object(y.a)(n),[t])}),[])}))}})),o.a.createElement(Z,{onClick:function(){return a(!0)}},o.a.createElement(K.a,{badgeContent:(g=i,g.reduce((function(e,n){return e+n.amount}),0)),color:"error"},o.a.createElement(G.a,null))),o.a.createElement(W.a,{container:!0,spacing:3},null===s||void 0===s?void 0:s.map((function(e){return o.a.createElement(W.a,{item:!0,key:e.Id,xs:12,sm:4},o.a.createElement(D,{item:e,handleAddToCart:b}))}))))};function ne(){var e=Object(h.a)(["\n  margin: 3rem auto;\n  text-align: center;\n\n h1 {\n  font-size: 5rem;\n}\n"]);return ne=function(){return e},e}var te=v.a.section(ne()),ae=function(){return o.a.createElement(te,null,o.a.createElement("section",null,o.a.createElement("h1",null,"Welcome on Board!")))},re=function(){var e=Object(r.useContext)(b);return o.a.createElement(i.a,null,o.a.createElement(I,null,o.a.createElement(u.d,null,o.a.createElement(u.b,{path:"/",exact:!0},o.a.createElement(ae,null)),!e.isLoggedIn&&o.a.createElement(u.b,{path:"/login"},o.a.createElement(w,null)),o.a.createElement(u.b,{path:"/profile"},e.isLoggedIn&&o.a.createElement(ee,null),!e.isLoggedIn&&o.a.createElement(u.a,{to:"/login"})),o.a.createElement(u.b,{path:"*"},o.a.createElement(u.a,{to:"/"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=new N.QueryClient;c.a.render(o.a.createElement(g,null,o.a.createElement(N.QueryClientProvider,{client:oe},o.a.createElement(i.a,{basename:"/sonaliad/react-material-ui-login-master"},o.a.createElement(re,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[101,1,2]]]);
//# sourceMappingURL=main.29ca1f41.chunk.js.map