(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},58:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(28),i=n.n(c),r=(n(36),n(8)),o=n(2),u=(n(37),n(1));var j=function(){return Object(u.jsx)("span",{children:"About this page : I built it because I love movies."})},l=n(11),m=n(12),d=n(14),b=n(13),v=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(u.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component),h=n(17),p=n.n(h),O=n(29),x=n(30),f=n.n(x);n(58);var g=function(e){var t=e.id,n=e.year,a=e.title,s=e.summary,c=e.poster,i=e.genres;return Object(u.jsx)("div",{className:"movie",children:Object(u.jsxs)(r.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:a,summary:s,poster:c,genres:i}},children:[Object(u.jsx)("img",{src:c,alt:a,title:a}),Object(u.jsxs)("div",{className:"movie__data",children:[Object(u.jsx)("h3",{className:"movie__title",children:a}),Object(u.jsx)("h5",{className:"movie__year",children:n}),Object(u.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(u.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(u.jsxs)("p",{className:"movie__summary",children:[s.slice(0,180),"..."]})]})]})})},y=(n(67),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0},e.getMovies=Object(O.a)(p.a.mark((function t(){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(u.jsx)("section",{className:"container",children:t?Object(u.jsx)("div",{className:"loader",children:Object(u.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(u.jsx)("div",{className:"movies",children:n.map((function(e){return Object(u.jsx)(g,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(s.a.Component));n(68);var _=function(){return Object(u.jsxs)("div",{className:"nav",children:[Object(u.jsx)(r.b,{to:"/",children:"Home"}),Object(u.jsx)(r.b,{to:"/about",children:"About"})]})};var N=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(r.a,{children:[Object(u.jsx)(_,{}),Object(u.jsx)(o.a,{path:"/",exact:!0,component:y}),Object(u.jsx)(o.a,{path:"/about",component:j}),Object(u.jsx)(o.a,{path:"/movie/:id",component:v})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),k()}},[[69,1,2]]]);
//# sourceMappingURL=main.2ecab24c.chunk.js.map