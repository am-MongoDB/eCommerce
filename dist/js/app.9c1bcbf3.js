(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],u=0,m=[];u<o.length;u++)r=o[u],i[r]&&m.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},i={app:0},n=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b0bf1c15"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise(function(e,a){s=i[t]=[e,a]});e.push(s[2]=a);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=r(t),n=function(e){l.onerror=l.onload=null,clearTimeout(c);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+n+")");r.type=a,r.request=n,s[1](r)}i[t]=void 0}};var c=setTimeout(function(){n({type:"timeout",target:l})},12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("a026"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view",{attrs:{stitchClient:t.stitchClient,database:t.database,userLoggedIn:t.userLoggedIn,userFirstName:t.userFirstName,customer:t.customer},on:{setDatabase:t.setDatabase,"user-logged-in":t.setUserLoggedIn,setUserFirstName:t.setUserFirstName,setCustomer:t.setCustomer}})],1)},n=[],r=s("289d"),o=(s("5abe"),s("9069"));a["a"].use(r["a"]);var l={name:"buefy_test",data:function(){return{stitchClient:"",database:null,userLoggedIn:!1,userFirstName:"Guest",user:null,customer:{name:{title:"",first:"",last:""},contact:{email:"",phone:{home:"",work:"",mobile:""},devileryAddress:{number:"",street:"",city:"",state:"",postalCode:"",country:""}},marketingPreferences:[]}}},methods:{setUserLoggedIn:function(t){this.userLoggedIn=!0,this.user=t,t.profile.firstName?this.userFirstName=t.profile.firstName:t.profile.email&&(this.userFirstName=t.profile.email)},setDatabase:function(t){this.database=t},setUserFirstName:function(t){this.userFirstName=t},setCustomer:function(t){this.customer=t}},created:function(){this.stitchClient=o["c"].initializeDefaultAppClient("ecommerce-iukkg")}},c=l,u=s("2877"),d=Object(u["a"])(c,i,n,!1,null,null,null),m=d.exports,f=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("MyHeader",{attrs:{stitchClient:t.stitchClient,database:t.database,userLoggedIn:t.userLoggedIn,userFirstName:t.userFirstName},on:{"user-logged-in":t.setUserLoggedIn}}),t.userLoggedIn?t._e():s("div",[s("AnonymousAuth",{attrs:{stitchClient:t.stitchClient},on:{setDatabase:t.setDatabase}})],1)],1)},h=[],g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",[s("section",{staticClass:"hero is-primary is-small"},[s("div",{staticClass:"hero-head"},[s("nav",{staticClass:"navbar"},[s("div",{staticClass:"container"},[t._m(0),s("div",{staticClass:"navbar-menu",attrs:{id:"navbarMenuHeroB"}},[s("div",{staticClass:"navbar-end"},[s("a",{staticClass:"navbar-item is-active"},[t._v("\n                Home\n                ")]),s("a",{staticClass:"navbar-item"},[t._v("\n                Examples\n                ")]),t.userLoggedIn?s("a",{staticClass:"navbar-item"},[s("span",{on:{click:t.gotoProfile}},[t._v("Hi "+t._s(t.userFirstName))])]):t._e(),t.userLoggedIn?t._e():s("a",{staticClass:"navbar-item"},[s("span",{on:{click:t.showLoginModal}},[t._v("Login/Register")])]),t._m(1)])])])])]),t._m(2)])]),s("body",[s("div",{staticClass:"container"},[t.loginModalVisible?s("div",{staticClass:"modal is-active"},[s("div",{staticClass:"modal-background"}),s("div",{staticClass:"modal-content"},[s("UserLogin",{attrs:{stitchClient:t.stitchClient},on:{setDatabase:t.setDatabase,"user-logged-in":t.setUserLoggedIn}}),s("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:t.hideLoginModal}})],1)]):t._e()])])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item"},[a("img",{attrs:{src:s("c316"),alt:"Logo"}})]),a("span",{staticClass:"navbar-burger burger",attrs:{"data-target":"navbarMenuHeroB"}},[a("span"),a("span"),a("span")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"navbar-item"},[s("a",{staticClass:"button is-info is-inverted"},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fab fa-github"})]),s("span",[t._v("Download")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("p",{staticClass:"title"},[t._v("\n                MongoDB Store\n            ")]),s("p",{staticClass:"subtitle"},[t._v("\n                Get it while it's hot!\n            ")])])])}],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"login"}},[s("div",{staticClass:"notification is-primary"},[s("h1",{staticClass:"title is-2"},[t._v("Log into your existing account")]),s("div",{staticClass:"field is-horizontal"},[s("div",{staticClass:"field-body"},[s("div",{staticClass:"field is-expanded"},[s("div",{staticClass:"field"},[s("p",{staticClass:"control is-expanded has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(0)])])]),s("div",{staticClass:"field is-expanded"},[s("div",{staticClass:"field"},[s("p",{staticClass:"control is-expanded has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._m(1)])])])])]),s("div",{staticClass:"field is-grouped is-grouped-centered"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-success is-medium is-focused",on:{click:t.Login}},[t._m(2),s("span",[t._v("Login")])])]),s("p",{staticClass:"control"},[s("router-link",{attrs:{to:"/register"}},[s("button",{staticClass:"button is-medium has-background-grey-lighter"},[s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fas fa-edit"})]),s("span",[t._v("Register a new account")])])])],1)])]),t.error?s("div",{staticClass:"notification is-danger"},[s("strong",[t._v(t._s(t.error))])]):t._e(),t.success?s("div",{staticClass:"notification is-success"},[t._v("\n        "+t._s(t.success)+"\n    ")]):t._e()])},b=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-key"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fas fa-check"})])}],_={name:"UserLogin",props:["stitchClient"],data:function(){return{error:"",success:"",email:"",password:"",user:null}},methods:{Login:function(){var t=this,e=new o["e"](this.email,this.password);this.stitchClient.auth.loginWithCredential(e).then(function(e){t.success="Successfully logged in with id: ".concat(e.id),t.error="",t.user=e,t.$emit("user-logged-in",t.user),console.log(t.success)},function(e){t.error="Failed to log in user: ".concat(e.message),console.error(t.error)})}},created:function(){}},y=_,w=Object(u["a"])(y,C,b,!1,null,null,null),L=w.exports,x={name:"Header",props:["userLoggedIn","userFirstName","stitchClient"],components:{UserLogin:L},data:function(){return{loginModalVisible:!1}},methods:{setUserLoggedIn:function(t){this.$emit("user-logged-in",t),this.hideLoginModal()},setDatabase:function(t){this.$emit("setDatabase",t)},showLoginModal:function(){this.loginModalVisible=!0},hideLoginModal:function(){this.loginModalVisible=!1},gotoProfile:function(){this.$router.push({name:"profile"})}},created:function(){}},$=x,E=Object(u["a"])($,g,v,!1,null,"38637685",null),N=E.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")},P=[],F={name:"AnonymousAuth",props:["stitchClient"],data:function(){return{error:""}},methods:{anonymousLogin:function(){var t=this;this.stitchClient.auth.isLoggedIn||this.stitchClient.auth.loginWithCredential(new o["a"]).then(function(){}).catch(function(e){t.error="Anonymous Stitch authentication failed: ".concat(e.message)})},connectDatabase:function(){try{var t=this.stitchClient.getServiceClient(o["b"].factory,"mongodb-atlas").db("ecommerce");this.$emit("setDatabase",t)}catch(e){this.error="Failed to connect to the database: ".concat(e.message),console.error(this.error)}}},created:function(){this.anonymousLogin(),this.error?console.error(this.error):this.connectDatabase()}},k=F,M=Object(u["a"])(k,I,P,!1,null,null,null),U=M.exports,O={name:"home",props:["stitchClient","database","userLoggedIn","userFirstName"],components:{AnonymousAuth:U,MyHeader:N},data:function(){return{}},methods:{setDatabase:function(t){this.$emit("setDatabase",t)},setUserLoggedIn:function(t){this.$emit("user-logged-in",t)}},mounted:function(){}},j=O,D=Object(u["a"])(j,p,h,!1,null,null,null),S=D.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"confirm"},[s("MyHeader",{attrs:{stitchClient:t.stitchClient,userLoggedIn:t.userLoggedIn,userFirstName:t.userFirstName},on:{"user-logged-in":t.setUserLoggedIn}}),s("ConfirmStitchEmail",{attrs:{stitchClient:t.stitchClient}})],1)},R=[],A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",{staticClass:"title is-1"},[t._v("Confirming email address")]),t.error?s("div",{staticClass:"notification is-danger"},[s("strong",[t._v(t._s(t.error))])]):t._e(),t.success?s("div",{staticClass:"notification is-success"},[t._v("\n        "+t._s(t.success)+"\n    ")]):t._e(),t.cta?s("div",{staticClass:"notification is-primary"},[s("div",{staticClass:"content"},[t._v("\n            "+t._s(t.primary)+"                \n        ")])]):t._e()])},B=[],z=(s("386d"),{name:"ConfirmStitchEmail",props:["stitchClient"],data:function(){return{error:"",success:"",cta:""}},created:function(){var t,e=this,s="";try{var a=window.location.search,i=new URLSearchParams(a);t=i.get("token"),s=i.get("tokenId")}catch(r){this.error="Failed to parse URL parameters: ".concat(r.message),console.error(this.error)}try{var n=this.stitchClient.auth.getProviderClient(o["d"].factory);n.confirmUser(t,s).then(function(){e.success="Password confirmed.",e.cta='Return to <router-link to="/">Home page</router-link> and login to continue.'},function(t){e.error="Failed to confirm email address: ".concat(t.message),console.error(e.error)})}catch(r){this.error="Failed to confirm email address: ".concat(r.message),console.error(this.error)}}}),W=z,T=Object(u["a"])(W,A,B,!1,null,null,null),V=T.exports,G={name:"confirm",props:["stitchClient","userLoggedIn","userFirstName"],components:{ConfirmStitchEmail:V,MyHeader:N},data:function(){},methods:{},mounted:function(){}},q=G,J=Object(u["a"])(q,H,R,!1,null,null,null),K=J.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register"},[s("MyHeader",{attrs:{stitchClient:t.stitchClient,userLoggedIn:t.userLoggedIn,userFirstName:t.userFirstName},on:{"user-logged-in":t.setUserLoggedIn}}),s("div",{staticClass:"section"},[s("h1",{staticClass:"title is-2"},[t._v("Register new user")]),s("div",{staticClass:"field is-horizontal"},[t._m(0),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("p",{staticClass:"control is-expanded has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(1)])])])]),s("div",{staticClass:"field is-horizontal"},[t._m(2),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field is-expanded"},[s("div",{staticClass:"field"},[s("p",{staticClass:"control is-expanded has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._m(3)])])]),s("div",{staticClass:"field"},[s("p",{staticClass:"control is-expanded has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password2,expression:"password2"}],staticClass:"input",attrs:{type:"password",placeholder:"Repeat password"},domProps:{value:t.password2},on:{input:function(e){e.target.composing||(t.password2=e.target.value)}}}),t._m(4)])])])]),s("div",{staticClass:"field is-grouped is-grouped-centered"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-success",on:{click:t.register}},[t._v("\n                    Register\n                ")])])]),t.error?s("div",{staticClass:"notification is-danger"},[s("strong",[t._v(t._s(t.error))])]):t._e(),t.success?s("div",{staticClass:"notification is-success"},[t._v("\n            "+t._s(t.success)+"\n        ")]):t._e()])],1)},X=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field-label is-normal"},[s("label",{staticClass:"label"},[t._v("ID")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field-label is-normal"},[s("label",{staticClass:"label"},[t._v("Password")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-key"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-key"})])}],Y={name:"register",props:["stitchClient","userLoggedIn","userFirstName"],components:{MyHeader:N},data:function(){return{error:"",success:"",email:"",password:"",password2:""}},methods:{register:function(){var t=this;if(console.log("Registering user"),this.error="",this.password!=this.password2)this.error="Error, passwords must match.";else{var e=this.stitchClient.auth.getProviderClient(o["d"].factory);e.registerWithEmail(this.email,"this.password").then(function(){t.success="Registration request being processed – check your inbox",console.log("Successfully sent account confirmation email!")},function(e){t.error="Could not register user: ".concat(e.message),console.error(t.error)})}},setUserLoggedIn:function(t){this.$emit("user-logged-in",t)}},mounted:function(){}},Z=Y,tt=Object(u["a"])(Z,Q,X,!1,null,null,null),et=tt.exports,st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile"},[s("MyHeader",{attrs:{stitchClient:t.stitchClient,userLoggedIn:t.userLoggedIn,userFirstName:t.userFirstName}}),s("div",{staticClass:"section"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title is-2"},[t._v("User Profile")]),s("div",{staticClass:"field is-horizontal"},[t._m(0),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("p",{staticClass:"control is-expanded has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.localCustomer.name.first,expression:"localCustomer.name.first"}],staticClass:"input",attrs:{type:"name",placeholder:"First"},domProps:{value:t.localCustomer.name.first},on:{input:function(e){e.target.composing||t.$set(t.localCustomer.name,"first",e.target.value)}}}),t._m(1)])]),s("div",{staticClass:"field"},[s("p",{staticClass:"control is-expanded has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.localCustomer.name.last,expression:"localCustomer.name.last"}],staticClass:"input",attrs:{type:"name",placeholder:"Last"},domProps:{value:t.localCustomer.name.last},on:{input:function(e){e.target.composing||t.$set(t.localCustomer.name,"last",e.target.value)}}}),t._m(2)])])])]),s("div",{staticClass:"field is-horizontal"},[t._m(3),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field is-expanded"},[s("div",{staticClass:"field"},[s("p",{staticClass:"control is-expanded has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.localCustomer.contact.phone.mobile,expression:"localCustomer.contact.phone.mobile"}],staticClass:"input",attrs:{type:"tel",placeholder:"Moile phone number"},domProps:{value:t.localCustomer.contact.phone.mobile},on:{input:function(e){e.target.composing||t.$set(t.localCustomer.contact.phone,"mobile",e.target.value)}}}),t._m(4)])]),s("p",{staticClass:"help"},[t._v("Include +CC")])]),s("div",{staticClass:"field"},[s("p",{staticClass:"control is-expanded has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.localCustomer.contact.email,expression:"localCustomer.contact.email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.localCustomer.contact.email},on:{input:function(e){e.target.composing||t.$set(t.localCustomer.contact,"email",e.target.value)}}}),t._m(5)])])])]),s("div",{staticClass:"field is-grouped is-grouped-centered"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-success",on:{click:t.saveProfile}},[t._v("\n                        Save Profile\n                    ")])])]),t.progress?s("div",{staticClass:"notification is-info"},[t._v("\n                "+t._s(t.progress)+"\n            ")]):t._e(),t.error?s("div",{staticClass:"notification is-danger"},[s("strong",[t._v(t._s(t.error))])]):t._e(),t.success?s("div",{staticClass:"notification is-success"},[t._v("\n                "+t._s(t.success)+"\n            ")]):t._e()])])],1)},at=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field-label is-normal"},[s("label",{staticClass:"label"},[t._v("Name")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field-label is-normal"},[s("label",{staticClass:"label"},[t._v("Contact")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-phone"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-envelope"})])}],it=(s("7f7f"),{name:"profile",props:["stitchClient","database","userLoggedIn","userFirstName","customer"],components:{MyHeader:N},data:function(){return{error:"",success:"",progress:"",localCustomer:{contact:{deliveryAddress:{},phone:{}},name:{}},originalEmail:""}},methods:{setLocalCustomer:function(t){this.customer=t},propBackCustomer:function(){this.$emit("setCustomer",this.localCustomer)},fetchCustomer:function(){var t=this;this.progress="Looking for existing user profile.",this.database.collection("customers").findOne({}).then(function(e){e?(t.localCustomer=e,t.progress="",console.log("Read a customer document from the database.")):(t.progress="",console.log("No matching customer document found in the database."))},function(t){console.error("Error: attempt to read customer document failed: ".concat(t.message))})},saveProfile:function(){var t=this;this.progress="Writing profile to database.",this.error="",this.success="",this.database.collection("customers").updateOne({"contact.email":this.localCustomer.contact.email},this.localCustomer,{upsert:!0}).then(function(){t.progress="",t.propBackCustomer(),t.localCustomer.name.first&&t.$emit("setUserFirstName",t.localCustomer.name.first),t.success="User profile updated."},function(e){t.progress="",t.error="Error: Writing profile to the database - ".concat(e.message),console.error(t.error)})}},mounted:function(){this.userLoggedIn?(this.localCustomer=this.$props.customer,this.fetchCustomer(),this.originalEmail=this.localCustomer.contact.email):(this.error="Cannot access customer profile until user is logged in",console.error(this.error))}}),nt=it,rt=Object(u["a"])(nt,st,at,!1,null,null,null),ot=rt.exports;a["a"].use(f["a"]);var lt=new f["a"]({routes:[{path:"/",name:"home",component:S,props:!0},{path:"/confirm",name:"confirm",component:K,props:!0},{path:"/register",name:"register",component:et,props:!0},{path:"/profile",name:"profile",component:ot,props:!0},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]});a["a"].config.productionTip=!1,new a["a"]({router:lt,render:function(t){return t(m)}}).$mount("#app")},c316:function(t,e,s){t.exports=s.p+"img/MongoDB_Logo_White_RGB.e2701f1d.png"}});
//# sourceMappingURL=app.9c1bcbf3.js.map