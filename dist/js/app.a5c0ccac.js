(function(e){function t(t){for(var n,a,i=t[0],c=t[1],s=t[2],u=0,d=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return l.push.apply(l,s||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],n=!0,a=1;a<o.length;a++){var i=o[a];0!==r[i]&&(n=!1)}n&&(l.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},a={app:0},r={app:0},l=[];function i(e){return c.p+"js/"+({MainBoard:"MainBoard"}[e]||e)+"."+{MainBoard:"c0d588ab"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var t=[],o={MainBoard:1};a[e]?t.push(a[e]):0!==a[e]&&o[e]&&t.push(a[e]=new Promise((function(t,o){for(var n="css/"+({MainBoard:"MainBoard"}[e]||e)+"."+{MainBoard:"81d1ff2d"}[e]+".css",r=c.p+n,l=document.getElementsByTagName("link"),i=0;i<l.length;i++){var s=l[i],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===n||u===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],u=s.getAttribute("data-href");if(u===n||u===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||r,l=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=n,delete a[e],p.parentNode.removeChild(p),o(l)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var l=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=l);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(p);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,o[1](d)}r[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=u;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"09e0":function(e,t,o){},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},"1a9f":function(e,t,o){},2:function(e,t){},2206:function(e,t,o){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"sidebar"},[o("Sidebar"),o("label",{attrs:{for:"logged-in"}},[e._v("Logged In "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.loggedIn,expression:"loggedIn"}],attrs:{type:"checkbox",id:"logged-in"},domProps:{checked:Array.isArray(e.loggedIn)?e._i(e.loggedIn,null)>-1:e.loggedIn},on:{change:function(t){var o=e.loggedIn,n=t.target,a=!!n.checked;if(Array.isArray(o)){var r=null,l=e._i(o,r);n.checked?l<0&&(e.loggedIn=o.concat([r])):l>-1&&(e.loggedIn=o.slice(0,l).concat(o.slice(l+1)))}else e.loggedIn=a}}})])],1),o("div",{staticClass:"main-content"},[o("transition",{attrs:{name:"fade"}},[o("router-view")],1),o("h3",[e._v(e._s(e.id))])],1)])},r=[],l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"line"}),o("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex2,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:e.handleSelect}},e._l(e.employeesData,(function(t){return o("router-link",{key:t.url,attrs:{tag:"el-menu-item",to:t.url,exact:t.exact}},[o("div",{attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1)],1)},i=[],c=(o("4160"),o("159b"),o("260b")),s=(o("e71f"),{apiKey:"AIzaSyCaCpM26vr3kqlO983OcpE228PvAGWgEhY",authDomain:"newpro-4df7e.firebaseapp.com",projectId:"newpro-4df7e",storageBucket:"newpro-4df7e.appspot.com",messagingSenderId:"90858009327",appId:"1:90858009327:web:a9ca8aed01335dec5ba11a",measurementId:"G-VB7FWH780T"}),u=c["a"].initializeApp(s),d=(o("ea7b"),o("66ce"),c["a"].firestore(u)),p={data:function(){return{employeesData:[]}},methods:{handleSelect:function(e,t){console.log(e,t)},readEmployees:function(){var e=this;this.employeesData=[],d.collection("categorii").doc("dannie").collection("menu").get().then((function(t){t.forEach((function(t){e.employeesData.push({id:t.id,title:t.data().title,id_category:t.data().id_category,url:t.data().url,sort:t.data().sort,status:t.data().status}),console.log(t.id," => ",t.data())}))})).catch((function(e){console.log("Error getting documents: ",e)}))}},beforeMount:function(){this.readEmployees()}},m=p,f=o("2877"),h=Object(f["a"])(m,l,i,!1,null,null,null),v=h.exports,g={tabs:[{link:"/",title:"Товары",body:"<h1>Товары</h1>",name:"proba"},{link:"/categories",title:"Категории",body:"<h1>Категория</h1>",name:"proba1"},{link:"/brands",title:"Бренды",body:"<h1>Бренды</h1>",name:"proba2"}],data:function(){return{loggedIn:!!window.localStorage.getItem("logged-in"),hasLicense:!!window.localStorage.getItem("has-license"),menu:[{header:!0,title:"Меню управления",hiddenOnCollapse:!0},{href:"/#",title:"Главное",icon:"fa fa-chart-area",child:[{href:"/novosti",title:"Новости"},{href:"/history",title:"О районе"},{href:"/finansupravl",title:"Финансовое управление"}]},{href:"/aboutupravl",title:"Об управлении",icon:"fa fa-chart-area",child:[{href:"/aboutupravl/polozhenie",title:"Положение"},{href:"/aboutupravl/perechennpa",title:"Перечень НПА"},{href:"/aboutupravl/rukovodstvo",title:"Руководство"},{href:"/aboutupravl/organizationstructure",title:"Организационная структура"},{href:"/aboutupravl/contactinformation",title:"Контактная информация"},{href:"/aboutupravl/municipalnayasluzhba",title:"Муниципальная служба",child:[{href:"/aboutupravl/municipalnayasluzhba/postuplenie",title:"Поступление на муниципальную службу"},{href:"/aboutupravl/municipalnayasluzhba/trebovaniedolzhnost",title:"Квалификационные требования к должностям гражданской службы"},{href:"/aboutupravl/municipalnayasluzhba/vakantniedolzhnosti",title:"Сведения о вакантных должностях"},{href:"/aboutupravl/municipalnayasluzhba/uslovieandresultatkonkurs",title:"Условия и результаты конкурсов"}]},{href:"/aboutupravl/informationsystem",title:"Информационные системы"},{href:"/aboutupravl/informationzakupki",title:"Информация о закупках"},{href:"/aboutupravl/financecontrol",title:"Финансовый контроль"},{href:"/aboutupravl/otchet",title:"Отчет"},{href:"/aboutupravl/minicipalnieprogrammi",title:"Муниципальные программы"},{href:"/aboutupravl/municipalniifinansovicontrol",title:"Муниципальные программы и финансовый контроль"}]},{href:"/deyatelnost",title:"Деятельность",icon:"fa fa-chart-area",child:[{href:"/deyatelnost/budzhetprocess",title:"Бюджетный процесс"},{href:"/deyatelnost/budzhet-uchet-and-otchet",title:"Бюджетный учет и отчеты"},{href:"/deyatelnost/municipalni-dolg",title:"Муниципальный долг"},{href:"/deyatelnost/predostavl-lgoti",title:"Предоставляемые льготы"},{href:"/deyatelnost/electroni-budzhet",title:"Электронный бюджет"},{href:"/deyatelnost/otkritie-dannie",title:"Открытые данные"},{href:"/deyatelnost/budzhet-for-grazhdan",title:"Бюджет для граждан"}]},{href:"/dokumenti",title:"Документы",icon:"fa fa-chart-area",child:[{href:"/dokumenti/poryadok-obsluzh-normativ-act",title:"Порядок обжалования нормативных правовых актов"},{href:"/dokumenti/proekti-dokumentov",title:"Проекты документов"},{href:"/dokumenti/prikazi-pisma-upravleniya",title:"Приказы и письма управления"},{href:"/dokumenti/prikazi-pisma-min-finansovrf",title:"Приказы и письма Министерства финансов РФ"},{href:"/dokumenti/municipalnie-normativ-pravovie-documenti",title:"Муниципальные нормативные правовые акты"}]},{href:"/budzhet",title:"Бюджет",icon:"fa fa-chart-area"},{href:"/otcheti",title:"Отчеты",icon:"fa fa-chart-area"}]}},components:{Sidebar:v},created:function(){this.fetchData()},watch:{loggedIn:function(e){window.localStorage.setItem("logged-in",!!e||"")},hasLicense:function(e){window.localStorage.setItem("has-license",!!e||"")}}},w=g,y=(o("d59c"),Object(f["a"])(w,a,r,!1,null,"e96d1cb0",null)),b=y.exports,k=(o("d3b7"),o("96cf"),o("1da1")),_=o("8c4f"),E=function(){return!!window.localStorage.getItem("logged-in")},x=function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(t){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o=t.redirect,E()&&o({name:"main"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=x,D=function(){return!!window.localStorage.getItem("logged-in")},C=function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(t){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o=t.redirect,D()||o({name:"login"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=C,S=o("4fc9"),M=o.n(S),O=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-radio-group",{staticStyle:{"margin-bottom":"20px"},model:{value:e.isCollapse,callback:function(t){e.isCollapse=t},expression:"isCollapse"}},[o("el-radio-button",{attrs:{label:!1}},[e._v("expand")]),o("el-radio-button",{attrs:{label:!0}},[e._v("collapse")])],1),o("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2",collapse:e.isCollapse},on:{open:e.handleOpen,close:e.handleClose}},[o("el-submenu",{attrs:{index:"1"}},[o("template",{slot:"title"},e._l(e.employeesData,(function(t){return o("router-link",{key:t.url,attrs:{tag:"li","active-class":"active",to:t.url,exact:t.exact}},[o("i",{staticClass:"el-icon-location"}),o("span",{attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1),o("el-menu-item-group",e._l(e.employeesData,(function(t){return o("router-link",{key:t.url,attrs:{tag:"el-menu-item","active-class":"active",to:t.url,exact:t.exact}},[o("span",{attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1)],2)],1),o("router-view")],1)},$=[],j=c["a"].firestore(u),A={data:function(){return{title:"",isCollapse:!0,employeesData:[]}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},readEmployees:function(){var e=this;this.employeesData=[],j.collection("categorii").doc("dannie").collection("menu").get().then((function(t){t.forEach((function(t){e.employeesData.push({id:t.id,title:t.data().title,id_category:t.data().id_category,url:t.data().url,sort:t.data().sort,status:t.data().status}),console.log(t.id," => ",t.data())}))})).catch((function(e){console.log("Error getting documents: ",e)}))}},beforeMount:function(){this.readEmployees()}},P=A,L=(o("e492"),Object(f["a"])(P,O,$,!1,null,null,null)),R=L.exports,B=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h3",[e._v("Авторизация")]),o("form",{on:{submit:function(t){return t.preventDefault(),e.pressed(t)}}},[o("div",{staticClass:"login"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"логин"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),o("div",{staticClass:"password"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"пароль"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),o("button",{attrs:{type:"submit"}},[e._v("Войти")])]),e.error?o("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):e._e()])},T=[],N=(o("ac1f"),o("5319"),{data:function(){return{loggedIn:!!window.localStorage.getItem("logged-in"),email:"",password:"",error:""}},methods:{pressed:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].auth().signInWithEmailAndPassword(e.email,e.password);case 3:o=t.sent,console.log(o),e.loggedIn=!0,alert("Вход успешен"),e.$router.replace({name:"adminmenu"}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}},watch:{loggedIn:function(e){window.localStorage.setItem("logged-in",!!e||"")}}}),q=N,U=(o("8180"),Object(f["a"])(q,B,T,!1,null,"5c0097cc",null)),Y=U.exports,W=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[o("h2",[e._v("Создание новой страницы")]),o("el-input",{attrs:{placeholder:"Название",clearable:""},on:{click:function(t){return e.proba(e.nazvanie,e.title,e.keywords,e.description,e.h1,e.relations,e.type_page,e.data)}},model:{value:e.nazvanie,callback:function(t){e.nazvanie=t},expression:"nazvanie"}},[e._v("Название ")]),o("el-input",{attrs:{placeholder:"Title",clearable:""},on:{click:function(t){return e.proba(e.nazvanie,e.title,e.keywords,e.description,e.h1,e.relations,e.type_page,e.data)}},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),o("el-input",{attrs:{placeholder:"Ключевые слова(keywords)",clearable:""},on:{click:function(t){return e.proba(e.nazvanie,e.title,e.keywords,e.description,e.h1,e.relations,e.type_page,e.data)}},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),o("el-input",{attrs:{placeholder:"Описание",type:"textarea"},on:{click:function(t){return e.proba(e.nazvanie,e.title,e.keywords,e.description,e.h1,e.relations,e.type_page,e.data)}},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),o("el-input",{attrs:{placeholder:"Заголовок(h1)",clearable:""},on:{click:function(t){return e.proba(e.nazvanie,e.title,e.keywords,e.description,e.h1,e.relations,e.type_page,e.data)}},model:{value:e.h1,callback:function(t){e.h1=t},expression:"h1"}}),o("el-select",{attrs:{placeholder:"Связи"},on:{click:function(t){return e.proba(e.nazvanie,e.title,e.keywords,e.description,e.h1,e.relations,e.type_page,e.data)}},model:{value:e.relations,callback:function(t){e.relations=t},expression:"relations"}},e._l(e.options,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value},on:{click:function(t){return e.proba(e.nazvanie,e.title,e.keywords,e.description,e.h1,e.relations,e.type_page,e.data)}}})})),1),o("el-select",{attrs:{placeholder:"Тип страницы"},model:{value:e.type_page,callback:function(t){e.type_page=t},expression:"type_page"}},e._l(e.typePages,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value},on:{click:function(t){return e.proba(e.nazvanie,e.title,e.keywords,e.description,e.h1,e.relations,e.type_page,e.data)}}})})),1),o("Editor",{attrs:{"image-provider":e.imageProvider},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}}),o("el-button",{attrs:{placeholder:"Отправить блять",type:"primary"},on:{click:function(t){return e.proba(e.nazvanie,e.title,e.keywords,e.description,e.h1,e.relations,e.type_page,e.data)}}},[e._v("Отправить")]),o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.employeesData.filter((function(t){return!e.search||t.name.toLowerCase().includes(e.search.toLowerCase())}))}},[o("el-table-column",{attrs:{label:"Дата",prop:"date"}}),o("el-table-column",{attrs:{label:"Имя",prop:"nazvanie"}}),o("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-popover",{attrs:{placement:"bottom",title:"Edit Employee",width:"200",trigger:"click"}},[o("el-input",{attrs:{placeholder:"Nazvanie"},on:{blur:function(o){return e.updateEmployee(t.row.id,t.row.nazvanie,t.row.title,t.row.keywords,t.row.description,t.row.h1,t.row.relations,t.row.type_page)}},model:{value:t.row.nazvanie,callback:function(o){e.$set(t.row,"nazvanie",o)},expression:"scope.row.nazvanie"}}),o("el-input",{attrs:{placeholder:"Title"},on:{blur:function(o){return e.updateEmployee(t.row.id,t.row.nazvanie,t.row.title,t.row.keywords,t.row.description,t.row.h1,t.row.relations,t.row.type_page)}},model:{value:t.row.title,callback:function(o){e.$set(t.row,"title",o)},expression:"scope.row.title"}}),o("el-input",{attrs:{placeholder:"Keywords"},on:{blur:function(o){return e.updateEmployee(t.row.id,t.row.nazvanie,t.row.title,t.row.keywords,t.row.description,t.row.h1,t.row.relations,t.row.type_page)}},model:{value:t.row.keywords,callback:function(o){e.$set(t.row,"keywords",o)},expression:"scope.row.keywords"}}),o("el-input",{attrs:{placeholder:"Description"},on:{blur:function(o){return e.updateEmployee(t.row.id,t.row.nazvanie,t.row.title,t.row.keywords,t.row.description,t.row.h1,t.row.relations,t.row.type_page)}},model:{value:t.row.description,callback:function(o){e.$set(t.row,"description",o)},expression:"scope.row.description"}}),o("el-input",{attrs:{placeholder:"H1"},on:{blur:function(o){return e.updateEmployee(t.row.id,t.row.nazvanie,t.row.title,t.row.keywords,t.row.description,t.row.h1,t.row.relations,t.row.type_page)}},model:{value:t.row.h1,callback:function(o){e.$set(t.row,"h1",o)},expression:"scope.row.h1"}}),o("el-input",{attrs:{placeholder:"Relation"},on:{blur:function(o){return e.updateEmployee(t.row.id,t.row.nazvanie,t.row.title,t.row.keywords,t.row.description,t.row.h1,t.row.relations,t.row.type_page)}},model:{value:t.row.relations,callback:function(o){e.$set(t.row,"relations",o)},expression:"scope.row.relations"}}),o("el-input",{attrs:{placeholder:"Type_page"},on:{blur:function(o){return e.updateEmployee(t.row.id,t.row.nazvanie,t.row.title,t.row.keywords,t.row.description,t.row.h1,t.row.relations,t.row.type_page)}},model:{value:t.row.type_page,callback:function(o){e.$set(t.row,"type_page",o)},expression:"scope.row.type_page"}}),o("el-button",{attrs:{slot:"reference",size:"mini"},slot:"reference"},[e._v("Edit")])],1),o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){return e.deleteEmployee(t.row.id)}}},[e._v("Delete")])]}}])},[o("template",{attrs:{"slot-scope":e.scope},slot:"header"},[o("el-input",{attrs:{size:"mini",placeholder:"Type to search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],2)],1)],1),o("router-view")],1)},H=[],J=(o("a4d3"),o("e01a"),o("14e2")),V=o.n(J),F=c["a"].firestore(u),G={components:{Editor:V.a},data:function(){return{data:"",imageProvider:{name:"qiniu",token:"-qWchT63mkZEJch0ygm3bN9h3peInHqCcSAEMtvV:9YAz4dCiB3EAdYuoDVO0YvObtqY=:eyJzY29wZSI6InRlc3QiLCJkZWFkbGluZSI6MTkwMjAyODY1NX0=",domain:"cdn-testing.zanquan.net",modifier:function(e){var t=e.width,o=e.url;return t<750?o:"".concat(o,"?imageMogr2/thumbnail/750x/")}},options:[{value:"1",label:"Уровень 1"},{value:"2",label:"Уровень 2"},{value:"3",label:"Уровень 3"}],typePages:[{value:"Текст",label:"Текст"},{value:"Блог",label:"Блог"},{value:"Блог+текст",label:"Блог+текст"}],value:"",description:"",name:"",title:"",relations:"",nazvanie:"",keywords:"",dialogVisible:!1,employeesData:[],search:"",type_page:"",h1:""}},methods:{proba:function(e,t,o,n,a,r,l,i){""!=this.nazvanie&&""!=this.title&&""!=this.keywords&&""!=this.description&&""!=this.h1&&""!=this.relations&&""!=this.type_page&&""!=this.data&&(F.collection("categorii").doc("dannie").collection("page").add({nazvanie:e,title:t,keywords:o,description:n,h1:a,relations:r,type_page:l,data:i}).then((function(){console.log("Document Added ")})).catch((function(e){console.error("Error adding document: ",e)})),this.nazvanie="",this.type_page="",this.relations="",this.title="",this.keywords="",this.description="",this.h1="",this.data="")},readEmployees:function(){var e=this;this.employeesData=[],F.collection("categorii").doc("dannie").collection("page").get().then((function(t){t.forEach((function(t){e.employeesData.push({id:t.id,nazvanie:t.data().nazvanie,title:t.data().title,keywords:t.data().keywords,description:t.data().description,h1:t.data().h1,relations:t.data().relations,type_page:t.data().type_page,data:t.data().data}),console.log(t.id," => ",t.data())}))})).catch((function(e){console.log("Error getting documents: ",e)}))},updateEmployee:function(e,t,o,n,a,r,l,i){var c=this;F.collection("categorii").doc("dannie").collection("page").doc(e).update({nazvanie:t,title:o,keywords:n,description:a,h1:r,relations:l,type_page:i}).then((function(){alert(e),console.log("Document successfully updated!"),c.readEmployees()})).catch((function(e){console.error("Error updating document: ",e)}))},deleteEmployee:function(e){var t=this;F.collection("categorii").doc("dannie").collection("page").doc(e).delete().then((function(){console.log("Document successfully deleted!"),t.readEmployees()})).catch((function(e){console.error("Error removing document: ",e)}))}},mounted:function(){this.readEmployees()}},Z=G,K=Object(f["a"])(Z,W,H,!1,null,null,null),Q=K.exports,X=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("Добавление главного уровня")]),o("el-input",{attrs:{placeholder:"Название",clearable:""},on:{click:function(t){return e.createMenu(e.title,e.id_category,e.sort,e.url,e.status)}},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}},[e._v("Название ")]),o("el-input",{attrs:{placeholder:"ID Категории",clearable:""},on:{click:function(t){return e.createMenu(e.title,e.id_category,e.url,e.sort,e.status)}},model:{value:e.id_category,callback:function(t){e.id_category=t},expression:"id_category"}},[e._v("Сортировка ")]),o("el-input",{attrs:{placeholder:"URL",clearable:""},on:{click:function(t){return e.createMenu(e.title,e.id_category,e.url,e.sort,e.status)}},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}},[e._v("URL ")]),o("el-input",{attrs:{placeholder:"Sort",clearable:""},on:{click:function(t){return e.createMenu(e.title,e.id_category,e.url,e.sort,e.status)}},model:{value:e.sort,callback:function(t){e.sort=t},expression:"sort"}},[e._v("Сортировка ")]),o("el-checkbox",{attrs:{clearable:""},on:{click:function(t){return e.createMenu(e.title,e.id_category,e.url,e.sort,e.status)}},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},[e._v("Статус")]),o("br"),o("el-button",{attrs:{placeholder:"Отправить ",type:"primary"},on:{click:function(t){return e.createMenu(e.title,e.id_category,e.url,e.sort,e.status)}}},[e._v("Отправить")]),o("hr"),o("h2",[e._v("Добавление дочернего элемента")]),o("el-input",{attrs:{placeholder:"Название",clearable:""},on:{click:function(t){return e.addChildMenu(e.title,e.value)}},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}},[e._v("Название ")]),o("el-select",{attrs:{placeholder:"Select"},on:{click:function(t){return e.addChildMenu(e.title,e.value)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.employeesData,(function(e){return o("el-option",{key:e.title,attrs:{label:e.title,value:e.id}})})),1),o("br"),o("el-input",{attrs:{placeholder:"URL",clearable:""},on:{click:function(t){return e.addChildMenu(e.title,e.value,e.url,e.sort,e.status)}},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}},[e._v("URL ")]),o("el-input",{attrs:{placeholder:"Sort",clearable:""},on:{click:function(t){return e.addChildMenu(e.title,e.value,e.url,e.sort,e.status)}},model:{value:e.sort,callback:function(t){e.sort=t},expression:"sort"}},[e._v("Сортировка ")]),o("el-checkbox",{attrs:{clearable:""},on:{click:function(t){return e.addChildMenu(e.title,e.value,e.url,e.sort,e.status)}},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},[e._v("Статус")]),o("br"),o("el-button",{attrs:{placeholder:"Отправить ",type:"primary"},on:{click:function(t){return e.addChildMenu(e.title,e.value,e.url,e.sort,e.status)}}},[e._v("Отправить")]),o("el-table",{staticStyle:{width:"65vw"},attrs:{data:e.employeesData.filter((function(t){return!e.search||t.name.toLowerCase().includes(e.search.toLowerCase())}))}},[o("el-table-column",{attrs:{label:"Название",prop:"title"}}),o("el-table-column",{attrs:{label:"URL",prop:"url"}}),o("el-table-column",{attrs:{label:"ID категории",prop:"id_category"}}),o("el-table-column",{attrs:{label:"Сортировка",prop:"sort"}}),o("el-table-column",{attrs:{label:"Статус",prop:"status"}},[o("el-checkbox",{attrs:{size:"mini"}})],1),o("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-popover",{attrs:{placement:"bottom",title:"Редактор разделов",width:"200",trigger:"click"}},[o("el-input",{attrs:{placeholder:"Название"},on:{blur:function(o){return e.updateEmployee(t.row.id,t.row.title,t.row.id_category,t.row.url,t.row.sort,t.row.status)}},model:{value:t.row.title,callback:function(o){e.$set(t.row,"title",o)},expression:"scope.row.title"}}),o("el-input",{attrs:{placeholder:"ID категории"},on:{blur:function(o){return e.updateEmployee(t.row.id,t.row.title,t.row.id_category,t.row.url,t.row.sort,t.row.status)}},model:{value:t.row.id_category,callback:function(o){e.$set(t.row,"id_category",o)},expression:"scope.row.id_category"}}),o("el-input",{attrs:{placeholder:"URL"},on:{blur:function(o){return e.updateEmployee(t.row.id,t.row.title,t.row.id_category,t.row.url,t.row.sort,t.row.status)}},model:{value:t.row.url,callback:function(o){e.$set(t.row,"url",o)},expression:"scope.row.url"}}),o("el-input",{attrs:{placeholder:"Сортировка"},on:{blur:function(o){return e.updateEmployee(t.row.id,t.row.title,t.row.id_category,t.row.url,t.row.sort,t.row.status)}},model:{value:t.row.sort,callback:function(o){e.$set(t.row,"sort",o)},expression:"scope.row.sort"}}),o("el-input",{attrs:{placeholder:"Статус"},on:{blur:function(o){return e.updateEmployee(t.row.id,t.row.title,t.row.id_category,t.row.url,t.row.sort,t.row.status)}},model:{value:t.row.status,callback:function(o){e.$set(t.row,"status",o)},expression:"scope.row.status"}}),o("el-button",{attrs:{slot:"reference",size:"mini",icon:"el-icon-edit",circle:""},slot:"reference"})],1),o("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(o){return e.deleteEmployee(t.row.id)}}})]}}])},[o("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(t){return e.deleteEmployee(e.scope.row.id)}}})],1)],1),o("router-view")],1)},ee=[],te=c["a"].firestore(u),oe={data:function(){return{title:"",id_category:"",sort:"",url:"",status:"",dialogVisible:!1,employeesData:[],checked:!0,value:""}},methods:{createMenu:function(e,t,o,n,a){""!=this.title&&""!=this.id_category&&""!=this.sort&&""!=this.status&&(te.collection("categorii").doc("dannie").collection("menu").add({title:e,id_category:t,url:o,sort:n,status:a}).then((function(){console.log("Document Added "),this.readEmployees()})).catch((function(e){console.error("Error adding document: ",e)})),this.title="",this.id_category="",this.url="",this.sort="",this.status="")},updateEmployee:function(e,t,o,n,a,r){var l=this;te.collection("categorii").doc("dannie").collection("menu").doc(e).update({title:t,id_category:o,url:n,sort:a,status:r}).then((function(){console.log("Document successfully updated!"),l.readEmployees()})).catch((function(e){console.error("Error updating document: ",e)}))},readEmployees:function(){var e=this;this.employeesData=[],te.collection("categorii").doc("dannie").collection("menu").orderBy("sort","asc").get().then((function(t){t.forEach((function(t){e.employeesData.push({id:t.id,title:t.data().title,id_category:t.data().id_category,url:t.data().url,sort:t.data().sort,status:t.data().status}),console.log(t.id," => ",t.data())}))})).catch((function(e){console.log("Error getting documents: ",e)}))},addChildMenu:function(e,t,o,n,a){""!=this.title&&""!=this.value&&""!=this.url&&""!=this.sort&&""!=this.status&&(te.collection("categorii").doc("dannie").collection("menu").add({title:e,value:t,url:o,sort:n,status:a}).then((function(){console.log("Document Added -2 lvl "),this.readEmployees()})).catch((function(e){console.error("Error adding document: ",e)})),this.title="",this.value="",this.url="",this.sort="",this.status="")},prosto:function(){te.collection("categorii").doc("dannie").collection("menu").where("title","==","Логин").get().then((function(e){e.forEach((function(e){console.log(e.id,"=>",e.data())}))}))},deleteEmployee:function(e){var t=this;te.collection("categorii").doc("dannie").collection("menu").doc(e).delete().then((function(){console.log("Document successfully deleted!"),t.readEmployees()})).catch((function(e){console.error("Error removing document: ",e)}))}},beforeMount:function(){this.readEmployees()}},ne=oe,ae=Object(f["a"])(ne,X,ee,!1,null,null,null),re=ae.exports,le=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[o("el-popover",{attrs:{placement:"bottom",title:"Новый элемент",width:"200",trigger:"click"}},[o("el-input",{attrs:{placeholder:"Введите номер"},on:{blur:function(t){return e.createEmployee(e.link,e.name,e.id_cat)}},model:{value:e.id_cat,callback:function(t){e.id_cat=t},expression:"id_cat"}}),o("el-input",{attrs:{placeholder:"Введите имя"},on:{blur:function(t){return e.createEmployee(e.link,e.name,e.id_cat)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),o("el-input",{attrs:{placeholder:"Введите ссылку"},on:{blur:function(t){return e.createEmployee(e.link,e.name,e.id_cat)}},model:{value:e.link,callback:function(t){e.link=t},expression:"link"}}),o("el-button",{attrs:{slot:"reference",round:"",type:"success"},slot:"reference"},[e._v("Добавить новый элемент")])],1),o("el-table",{staticStyle:{width:"500px"},attrs:{data:e.employeesData.filter((function(t){return!e.search||t.name.toLowerCase().includes(e.search.toLowerCase())}))}},[o("el-table-column",{attrs:{label:"Номер",prop:"id_cat"}}),o("el-table-column",{attrs:{label:"Имя",prop:"name"}}),o("el-table-column",{attrs:{label:"Ссылка",prop:"link"}}),o("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-popover",{attrs:{placement:"bottom",title:"Редактор разделов",width:"200",trigger:"click"}},[o("el-input",{attrs:{placeholder:"Номер"},on:{blur:function(o){return e.updateEmployee(t.row.id,t.row.name,t.row.link,t.row.id_cat)}},model:{value:t.row.id_cat,callback:function(o){e.$set(t.row,"id_cat",o)},expression:"scope.row.id_cat"}}),o("el-input",{attrs:{placeholder:"Раздел"},on:{blur:function(o){return e.updateEmployee(t.row.id,t.row.name,t.row.link,t.row.id_cat)}},model:{value:t.row.name,callback:function(o){e.$set(t.row,"name",o)},expression:"scope.row.name"}}),o("el-input",{attrs:{placeholder:"Ссылка"},on:{blur:function(o){return e.updateEmployee(t.row.id,t.row.name,t.row.link,t.row.id_cat)}},model:{value:t.row.link,callback:function(o){e.$set(t.row,"link",o)},expression:"scope.row.link"}}),o("el-button",{attrs:{slot:"reference",size:"mini",icon:"el-icon-edit",circle:""},slot:"reference"})],1),o("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(o){return e.deleteEmployee(t.row.id)}}})]}}])})],1)],1),o("router-view")],1)},ie=[],ce=(o("b0c0"),o("9911"),c["a"].firestore(u)),se={data:function(){return{name:"",link:"",employeesData:[],search:"",id_cat:""}},methods:{createEmployee:function(e,t,o){var n=this;""!=t&&""!=e&&""!=o&&(ce.collection("categories").add({name:t,link:e,id_cat:o}).then((function(){console.log("Document successfully written!"),n.readEmployees()})).catch((function(e){console.error("Error writing document: ",e)})),this.name="",this.id_cat="",this.link="")},readEmployees:function(){var e=this;this.employeesData=[],ce.collection("categories").orderBy("id_cat","asc").get().then((function(t){t.forEach((function(t){e.employeesData.push({id:t.id,name:t.data().name,link:t.data().link,id_cat:t.data().id_cat}),console.log(t.id," => ",t.data())}))})).catch((function(e){console.log("Error getting documents: ",e)}))},updateEmployee:function(e,t,o,n){var a=this;ce.collection("categories").doc(e).update({name:t,id_cat:n,link:o}).then((function(){console.log("Document successfully updated!"),a.readEmployees()})).catch((function(e){console.error("Error updating document: ",e)}))},deleteEmployee:function(e){var t=this;ce.collection("categories").doc(e).delete().then((function(){console.log("Document successfully deleted!"),t.readEmployees()})).catch((function(e){console.error("Error removing document: ",e)}))}},mounted:function(){this.readEmployees()}},ue=se,de=(o("ac18"),Object(f["a"])(ue,le,ie,!1,null,null,null)),pe=de.exports,me=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.error?o("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):e._e(),o("form",{on:{submit:function(t){return t.preventDefault(),e.pressed(t)}}},[o("h3",[e._v("Добавление нового пользователя")]),o("div",{staticClass:"email"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Е-mail"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),o("div",{staticClass:"password"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Пароль"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),o("button",{attrs:{type:"submit"}},[e._v("Добавить пользователя")])])])},fe=[],he={methods:{pressed:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{o=c["a"].auth().createUserWithEmailAndPassword(e.email,e.password),console.log(o),alert("Пользователь был успешно добавлен"),e.email="",e.password="",e.$router.replace({name:"register"})}catch(n){console.log(n)}case 1:case"end":return t.stop()}}),t)})))()}},data:function(){return{email:"",password:"",error:""}}},ve=he,ge=(o("8e8f"),Object(f["a"])(ve,me,fe,!1,null,"1a67cc9e",null)),we=ge.exports;n["default"].use(_["a"]);var ye=function(){return o.e("MainBoard").then(o.bind(null,"bb51"))},be=[{path:"/",name:"Home",component:ye,children:[{path:"/novosti",name:"novosti",component:{render:function(e){return e("div",["Страница с новостями",e("router-view")])}},meta:{middleware:{ignore:[I],attach:[z]},title:"Новости",content:"Контентыч"}},{path:"/fin",component:Q,meta:{middleware:{ignore:[I],attach:[z]}}},{path:"/finansupravl",name:"finansupravl",components:{default:{render:function(e){return e("div",["I'm Default"])}},user:{render:function(e){return e("div",["I'm User"])}},guest:{render:function(e){return e("div",["I'm Guest"])}}},meta:{middleware:{ignore:[I],attach:[z]}}}]},{path:"/secret",name:"secret",component:R,meta:{middleware:{ignore:[I],attach:[z]},title:"Секрет",content:"Контентыч"}},{path:"/login",name:"login1",component:Y,meta:{middleware:{ignore:[I],attach:[z]},title:"Логин",content:"Контентыч"}},{path:"/register",name:"register",component:we,meta:{middleware:{ignore:[I],attach:[z]},title:"Регистрация пользователя"}},{path:"/category",name:"category",component:pe,meta:{middleware:{ignore:[I],attach:[z]},title:"Категории",content:"Контентыч"}},{path:"/adminmenu",name:"adminmenu",component:re,meta:{middleware:{ignore:[I],attach:[z]},title:"Админ меню"}},{path:"/auth-required",name:"auth-required",component:{render:function(e){return e("div",["Auth required!"])}},meta:{middleware:{ignore:[I]}}},{path:"/*",component:{render:function(e){return e("div",["404! Page Not Found!"])}},meta:{middleware:{ignore:[I]}}}],ke=new _["a"]({mode:"history",base:"/",routes:be});ke.beforeEach(function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(t,o,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.meta.title,document.content=t.meta.content,document.title="".concat(a?a+"  ":""),n();case 4:case"end":return e.stop()}}),e)})));return function(t,o,n){return e.apply(this,arguments)}}()),n["default"].use(M.a,{router:ke,middleware:[I]});var _e=ke,Ee=o("2f62");n["default"].use(Ee["a"]);var xe=new Ee["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ze=o("bc3a"),De=o.n(ze),Ce=o("5c96"),Ie=o.n(Ce);n["default"].use(Ie.a),n["default"].prototype.$axios=De.a,n["default"].config.productionTip=!1,new n["default"]({router:_e,store:xe,render:function(e){return e(b)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},8180:function(e,t,o){"use strict";o("1a9f")},"8c89":function(e,t,o){},"8e8f":function(e,t,o){"use strict";o("2206")},9:function(e,t){},ac18:function(e,t,o){"use strict";o("09e0")},d59c:function(e,t,o){"use strict";o("d740")},d740:function(e,t,o){},e492:function(e,t,o){"use strict";o("8c89")}});
//# sourceMappingURL=app.a5c0ccac.js.map