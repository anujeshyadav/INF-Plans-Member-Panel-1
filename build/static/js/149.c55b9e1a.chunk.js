(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[149],{2407:function(e,t,a){"use strict";a.r(t),a.d(t,"AddFnoIndex",(function(){return O}));var n=a(52),l=a(14),r=a(15),o=a(17),s=a(16),c=a(1),i=a.n(c),u=a(1150),d=a(1148),m=a(1149),p=a(173),f=a(1153),h=a(804),b=a(803),g=a(787),v=a(800),y=a(57),E=a(802),x=a.n(E),N=a(170),O=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),console.log("type",r.state),N.a.post("/admin/add_fnoIndex",r.state).then((function(e){console.log("add Data",e.data),x()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/trade/fnoIndexList")})).catch((function(e){console.log(e)}))},r.state={expiryDate:"",script_type:"",fnoindex_scrpt_name:"",active_value:"",call_type:"",qty:"",investment_amt:"",no_of_lots:"",trade_type:"",t5:"",status:""},r.state={type:"Index",scriptN:[],expdateI:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get("/admin/getFnoScript").then((function(t){console.log(t),e.setState({scriptN:t.data.data})})).catch((function(e){console.log(e)})),N.a.get("/admin/datelist").then((function(t){e.setState({expdateI:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,t;return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(m.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add FNO Index")),i.a.createElement(m.a,null,i.a.createElement(y.b,{render:function(e){var t=e.history;return i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/trade/fnoIndexList")}},"Back")}}))),i.a.createElement(f.a,null,i.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,{className:"mb-2"},i.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a,null,"Script Name"),i.a.createElement(g.a,{type:"select",name:"fnoindex_scrpt_name",value:this.state.fnoindex_scrpt_name,onChange:this.changeHandler},i.a.createElement("option",null,"Select Script"),null===(e=this.state.scriptN)||void 0===e?void 0:e.map((function(e){return i.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.scriptName)})))),i.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a,null,"Expiry Date"),i.a.createElement(g.a,{type:"select",name:"expiryDate",value:this.state.expiryDate,onChange:this.changeHandler},i.a.createElement("option",null,"Expiry Date"),null===(t=this.state.expdateI)||void 0===t?void 0:t.map((function(e){return i.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.expDate)})))),i.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(b.a,{for:"exampleSelect"},"Equity Script"),i.a.createElement(v.a,{name:"script_type",type:"select",value:this.state.script_type,onChange:this.changeHandler},i.a.createElement("option",null,"Select Script"),i.a.createElement("option",null,"BUY"),i.a.createElement("option",null,"SELL"))),i.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(b.a,{for:"exampleSelect"},"Trade Type"),i.a.createElement(v.a,{id:"exampleSelect",name:"trade_type",type:"select",value:this.state.trade_type,onChange:this.changeHandler},i.a.createElement("option",null,"Select Trade"),i.a.createElement("option",{value:"BankNifty"},"BANK NIFTY"),i.a.createElement("option",{value:"Nifty"},"NIFTY"))),i.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(b.a,{for:"exampleSelect"},"Call Type"),i.a.createElement(v.a,{id:"exampleSelect",name:"call_type",type:"select",value:this.state.call_type,onChange:this.changeHandler,placeholder:"Select Call Type"},i.a.createElement("option",null,"Intraday"),i.a.createElement("option",null,"BTST"),i.a.createElement("option",null,"Short Term"),i.a.createElement("option",null,"Intraday or BTST"),i.a.createElement("option",null,"Intraday (Risky)"),i.a.createElement("option",null,"Intraday (Trailed)"),i.a.createElement("option",null,"Intraday (Re-entry)"),i.a.createElement("option",null,"Intraday (Re-entry- Trailed)"),i.a.createElement("option",null,"Intraday (Hero-Zero)"))),i.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(b.a,null,"Active Value*"),i.a.createElement(v.a,{type:"number",required:!0,placeholder:"Enter Active Value",name:"active_value",value:this.state.active_value,onChange:this.changeHandler})),i.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(b.a,null,"Range value*"),i.a.createElement(v.a,{name:"t5",type:"number",required:!0,placeholder:"Enter T5 ",value:this.state.t5,onChange:this.changeHandler})),i.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(b.a,null,"Number Of Lots"),i.a.createElement(v.a,{type:"number",name:"no_of_lots",placeholder:"Enter Lots Price",value:this.state.no_of_lots,onChange:this.changeHandler}))),i.a.createElement(d.a,null,i.a.createElement(p.a.Ripple,{className:"mr-1 mb-1",type:"submit",color:"primary"},"Add FNO Index"))))))}}]),a}(c.Component);t.default=O},800:function(e,t,a){"use strict";var n=a(6),l=a(10),r=a(12),o=a(13),s=a(1),c=a.n(s),i=a(2),u=a.n(i),d=a(5),m=a.n(d),p=a(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,o=e.bsSize,s=e.valid,i=e.invalid,u=e.tag,d=e.addon,h=e.plaintext,b=e.innerRef,g=Object(l.a)(e,f),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),E=u||("select"===r||"textarea"===r?r:"input"),x="form-control";h?(x+="-plaintext",E=u||"input"):"file"===r?x+="-file":"range"===r?x+="-range":v&&(x=d?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var N=Object(p.mapToCssModules)(m()(t,i&&"is-invalid",s&&"is-valid",!!o&&"form-control-"+o,x),a);return("input"===E||u&&"function"===typeof u)&&(g.type=r),g.children&&!h&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(E,Object(n.a)({},g,{ref:b,className:N,"aria-invalid":i}))},t}(c.a.Component);b.propTypes=h,b.defaultProps={type:"text"},t.a=b},803:function(e,t,a){"use strict";var n=a(6),l=a(10),r=a(1),o=a.n(r),s=a(2),c=a.n(s),i=a(5),u=a.n(i),d=a(4),m=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,r=e.hidden,s=e.widths,c=e.tag,i=e.check,p=e.size,f=e.for,h=Object(l.a)(e,m),b=[];s.forEach((function(t,n){var l=e[t];if(delete h[t],l||""===l){var r,o=!n;if(Object(d.isObject)(l)){var s,c=o?"-":"-"+t+"-";r=g(o,t,l.size),b.push(Object(d.mapToCssModules)(u()(((s={})[r]=l.size||""===l.size,s["order"+c+l.order]=l.order||0===l.order,s["offset"+c+l.offset]=l.offset||0===l.offset,s))),a)}else r=g(o,t,l),b.push(r)}}));var v=Object(d.mapToCssModules)(u()(t,!!r&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),a);return o.a.createElement(c,Object(n.a)({htmlFor:f},h,{className:v}))};v.propTypes=h,v.defaultProps=b,t.a=v},804:function(e,t,a){"use strict";var n=a(6),l=a(10),r=a(12),o=a(13),s=a(1),c=a.n(s),i=a(2),u=a.n(i),d=a(5),m=a.n(d),p=a(4),f=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,o=e.tag,s=e.innerRef,i=Object(l.a)(e,f),u=Object(p.mapToCssModules)(m()(t,!!r&&"form-inline"),a);return c.a.createElement(o,Object(n.a)({},i,{ref:s,className:u}))},t}(s.Component);b.propTypes=h,b.defaultProps={tag:"form"},t.a=b}}]);
//# sourceMappingURL=149.c55b9e1a.chunk.js.map