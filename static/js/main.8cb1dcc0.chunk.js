(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),c=a(2),s=a(7),o=a(1),l=a.n(o),d=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),u=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],m=a(9),j=a.n(m),b=a(0),h=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(b.jsxs)("article",{"data-id":a,className:j()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(b.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(b.jsx)("a",{className:"UserInfo",href:"mailto:".concat(r.email),children:r.name})]})},O=function(e){var t=e.todos;return Object(b.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(b.jsx)(h,{todo:e},e.id)}))})},f=l.a.memo(O),p=function(){return u.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:d.find((function(t){return t.id===e.userId}))||null})}))},x=function(){var e=Object(o.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(!1),s=Object(c.a)(i,2),l=s[0],u=s[1],m=Object(o.useState)(""),j=Object(c.a)(m,2),h=j[0],O=j[1],x=Object(o.useState)(""),v=Object(c.a)(x,2),y=v[0],S=v[1],N=Object(o.useState)(p),I=Object(c.a)(N,2),g=I[0],C=I[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Add todo form"}),Object(b.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),h&&""!==h.trim()||n(!0),y||u(!0),y&&h.trim()&&function(){var e={id:Math.max.apply(Math,Object(r.a)(g.map((function(e){return e.id}))).concat([0]))+1,title:h,completed:!1,userId:+y,user:d.find((function(e){return e.id===+y}))||null};C((function(t){return[].concat(Object(r.a)(t),[e])})),O(""),S("")}()},children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsxs)("label",{children:["Title:",Object(b.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:h,onChange:function(e){O(e.target.value),n(!1)}})]}),a&&Object(b.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsxs)("label",{children:["User:",Object(b.jsxs)("select",{"data-cy":"userSelect",value:y,onChange:function(e){S(e.target.value),u(!1)},children:[Object(b.jsx)("option",{value:"",disabled:!0,children:"Choose a user"}),d.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),l&&Object(b.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(b.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(b.jsx)(f,{todos:g})]})};i.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8cb1dcc0.chunk.js.map