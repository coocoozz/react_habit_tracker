(this["webpackJsonphabit-tracker-hook"]=this["webpackJsonphabit-tracker-hook"]||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){},21:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a(1),i=a.n(c),s=a(7),b=a.n(s),o=(a(15),a(2)),r=a(8),l=a(9),u=(a(16),Object(c.memo)((function(t){var e=t.habit,a=e.name,c=e.count;return Object(n.jsxs)("li",{className:"habit",children:[Object(n.jsx)("span",{className:"habit-name",children:a}),Object(n.jsx)("span",{className:"habit-counter",children:c}),Object(n.jsx)("button",{className:"habit-plus",onClick:function(){t.handleHabitPlus(t.habit)},children:Object(n.jsx)("i",{className:"fas fa-plus-square"})}),Object(n.jsx)("button",{className:"habit-minus",onClick:function(){t.handleHabitMinus(t.habit)},children:Object(n.jsx)("i",{className:"fas fa-minus-square"})}),Object(n.jsx)("button",{className:"habit-remove",onClick:function(){t.handleHabitRemove(t.habit)},children:Object(n.jsx)("i",{className:"fas fa-trash"})})]})}))),d=Object(c.memo)((function(t){var e=Object(c.useRef)(null),a=Object(c.useRef)(null);return Object(n.jsxs)("form",{ref:e,className:"habit-add-form",onSubmit:function(n){n.preventDefault();var c=a.current.value;c&&t.handleHabitAdd(c),e.current.reset()},children:[Object(n.jsx)("input",{ref:a,type:"text",className:"habit-input",placeholder:"Habit"}),Object(n.jsx)("button",{className:"habit-add",children:"Add"})]})})),h=Object(c.memo)((function(t){return Object(n.jsxs)("div",{className:"habits",children:[Object(n.jsx)(d,{handleHabitAdd:t.handleHabitAdd}),Object(n.jsx)("ul",{children:t.habits.map((function(e){return Object(n.jsx)(u,{habit:e,handleHabitPlus:t.handleHabitPlus,handleHabitMinus:t.handleHabitMinus,handleHabitRemove:t.handleHabitRemove},e.id)}))}),Object(n.jsx)("button",{className:"habits-reset",onClick:t.handleHabitReset,children:"Reset All"})]})})),j=Object(c.memo)((function(t){return Object(n.jsxs)("nav",{className:"navbar",children:[Object(n.jsx)("i",{className:"navbar-logo fas fa-leaf"}),Object(n.jsx)("span",{children:"Habit Tracker"}),Object(n.jsx)("span",{className:"navbar-counter",children:t.count})]})}));var m=function(){var t=Object(c.useState)([{id:1,name:"guitar",count:0},{id:2,name:"bass",count:0},{id:3,name:"drum",count:0}]),e=Object(l.a)(t,2),a=e[0],i=e[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{count:a.filter((function(t){return t.count>0})).length}),Object(n.jsx)(h,{habits:a,handleHabitPlus:function(t){console.log("habit plus: ".concat(t.name));var e=a.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},t),{},{count:t.count+1}):e}));i(e)},handleHabitMinus:function(t){console.log("habit minus: ".concat(t.name));var e=a.map((function(e){if(e.id===t.id){var a=t.count-1;return Object(o.a)(Object(o.a)({},t),{},{count:a<0?0:a})}return e}));i(e)},handleHabitRemove:function(t){console.log("habit remove: ".concat(t.name));var e=a.filter((function(e){return e.id!==t.id}));i(e)},handleHabitReset:function(){console.log("habit reset");var t=a.map((function(t){return Object(o.a)(Object(o.a)({},t),{},{count:0})}));i(t)},handleHabitAdd:function(t){console.log("habit add: ".concat(t));var e=[].concat(Object(r.a)(a),[{id:Date.now(),name:t,count:0}]);i(e)}})]})};a(17);b.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.c13adfe9.chunk.js.map