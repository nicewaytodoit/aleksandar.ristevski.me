(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{BG51:function(e,n,t){"use strict";t.r(n);var a=t("dI71"),r=t("MUpH"),l=t("q1tI"),c=t.n(l),o=t("vOnD"),i=t("qhky"),s=t("boz2"),m=t("lAhY"),u=t("ntAx"),p=(t("PnS0"),t("kfNp")),E=t("c99k"),h=t("AoKP"),d=(t("E9XD"),t("KQm4"));t("PK9T");function f(e){return c.a.createElement("span",null,e)}function b(e){return c.a.createElement("li",null,e.url?c.a.createElement("a",{target:"_blank",href:e.url},e.name):c.a.createElement("b",null,e.name),e.description?" - ":"",c.a.createElement("span",{className:"history__projects-desc",dangerouslySetInnerHTML:{__html:e.description}}),c.a.createElement("br",null),e.skills?c.a.createElement(c.a.Fragment,null,c.a.createElement("b",null,"Tech:"),k(e.skills,(function(e){return c.a.createElement("span",null,e)}),", ")):"")}function g(e){return c.a.createElement("span",null,e.start," - ",e.end||"now")}function _(e){return c.a.createElement("span",null,e)}function k(e,n,t){return(e||[]).map(n).reduce((function(e,n){return null===e?[n]:[].concat(Object(d.a)(e),[t,n])}),null)}var v=function(e){var n=e.className;return c.a.createElement("div",{className:n},m.jobs&&m.jobs.map((function(e){return c.a.createElement("article",{id:""+e.hash,key:e.begin.month+e.begin.year,className:"history__item"},c.a.createElement("h2",{className:"history__title"},e.company," ",c.a.createElement("span",null,e.location," ",function(e){if(!e)return"";var n=Array.isArray(e)?e:[e];return c.a.createElement(l.Fragment,null,"(",k(n,(function(e){return c.a.createElement("a",{target:"_blank",href:e},(e||"").replace(/^[https:\/\/|http:\/\/]*/g,""))}),c.a.createElement("i",null)),")")}(e.url))),c.a.createElement("p",{className:"history__engagement"},k(e.engagement,g," & ")," (",e.duration,")"),c.a.createElement("p",{className:"history__occupation"},k(e.occupation,_,", ")),e.projects?c.a.createElement("p",{className:"history__projects"},c.a.createElement("b",null,"Project",1===e.projects.length?"":"s",":"),c.a.createElement("br",null),c.a.createElement("ul",null,k(e.projects,b,""))):"",c.a.createElement("ul",{className:"history__details"},(e.details||[]).map((function(e){return c.a.createElement("li",{dangerouslySetInnerHTML:{__html:e}})}))),e.stack?c.a.createElement("p",{className:"history__stack"},c.a.createElement("b",null,"Tech: "),k(e.stack,f,", ")):"")})))};function y(){var e=Object(r.a)(["\n  .page-content {\n    max-width: 100%;\n    margin-bottom: 40px;\n  }\n\n  .avatar {\n    align-items: center;\n  margin-bottom: 24px;\n  }\n\n  .avatar__image {\n    box-shadow: 3px 3px 15px 0px rgba(0,0,0,0.75);\n    max-width: 200px;\n    border-radius: 100px;\n    margin: 0 auto 24px;\n  }\n\n  .social {\n    margin-top: 12px;\n    margin-bottom: 12px;\n  }\n\n  .social-link {\n    padding: 8px;\n    color: #555;\n  }\n\n  a.social-link.twitter:hover {\n    color: #1da1f2;\n  }\n\n  a.social-link.github:hover {\n    color: #24292e;\n  }\n\n  a.social-link.linkedin:hover {\n    color: #0077B5;\n  }\n\n  a.social-link.email:hover {\n    color: #c23a2b;\n  }\n"]);return y=function(){return e},e}function x(){var e=Object(r.a)(["\n  margin-top: 24px;\n  margin-bottom: 16px;\n"]);return x=function(){return e},e}o.default.hr(x());var N=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){var e=this.props;return c.a.createElement(u.a,null,c.a.createElement("div",null,c.a.createElement(i.a,{title:"Work History"}),c.a.createElement(p.a,this.props),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"content__inner"},c.a.createElement(E.a,{title:"Work History",keywords:["Aleksandar Ristevski","work","history","cv","profile","UI Developer","Frontend Developer","Front End Developer","Team Lead"]}),c.a.createElement(h.a,{className:e.className},c.a.createElement(s.Container,{className:"page-content",fluid:!0},c.a.createElement("h1",{className:"page__title"},"Work"),c.a.createElement(v,null)))))))},n}(c.a.Component);n.default=Object(o.default)(N)(y())},PK9T:function(e,n,t){}}]);