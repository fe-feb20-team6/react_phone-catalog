(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{31:function(e,t,a){e.exports=a(51)},41:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),o=a(3),s=a(4),i=a(2),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUERY":return t.query;default:return e}},u=a(13),_=a.n(u),p=a(19),g=a(11),E=a(28),d=a(29),h={products:[]},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRODUCTS":return t.products;default:return e}},f="https://mate-academy.github.io/react_phone-catalog/api/products",v=function(){var e=Object(p.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,".json")).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=a(16),P={page:1,perPage:16},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":return Object(N.a)(Object(N.a)({},e),{},{page:t.page});case"SET_PER_PAGE":return Object(N.a)(Object(N.a)({},e),{},{perPage:t.perPage,page:1});default:return e}},C={field:"age"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT_BY":return{field:t.field};default:return e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return!0;case"FINISH_LOADING":return!1;default:return e}},j=function(e){return e.pagination.page},k=function(e){return e.pagination.perPage},w=function(e){return e.loading},T=function(e){return e.query},x=Object(g.combineReducers)({products:b,pagination:y,sort:O,loading:S,query:m}),F=function(e){var t=function(){return 0};switch(e.sort.field){case"name":t=function(e,t){return e.name.localeCompare(t.name)};break;case"age":case"price":t=function(t,a){return t[e.sort.field]-a[e.sort.field]}}var a=e.products.filter((function(t){return t.name.toLowerCase().includes(e.query.toLowerCase())})).sort(t),n=e.pagination,c=n.page,r=n.perPage,l=(c-1)*r,o=c*r;return a.slice(l,o)},A=Object(g.createStore)(x,Object(E.composeWithDevTools)(Object(g.applyMiddleware)(d.a))),I=function(){var e=Object(s.c)(T),t=Object(s.b)();return console.log(e),c.a.createElement("input",{className:"header__input",type:"text",placeholder:"Search in phones...",onChange:function(e){return t(function(e){return{type:"SET_QUERY",query:e}}(e.target.value))}})},U=(a(41),function(){return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},c.a.createElement("li",{className:"nav__item"},c.a.createElement(o.c,{to:"/",exact:!0,className:"nav__link",activeClassName:"nav__link--active"},"HOME")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(o.c,{to:"/phones",className:"nav__link",activeClassName:"nav__link--active"},"PHONES")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(o.c,{to:"/tablets",className:"nav__link",activeClassName:"nav__link--active"},"TABLETS")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(o.c,{to:"/accessories",className:"nav__link",activeClassName:"nav__link--active"},"ACCESSORIES"))))}),R=(a(43),function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header__left"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{src:"./LOGO.svg",alt:"logo"})),c.a.createElement(U,null)),c.a.createElement("div",{className:"header__right"},c.a.createElement(i.b,{path:"/:all"},c.a.createElement("div",{className:"search header__search"},c.a.createElement("img",{src:"./img/search.svg",alt:"heart_icon",className:"search__icon"}),c.a.createElement(I,null))),c.a.createElement(o.b,{to:"/favorites"},c.a.createElement("button",{type:"button",className:"header__button"},c.a.createElement("img",{src:"./img/heart.svg",alt:"heart_icon",className:""}))),c.a.createElement(o.b,{to:"/card"},c.a.createElement("button",{type:"button",className:"header__button"},c.a.createElement("img",{src:"./img/shopingBag.svg",alt:"shopping_icon",className:""})))))}),G=a(6),D=a(10),L=a.n(D),B=function(e){var t=e.phone,a=Object(i.g)(),n=t.price-t.discount;return c.a.createElement("section",{className:"PhoneCard"},c.a.createElement("div",{role:"button",onClick:function(){return function(e,t){switch(t){case"phone":case"tablet":a.push({pathname:"/".concat(t,"s/").concat(e)})}}(t.id,t.type)}},c.a.createElement("img",{src:"".concat(t.imageUrl),alt:"phone_image",className:"PhoneCard__image"})),c.a.createElement("p",{className:"PhoneCard__product"},"".concat(t.id.toUpperCase())),c.a.createElement("div",{className:"PhoneCard__price-container"},c.a.createElement("h2",{className:"PhoneCard__price"},"$","".concat(t.price)),c.a.createElement("h2",{className:L()("PhoneCard__price-discount",{"price-discount":t.price===n})},"$","".concat(t.price-t.discount))),c.a.createElement("p",{className:"PhoneCard__style-line"}),c.a.createElement("div",{className:"PhoneCard__text-container"},c.a.createElement("div",{className:"PhoneCard__text-module"},c.a.createElement("p",{className:"PhoneCard__title"},"Screen"),c.a.createElement("p",{className:"PhoneCard__item"},"".concat(t.screen))),c.a.createElement("div",{className:"PhoneCard__text-module"},c.a.createElement("p",{className:"PhoneCard__title"},"Capacity"),c.a.createElement("p",{className:"PhoneCard__item"},"".concat(t.capacity))),c.a.createElement("div",{className:"PhoneCard__text-module"},c.a.createElement("p",{className:"PhoneCard__title"},"RAM"),c.a.createElement("p",{className:"PhoneCard__item"},"".concat(t.ram)))),c.a.createElement("div",{className:"PhoneCard__buttons-container"},c.a.createElement("button",{type:"button",className:"PhoneCard__button button"},"Add to card"),c.a.createElement("button",{type:"button",className:"PhoneCard__favorits-button button"},c.a.createElement("img",{src:"./img/heart.svg",alt:"heart_icon",className:"PhoneCard__favorits-image"}))))},H=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"gooey"},c.a.createElement("span",{className:"dot"}),c.a.createElement("div",{className:"dots"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null))))},M=a(30),q=function(e){var t=e.pageNumbers,a=Object(s.b)(),n=Object(s.c)(j),r=Object(s.c)(k),l=Object(i.g)(),o=Object(i.h)(),m=new URLSearchParams(o.search);console.log(r,n);var u=function(e){m.set("page",e.toString()),l.push({search:m.toString()}),a(function(e){return{type:"SET_PAGE",page:e}}(+e))};return c.a.createElement("section",{className:"pagination"},c.a.createElement("button",{type:"button",className:"pagination__button","aria-label":"Previous",onClick:function(){return u(n-1)},disabled:1===n},1===n?c.a.createElement("img",{src:"img/arrow_left.svg",alt:"arrow"}):c.a.createElement("img",{src:"img/arrow_left_dark.svg",alt:"arrow"})),c.a.createElement("ul",{className:"pagination__list"},Object(M.a)(Array(t)).map((function(e,t){return c.a.createElement("li",{key:t,className:"pagination__item"},c.a.createElement("button",{type:"button",className:L()("pagination__button",{"pagination__button-active":n===t+1}),onClick:function(){return u(t+1)}},t+1))}))),c.a.createElement("button",{type:"button",className:"pagination__button","aria-label":"Next",onClick:function(){return u(n+1)},disabled:n===t},n===t?c.a.createElement("img",{src:"img/arrow_right.svg",alt:"arrow"}):c.a.createElement("img",{src:"img/arrow_right_dark.svg",alt:"arrow"})))},Y=function(){var e=Object(i.g)(),t=Object(i.h)(),a=Object(s.b)(),r=Object(s.c)(w),l=Object(s.c)(F),m=Object(n.useState)(l.filter((function(e){return"phone"===e.type}))),u=Object(G.a)(m,1)[0],_=new URLSearchParams(t.search),p=Number(_.get("perPage"))||u.length,g=Math.ceil(u.length/p)||1;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"PhonesPage__article"},c.a.createElement("div",{className:"PhonesPage__phoneslink-container"},c.a.createElement(o.b,{to:"/home"},c.a.createElement("img",{src:"img/Home.png",alt:"home_icon"})),c.a.createElement("img",{src:"img/stroke_right.png",alt:"stroke",className:"PhonesPage__phoneslink-image"}),c.a.createElement("p",{className:"PhonesPage__phoneslink"},"Phones")),c.a.createElement("h1",{className:"PhonesPage__head"},"Mobile phones"),c.a.createElement("p",{className:"PhonesPage__length"},u.length," ","models"),c.a.createElement("div",{className:"container__filter filter"},c.a.createElement("form",{className:"filter__sort-by"},c.a.createElement("p",{className:"filter__text"},"Sort by"),c.a.createElement("select",{className:"filter__sorted sorted",onChange:function(t){return function(t){var n=t.target.value;_.set("sort",n),e.push({search:_.toString()}),a({type:"SORT_BY",field:n})}(t)}},c.a.createElement("option",{value:"age",className:"filter__option"},"Newest"),c.a.createElement("option",{value:"name",className:"filter__option"},"Alphabetically"),c.a.createElement("option",{value:"price",className:"filter__option"},"Cheapest"))),c.a.createElement("form",{className:"filter__sort-by"},c.a.createElement("p",{className:"filter__text"},"Items on page"),c.a.createElement("select",{className:"filter__selected sorted",onChange:function(t){return function(t){var n=t.target.value;_.set("perPage",n),e.push({search:_.toString()}),a(function(e){return{type:"SET_PER_PAGE",perPage:e}}(+n))}(t)}},c.a.createElement("option",{value:"16",className:"filter__option"},"16"),c.a.createElement("option",{value:"8",className:"filter__option"},"8"),c.a.createElement("option",{value:"4",className:"filter__option"},"4"))))),r?c.a.createElement(H,null):c.a.createElement("section",{className:"PhonesPage__list"},l.map((function(e){return c.a.createElement(B,{key:e.age,phone:e})}))),c.a.createElement("div",null,u.length>p&&c.a.createElement(q,{pageNumbers:g})))},J=[{id:1,imgUrl:"./img/Slider/Slide1.png"},{id:2,imgUrl:"./img/Slider/Slide2.jpg"},{id:3,imgUrl:"./img/Slider/Slide3.jpg"}],Q=(a(44),function(){var e=Object(n.useState)(0),t=Object(G.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(J[0].id),o=Object(G.a)(l,2),s=o[0],i=o[1],m={transform:"translateX(".concat(a,"px)")};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"Slider__container"},c.a.createElement("button",{type:"button",className:"carousel__btn Slider__btn carousel__btn_prev",onClick:function(){0===a?(r(-2080),i(3)):(r(a+1040),i(s-1))}}),c.a.createElement("div",{className:"carousel__container"},c.a.createElement("ul",{className:"carousel",style:m},J.map((function(e){var t=e.imgUrl,a=e.id;return c.a.createElement("li",{className:"carousel__item",key:a},c.a.createElement("img",{className:"carousel__img",alt:"img1",src:t}))})))),c.a.createElement("button",{type:"button",className:"Slider__btn carousel__btn carousel__btn_next",onClick:function(){a<-2079?(r(0),i(1)):(r(a-1040),i(s+1))}})),c.a.createElement("div",{className:"carousel__dots-wrap"},J.map((function(e,t){var a=e.id;return c.a.createElement("div",{key:a,className:L()("carousel__dot",{carousel__dot_active:s===J[t].id})})}))))}),X=(a(45),function(e){var t=e.title,a=e.products,r=Object(n.useState)(0),l=Object(G.a)(r,2),o=l[0],s=l[1],i=288*(a.length-4),m={transform:"translateX(".concat(o,"px)")};return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"container__top"},c.a.createElement("h2",{className:"container__title"},t),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{type:"button",onClick:function(){0!==o&&s(o+288)},className:L()("PhoneSlider__btn","carousel__btn","carousel__btn_prev",{btn__noactive_prev:0===o})}),c.a.createElement("button",{type:"button",onClick:function(){o!==-i&&s(o-288)},className:L()("PhoneSlider__btn","carousel__btn","carousel__btn_next",{btn__noactive_next:o===-i})}))),c.a.createElement("div",{className:"PhoneSlider__container"},c.a.createElement("ul",{className:"carousel",style:m},a.map((function(e){return c.a.createElement("li",{className:"PhoneSlider__item carousel__item",key:e.id},c.a.createElement(B,{phone:e}))}))))))}),$=(a(46),function(e){var t=e.phones,a=e.tablets,n=Object(i.g)(),r=[{name:"Mobile phones",color:"#FCDBC1",imgUrl:"./img/Categories/image1.svg",items:t,url:"phones"},{name:"Tablets",color:"#8D8D92",imgUrl:"./img/Categories/image2.svg",items:a,url:"tablets"},{name:"Accessories",color:"#973D5F",imgUrl:"./img/Categories/img3.png",items:0,url:"accessories"}];return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"container__top"},c.a.createElement("h2",{className:"container__title"},"Shop by category")),c.a.createElement("div",{className:"Categories"},c.a.createElement("ul",{className:"Categories__container",role:"article"},r.map((function(e){return c.a.createElement("li",{role:"presentation",key:e.name,onClick:function(){return t=e.url,void n.push({pathname:t});var t},className:"Categories__item"},c.a.createElement("div",{className:"Categories__background",style:{backgroundColor:e.color}},c.a.createElement("img",{className:"Categories__img",src:e.imgUrl,alt:"img1"})),c.a.createElement("h3",{className:"Categories__title"},e.name),c.a.createElement("p",{className:"Categories__items"},"".concat(e.items," models")))}))))))}),W=function(){var e=Object(n.useState)([]),t=Object(G.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"}),v().then((function(e){r(e)}))}),[]);var l=a.filter((function(e){return e.discount>0})),o=a.filter((function(e){return e.age<6})),s=a.filter((function(e){return"phone"===e.type})).length,i=a.filter((function(e){return"tablet"===e.type})).length;return c.a.createElement(c.a.Fragment,null,c.a.createElement(Q,null),c.a.createElement(X,{title:"Hot prices",products:l}),c.a.createElement($,{phones:s,tablets:i}),c.a.createElement(X,{title:"Brand new models",products:o}))},z=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Tablets page"))},K=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Accessories Page"))},V=(a(47),[{link:"GITHUB",url:"https://github.com/fe-feb20-team6/react_phone-catalog"},{link:"CONTACTS",url:"#"},{link:"RIGHTS",url:"#"}]),Z=function(){return c.a.createElement("footer",{className:"Footer"},c.a.createElement("div",{className:"Footer__left"},c.a.createElement(o.b,{to:"/home"},c.a.createElement("img",{src:"./LOGO.svg",alt:"logo"}))),c.a.createElement("div",{className:"Footer__middle"},c.a.createElement("ul",{className:"Footer__list"},V.map((function(e){var t=e.link,a=e.url;return c.a.createElement("li",{key:t,className:"Footer__item"},c.a.createElement("a",{className:"nav__link",href:a},t))})))),c.a.createElement("div",{className:"Footer__left"},c.a.createElement("p",{className:"Footer__backTo"},"Back to top"),c.a.createElement("button",{type:"button",className:"Footer__backhome",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})}})))},ee=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Fav Page"))},te=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Card Page"))},ae=(a(48),a(49),a(50),function(){var e=Object(i.i)().productId,t=Object(n.useState)(),a=Object(G.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)("img/phones/".concat(e,".0.jpg")),s=Object(G.a)(o,2),m=s[0],u=s[1],_=Object(n.useState)(!1),p=Object(G.a)(_,2),g=p[0],E=p[1];Object(n.useEffect)((function(){window.scrollTo({top:0}),setInterval((function(){try{(t=e,fetch("".concat(f,"/").concat(t,".json")).then((function(e){return e.json()}))).then((function(e){return l(e)}))}catch(a){}finally{E(!0)}var t}),500)}),[e]);return c.a.createElement(c.a.Fragment,null,!g&&c.a.createElement(H,null),c.a.createElement("section",{className:"container"},c.a.createElement("div",{className:"Product"},c.a.createElement("h1",{className:"Product__title"},null===r||void 0===r?void 0:r.name),c.a.createElement("div",{className:"Product__top"},c.a.createElement("ul",{className:"Product__images_list"},null===r||void 0===r?void 0:r.images.slice(0,5).map((function(e){return c.a.createElement("li",{onClick:function(){u(e)},key:e,className:"Product__images_item",style:{backgroundImage:"url(".concat(e,")")}})}))),c.a.createElement("div",{className:"Product__img_container",style:{backgroundImage:"url(".concat(m,")")}})))))}),ne=function(){var e=Object(s.b)();return Object(n.useEffect)((function(){e(function(){var e=Object(p.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:a=e.sent,t({type:"START_LOADING"}),t({type:"FINISH_LOADING"}),t({type:"SET_PRODUCTS",products:a}),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),c.a.createElement(c.a.Fragment,null,c.a.createElement(R,null),c.a.createElement("main",null,c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/",exact:!0,component:W}),c.a.createElement(i.b,{path:"/phones",exact:!0,component:Y}),c.a.createElement(i.b,{path:"/tablets",exact:!0,component:z}),c.a.createElement(i.b,{path:"/accessories",component:K}),c.a.createElement(i.b,{path:"/favorites",exact:!0,component:ee}),c.a.createElement(i.b,{path:"/card",exact:!0,component:te}),c.a.createElement(i.b,{path:"/phones/:productId",component:ae}),c.a.createElement(i.b,{path:"/tablets/:productId",component:ae}),c.a.createElement(i.a,{from:"/home",to:"/"}),c.a.createElement("h1",null,"Page not found"))),c.a.createElement(Z,null))};l.a.render(c.a.createElement(s.a,{store:A},c.a.createElement(o.a,null,c.a.createElement(ne,null))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.de84e231.chunk.js.map