(this.webpackJsonpFrontEnd=this.webpackJsonpFrontEnd||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(18),s=a(13),r=a(14),o=a(16),i=a(15),u=a(44),j=(a(67),a(7)),l=a(58),h=a(28),b=a(112),d=a(59),p=a(29),O=a.n(p),x=a(62),m=a(3),f={courseName:"",code:"",passMark:"",lecture:"",subjects:[],options:[],selectedSubjects:[]},v=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChange=n.onChange.bind(Object(h.a)(n)),n.onSubmit=n.onSubmit.bind(Object(h.a)(n)),n.onSubjectSelect=n.onSubjectSelect.bind(Object(h.a)(n)),n.state=f,n}return Object(r.a)(a,[{key:"onChange",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"onSubjectSelect",value:function(e){this.setState({selectedSubjects:e?e.map((function(e){return e.value})):[]})}},{key:"componentDidMount",value:function(){var e=this;O.a.get("https://afpaper2018.herokuapp.com/subject/getSubjects").then((function(t){e.setState({subjects:t.data},(function(){console.log("subjects",e.state.subjects);var t=[];e.state.subjects.map((function(e,a){var n={value:e._id,label:e.name};t.push(n)})),e.setState({options:t})}))}))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.courseName,code:this.state.code,passmark:this.state.passMark,lecturer_in_Charge:this.state.lecture,subjects:this.state.selectedSubjects};console.log("DATA TO SEND",t),O.a.post("https://afpaper2018.herokuapp.com/course/Course",t).then((function(e){alert("Course Data successfully inserted")})).catch((function(e){console.log(e.message),alert(e.message)}))}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"container",style:{paddingTop:"30px"},children:Object(m.jsxs)(b.a,{onSubmit:this.onSubmit,children:[Object(m.jsxs)(b.a.Group,{controlId:"formBasicEmail",children:[Object(m.jsx)(b.a.Label,{children:"Name"}),Object(m.jsx)(b.a.Control,{type:"text",placeholder:"Enter Course Name",name:"courseName",value:this.state.courseName,onChange:this.onChange})]}),Object(m.jsxs)(b.a.Group,{controlId:"formBasicPassword",children:[Object(m.jsx)(b.a.Label,{children:"Code"}),Object(m.jsx)(b.a.Control,{type:"text",placeholder:"Enter Course Code",name:"code",value:this.state.code,onChange:this.onChange})]}),Object(m.jsxs)(b.a.Group,{controlId:"formBasicPassword",children:[Object(m.jsx)(b.a.Label,{children:"Pass mark"}),Object(m.jsx)(b.a.Control,{type:"text",placeholder:"Enter the Pass Mark",name:"passMark",value:this.state.passMark,onChange:this.onChange})]}),Object(m.jsxs)(b.a.Group,{controlId:"formBasicPassword",children:[Object(m.jsx)(b.a.Label,{children:"Lecturer In Charge"}),Object(m.jsx)(b.a.Control,{type:"text",placeholder:"Enter the Lecturer In Charge",name:"lecture",value:this.state.lecture,onChange:this.onChange})]}),Object(m.jsxs)(b.a.Group,{children:[Object(m.jsx)(b.a.Label,{children:"Select the Subjects: "}),Object(m.jsx)(x.a,{options:this.state.options,onChange:this.onSubjectSelect,className:"basic-multi-select",isMulti:!0})]}),Object(m.jsx)(d.a,{variant:"primary",type:"submit",children:"Submit"})]})})}}]),a}(n.Component),C=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsx)("h4",{children:"Home Page"})}}]),a}(n.Component),g=a(109),k=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={courses:[],count:1},e.deleteCourses=function(e){O.a.delete("https://afpaper2018.herokuapp.com/course/deleteCourse/".concat(e)).then((function(e){e.data.success&&(alert(e.data.message),window.location.reload(!1))}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.a.get("https://afpaper2018.herokuapp.com/course/getCourses").then((function(t){var a=t.data.getCourse;console.log(a),e.setState({courses:a})})).catch((function(e){return e.message}))}},{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"container",style:{paddingTop:"50px"},children:Object(m.jsxs)(g.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:"Code"}),Object(m.jsx)("th",{children:"Pass Mark"}),Object(m.jsx)("th",{children:"Lecturer In Charge"}),Object(m.jsx)("th",{children:"Action"})]})}),Object(m.jsx)("tbody",{children:this.state.courses.map((function(t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.state.count}),Object(m.jsx)("td",{children:t.name}),Object(m.jsx)("td",{children:t.code}),Object(m.jsx)("td",{children:t.passmark}),Object(m.jsx)("td",{children:t.lecturer_in_Charge}),Object(m.jsx)("td",{style:{width:"200px"},children:Object(m.jsx)(d.a,{variant:"secondary",onClick:e.deleteCourses.bind(e,t._id),children:"Delete"})})]})}))})]})})}}]),a}(n.Component),y=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("section",{children:[Object(m.jsx)(j.a,{path:"/Home",component:C,exact:!0}),Object(m.jsx)(j.a,{path:"/Createcourse",component:v,exact:!0}),Object(m.jsx)(j.a,{path:"/getCourse",component:k,exact:!0})]})}}]),a}(n.Component),S=a(111),N=a(113),w=a(110),I=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsxs)(S.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(m.jsx)(S.a.Brand,{href:"/getCourse",children:"Subjects And Courses"}),Object(m.jsx)(S.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsx)(S.a.Collapse,{id:"responsive-navbar-nav",children:Object(m.jsxs)(N.a,{className:"mr-auto",children:[Object(m.jsx)(N.a.Link,{href:"/Createcourse",children:"Add Course"}),Object(m.jsx)(N.a.Link,{href:"/getCourse",children:"Get All Courses"}),Object(m.jsxs)(w.a,{title:"Subjects",id:"collasible-nav-dropdown",children:[Object(m.jsx)(w.a.Item,{href:"#action/3.1",children:"Get Subjects for a Course"}),Object(m.jsx)(w.a.Item,{href:"#action/3.2",children:"Course Amount"}),Object(m.jsx)(w.a.Divider,{})]})]})})]})}}]),a}(n.Component),L=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsxs)(u.a,{children:[Object(m.jsx)(I,{}),Object(m.jsx)(y,{})]})}}]),a}(n.Component);Object(c.render)(Object(m.jsx)(L,{}),document.getElementById("app"))}},[[104,1,2]]]);
//# sourceMappingURL=main.9d36fddb.chunk.js.map