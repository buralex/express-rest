(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0600e8d279f3c0c49d21":function(e,a,n){e.exports=n.p+"021f6dd37bdf12e251c460d65c0e3fdb.png"},"678613eb40b64966e85a":function(e,a,n){e.exports=n.p+"4c12bf19c790e6145a636448fbfe79fd.png"},"778496ee6e21ca3bdf56":function(e,a,n){var o=n("86adf03dddb7c33a3de2");(e.exports=n("c138e55a31f3f8960e99")(!1)).push([e.i,".login-container{margin-left:-15px;margin-right:-15px}.login-container .land-top{font-family:Proxima Nova Light;font-weight:300;color:#f3f4f6;text-align:center;background:url("+o(n("0600e8d279f3c0c49d21"))+") no-repeat top;background-size:cover;height:510px}.login-container .land-top .navbar .btn{float:right;margin-right:10px;margin-top:2px}.login-container .land-top .navbar .logo{display:inline-block;margin:32px 19px}.login-container .land-top h1{font-size:48px;margin-top:61px;margin-left:-5px;margin-bottom:6px}.login-container .land-top h6{font-size:20px;line-height:1.5;margin:auto;max-width:490px}.login-container .land-middle{background:url("+o(n("678613eb40b64966e85a"))+") no-repeat top;background-size:cover}.login-container .land-bottom{letter-spacing:-.1px;padding:90px 15px 93px;text-align:center}.login-container .land-bottom h2{font-size:30px;margin-bottom:36px}.login-container .land-bottom .col-6{padding:0 40px 0 65px}.login-container .land-bottom .col-6:last-child{padding:0 55px 0 40px}.login-container form{bottom:100px}.login-container form .other-enquiry{margin-top:20px}.login-container form .description{height:152px;margin-bottom:20px}",""])},afbf9480efa13dd8cdc6:function(e,a,n){"use strict";n("8af190b70a6bc55c6f1b");var o=n("64008341693dac7554c9"),t=n("2e3498e449d79b9ef394"),i=n("23908495dd906a29c25d"),r=n("2a87eafe7fba301fb8b3"),c=n("6b01d6713097f897cb90"),l=n("1180f320bc9637a9327d"),d=n("f6438d7757811d10023a"),s=n("f37e622005550ebf4c79"),f=n("38aceac96a44c2411f5c"),p=["image/jpeg","image/png","image/gif"],u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(a,n,o,t){var i=a&&a.defaultProps,r=arguments.length-3;if(n||0===r||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===r)n.children=t;else if(r>1){for(var l=Array(r),d=0;d<r;d++)l[d]=arguments[d+3];n.children=l}return{$$typeof:e,type:a,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}();a.a=Object(t.a)({form:"SupportForm",validate:function(e){var a={};if(e[f.a.enquiry_type]||(a[f.a.enquiry_type]="Required"),e[f.a.description]||(a[f.a.description]="Required"),e[f.a.subject]||(a[f.a.subject]="Required"),e[f.a.user_name]?e[f.a.user_name]&&/[^a-zA-Z0-9 ]/i.test(e[f.a.user_name])?a[f.a.user_name]="Only alphanumeric characters":e[f.a.user_name].length>15&&(a[f.a.user_name]="Must be 15 characters or less"):a[f.a.user_name]="Required",e[f.a.email]?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(e[f.a.email])||(a[f.a.email]="Invalid email address"):a[f.a.email]="Required",e[f.a.file]){var n=e[f.a.file],o=Number((n.size/1024/1024).toFixed(1)),t=n.type;n.error?a[f.a.file]=n.error:o>5?a[f.a.file]="Max file size is 5 MB (your file is "+o+" MB)":p.includes(t)||(a[f.a.file]="This file extension is not allowed!")}return a}})(function(e){var a=e.handleSubmit,n=(e.pristine,e.reset,e.submitting),t=e.change,p=(e.form,e.enquiryTypes),m=e.isEnqTypeOther,b=e.loading;return u("form",{onSubmit:a,className:"form-small"},void 0,u("div",{className:"form-body"},void 0,u("h6",{className:"mb-2 text-pinkish-grey"},void 0,"Fields marked “*” are required"),u(o.a,{name:f.a.enquiry_type,component:c.a,options:p.map(function(e){return{label:e.name,value:e.name}}),label:"Enquiry Type *",onChange:function(){t(f.a.other_enquiry_type,"")}}),m&&u(o.a,{name:f.a.other_enquiry_type,component:i.a,placeholder:"Other",className:"other-enquiry"}),u("div",{className:"row"},void 0,u("div",{className:"col-6"},void 0,u(o.a,{name:f.a.user_name,component:i.a,label:"Name *"})),u("div",{className:"col-6"},void 0,u(o.a,{name:f.a.email,component:i.a,type:"email",label:"Email"}))),u(o.a,{name:f.a.subject,component:i.a,label:"Subject *"}),u("div",{},void 0,u(o.a,{name:f.a.description,component:r.a,label:"Description *",maxlength:1e3,className:"description"})),u("div",{className:""},void 0,u(o.a,{name:f.a.file,component:l.a,placeholder:{header:"Add photo",text:"Minimum size of 300x300 jpeg jpg png 5 MB"},validateImgSize:{minWidth:300,minHeight:300}})),u("div",{className:"absolute-left w-100",style:{bottom:20}},void 0,u(d.a,{loading:b}))),u("div",{className:"form-footer"},void 0,u(s.a,{color:"success",size:"lg",type:"submit",disabled:n||b,block:!0},void 0,"Submit")))})},b2318d430e8976a98713:function(e,a,n){"use strict";n.r(a);var o=n("8af190b70a6bc55c6f1b"),t=n.n(o),i=n("d7dd51e1bf6bfc2c9c3d"),r=n("ab4cb61bcb2dc161defb"),c=n("a28fc3c963a1d4d1a2e5"),l=n("f37e622005550ebf4c79"),d=(n("9544e4da3690fe343082"),n("38d017cdb7425d346cba")),s=n("8b703812aa8ae3c41814"),f=n("6542cd13fd5dd1bcffd4"),p=(n("afbf9480efa13dd8cdc6"),n("6753b87258df061c275a")),u=(n("345b19c62b5e6cd2fa07"),n("a72b40110d9c31c9b5c5")),m=n("2e3498e449d79b9ef394"),b=n("64008341693dac7554c9"),g=n("23908495dd906a29c25d"),v=n("f6438d7757811d10023a"),y=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(a,n,o,t){var i=a&&a.defaultProps,r=arguments.length-3;if(n||0===r||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===r)n.children=t;else if(r>1){for(var l=Array(r),d=0;d<r;d++)l[d]=arguments[d+3];n.children=l}return{$$typeof:e,type:a,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}();Object(m.a)({form:"LoginForm",validate:function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",e.password||(a.password="Required"),a}})(function(e){var a=e.handleSubmit,n=(e.pristine,e.reset,e.submitting),o=e.loading;return y("form",{onSubmit:a,className:"form-small"},void 0,y("div",{className:"form-body"},void 0,y("div",{className:"row"},void 0,y("div",{className:"col-6"},void 0,y(b.a,{name:"email",type:"email",component:g.a,label:"Email"})),y("div",{className:"col-6"},void 0,y(b.a,{name:"password",type:"password",component:g.a,label:"Password"}))),y("div",{className:"row"},void 0,y("div",{className:"col-6"},void 0,"email:",y("h2",{className:"text-danger"},void 0,"test@abz.agency")),y("div",{className:"col-6"},void 0,"password:",y("h2",{className:"text-danger"},void 0,"123456")))),y("div",{className:"form-footer"},void 0,y(l.a,{color:"success",size:"lg",type:"submit",disabled:n||o,block:!0},void 0,"Submit")),y("div",{className:"absolute-left w-100"},void 0,y(v.a,{loading:o})))}),n("c09c3c514a0c22ecaf9d");n.d(a,"mapDispatchToProps",function(){return _});n("742435d9b9249d0353dc");var h=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(a,n,o,t){var i=a&&a.defaultProps,r=arguments.length-3;if(n||0===r||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===r)n.children=t;else if(r>1){for(var l=Array(r),d=0;d<r;d++)l[d]=arguments[d+3];n.children=l}return{$$typeof:e,type:a,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),x=function(){function e(e,a){for(var n=0;n<a.length;n++){var o=a[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(a,n,o){return n&&e(a.prototype,n),o&&e(a,o),a}}();var w=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var n=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return n.handleLogin=function(e){n.props.login(e).then(function(e){})},n.initValues={},"/"===e.location.pathname&&s.history.push("/login"),n}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,t.a.PureComponent),x(a,[{key:"render",value:function(){var e=this,a=this.props;a.enquiryTypes,a.currentEnqType,a.loading,a.location.pathname;return h("div",{className:"login-container"},void 0,h(l.a,{color:"success",size:"sm",onClick:function(){e.props.test()}},void 0,"test new"))}}]),a}(),_=function(e){return{postEnquiry:function(a){return e(u.g(a))},login:function(a){return e(u.e(a))},test:function(a){return e(u.k(a))},showAlert:function(a,n){return e(u.i(a,n))},getData:function(){e(u.c())}}},N=Object(c.c)({enquiryTypes:Object(f.d)(),currentEnqType:Object(f.c)(),loading:Object(f.g)(),isLoggedIn:Object(f.e)(),location:Object(f.h)()}),j=Object(i.connect)(N,_);a.default=Object(r.compose)(p.a,j)(Object(d.a)(w))},c09c3c514a0c22ecaf9d:function(e,a,n){var o=n("778496ee6e21ca3bdf56");"string"==typeof o&&(o=[[e.i,o,""]]);var t={hmr:!0,transform:void 0,insertInto:void 0};n("1e4534d1d62a11482e97")(o,t);o.locals&&(e.exports=o.locals)}}]);