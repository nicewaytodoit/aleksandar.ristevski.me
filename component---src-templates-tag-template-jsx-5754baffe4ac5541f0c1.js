(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{160:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),s=a(0),o=a.n(s),c=a(163),l=a.n(c),i=a(162),m=a(164),p=(a(76),a(167)),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=[],t=this.props,a=t.data,n=t.pageContext.tag;return a.allMarkdownRemark.edges.forEach(function(t){e.push(o.a.createElement(p.a,{data:t,key:t.node.fields.slug}))}),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"content__inner"},o.a.createElement("div",{className:"page"},o.a.createElement("h1",{className:"page__title"},'All Posts tagged as "',n,'"'),o.a.createElement("div",{className:"page__body"},e))))},t}(o.a.Component);a.d(t,"pageQuery",function(){return _});var u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=e.pageContext,n=t.site.siteMetadata.title,r=a.tag;return o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement(l.a,{title:'All Posts tagged as "'+r+'" - '+n}),o.a.createElement(m.a,this.props),o.a.createElement(d,this.props)))},t}(o.a.Component),_=(t.default=u,"3413118905")},167:function(e,t,a){"use strict";var n=a(7),r=a.n(n),s=a(0),o=a.n(s),c=a(36),l=a(172),i=a.n(l),m=(a(168),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.node.frontmatter,a=t.title,n=t.date,r=t.category,s=t.description,l=e.node.fields,m=l.slug,p=l.categorySlug;return o.a.createElement("div",{className:"post"},o.a.createElement("div",{className:"post__meta"},o.a.createElement("time",{className:"post__meta-time",dateTime:i()(n).format("MMMM D, YYYY")},i()(n).format("MMMM YYYY")),o.a.createElement("span",{className:"post__meta-divider"}),o.a.createElement("span",{className:"post__meta-category",key:p},o.a.createElement(c.Link,{to:p,className:"post__meta-category-link"},r))),o.a.createElement("h2",{className:"post__title"},o.a.createElement(c.Link,{className:"post__title-link",to:m},a)),o.a.createElement("p",{className:"post__description"},s),o.a.createElement(c.Link,{className:"post__readmore",to:m},"Read"))},t}(o.a.Component));t.a=m},168:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-tag-template-jsx-5754baffe4ac5541f0c1.js.map