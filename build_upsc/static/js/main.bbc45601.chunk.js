(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(2),c=n.n(s),i=n(18),r=n.n(i),o=(n(26),n(27),n(3)),h=n(4),u=n(6),l=n(5),m=(n(9),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={min:a.props.min,max:a.props.max,disable:!1,check:!1},a}return Object(h.a)(n,[{key:"onMinChange",value:function(t){this.setState({min:t,disable:!1})}},{key:"onCheckChange",value:function(t){this.setState({check:t,disable:!1})}},{key:"onMaxChange",value:function(t){this.setState({max:t,disable:!1})}},{key:"onSubmit",value:function(){this.state.max>395||this.state.min<1||this.state.max<this.state.min?this.setState({disable:!0}):this.props.submit(this.state.min,this.state.max,this.state.check?0:1)}},{key:"render",value:function(){var t=this;return Object(a.jsx)("div",{className:"flex flex-column mt-5 pt-5",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"mb-4",children:"SelectRange"}),Object(a.jsxs)("div",{children:["Min: ",Object(a.jsx)("input",{type:"Number",value:this.state.min,className:"mr-3",min:"0",max:"395",style:{width:70},onChange:function(e){return t.onMinChange(e.target.value)}}),"Max: ",Object(a.jsx)("input",{className:"mr-2",type:"Number",value:this.state.max,min:"0",max:"395",style:{width:70},onChange:function(e){return t.onMaxChange(e.target.value)}}),"Repeat:",Object(a.jsx)("input",{className:"ml-2",type:"checkbox",value:this.state.value,onChange:function(e){return t.onCheckChange(e.target.checked)}})]}),Object(a.jsx)("button",{disabled:this.state.disable,onClick:function(e){return t.onSubmit()},className:"btn btn-primary mt-4",children:"SelectRange"}),Object(a.jsx)("p",{className:"mt-2",hidden:!this.state.disable,style:{color:"red"},children:"Enter Correct Value"})]})})}}]),n}(s.Component)),b=n(8),d=n(20),p=n(19),j=n.n(p),x=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).onSubmit=function(){var t=1;a.state.wrong&&(t=a.props.check),a.setState({wrong:!1});var e="".concat(a.state.input1).concat(a.state.input2),n="".concat(a.state.input1," ").concat(a.state.input2),s="".concat(a.state.input1," -").concat(a.state.input2),c=a.state.selectarticle,i=c.no,r=c.chapter;if((i===e||i===n||i===s)&&r===a.state.input3.toString()){if(a.setState({correct:!0,used:a.state.used+t}),1===t){var o=Object(d.a)(a.state.data),h=Object(b.a)(Object(b.a)({},o[a.state.index]),{},{times:1});o[a.state.index]=h,a.setState({data:o})}}else a.setState({wrong:!0})},a.onNext=function(){if(a.state.totalno===a.state.used)return a.props.changeState();var t=Math.floor(Math.random()*a.state.totalno),e=a.state.data[t];0!==e.times?a.onNext():a.setState({selectarticle:e,index:t,input1:"",input2:"",input3:0,correct:!1,wrong:!1})},a.state={min:a.props.min,max:a.props.max,input1:"",input2:"",input3:0,correct:!1,wrong:!1,data:[],totalno:0,used:0,selectarticle:{},switch:!1,index:0},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;j.a.get("https://gist.githubusercontent.com/harsh0907/191b6ba5758ce19576b9fb3f96cb3b01/raw/bd00a1f77bebfc0a8ba224e0b3b53235d7500878/article.json").then((function(e){var n=e.data.filter((function(e){return+e.no.split(" ")[0]>=t.state.min&&+e.no.split(" ")[0]<=t.state.max&&e.show}));t.setState({totalno:n.length,data:n}),t.onNext()}))}},{key:"onInput1Change",value:function(t){this.setState({input1:t})}},{key:"onInput2Change",value:function(t){this.setState({input2:t.toUpperCase()})}},{key:"onInput3Change",value:function(t){this.setState({input3:t})}},{key:"changeSwitch",value:function(){this.setState({switch:!this.state.switch})}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{className:"flex flex-column mt-5 pt-5",children:[Object(a.jsx)("h1",{className:"mb-4",children:"Articles"}),Object(a.jsx)("h5",{className:"mb-5",onClick:function(){return t.changeSwitch()},hidden:this.state.switch,children:"rest No of Articles "}),Object(a.jsx)("h5",{className:"mb-5",onClick:function(){return t.changeSwitch()},hidden:!this.state.switch,children:"".concat(this.state.used,"/").concat(this.state.totalno)}),Object(a.jsx)("h3",{className:"mb-5",children:this.state.selectarticle.article}),Object(a.jsxs)("div",{hidden:"0"===this.state.selectarticle.chapter,children:["Chapter:",Object(a.jsx)("input",{type:"Number",value:this.state.input3,min:"0",className:"mb-3 ml-1",style:{width:50},onChange:function(e){return t.onInput3Change(e.target.value)}})]}),Object(a.jsxs)("div",{children:["Article: ",Object(a.jsx)("input",{type:"Number",value:this.state.input1,min:"0",max:"395",style:{width:50},onChange:function(e){return t.onInput1Change(e.target.value)}}),"- ",Object(a.jsx)("input",{type:"Text",value:this.state.input2,style:{width:50},onChange:function(e){return t.onInput2Change(e.target.value)}})]}),this.state.correct?Object(a.jsx)("button",{onClick:function(e){return t.onNext()},className:"btn btn-primary mt-4",children:"Next"}):Object(a.jsx)("button",{onClick:function(e){return t.onSubmit()},className:"btn btn-primary mt-4",children:"Submit"}),Object(a.jsx)("p",{className:"mt-2",hidden:!this.state.wrong,style:{color:"red"},children:"Correct Ans is Article No. ".concat(this.state.selectarticle.no)}),Object(a.jsx)("p",{className:"mt-2",hidden:!this.state.wrong||"0"===this.state.selectarticle.chapter,style:{color:"red"},children:"Of chapter ".concat(this.state.selectarticle.chapter)}),Object(a.jsx)("p",{className:"mt-2",hidden:!this.state.correct,style:{color:"green"},children:"Correct Value"})]})}}]),n}(s.Component),g=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).SelectRange=function(e,n,a){t.setState({min:e,max:n,change:2,check:a})},t.changeState=function(){t.setState({change:1})},t.state={change:1,min:1,max:1,check:1},t}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:1===this.state.change?Object(a.jsx)(m,{min:this.state.min,max:this.state.max,submit:this.SelectRange}):Object(a.jsx)(x,{min:this.state.min,max:this.state.max,changeState:this.changeState,check:this.state.check})})}}]),n}(s.Component);var f=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(g,{})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),s(t),c(t),i(t)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),v()}},[[46,1,2]]]);
//# sourceMappingURL=main.bbc45601.chunk.js.map