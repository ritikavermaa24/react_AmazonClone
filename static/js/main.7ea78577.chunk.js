(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{37:function(e,a,t){e.exports=t.p+"static/media/home.07c99833.jpg"},40:function(e,a,t){e.exports=t(72)},45:function(e,a,t){},46:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){e.exports=t.p+"static/media/product2.9bce223f.png"},65:function(e,a,t){},66:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(33),l=t.n(r),i=(t(45),t(34)),s=t(6),m=(t(46),t(35)),o=t.n(m),u=Object(n.createContext)(),d=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(u.Provider,{value:Object(n.useReducer)(a,t)},r)},p=function(){return Object(n.useContext)(u)},E=t(36),g=t.n(E),h=t(11),_=t(25),v=t.n(_),f=(v.a.initializeApp({apiKey:"AIzaSyD3P-qr7Mrlg74BQymT7bykV2HYwbU8Gk8",authDomain:"amz-clone-medium.firebaseapp.com",databaseURL:"https://amz-clone-medium.firebaseio.com",projectId:"amz-clone-medium",storageBucket:"amz-clone-medium.appspot.com",messagingSenderId:"769450879220",appId:"1:769450879220:web:cbff61e0ee041531e456a1",measurementId:"G-CZDBWXMWF7"}).firestore(),v.a.auth());var b=function(){var e=p(),a=Object(s.a)(e,2),t=a[0],n=t.basket,r=t.user;return a[1],c.a.createElement("div",{className:"header"},c.a.createElement(h.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"https://s3.amazonaws.com/freebiesupply/large/2x/amazon-logo-white.png"})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{className:"header__searchInput",type:"text"}),c.a.createElement(o.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(h.b,{to:!r&&"/Login"},c.a.createElement("div",{onClick:function(){r&&f.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Hello ",r?r.email:"Guest"),c.a.createElement("span",{className:"header__optionLineTwo"},r?"Sign Out":"Sign In"))),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Returns"),c.a.createElement("span",{className:"header__optionLineTwo"},"& Orders")),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Your"),c.a.createElement("span",{className:"header__optionLineTwo"},"Prime")),c.a.createElement(h.b,{to:"/Checkout"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(g.a,null),c.a.createElement("span",{className:"header__Basketcount"},null===n||void 0===n?void 0:n.length)))))},N=t(37),k=t.n(N);t(62),t(63);var O=function(e){var a=e.id,t=e.title,n=e.images,r=e.price,l=e.rating,i=p(),m=Object(s.a)(i,2),o=m[0].basket,u=m[1];return console.log("thus is the basket >>>",o),c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null," ",t),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"product__rating"},Array(l).fill().map((function(e,a){return c.a.createElement("p",null,"\u2b50")})))),c.a.createElement("img",{src:n,alt:""}),c.a.createElement("button",{onClick:function(){u({type:"ADD_TO_BASKET",item:{id:a,title:t,images:n,price:r,rating:l}})}},"Add to Basket"))};t(64);var y=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__container"},c.a.createElement("img",{className:"home__image",src:k.a,alt:" "}),c.a.createElement("div",{className:"home__row"},c.a.createElement(O,{id:"1",title:"The lean Startup",price:29.99,images:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",rating:3}),c.a.createElement(O,{id:"2",title:"Kenwood Kmix Stand Mixer for \r Baking, Styling Kitchen Mixer with\r K-beater, Dough Hook and Whisk, 5 Litre\r Glass Bowl",price:239,images:"https://images-na.ssl-images-amazon.com/images/I/41PsV-B+7vL._SY300_.jpg",rating:4})),c.a.createElement("div",{className:"home__row"},c.a.createElement(O,{id:"3",title:"Samsung Curved LED Gaming Monitor",price:199.99,images:"https://images-na.ssl-images-amazon.com/images/G/01/aplus/detail-page/samsung-S27D390H-2-l.jpg",rating:3}),c.a.createElement(O,{id:"4",title:"Amazon Echo (3rd Generation)  |  Smart speaker",price:98.99,images:"https://th.bing.com/th/id/OIP.V9yskSKZXbLmFs52HoJOCgHaF3?pid=ImgDet&rs=1",rating:5}),c.a.createElement(O,{id:"5",title:"New Apple iPad Pro (12.9-inch, wi-fi, 128GB) - Silver (4th Generation",price:599.99,images:"https://th.bing.com/th/id/OIP.4rmoKRm1Ec8MB3u7F8V94AHaHa?pid=ImgDet&rs=1",rating:4})),c.a.createElement("div",{className:"home__row"},c.a.createElement(O,{id:"6",title:"Samsung Curved LED Gaming Monitor - Super Ultra Wide",price:1094.99,images:"https://th.bing.com/th/id/OIP.1i1N0JxTISIT7wpgvd3s5gHaFj?pid=ImgDet&rs=1",rating:4}))))},S=t(4),j=(t(65),t(66),t(38)),A=t.n(j),C=t(28),w=t(18),I=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},B=function(e,a){switch(console.log(a),a.type){case"ADD_TO_BASKET":return Object(w.a)(Object(w.a)({},e),{},{basket:[].concat(Object(C.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex((function(e){return e.id===a.id})),n=Object(C.a)(e.basket);return t>=0?n.splice(t,1):console.warn("Cant remove product (id: ".concat(a.id,") as its not in basket!")),Object(w.a)(Object(w.a)({},e),{},{basket:n});case"SET_USER":return Object(w.a)(Object(w.a)({},e),{},{user:a.user});default:return e}};var P=function(){var e=Object(S.f)(),a=p(),t=Object(s.a)(a,2),n=t[0].basket;return t[1],c.a.createElement("div",{className:"subtotal"},c.a.createElement(A.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",n.length," items):",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:I(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),c.a.createElement("button",{onClick:function(a){return e.push("/payment")}}," Proceed to Checkout"))};t(68);var T=function(e){var a=e.id,t=e.images,n=e.title,r=e.price,l=e.rating,i=p(),m=Object(s.a)(i,2),o=(m[0].basket,m[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{className:"checkoutProduct__image",src:t}),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},n),c.a.createElement("p",{className:"checkoutProduct__Price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e,a){return c.a.createElement("p",null,"\u2b50")}))),c.a.createElement("button",{onClick:function(){o({type:"REMOVE_FROM_BASKET",id:a})}}," Remove From Basket")))};var x=function(){var e=p(),a=Object(s.a)(e,2),t=a[0],n=t.basket,r=t.user;return a[1],c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{className:"checkout__ad",src:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/CEPC/storage/2020/May/Desktop_Header_ClearanceStore.jpg",alt:""}),c.a.createElement("div",null,c.a.createElement("h3",null,"Hello,",null===r||void 0===r?void 0:r.email),c.a.createElement("h2",{className:"checkout__title"},"Your shopping Basket "),n.map((function(e){return c.a.createElement(T,{id:e.id,title:e.title,images:e.images,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"checkout__right"},c.a.createElement(P,null)))};t(69);var z=function(){var e=Object(S.f)(),a=Object(n.useState)(""),t=Object(s.a)(a,2),r=t[0],l=t[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),o=m[0],u=m[1];return c.a.createElement("div",{className:"login"},c.a.createElement(h.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign-in"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{type:"text",value:r,onChange:function(e){return l(e.target.value)}}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"password",value:o,onChange:function(e){return u(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault(),f.signInWithEmailAndPassword(r,o).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton"},"Sign In")),c.a.createElement("p",null,"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),c.a.createElement("button",{onClick:function(a){a.preventDefault(),f.createUserWithEmailAndPassword(r,o).then((function(a){console.log(a),a&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"}," Create your Amazon Account")))};t(70);var D=function(){var e=p(),a=Object(s.a)(e,2),t=a[0],n=t.basket,r=t.user;return a[1],c.a.createElement("div",{className:"payment"},c.a.createElement("div",{className:"payment__container"},c.a.createElement("h1",null,"Checkout (",c.a.createElement(h.b,{to:"/checkout"},null===n||void 0===n?void 0:n.length," items"),")"),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Delivery Address")),c.a.createElement("div",{className:"payment__address"},c.a.createElement("p",null,null===r||void 0===r?void 0:r.email),c.a.createElement("p",null,"123 React Lane"),c.a.createElement("p",null,"Los Angeles, CA"))),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Review items and delivery")),c.a.createElement("div",{className:"payment__items"},n.map((function(e){return c.a.createElement(T,{id:e.id,title:e.title,images:e.images,price:e.price,rating:e.rating})}))))))};var L=function(){var e=p(),a=Object(s.a)(e,2);Object(i.a)(a[0]);var t=a[1];return Object(n.useEffect)((function(){f.onAuthStateChanged((function(e){console.log("the user is >>> ",e),t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),c.a.createElement(h.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(S.c,null,c.a.createElement(S.a,{path:"/Login"},c.a.createElement(z,null)),c.a.createElement(S.a,{path:"/Checkout"},c.a.createElement(b,null),c.a.createElement(x,null)),c.a.createElement(S.a,{path:"/payment"},c.a.createElement(b,null),c.a.createElement("h1",null," i am the payment "),c.a.createElement(D,null)),c.a.createElement(S.a,{path:"/"},c.a.createElement(b,null),c.a.createElement(y,null)))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,{initialState:{basket:[],user:null},reducer:B},c.a.createElement(L,null))),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.7ea78577.chunk.js.map