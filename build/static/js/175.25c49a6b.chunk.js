(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[175],{1070:function(e,a,t){"use strict";var l=t(14),n=t(15),c=t(17),r=t(16),m=t(1),o=t.n(m),E=t(5),i=t.n(E),s=t(804),u=t(814),p=t(789),d=t(790),v=t(815),h=t(816),y=t(173),b=t(1071),f=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={activeStep:e.props.activeStep?e.props.activeStep:0,errors:[],values:[]},e.handleNextStep=function(a,t){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=e.state.activeStep,c=e.props.validate;if(c)if(0===l.length&&n<=a&&n!==t)e.setState({activeStep:n+1});else{if(!l.length||!e.props.onValidationError)return;e.props.onValidationError(e.state.errors)}else n<=a&&n!==t&&e.setState({activeStep:n+1})},e.handlePreviousStep=function(a){var t=e.state.activeStep;t>=a&&e.setState({activeStep:t-1})},e.handleEnableAllSteps=function(a){e.props.enableAllSteps&&e.setState({activeStep:a})},e.handleSubmit=function(a){e.props.steps.length-1===e.state.activeStep&&e.props.onFinish&&e.props.onFinish(a)},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this,a=this.props.validate?b.AvForm:s.a;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{className:"vx-wizard ".concat(this.props.className?this.props.className:""),tabs:!0},this.props.steps.map((function(a,t){return o.a.createElement(p.a,{className:"step-wrapper",key:t,onClick:function(){return e.handleEnableAllSteps(t)}},o.a.createElement(d.a,{className:i()("step step-".concat(t),{active:e.state.activeStep===t,done:t<e.state.activeStep})},o.a.createElement("span",{className:"step-text"},a.title)))}))),o.a.createElement(v.a,{className:"vx-wizard-content ".concat(this.props.tabPaneClass?this.props.tabPaneClass:""),activeTab:this.state.activeStep},this.props.steps.map((function(t,l){return o.a.createElement(h.a,{className:"step-content step-".concat(l,"-content"),key:l,tabId:l},o.a.createElement(a,{className:"form-horizontal",onSubmit:function(a,t,n){e.setState({errors:t,values:n}),e.props.validate||a.preventDefault(),e.handleNextStep(l,e.props.steps.length-1,t),e.handleSubmit(a)}},t.content,e.props.pagination?o.a.createElement("div",{className:"wizard-actions d-flex justify-content-between"},o.a.createElement(y.a,{color:"primary",disabled:0===e.state.activeStep,onClick:function(){return e.handlePreviousStep(l)}},"Prev"),o.a.createElement(y.a,{type:"submit",color:"primary"},e.props.steps.length-1!==l||e.props.finishBtnText?e.props.steps.length-1===l&&e.props.finishBtnText?e.props.finishBtnText:"Next":"Submit")):null))}))))}}],[{key:"getDerivedStateFromProps",value:function(e,a){if(e.activeStep&&e.activeStep!==a.activeStep){if(!e.validate)return{activeStep:e.activeStep};if(0===a.errors.length&&a.submitted)return{activeStep:e.activeStep}}return null}}]),t}(o.a.Component);f.defaultProps={pagination:!0},a.a=f},2539:function(e,a,t){"use strict";t.r(a);var l=t(14),n=t(15),c=t(17),r=t(16),m=t(1),o=t.n(m),E=t(801),i=t(1148),s=t(1149),u=t(52),p=t(1070),d=t(826),v=t(803),h=t(800),y=t(787),b=t(1001),f=t(1002),k=t(173),N=t(1150),x=t(1151),S=t(1152),C=t(1153),T=t(406),A=t(43),g=t.n(A),P=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).changeHandler=function(e){n.setState(Object(u.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault();var a=n.props.match.params.id;g.a.post("/http://3.108.185.7/nodejs/api/dealer/addeditadvancedealershipform/".concat(a),n.state).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},n.state={any_other_facility:"",mobile:"",dealer_name:"",email:"",location:"",master_oil_company:"",omc_customer_code:"",puc_machine:"",state:"",total_no_air_machine:"",total_no_bay:"",total_no_mpd:"",total_no_nozzles:"",total_no_tanks:"",district:""},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;g.a.get("/http://3.108.185.7/nodejs/api/dealer/viewonedealershipform/".concat(a)).then((function(a){console.log(a),e.setState({})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=[{title:"1",content:o.a.createElement(i.a,null,o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Name of Dealership "),o.a.createElement(h.a,{type:"text",name:"dealer_name"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Mobile No "),o.a.createElement(h.a,{type:"text",name:"mobile"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Email Id "),o.a.createElement(h.a,{type:"email",name:"email"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," City Name "),o.a.createElement(y.a,{type:"select",name:"select"},o.a.createElement("option",null,"New York"),o.a.createElement("option",null,"Chicago"),o.a.createElement("option",null,"San Francisco"),o.a.createElement("option",null,"Boston")))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," OMC Customer Code "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Master Oil Company "),o.a.createElement(y.a,{type:"select",name:"select"},o.a.createElement("option",null,"New York"),o.a.createElement("option",null,"Chicago"),o.a.createElement("option",null,"San Francisco"),o.a.createElement("option",null,"Boston")))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," District "),o.a.createElement(y.a,{type:"select",name:"select"},o.a.createElement("option",null,"New York"),o.a.createElement("option",null,"Chicago"),o.a.createElement("option",null,"San Francisco"),o.a.createElement("option",null,"Boston")))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Location "),o.a.createElement(y.a,{type:"select",name:"select"},o.a.createElement("option",null,"New York"),o.a.createElement("option",null,"Chicago"),o.a.createElement("option",null,"San Francisco"),o.a.createElement("option",null,"Boston")))))},{title:2,content:o.a.createElement(i.a,null,o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Total No. of MPD"),o.a.createElement(h.a,{type:"text",name:"total_no_mpd"})),o.a.createElement(d.a,null,o.a.createElement(v.a,null," Total No. of Bay "),o.a.createElement(h.a,{type:"text",name:"total_no_bay"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Total No. of Nozzles"),o.a.createElement(h.a,{type:"text",name:"total_no_nozzles"})),o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Total No. of Tanks"),o.a.createElement(h.a,{type:"text",name:"total_no_tanks"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Total No. of Air Machines"),o.a.createElement(h.a,{type:"text",name:"total_no_air_machine"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"PUC Machine"),o.a.createElement(h.a,{type:"text",name:"puc_machine"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Any other facilities"),o.a.createElement(h.a,{type:"text",name:"any_other_facility"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Select Tank "),o.a.createElement(y.a,{type:"select",name:"select"},o.a.createElement("option",null,"Tank 1"),o.a.createElement("option",null,"Tank 2"),o.a.createElement("option",null,"Tank 3"),o.a.createElement("option",null,"Tank 4")))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Product Mapped to Tank "),o.a.createElement(y.a,{type:"select",name:"select"},o.a.createElement("option",null,"Tank 1"),o.a.createElement("option",null,"Tank 2"),o.a.createElement("option",null,"Tank 3"),o.a.createElement("option",null,"Tank 4")))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Capacity"),o.a.createElement(y.a,{type:"select",name:"select"},o.a.createElement("option",null,"Tank 1"),o.a.createElement("option",null,"Tank 2"),o.a.createElement("option",null,"Tank 3"),o.a.createElement("option",null,"Tank 4")))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Select MPD"),o.a.createElement(y.a,{type:"select",name:"select"},o.a.createElement("option",null,"MPD 1"),o.a.createElement("option",null,"MPD 2"),o.a.createElement("option",null,"MPD 3"),o.a.createElement("option",null,"MPD 4")))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Map correct Bay to MPD"),o.a.createElement(y.a,{type:"select",name:"select"},o.a.createElement("option",null,"MPD 1"),o.a.createElement("option",null,"MPD 2"),o.a.createElement("option",null,"MPD 3"),o.a.createElement("option",null,"MPD 4")))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Select BAY"),o.a.createElement(y.a,{type:"select",name:"select"},o.a.createElement("option",null,"BAY 1"),o.a.createElement("option",null,"BAY 2"),o.a.createElement("option",null,"BAY 3"),o.a.createElement("option",null,"BAY 4")))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Map Correct Nozzle to each Bay"),o.a.createElement(y.a,{type:"select",name:"select"},o.a.createElement("option",null,"N1 and N2"),o.a.createElement("option",null,"N1 and N2"),o.a.createElement("option",null,"N1 and N2"),o.a.createElement("option",null,"N1 and N2")))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Select Nozzles"),o.a.createElement(y.a,{type:"select",name:"select"},o.a.createElement("option",null,"N1 and N2"),o.a.createElement("option",null,"N1 and N2"),o.a.createElement("option",null,"N1 and N2"),o.a.createElement("option",null,"N1 and N2")))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Map Tank to Nozzles"),o.a.createElement(y.a,{type:"select",name:"select"},o.a.createElement("option",null,"Tank 1/Tank 2/Tank 3"),o.a.createElement("option",null,"Tank 1/Tank 2/Tank 3"),o.a.createElement("option",null,"Tank 1/Tank 2/Tank 3"),o.a.createElement("option",null,"Tank 1/Tank 2/Tank 3")))))},{title:3,content:o.a.createElement(i.a,null,o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Add Payment modes "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Select from the below "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Mode "),o.a.createElement(y.a,{type:"select",name:"select"},o.a.createElement("option",null,"Upi"),o.a.createElement("option",null,"Cesh"),o.a.createElement("option",null,"Online"),o.a.createElement("option",null,"Bank")))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Bank "),o.a.createElement(y.a,{type:"select",name:"select"},o.a.createElement("option",null,"Punb bank"),o.a.createElement("option",null,"Hdb bank"),o.a.createElement("option",null,"Hdfc bank"),o.a.createElement("option",null,"Punb bank")))))},{title:4,content:o.a.createElement(i.a,null,o.a.createElement(s.a,{md:"3",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Add Credit Customer "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"3",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Name of the Customer "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"3",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Phone Number"),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"3",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Credit Limit "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"3",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Credit Term Fuel "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"3",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Credit Term Lube "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"3",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Address "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"3",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Local ID "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Document Upload "),o.a.createElement(h.a,{type:"text",className:"input p-5"}),o.a.createElement("input",{type:"file",placeholder:"Document Upload"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Any Agreement signed can be uploaded "),o.a.createElement(h.a,{type:"text",className:"input p-5"}),o.a.createElement("input",{type:"file",placeholder:"Upload"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Vehicle No."),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Multiple Entry can be done for tracking"),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Local Guranter Name"),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Local Guranter Name"),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Local Guranter Number"),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"List of Customer added with come here"),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{lg:"6",md:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Search Option"),o.a.createElement(b.a,null,o.a.createElement(f.a,{addonType:"prepend"},o.a.createElement(k.a.Ripple,{color:"primary"},o.a.createElement(T.a,{size:15}),"\\")),o.a.createElement(h.a,{type:"text"}),o.a.createElement(f.a,{addonType:"append"},o.a.createElement(k.a.Ripple,{color:"primary"},"Search !"))))))},{title:5,content:o.a.createElement(i.a,null,o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Nature "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Manufacturer "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Purchased on"),o.a.createElement(h.a,{type:"text"}))))},{title:6,content:o.a.createElement(i.a,null,o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Name of the Bank "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Credit Limit from Bank"),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Interest Rate "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Account No"),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"IFSC Code "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null,"Credit Offer from Bank Valid upto "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Document Upload "),o.a.createElement(h.a,{type:"text",className:"input p-5"}),o.a.createElement("input",{type:"file",placeholder:"Document Upload"}))))}];return o.a.createElement(N.a,null,o.a.createElement(x.a,null,o.a.createElement(S.a,null,"Basic Details")),o.a.createElement(C.a,null,o.a.createElement(p.a,{enableAllSteps:!0,onFinish:function(){return alert("submitted")},steps:e})))}}]),t}(o.a.Component),_=t(817),F=t(335),z=t(254),O=t(336),j=t(261),w=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={steps:[{title:o.a.createElement(F.a,{size:20}),content:o.a.createElement(i.a,null,o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," First Name "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Last Name "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Email Name "),o.a.createElement(h.a,{type:"email"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," City Name "),o.a.createElement(y.a,{type:"select",name:"select",id:"city"},o.a.createElement("option",null,"New York"),o.a.createElement("option",null,"Chicago"),o.a.createElement("option",null,"San Francisco"),o.a.createElement("option",null,"Boston")))))},{title:o.a.createElement(z.a,{size:20}),content:o.a.createElement(i.a,null,o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Proposal Title "),o.a.createElement(h.a,{type:"text"})),o.a.createElement(d.a,null,o.a.createElement(v.a,null," Job Title "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Proposal Title "),o.a.createElement(h.a,{type:"textarea",rows:"5"}))))},{title:o.a.createElement(O.a,{size:20}),content:o.a.createElement(i.a,null,o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Event Name "),o.a.createElement(h.a,{type:"text"}))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Event Location "),o.a.createElement(y.a,{type:"select",name:"select",id:"location"},o.a.createElement("option",null,"New York"),o.a.createElement("option",null,"Chicago"),o.a.createElement("option",null,"San Francisco"),o.a.createElement("option",null,"Boston")))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Event Status "),o.a.createElement(y.a,{type:"select",name:"select",id:"status"},o.a.createElement("option",null,"Planning"),o.a.createElement("option",null,"In Process"),o.a.createElement("option",null,"Finished")))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(v.a,null," Event Status "),o.a.createElement(v.a,{className:"mr-2"},"Requirements :"),o.a.createElement("div",{className:"stacked-checkbox"},o.a.createElement("div",{className:"d-inline-block mr-2"},o.a.createElement(_.a,{color:"primary",icon:o.a.createElement(j.a,{className:"vx-icon",size:16}),label:"Staffing",defaultChecked:!1})),o.a.createElement("div",{className:"d-inline-block"},o.a.createElement(_.a,{color:"primary",icon:o.a.createElement(j.a,{className:"vx-icon",size:16}),label:"Catering",defaultChecked:!1}))))))}]},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this.state.steps;return o.a.createElement(N.a,null,o.a.createElement(x.a,null,o.a.createElement(S.a,null,"Wizard with Icons")),o.a.createElement(C.a,null,o.a.createElement(p.a,{steps:e})))}}]),t}(o.a.Component),B=t(1071),D=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={steps:[{title:1,content:o.a.createElement(i.a,null,o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(B.AvGroup,null,o.a.createElement(v.a,null," First Name "),o.a.createElement(B.AvInput,{name:"first-name",type:"text",required:!0}),o.a.createElement(B.AvFeedback,null,"Please enter valid First Name"))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(B.AvGroup,null,o.a.createElement(v.a,null," Last Name "),o.a.createElement(B.AvInput,{name:"last-name",type:"text",required:!0}),o.a.createElement(B.AvFeedback,null,"Please enter valid Last Name"))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(B.AvGroup,null,o.a.createElement(v.a,null," Email "),o.a.createElement(B.AvInput,{name:"last-name",type:"email",required:!0}),o.a.createElement(B.AvFeedback,null,"Please enter valid email"))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(B.AvGroup,null,o.a.createElement(B.AvField,{type:"select",name:"city-name",label:"City Name",required:!0},o.a.createElement("option",{defaultValue:!0},"Select City"),o.a.createElement("option",null,"New York"),o.a.createElement("option",null,"Chicago"),o.a.createElement("option",null,"San Francisco"),o.a.createElement("option",null,"Boston")))))},{title:2,content:o.a.createElement(i.a,null,o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(B.AvGroup,null,o.a.createElement(v.a,null," Proposal Title "),o.a.createElement(B.AvInput,{name:"Proposal-Title",type:"text",required:!0}),o.a.createElement(B.AvFeedback,null,"Please enter valid Title")),o.a.createElement(B.AvGroup,null,o.a.createElement(v.a,null," Job Title "),o.a.createElement(B.AvInput,{name:"Job-Title",type:"text",required:!0}),o.a.createElement(B.AvFeedback,null,"Please enter valid Job Title"))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(B.AvGroup,null,o.a.createElement(v.a,null," Proposal Description "),o.a.createElement(B.AvInput,{name:"description",type:"textarea",rows:"5",required:!0}),o.a.createElement(B.AvFeedback,null,"Please enter valid Description"))))},{title:3,content:o.a.createElement(i.a,null,o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(B.AvGroup,null,o.a.createElement(v.a,null," Event Name "),o.a.createElement(B.AvInput,{name:"Event-Name",type:"text",required:!0}),o.a.createElement(B.AvFeedback,null,"Event Name"))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(B.AvGroup,null,o.a.createElement(B.AvField,{type:"select",name:"city-name",label:"City Name",required:!0},o.a.createElement("option",{defaultValue:!0},"Select City"),o.a.createElement("option",null,"New York"),o.a.createElement("option",null,"Chicago"),o.a.createElement("option",null,"San Francisco"),o.a.createElement("option",null,"Boston")))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(B.AvGroup,null,o.a.createElement(B.AvField,{type:"select",name:"status",label:"Event Status",required:!0},o.a.createElement("option",null,"Planning"),o.a.createElement("option",null,"In Process"),o.a.createElement("option",null,"Finished")))),o.a.createElement(s.a,{md:"6",sm:"12"},o.a.createElement(B.AvGroup,null,o.a.createElement(v.a,null," Event Status "),o.a.createElement(v.a,{className:"mr-2"},"Requirements :"),o.a.createElement("div",{className:"stacked-checkbox"},o.a.createElement("div",{className:"d-inline-block mr-2"},o.a.createElement(_.a,{color:"primary",icon:o.a.createElement(j.a,{className:"vx-icon",size:16}),label:"Staffing",defaultChecked:!1})),o.a.createElement("div",{className:"d-inline-block"},o.a.createElement(_.a,{color:"primary",icon:o.a.createElement(j.a,{className:"vx-icon",size:16}),label:"Catering",defaultChecked:!1}))))))}]},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this.state.steps;return o.a.createElement(N.a,null,o.a.createElement(x.a,null,o.a.createElement(S.a,null,"Wizard with Validation")),o.a.createElement(C.a,null,o.a.createElement(p.a,{validate:!0,steps:e})))}}]),t}(o.a.Component),M=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{breadCrumbTitle:"Wizard",breadCrumbParent:"Extra Components",breadCrumbActive:"Wizard"}),o.a.createElement(i.a,null,o.a.createElement(s.a,{sm:"12"},o.a.createElement(P,null)),o.a.createElement(s.a,{sm:"12"},o.a.createElement(w,null)),o.a.createElement(s.a,{sm:"12"},o.a.createElement(D,null))))}}]),t}(o.a.Component);a.default=M},817:function(e,a,t){"use strict";var l=t(14),n=t(15),c=t(17),r=t(16),m=t(1),o=t.n(m),E=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},o.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),o.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},o.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),o.a.createElement("span",null,this.props.label))}}]),t}(o.a.Component);a.a=E}}]);
//# sourceMappingURL=175.25c49a6b.chunk.js.map