(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/3mp":function(e,t,a){},"1Jpo":function(e,t,a){"use strict";var n=a("dI71"),r=a("q1tI"),s=a.n(r),o=a("Wbzz"),c=a("wd/R"),m=a.n(c),i=(a("/3mp"),a("L6NH")),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data,t=e.node.frontmatter,a=t.title,n=t.date,r=t.category,c=t.description,l=e.node,p=e.node.fields,d=p.slug,u=p.categorySlug;return s.a.createElement("div",{className:"post"},s.a.createElement("h2",{className:"post__title mgbt-0"},s.a.createElement(o.Link,{className:"post__title-link",to:d},a)),s.a.createElement("div",{className:"post__meta mgbt-0-5"},s.a.createElement("time",{className:"post__meta-time",dateTime:m()(n).format("MMMM D, YYYY")},""+Object(i.a)(l.frontmatter.date,"DD MMM YYYY").toUpperCase()),s.a.createElement("span",{className:"post__meta-divider"}," • "),""+Object(i.b)(l.timeToRead),s.a.createElement("span",{className:"post__meta-divider"}," • "),s.a.createElement("span",{className:"post__meta-category",key:u},s.a.createElement(o.Link,{to:u,className:"post__meta-category-link"},r))),s.a.createElement("p",{className:"post__description mgbt-0"},c),s.a.createElement("p",{className:"mgbt-0-5"},s.a.createElement(o.Link,{className:"post__readmore",to:d},"Read")))},t}(s.a.Component);t.a=l},nz5Z:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),r=a("q1tI"),s=a.n(r),o=a("qhky"),c=a("ntAx"),m=a("kfNp"),i=a("1Jpo"),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=[],t=this.props,a=t.pageContext.category;return t.data.allMarkdownRemark.edges.forEach((function(t){e.push(s.a.createElement(i.a,{data:t,key:t.node.fields.slug}))})),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"content__inner"},s.a.createElement("div",{className:"page"},s.a.createElement("h1",{className:"page__title"},a),s.a.createElement("div",{className:"page__body"},e))))},t}(s.a.Component),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=e.pageContext,n=t.site.siteMetadata.title,r=a.category;return s.a.createElement(c.a,null,s.a.createElement("div",null,s.a.createElement(o.a,{title:r+" - "+n}),s.a.createElement(m.a,this.props),s.a.createElement(l,this.props)))},t}(s.a.Component);t.default=p}}]);
//# sourceMappingURL=component---src-templates-category-template-jsx-54535897a9c71c958795.js.map