(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{114:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(148),m=t(151),c=t(146);a.default=function(e){const{metadata:a,items:t}=e,{allTagsPath:r,name:o,count:s}=a;return n.a.createElement(l.a,{title:`Posts tagged "${o}"`,description:`Blog | Tagged "${o}"`},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,s," ",function(e,a){return e>1?a+"s":a}(s,"post"),' tagged with "',o,'"'),n.a.createElement(c.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map(({content:e})=>n.a.createElement(m.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},n.a.createElement(e,null))))))))}},151:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(147),m=t.n(l),c=t(144),o=t(146),s=t(152),i=t(92),u=t.n(i);const g=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:r,truncated:l,isBlogPostPage:i=!1}=e,{date:d,permalink:E,tags:h,readingTime:v}=r,{author:p,title:N}=t,b=t.author_url||t.authorURL,f=t.author_title||t.authorTitle,_=t.author_image_url||t.authorImageURL;return n.a.createElement("article",{className:i?void 0:"margin-bottom--xl"},(()=>{const e=i?"h1":"h2",a=d.substring(0,10).split("-"),t=a[0],r=g[parseInt(a[1],10)-1],l=parseInt(a[2],10);return n.a.createElement("header",null,n.a.createElement(e,{className:m()("margin-bottom--sm",u.a.blogPostTitle)},i?N:n.a.createElement(o.a,{to:E},N)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:d,className:u.a.blogPostDate},r," ",l,", ",t," ",v&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(v)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},_&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:b,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:_,alt:p})),n.a.createElement("div",{className:"avatar__intro"},p&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:b,target:"_blank",rel:"noreferrer noopener"},p)),n.a.createElement("small",{className:"avatar__subtitle"},f)))))})(),n.a.createElement("section",{className:"markdown"},n.a.createElement(c.a,{components:s.a},a)),(h.length>0||l)&&n.a.createElement("footer",{className:"row margin-vert--lg"},h.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),h.map(({label:e,permalink:a})=>n.a.createElement(o.a,{key:a,className:"margin-horiz--sm",to:a},e))),l&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(o.a,{to:r.permalink,"aria-label":"Read more about "+N},n.a.createElement("strong",null,"Read More")))))}}}]);