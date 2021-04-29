(this.webpackJsonpnetflixclone=this.webpackJsonpnetflixclone||[]).push([[0],{23:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n(0),i=n.n(s),a=n(7),c=n.n(a),o=n(3),l=n.n(o),u=n(4),d=n(5),m=(n(9),n(23),"a1b2f514b71b98f4fdeabd6fae26bd24"),j=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h={getList:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/discover/tv?with_network=213&api_key=".concat(m));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Netflix Originals",items:e.t0},e.next=6,j("/trending/all/week?api_key=".concat(m));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Your Recommendations",items:e.t2},e.next=10,j("/movie/top_rated?api_key=".concat(m));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Top Rated",items:e.t4},e.next=14,j("/discover/movie?with_genres=28&api_key=".concat(m));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"Action",items:e.t6},e.next=18,j("/discover/movie?with_genres=35&api_key=".concat(m));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Comedy",items:e.t8},e.next=22,j("/discover/movie?with_genres=27&api_key=".concat(m));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Horror",items:e.t10},e.next=26,j("/discover/movie?with_genres=10749&api_key=".concat(m));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",items:e.t12},e.next=30,j("/discover/movie?with_genres=99&api_key=".concat(m));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Documentaries",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(u.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},!t){e.next=13;break}e.t0=n,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,j("/movie/".concat(t,"?api_key=").concat(m));case 7:return r=e.sent,e.abrupt("break",13);case 9:return e.next=11,j("/tv/".concat(t,"?api_key=").concat(m));case 11:return r=e.sent,e.abrupt("break",13);case 13:return e.abrupt("return",r);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},b=n(13),f=n.n(b),v=n(15),g=n.n(v),x=function(e){var t=e.title,n=e.items,i=Object(s.useState)(0),a=Object(d.a)(i,2),c=a[0],o=a[1];return Object(r.jsxs)("div",{className:"movieRow",children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("div",{className:"movieRow-left",onClick:function(){var e=c+Math.round(window.innerWidth/2);e>0&&(e=0),o(e)},children:Object(r.jsx)(f.a,{style:{fontSize:50}})}),Object(r.jsx)("div",{className:"movieRow-right",onClick:function(){var e=c-Math.round(window.innerWidth/2),t=150*n.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-60),o(e)},children:Object(r.jsx)(g.a,{style:{fontSize:50}})}),Object(r.jsx)("div",{className:"movieRow-listarea",children:Object(r.jsx)("div",{className:"movieRow-list",style:{marginLeft:c,width:n.results.length*Math.round(window.innerWidth/2)},children:n.results.length>0&&n.results.map((function(e,t){return Object(r.jsx)("div",{className:"movieRow-item",children:Object(r.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_title})},t)}))})})]})},p=(n(29),function(e){var t=e.item,n=new Date(t.first_air_date),s=[];for(var i in t.genres)s.push(t.genres[i].name);var a=t.overview;return a.length>200&&(a=a.substring(0,250)+"..."),Object(r.jsx)("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(t.backdrop_path,")")},children:Object(r.jsx)("div",{className:"featured-vertical",children:Object(r.jsxs)("div",{className:"featured-horizontal",children:[Object(r.jsx)("div",{className:"featured-name",children:t.original_name}),Object(r.jsxs)("div",{className:"featured-info",children:[Object(r.jsxs)("div",{className:"featured-points",children:[t.vote_average," points"]}),Object(r.jsx)("div",{className:"featured-year",children:n.getFullYear()}),Object(r.jsxs)("div",{className:"featured-seasons",children:[t.number_of_seasons," season",1!==t.number_of_seasons?"s":""]})]}),Object(r.jsx)("div",{className:"featured-description",children:a}),Object(r.jsxs)("div",{className:"featured-buttons",children:[Object(r.jsx)("a",{className:"featured-watchButton",href:"/watch/".concat(t.id),children:" \u25ba Play"}),Object(r.jsx)("a",{className:"featured-myListButton",href:"/list//add/".concat(t.id),children:" + Info"})]}),Object(r.jsxs)("div",{className:"featured-genres",children:[Object(r.jsx)("strong",{children:"Genres:"}),"  ",s.join(", ")]})]})})})}),O=(n(30),function(e){var t=e.black;return Object(r.jsxs)("header",{className:t?"black":"",children:[Object(r.jsx)("div",{className:"header-logo",children:Object(r.jsx)("a",{href:"/",children:Object(r.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"Netflix"})})}),Object(r.jsx)("div",{className:"header-user",children:Object(r.jsx)("img",{src:"https://pbs.twimg.com/media/CW2i0pJW4AEYFI3?format=png&name=360x360",alt:"avatar"})})]})}),w=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],a=Object(s.useState)(null),c=Object(d.a)(a,2),o=c[0],m=c[1],j=Object(s.useState)(!1),b=Object(d.a)(j,2),f=b[0],v=b[1];return Object(s.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,r,s,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getList();case 2:return t=e.sent,i(t),n=t.filter((function(e){return"originals"===e.slug})),r=Math.floor(Math.random()*(n[0].items.results.length-1)),s=n[0].items.results[r],e.next=9,h.getMovieInfo(s.id,"tv");case 9:a=e.sent,m(a);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.useEffect)((function(){var e=function(){window.scrollY>10?v(!0):v(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)(O,{black:f}),o&&Object(r.jsx)(p,{item:o}),Object(r.jsx)("section",{className:"lists",children:n.map((function(e,t){return Object(r.jsx)("div",{children:Object(r.jsx)(x,{title:e.title,items:e.items},t)})}))}),Object(r.jsxs)("footer",{children:["Created using TheMovieDB.org API. ",Object(r.jsx)("br",{}),"Image rights belongs to Netflix."]}),n<=0&&Object(r.jsx)("div",{className:"loading",children:Object(r.jsx)("img",{src:'https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif"',alt:"loading"})})]})};c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[32,1,2]]]);
//# sourceMappingURL=main.e266d14a.chunk.js.map