(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{22:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a,c,r,i=n(0),o=n.n(i),s=n(12),l=n.n(s),u=(n(22),n(17)),m=n(4),b=n(5),d=n(8),h=n(7),j=n(2),p=n(3),f=p.a.div(a||(a=Object(j.a)(['\n  .contactListItem {\n    display: flex;\n    align-items: center;\n  }\n  .contactListItem::before {\n    content: "";\n    width: 5px;\n    height: 5px;\n    border-radius: 50%;\n    background-color: black;\n    margin-right: 10px;\n  }\n  .contactListDeleteButton {\n    width: 80px;\n    height: 30px;\n    margin-left: 20px;\n  }\n']))),x=n(1),O=function(t){var e=t.name,n=t.number,a=t.handleDelete;return Object(x.jsxs)("li",{className:"contactListItem",children:[Object(x.jsxs)("p",{children:[e,": ",n]}),Object(x.jsx)("button",{type:"button",name:e,onClick:a,className:"contactListDeleteButton",children:"Delete"})]})},g=function(t){var e=t.contacts,n=t.onDelete,a=function(t){n(t.target.name)};return Object(x.jsx)(f,{children:Object(x.jsx)("ul",{className:"contactList",children:e.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(x.jsx)(O,{name:n,number:c,handleDelete:a},e)}))})})},v=n(16),y=n(29),S=p.a.div(c||(c=Object(j.a)(["\n  border: 1px solid black;\n  width: 500px;\n  margin-left: 20px;\n  margin-bottom: 30px;\n\n  .formItem {\n    display: block;\n    margin-bottom: 10px;\n    margin-left: 20px;\n  }\n\n  .lableTitle {\n    margin-top: 0;\n    margin-bottom: 5px;\n  }\n\n  .submitButton {\n    margin-left: 20px;\n    margin-bottom: 20px;\n    margin-top: 10px;\n  }\n"]))),k={name:"",number:""},C=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChangeForm=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(v.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r=t.props,i=r.isUniqe,o=r.onAdd;i(a)?o({id:Object(y.a)(),name:a,number:c}):alert("".concat(a," is alredy in contacts")),t.resetForm()},t.resetForm=function(){t.setState(k)},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(x.jsx)(S,{children:Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsxs)("label",{className:"formItem",children:[Object(x.jsx)("p",{className:"lableTitle",children:"Name"}),Object(x.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Name",required:!0,value:e,onChange:this.handleChangeForm})]}),Object(x.jsxs)("label",{className:"formItem",children:[Object(x.jsx)("p",{className:"lableTitle",children:"Number"}),Object(x.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"Phone",required:!0,value:n,onChange:this.handleChangeForm})]}),Object(x.jsx)("button",{type:"submit",className:"submitButton",children:"Add contact"})]})})}}]),n}(i.Component),N=p.a.div(r||(r=Object(j.a)(["\n  margin-left: 20px;\n"]))),A=function(t){var e=t.setFilter,n=t.value;return Object(x.jsx)(N,{children:Object(x.jsxs)("label",{children:["Filter:",Object(x.jsx)("input",{tupe:"text",value:n,onChange:function(t){e(t.target.value)}})]})})},D=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.isUniqe=function(e){return!t.state.contacts.find((function(t){return t.name===e}))},t.onAdd=function(e){t.setState((function(t){return{contacts:[].concat(Object(u.a)(t.contacts),[e])}}))},t.onDelete=function(e){var n=t.state.contacts.filter((function(t){return t.name!==e}));t.setState({contacts:n})},t.setFilter=function(e){t.setState({filter:e})},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){if(localStorage.getItem("contacts")){var t=JSON.parse(localStorage.getItem("contacts"));this.setState({contacts:t})}}},{key:"componentDidUpdate",value:function(){var t=this.state.contacts;localStorage.setItem("contacts",JSON.stringify(t))}},{key:"render",value:function(){var t=this,e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}));return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Phonebook"}),Object(x.jsx)(C,{isUniqe:this.isUniqe,onAdd:this.onAdd}),Object(x.jsx)("h2",{children:"Contacts"}),Object(x.jsx)(A,{setFilter:this.setFilter,value:this.state.filter}),Object(x.jsx)(g,{contacts:e,onDelete:this.onDelete})]})}}]),n}(i.Component);n(26);l.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(D,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.04cae055.chunk.js.map