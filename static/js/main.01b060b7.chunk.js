(this["webpackJsonpreact-personal-pjt"]=this["webpackJsonpreact-personal-pjt"]||[]).push([[0],{123:function(n,t,e){"use strict";e.r(t);var i=e(0),c=e.n(i),r=e(46),a=e.n(r),o=e(34),l=e(13),s=e(5),d=e(4),b=Object(l.b)({key:"darkMode",default:!1}),j=Object(l.b)({key:"coinsState",default:[]}),h=(Object(l.b)({key:"aCoinState",default:[]}),Object(l.b)({key:"category",default:[]}),Object(l.b)({key:"todoDAta",default:{}})),u=Object(l.b)({key:"todoLoaded",default:!1}),p=(Object(l.b)({key:"popularMovies",default:[]}),e(21)),x=e(19),O=e(6),g=e(129),f=e(130);var v=function(n){0!==Object.keys(n).length&&window.localStorage.setItem("todo",JSON.stringify(n))};function m(){return fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat("72caad34e2c43d870d78d98ae9a0980b","&language=en-US&page=1")).then((function(n){return n.json()}))}function w(n,t){return"https://image.tmdb.org/t/p/".concat(n,"/").concat(t)}var y,k,C,z,S,H,L,D,I,M=e(1),P=d.c.div(y||(y=Object(s.a)(["\n  width: 100vw;\n  height: 100%;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 1));\n"]))),q=d.c.div(k||(k=Object(s.a)(["\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),E=d.c.div(C||(C=Object(s.a)(["\n  margin: 0px auto;\n  width: 100%;\n  min-height: 80vh;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n  padding: 500px 150px 10px 150px;\n"])),(function(n){return n.bgPath})),A=d.c.div(z||(z=Object(s.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 10px auto;\n  padding: 5px;\n  min-width: 1050px;\n  width: 100%;\n  height: 400px;\n  border-top: 1px white solid;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n  div:first-child {\n    left: -20px;\n  }\n  div:last-child {\n    right: -20px;\n  }\n"]))),N=Object(d.c)(g.a.div)(S||(S=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n\n  width: 100%;\n  height: 100%;\n  border: 1px solid red;\n  position: absoulte;\n"]))),V=d.c.div(H||(H=Object(s.a)(["\n  padding: 10px;\n  flex: 1 1 15%;\n  min-width: 200px;\n  color: white;\n  border: solid 1px rgba(255, 255, 255, 0.3);\n  margin: 5px;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  display: flex;\n  align-items: flex-end;\n"])),(function(n){return n.bgPath})),T=d.c.p(L||(L=Object(s.a)(["\n  display: block;\n  background-color: rgba(0, 0, 0, 0.7);\n  width: 100%;\n"]))),_=d.c.div(D||(D=Object(s.a)(["\n  font-weight: bold;\n  font-size: 2rem;\n  color: white;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 25px;\n  background-color: rgba(255, 255, 255, 0.3);\n  position: absolute;\n  border: solid rgba(255, 255, 255, 0.3) 1px;\n  cursor: pointer;\n"]))),B=d.c.h1(I||(I=Object(s.a)(["\n  color: white;\n  font-weight: bold;\n"]))),F={enter:{x:1050},center:{x:0},exit:{x:-1050}};var J,Q,R,U,W,X,Y,G,K,Z,$=function(){var n,t=Object(o.useQuery)(["movies","popularMovies"],m),e=t.isLoading,c=t.data,r=Object(i.useState)(0),a=Object(O.a)(r,2),l=a[0],s=a[1],d=Object(i.useState)(0),b=Object(O.a)(d,2),j=(b[0],b[1]),h=c?Math.ceil((c.results.length-1)/5)-1:0;return console.log(h),Object(M.jsx)(P,{children:e?null:Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(E,{bgPath:c?w("original",null===(n=c.results[0])||void 0===n?void 0:n.backdrop_path):"",children:[Object(M.jsx)(B,{children:"Movie : Popular"}),Object(M.jsxs)(A,{children:[Object(M.jsx)(f.a,{children:Object(M.jsx)(N,{variants:F,initial:"enter",animate:"center",exit:"exit",transition:{duration:4,type:"tween"},children:c?c.results.slice(5*l,5*l+5).map((function(n){return Object(M.jsx)(V,{bgPath:w("w200",n.poster_path),children:Object(M.jsx)(T,{children:n.title})},n.id)})):Object(M.jsx)(q,{children:"Loading..."})},l)}),Object(M.jsx)(_,{onClick:function(n){var t;"movie"===(t="movie")?s((function(n){return n<=0?h:n-1})):"tv"===t&&j((function(n){return n<=0?h:n-1}))},children:"<"}),Object(M.jsx)(_,{onClick:function(){var n;"movie"===(n="movie")?s((function(n){return n>=h?0:n+1})):"tv"===n&&j((function(n){return n>=h?0:n+1}))},children:">"})]})]}),Object(M.jsxs)(E,{bgPath:c?w("original",c.results[0].backdrop_path):"",children:[Object(M.jsx)(B,{children:"Tv : Popular"}),Object(M.jsx)(A,{})]})]})})},nn={bgColor:"black",textColor:"white",accentColor:"#9b59b6"},tn={bgColor:"white",textColor:"black",accentColor:"#9b59b6"},en=e(131),cn=e(132),rn=Object(d.c)(g.a.div)(J||(J=Object(s.a)(["\n  width: 100%;\n  height: 80px;\n  margin: 0px auto;\n  color: ",";\n  /* background-color: rgba(255, 255, 255, 0.4); */\n  box-shadow: 0px 2px 5px ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  padding: 20px;\n  z-index: 999;\n  div:last-child {\n    padding: 0;\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.textColor})),an=d.c.div(Q||(Q=Object(s.a)(["\n  display: grid;\n  padding: 20px;\n  grid-template-columns: 1fr 80px 60px;\n  position: relative;\n\n  div:first-child {\n    justify-content: flex-start;\n  }\n  div:nth-child(2) {\n    justify-content: flex-end;\n  }\n"]))),on=Object(d.c)(g.a.div)(R||(R=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n"]))),ln=d.c.div(U||(U=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n"]))),sn=Object(d.c)(g.a.svg)(W||(W=Object(s.a)(["\n  width: 30px;\n  path {\n    stroke: rgba(46, 134, 222, 0.5);\n    stroke-width: 5;\n  }\n"]))),dn=Object(d.c)(g.a.div)(X||(X=Object(s.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  a {\n    min-width: fit-content;\n    margin: 0px 3px;\n  }\n"]))),bn=Object(d.c)(g.a.div)(Y||(Y=Object(s.a)(["\n  text-align: center;\n  cursor: pointer;\n"]))),jn=Object(d.c)(g.a.div)(G||(G=Object(s.a)(["\n  width: fit-content;\n  /* background: #313a3a; */\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),hn=Object(d.c)(g.a.div)(K||(K=Object(s.a)(["\n  width: 40px;\n  height: 20px;\n  background-color: rgba(255, 255, 255, 0.4);\n  border-radius: 10px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),un=Object(d.c)(g.a.div)(Z||(Z=Object(s.a)(["\n  width: 20px;\n  height: 20px;\n  background-color: white;\n  border-radius: 40px;\n  border: 1px gray solid;\n"]))),pn={top:{backgroundColor:"rgba(255,255,255,0.4)",color:"inherit"},scroll:{backgroundColor:"rgba(0,0,0,0.9)",color:"white"}},xn={borderBottom:"2px solid blue"},On={enter:{opacity:1,width:" 300px",height:"40px",fontSize:"16px",transition:{duration:.5,delay:.1}},exit:{opacity:0,width:"0px",height:"0px",fontSize:"0px",transition:{duration:.5,delay:.1}}};var gn,fn=function(){var n=Object(l.c)(b),t=Object(O.a)(n,2),e=t[0],c=t[1],r=Object(i.useState)(!1),a=Object(O.a)(r,2),o=a[0],s=a[1],d=Object(en.a)().scrollY,j=Object(x.h)("/"),h=Object(x.h)("/movies"),u=Object(x.h)("/tv"),f=Object(x.h)("/coinlist"),v=Object(x.h)("/todolist"),m=Object(x.h)("/motion"),w=Object(x.h)("/animate"),y=Object(x.h)("/slider"),k=function(){s((function(n){return!n}))},C=Object(cn.a)();return Object(i.useEffect)((function(){d.onChange((function(n){n>100?C.start("scroll"):C.start("top")}))})),Object(M.jsx)(rn,{variants:pn,initial:"top",animate:C,transition:{duration:.5},children:Object(M.jsxs)(an,{children:[Object(M.jsxs)(on,{children:[Object(M.jsxs)(ln,{children:[Object(M.jsx)(sn,{"aria-hidden":"true",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:Object(M.jsx)(g.a.path,{initial:{pathLength:0,fill:"rgb(204, 35, 30,0)"},animate:{pathLength:1,fill:"rgba(204, 35, 30,1)"},transition:{duration:2},fill:"currentColor",d:"M129.5 512V345.9L18.5 48h55.8l81.8 229.7L250.2 0h51.3L180.8 347.8V512h-51.3z"})}),Object(M.jsx)(sn,{"aria-hidden":"true",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:Object(M.jsx)(g.a.path,{initial:{pathLength:0,fill:"rgba(52, 166, 95,0)"},animate:{pathLength:1,fill:"rgba(52, 166, 95,1.0)"},transition:{duration:2},fill:"currentColor",d:"M192 480c39.5 0 76.2-11.8 106.8-32.2H85.3C115.8 468.2 152.5 480 192 480zm-89.1-193.1v-12.4H0v12.4c0 2.5 0 5 .1 7.4h103.1c-.2-2.4-.3-4.9-.3-7.4zm20.5 57H8.5c2.6 8.5 5.8 16.8 9.6 24.8h138.3c-12.9-5.7-24.1-14.2-33-24.8zm-17.7-34.7H1.3c.9 7.6 2.2 15 3.9 22.3h109.7c-4-6.9-7.2-14.4-9.2-22.3zm-2.8-69.3H0v17.3h102.9zm0-173.2H0v4.9h102.9zm0-34.7H0v2.5h102.9zm0 69.3H0v7.4h102.9zm0 104H0v14.8h102.9zm0-69.3H0v9.9h102.9zm0 34.6H0V183h102.9zm166.2 160.9h109.7c1.8-7.3 3.1-14.7 3.9-22.3H278.3c-2.1 7.9-5.2 15.4-9.2 22.3zm12-185.7H384V136H281.1zm0 37.2H384v-12.4H281.1zm0-74.3H384v-7.4H281.1zm0-76.7v2.5H384V32zm-203 410.9h227.7c11.8-8.7 22.7-18.6 32.2-29.7H44.9c9.6 11 21.4 21 33.2 29.7zm203-371.3H384v-4.9H281.1zm0 148.5H384v-14.8H281.1zM38.8 405.7h305.3c6.7-8.5 12.6-17.6 17.8-27.2H23c5.2 9.6 9.2 18.7 15.8 27.2zm188.8-37.1H367c3.7-8 5.8-16.2 8.5-24.8h-115c-8.8 10.7-20.1 19.2-32.9 24.8zm53.5-81.7c0 2.5-.1 5-.4 7.4h103.1c.1-2.5.2-4.9.2-7.4v-12.4H281.1zm0-29.7H384v-17.3H281.1z"})}),Object(M.jsx)(sn,{"aria-hidden":"true",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 416 512",children:Object(M.jsx)(g.a.path,{initial:{pathLength:0,fill:"rgba(15, 138, 95,0)"},animate:{pathLength:1,fill:"rgba(15, 138, 95,1.0)"},transition:{duration:2},fill:"currentColor",d:"M397.9 160H256V19.6L397.9 160zM304 192v130c0 66.8-36.5 100.1-113.3 100.1H96V84.8h94.7c12 0 23.1.8 33.1 2.5v-84C212.9 1.1 201.4 0 189.2 0H0v512h189.2C329.7 512 400 447.4 400 318.1V192h-96z"})}),Object(M.jsx)(sn,{"aria-hidden":"true",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(M.jsx)(g.a.path,{initial:{pathLength:0,fill:"rgba(35, 94, 111,0)"},animate:{pathLength:1,fill:"rgba(35, 94, 111,1.0)"},transition:{duration:2},fill:"currentColor",d:"M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45 43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64 114.25 114.25 0 0 0-5.34-24.36z"})})]}),Object(M.jsx)(p.b,{style:(null===j||void 0===j?void 0:j.isExact)?xn:{},to:"/",children:"Home"}),Object(M.jsx)("span",{children:" \xa0 | \xa0"}),Object(M.jsx)(p.b,{style:(null===h||void 0===h?void 0:h.isExact)?xn:{},to:"/movies",children:"Movies"}),Object(M.jsx)("span",{children:" \xa0 | \xa0"}),Object(M.jsx)(p.b,{style:(null===u||void 0===u?void 0:u.isExact)?xn:{},to:"/tv",children:"TV"})]}),Object(M.jsxs)(on,{onHoverStart:k,onHoverEnd:k,transition:{type:"linear",duration:.5},children:[Object(M.jsx)(bn,{children:"Challenge"}),Object(M.jsxs)(dn,{variants:On,initial:"exit",animate:o?"enter":"exit",children:[Object(M.jsx)(p.b,{style:(null===f||void 0===f?void 0:f.isExact)?xn:{},to:"/coinlist",children:"Coin List"}),Object(M.jsx)("span",{children:" \xa0 | \xa0"}),Object(M.jsx)(p.b,{style:(null===v||void 0===v?void 0:v.isExact)?xn:{},to:"/todolist",children:"ToDo List"}),Object(M.jsx)("span",{children:" \xa0 | \xa0"}),Object(M.jsx)(p.b,{style:(null===m||void 0===m?void 0:m.isExact)?xn:{},to:"/motion",children:"Framer motion"}),Object(M.jsx)("span",{children:" \xa0 | \xa0"}),Object(M.jsx)(p.b,{style:(null===w||void 0===w?void 0:w.isExact)?xn:{},to:"/animate",children:"AnimatePresence"}),Object(M.jsx)("span",{children:" \xa0 | \xa0"}),Object(M.jsx)(p.b,{style:(null===y||void 0===y?void 0:y.isExact)?xn:{},to:"/slider",children:"Slider"})]})]}),Object(M.jsx)(on,{children:Object(M.jsx)(jn,{children:Object(M.jsx)(hn,{onClick:function(){c((function(n){return!n}))},style:{background:e?"#fffefe":"#c2c0be"},children:Object(M.jsx)(un,{animate:{x:e?20:0},transition:{type:"spring",stiffness:700,damping:30},style:{background:e?"#303030":"#ffffff"}})})})})]})})},vn=e(12),mn=e.n(vn),wn=e(22),yn=d.c.li(gn||(gn=Object(s.a)(["\n  background-color: ",";\n  color: ",";\n  margin-bottom: 20px;\n  box-shadow: 0px 5px 10px #49a9e0;\n  transition: 0.5s;\n  a {\n    padding: 20px;\n    display: flex;\n    align-items: center;\n  }\n  &:hover {\n    color: #f1c40f;\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.bgColor}));var kn,Cn=function(n){var t=n.coin;return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(yn,{children:Object(M.jsxs)(p.b,{to:{pathname:"/coin/".concat(t.id),state:{id:t.id,name:t.name,symbol:t.symbol}},children:[Object(M.jsx)("img",{style:{width:"1.5rem",height:"1.5rem"},src:"https://cryptoicon-api.vercel.app/api/icon/".concat(t.symbol.toLowerCase()),alt:t.id}),"\xa0\xa0\xa0",t.name]})},t.id)})},zn=d.c.span(kn||(kn=Object(s.a)(["\n  color: ",";\n  font-size: 1rem;\n  place-self: center;\n  margin-top: 80px;\n"])),(function(n){return n.theme.accentColor}));function Sn(){var n=Object(i.useState)(!0),t=Object(O.a)(n,2),e=t[0],c=t[1],r=Object(l.c)(j),a=Object(O.a)(r,2),o=a[0],s=a[1],d=function(){var n=Object(wn.a)(mn.a.mark((function n(){var t;return mn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.coinpaprika.com/v1/coins");case 3:return n.next=5,n.sent.json();case 5:t=n.sent,s(t),c(!1),n.next=12;break;case 10:n.prev=10,n.t0=n.catch(0);case 12:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();return Object(i.useEffect)((function(){d()})),Object(M.jsx)("div",{children:Object(M.jsx)("ul",{children:e?Object(M.jsx)(zn,{children:"Loading..."}):o.slice(0,20).map((function(n){return Object(M.jsx)(Cn,{coin:n},n.id)}))})})}var Hn,Ln,Dn=c.a.memo(Sn),In=d.c.div(Hn||(Hn=Object(s.a)(["\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  background: linear-gradient(\n    -90deg,\n    rgba(255, 0, 0, 0.5),\n    rgba(84, 160, 255, 1)\n  );\n"]))),Mn=d.c.div(Ln||(Ln=Object(s.a)(["\n  width: 650px;\n  margin: 20px auto;\n  margin-top: 100px;\n"])));var Pn,qn,En=function(){return Object(M.jsx)(In,{children:Object(M.jsxs)(Mn,{children:[Object(M.jsx)("h1",{children:"Today's Coins"}),Object(M.jsx)("hr",{}),Object(M.jsx)(Dn,{})]})})},An=e(92),Nn=e.n(An),Vn=d.c.div(Pn||(Pn=Object(s.a)(["\n  display: flex;\n  height: 500px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid ",";\n  border-top: 0;\n  font-size: 3rem;\n"])),(function(n){return n.theme.textColor})),Tn=d.c.span(qn||(qn=Object(s.a)(["\n  font-size: 2rem;\n  color: tomato;\n"])));var _n,Bn=function(){var n=Object(l.d)(b),t=Object(x.g)().coinId,e=Object(x.f)().state;console.log(Object(o.useQuery)("callAPI",(function(){return function(){var n=Math.floor(Date.now()/1e3),e=n-604800;return fetch("https://api.coinpaprika.com/v1/coins/".concat(t,"/ohlcv/historical?start=").concat(e,"&end=").concat(n)).then((function(n){return n.json()}))}()})));var i={series:[{name:"Changing Rate",data:Object.values(null===e||void 0===e?void 0:e.data.quotes.USD)}]};return Object(M.jsxs)(Vn,{children:[Object(M.jsx)(Tn,{children:"Change Rates"}),Object(M.jsx)(Nn.a,{options:{chart:{toolbar:{show:!1},background:"transparent",width:"100%"},xaxis:{categories:Object.keys(null===e||void 0===e?void 0:e.data.quotes.USD),labels:{rotate:-90}},yaxis:{show:!1},theme:{mode:n?"dark":"light",palette:"pallete1"},tooltip:{y:{formatter:function(n){return n.toFixed(2)}}}},series:i.series,type:"line",width:"500"})]})},Fn=d.c.div(_n||(_n=Object(s.a)(["\n  display: flex;\n  height: 500px;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid ",";\n  border-top: 0;\n  font-size: 3rem;\n"])),(function(n){return n.theme.textColor}));var Jn,Qn,Rn,Un,Wn,Xn=function(){return Object(M.jsx)(Fn,{children:"Price"})},Yn=d.c.div(Jn||(Jn=Object(s.a)(["\n  width: 650px;\n  margin: 20px auto;\n  margin-top: 80px;\n  display: flex;\n  flex-direction: column;\n"]))),Gn=d.c.div(Qn||(Qn=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 10px;\n  p {\n    margin: 20px auto;\n  }\n"]))),Kn=d.c.span(Rn||(Rn=Object(s.a)(["\n  border-radius: 5px;\n  width: 45%;\n  padding: 10px;\n  background-color: rgba(52, 73, 94, 0.5);\n"]))),Zn=d.c.div(Un||(Un=Object(s.a)(["\n  display: flex;\n  width: 100%;\n  height: 60px;\n  background-color: rgba(186, 235, 198, 0.4);\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid ",";\n  padding: 10px;\n"])),(function(n){return n.theme.textColor})),$n=d.c.div(Wn||(Wn=Object(s.a)(["\n  color: ",";\n  text-align: center;\n  border-radius: 5px;\n  width: 45%;\n  background-color: rgba(52, 73, 94, 0.5);\n  padding: 10px;\n  a {\n    display: block;\n  }\n"])),(function(n){return n.theme.textColor}));var nt,tt,et,it,ct,rt=function(){var n=Object(x.g)().coinId,t=Object(i.useState)(),e=Object(O.a)(t,2),c=e[0],r=e[1],a=function(){var t=Object(wn.a)(mn.a.mark((function t(){var e;return mn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.coinpaprika.com/v1/tickers/".concat(n));case 3:return t.next=5,t.sent.json();case 5:e=t.sent,r(e),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){a()})),Object(M.jsxs)(Yn,{children:[Object(M.jsxs)(Gn,{children:[Object(M.jsxs)(Kn,{children:["ID: ",null===c||void 0===c?void 0:c.id]}),Object(M.jsxs)(Kn,{children:["Name: ",null===c||void 0===c?void 0:c.name]})]}),Object(M.jsx)(Gn,{children:Object(M.jsxs)("p",{children:[null===c||void 0===c?void 0:c.name," :",null===c||void 0===c?void 0:c.symbol]})}),Object(M.jsxs)(Zn,{children:[Object(M.jsx)($n,{children:Object(M.jsx)(p.b,{to:{pathname:"/coin/".concat(n,"/chart"),state:{data:c}},children:"Chart"})}),Object(M.jsx)($n,{children:Object(M.jsx)(p.b,{to:"/coin/".concat(n,"/price"),children:"Price"})})]}),Object(M.jsxs)(x.c,{children:[Object(M.jsx)(x.a,{path:"/coin/:coinId/chart",children:Object(M.jsx)(Bn,{})}),Object(M.jsx)(x.a,{path:"/coin/:coinId/price",children:Object(M.jsx)(Xn,{})})]})]})},at=e(11),ot=e(18),lt=e(15),st=e(68),dt=d.c.div(nt||(nt=Object(s.a)(["\n  width: 100%;\n"]))),bt=d.c.div(tt||(tt=Object(s.a)([""]))),jt=d.c.input(et||(et=Object(s.a)([""]))),ht=d.c.button(it||(it=Object(s.a)([""]))),ut=d.c.form(ct||(ct=Object(s.a)(["\n  width: 100%;\n  input {\n    width: 100%;\n  }\n  p {\n    font-size: 12px;\n    color: red;\n  }\n"])));var pt,xt,Ot,gt=function(n){var t,e,i,c=n.cateName,r=Object(st.a)(),a=r.register,o=r.handleSubmit,s=r.setValue,d=r.formState,b=Object(l.c)(h),j=Object(O.a)(b,2),u=j[0],p=j[1];return v(u),Object(M.jsx)(dt,{children:Object(M.jsx)(bt,{children:Object(M.jsxs)(ut,{onSubmit:o((function(n){var t=n.toDoCnts,e=n.startDt,i=n.endDt,r={id:Date.now(),toDoCnts:t,startDt:e,endDt:i};p((function(n){return Object(at.a)(Object(at.a)({},n),{},Object(ot.a)({},c,[].concat(Object(lt.a)(n[c]),[r])))})),s("toDoCnts",""),s("startDt",""),s("endDt","")})),children:[Object(M.jsx)(jt,Object(at.a)(Object(at.a)({},a("toDoCnts",{required:"\ud560\uc77c\uc740 \ud544\uc218 \uc785\ub825\uac12\uc785\ub2c8\ub2e4. ",minLength:{value:2,message:"2\uc790\uc774\uc0c1 \uc785\ub825\ud558\uc138\uc694."}})),{},{placeholder:"Regist your Todo..."})),Object(M.jsx)("p",{children:null===(t=d.errors.toDoCnts)||void 0===t?void 0:t.message}),Object(M.jsx)(jt,Object(at.a)(Object(at.a)({},a("startDt",{required:"\uc2dc\uc791\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694."})),{},{placeholder:"Write start date..."})),Object(M.jsx)("p",{children:null===(e=d.errors.startDt)||void 0===e?void 0:e.message}),Object(M.jsx)(jt,Object(at.a)(Object(at.a)({},a("endDt",{required:"\ubaa9\ud45c\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694."})),{},{placeholder:"Write end date..."})),Object(M.jsx)("p",{children:null===(i=d.errors.endDt)||void 0===i?void 0:i.message}),Object(M.jsx)(ht,{children:"Add"})]})})})},ft=d.c.div(pt||(pt=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  background-color: rgba(255, 255, 255, 0.9);\n  padding: 10px;\n  margin-bottom: 5px;\n"]))),vt=d.c.div(xt||(xt=Object(s.a)(["\n  display: flex;\n  width: 100%;\n\n  span {\n    flex: 1;\n    min-width: 50px;\n  }\n  p {\n    flex: 3;\n    font-weight: bold;\n    min-width: 100px;\n  }\n"]))),mt=d.c.svg(Ot||(Ot=Object(s.a)(["\n  align-self: end;\n  width: 15px;\n  cursor: pointer;\n"])));var wt,yt,kt,Ct,zt=function(n){var t=n.id,e=n.startDt,i=n.endDt,c=n.cnts,r=n.cateName,a=Object(l.e)(h);return Object(M.jsxs)(ft,{children:[Object(M.jsx)(mt,{onClick:function(){return function(n,t){a((function(e){var i=e[n].findIndex((function(n){return n.id===t}));return Object(at.a)(Object(at.a)({},e),{},Object(ot.a)({},n,[].concat(Object(lt.a)(e[n].slice(0,i)),Object(lt.a)(e[n].slice(i+1)))))}))}(r,t)},focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(M.jsx)("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"})}),Object(M.jsxs)(vt,{children:[Object(M.jsx)("span",{children:"\ud560\uc77c:"}),Object(M.jsx)("p",{children:c})]}),Object(M.jsxs)(vt,{children:[Object(M.jsx)("span",{children:"\uae30\uac04:"}),Object(M.jsxs)("p",{children:[e," ~ ",i]})]})]})},St=d.c.li(wt||(wt=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5px;\n  background-color: rgba(200, 214, 229, 0.5);\n  margin: 0 5px;\n"]))),Ht=d.c.h1(yt||(yt=Object(s.a)(["\n  width: 100%;\n  padding: 10px;\n  text-align: center;\n  font-weight: bold;\n  text-decoration: underline;\n"]))),Lt=d.c.ul(kt||(kt=Object(s.a)(["\n  width: 100%;\n  min-height: 300px;\n  padding: 10px;\n\n  background-color: rgba(0, 0, 0, 0.5);\n  text-align: center;\n"]))),Dt=d.c.svg(Ct||(Ct=Object(s.a)(["\n  align-self: end;\n  width: 15px;\n  cursor: pointer;\n"])));var It,Mt,Pt,qt,Et=function(n){var t=n.dataObj,e=n.cateName,i=Object(l.c)(h),c=Object(O.a)(i,2),r=c[0],a=c[1],o=Object(l.d)(u),s=function(n){var t=Object(at.a)({},r);delete t[n],a(t),function(n,t){t&&window.localStorage.setItem("todo",JSON.stringify(n))}(t,o)};return Object(M.jsxs)(St,{children:[Object(M.jsx)(Dt,{onClick:function(){return s(e)},focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(M.jsx)("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"})}),Object(M.jsx)(Ht,{children:e.toUpperCase()}),Object(M.jsx)(gt,{cateName:e}),Object(M.jsx)(Lt,{children:t.map((function(n,t){return Object(M.jsx)(zt,{id:n.id,startDt:n.startDt,endDt:n.endDt,cnts:n.toDoCnts,cateName:e},t)}))})]})},At=d.c.div(It||(It=Object(s.a)(["\n  width: 100%;\n  padding: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n"]))),Nt=d.c.form(Mt||(Mt=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex: 8 2 auto;\n  flex-wrap: wrap;\n\n  input {\n    flex: 1 1 80%;\n  }\n  button {\n    flex: 1 1 15%;\n  }\n\n  p {\n    flex: 1 1 80%;\n    color: red;\n    font-size: 12px;\n  }\n"]))),Vt=d.c.input(Pt||(Pt=Object(s.a)(["\n  width: 70%;\n"]))),Tt=d.c.button(qt||(qt=Object(s.a)(["\n  margin: 0 10px;\n"])));var _t,Bt,Ft,Jt=function(){var n,t=Object(st.a)(),e=t.register,i=t.handleSubmit,c=t.formState,r=t.setValue,a=Object(l.c)(h),o=Object(O.a)(a,2),s=o[0],d=o[1];return v(s),Object(M.jsx)(At,{children:Object(M.jsxs)(Nt,{onSubmit:i((function(n){var t=n.cate;d((function(n){var e=Object(ot.a)({},t,[]);return Object(at.a)(Object(at.a)({},n),e)})),r("cate","")})),children:[Object(M.jsx)(Vt,Object(at.a)(Object(at.a)({},e("cate",{required:"\uac12\uc744 \uc785\ub825\ud558\uc138\uc694."})),{},{placeholder:"Regist your Todo categories ..."})),Object(M.jsx)(Tt,{children:"Add"}),Object(M.jsx)("p",{children:null===(n=c.errors.cate)||void 0===n?void 0:n.message})]})})},Qt=d.c.div(_t||(_t=Object(s.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 20px;\n  padding-top: 90px;\n  color: ",";\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 0.5),\n    rgba(0, 255, 255, 0.5)\n  );\n"])),(function(n){return n.theme.textColor})),Rt=d.c.h1(Bt||(Bt=Object(s.a)(["\n  color: white;\n  font-weight: 400;\n  font-size: 3rem;\n  margin-bottom: 20px;\n"]))),Ut=d.c.ul(Ft||(Ft=Object(s.a)(["\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n"])));var Wt,Xt,Yt,Gt,Kt,Zt,$t,ne=function(){var n=Object(l.c)(h),t=Object(O.a)(n,2),e=t[0],c=t[1],r=Object(l.e)(u);return v(e),Object(i.useEffect)((function(){var n=window.localStorage.getItem("todo");n&&(c(JSON.parse(n)),r(!0))})),Object(M.jsxs)(Qt,{children:[Object(M.jsx)(Rt,{children:"To Do List"}),Object(M.jsx)(Jt,{}),Object(M.jsx)(Ut,{children:Object.keys(e).map((function(n,t){return Object(M.jsx)(Et,{cateName:n,dataObj:e[n]},t)}))})]})},te=d.c.div(Wt||(Wt=Object(s.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  padding-top: 80px;\n  justify-content: center;\n  align-items: center;\n  background: cover;\n  flex-direction: column;\n  background: linear-gradient(\n    -45deg,\n    rgba(255, 0, 0, 0.5),\n    rgba(0, 255, 255, 0.5)\n  );\n"]))),ee=d.c.div(Xt||(Xt=Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  width: 50vw;\n  gap: 10px;\n  div:first-child,\n  div:last-child {\n    grid-column: span 2;\n  }\n"]))),ie=Object(d.c)(g.a.div)(Yt||(Yt=Object(s.a)(["\n  width: 200px;\n  height: 100px;\n  background-color: white;\n  border-radius: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ce=Object(d.c)(g.a.div)(Gt||(Gt=Object(s.a)(["\n  background-color: #5f27cd;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n"]))),re=Object(d.c)(g.a.div)(Kt||(Kt=Object(s.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ae=Object(d.c)(g.a.div)(Zt||(Zt=Object(s.a)(["\n  width: 600px;\n  height: 300px;\n  background-color: rgb(0, 0, 0, 0.7);\n  border-radius: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 999;\n"]))),oe={hover:{scale:1.2,y:-20,border:"0.5px solid rgba(127,127,127,0.5)"},active:{},exit:{}},le=d.c.button($t||($t=Object(s.a)(["\n  margin: 5px 5px;\n  padding: 5px;\n  align-self: center;\n"])));var se,de,be,je,he=function(){var n=Object(i.useState)(""),t=Object(O.a)(n,2),e=t[0],c=t[1],r=Object(i.useState)(""),a=Object(O.a)(r,2),o=a[0],l=a[1],s=Object(i.useState)(""),d=Object(O.a)(s,2),b=d[0],j=d[1],h=Object(i.useState)(!1),u=Object(O.a)(h,2),p=u[0],x=u[1];return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)(te,{children:[Object(M.jsx)(ee,{children:[1,2,3,4].map((function(n,t){return Object(M.jsx)(ie,{variants:oe,whileHover:"hover",animate:"active",layoutId:n+"",onClick:function(){return function(n){console.log(n),l(e),c(n),x(!0)}(n+"")},children:e===n+""?Object(M.jsx)(ce,{layoutId:"circle"}):null},t+"")}))}),Object(M.jsx)(le,{onClick:function(){j(e),c(o===e?b:o)},children:"switch"}),Object(M.jsx)(f.a,{children:p?Object(M.jsx)(re,{onClick:function(){x(!1)},children:Object(M.jsx)(ae,{layoutId:e,children:Object(M.jsx)(ce,{layoutId:"circle",style:{scale:2,backgroundColor:"yellow"}})})}):null})]})})},ue=d.c.div(se||(se=Object(s.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: #151515;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),pe=d.c.div(de||(de=Object(s.a)(["\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  top: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),xe=Object(d.c)(g.a.img)(be||(be=Object(s.a)(["\n  position: absolute;\n  max-width: 100vw;\n"]))),Oe=d.c.button(je||(je=Object(s.a)(["\n  position: absolute;\n  top: 100px;\n  background: rgb(255, 255, 255, 0.9);\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 12px;\n  z-index: 2;\n  border-radius: 50%;\n"]))),ge=["https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png","https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png","https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"],fe={enter:function(n){return{x:n>0?1e3:-1e3,opacity:0}},center:{zIndex:1,x:0,opacity:1},exit:function(n){return{zIndex:0,x:n>0?-1e3:1e3,opacity:0}}};var ve,me,we,ye,ke,Ce,ze,Se=function(){var n=Object(i.useState)([0,0]),t=Object(O.a)(n,2),e=Object(O.a)(t[0],2),c=e[0],r=e[1],a=t[1],o=function(n){a((function(t){var e=Object(O.a)(t,2),i=e[0];e[1];return[function(n,t,e){var i=e<n?t-1:e>t-1?0:e;return console.log("newIdx",i),i}(0,ge.length,i+n),n]}))};return Object(M.jsx)(ue,{children:Object(M.jsxs)(pe,{children:[Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(f.a,{initial:!1,custom:r,children:Object(M.jsx)(xe,{src:ge[c],custom:r,variants:fe,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}}},c)})}),Object(M.jsx)(Oe,{style:{left:100},onClick:function(){return o(-1)},children:"prev"}),Object(M.jsx)(Oe,{style:{right:100},onClick:function(){return o(1)},children:"next"})]})})},He=d.c.div(ve||(ve=Object(s.a)(["\n  padding: 20px;\n  padding-top: 100px;\n  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5));\n  width: 100vw;\n  height: 100vh;\n"]))),Le=d.c.h1(me||(me=Object(s.a)([""]))),De=d.c.div(we||(we=Object(s.a)(["\n  margin: 0px auto;\n  display: flex;\n  justify-content: flex-start;\n  width: ","px;\n  position: relative;\n  max-width: 95%;\n"])),(function(n){return n.xLength})),Ie=d.c.div(ye||(ye=Object(s.a)(["\n  margin: 0px auto;\n  display: flex;\n  justify-content: flex-start;\n\n  overflow: hidden;\n"]))),Me=Object(d.c)(g.a.div)(ke||(ke=Object(s.a)(["\n  display: float;\n  transition: transform ","s;\n  transform: translateX(","px);\n  div {\n    margin-right: ","px;\n  }\n  div:first-child {\n    margin-left: ","px;\n  }\n"])),(function(n){return n.isInitial?0:1}),(function(n){return-n.xLength}),(function(n){return n.margin}),(function(n){return n.margin})),Pe=d.c.div(Ce||(Ce=Object(s.a)(["\n  width: ","px;\n  height: 300px;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n"])),(function(n){return n.width}),(function(n){return n.bgPhoto})),qe=d.c.button(ze||(ze=Object(s.a)(["\n  position: absolute;\n  top: 100px;\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n"])));var Ee,Ae=function(){var n=200,t=203,e=Object(i.useState)(0),c=Object(O.a)(e,2),r=(c[0],c[1]),a=Object(i.useState)(20),l=Object(O.a)(a,2),s=l[0],d=(l[1],Object(i.useState)(s*t)),b=Object(O.a)(d,2),j=b[0],h=b[1],u=Object(i.useState)(!0),p=Object(O.a)(u,2),x=p[0],g=p[1],f=Object(o.useQuery)(["movies","slide"],m),v=(f.isLoading,f.data);console.log(null===v||void 0===v?void 0:v.results);var y=function(n,e){g(!1);var i=n*t;h((function(n){return n+i>s*t*2||n+i<0?n:n+i})),r((function(e){return console.log("abs",Math.abs(e)),Math.abs(e)>=s-1&&setTimeout((function(){g(!0),r(0),h(s*t)}),1e3),e+n}))};return Object(M.jsxs)(He,{children:[Object(M.jsx)(Le,{children:"Slider"}),Object(M.jsxs)(De,{xLength:1624,children:[Object(M.jsx)(Ie,{children:Object(M.jsxs)(Me,{isInitial:x,xLength:j,margin:3,children:[null===v||void 0===v?void 0:v.results.slice(0,20).map((function(t,e){return Object(M.jsxs)(Pe,{width:n,bgPhoto:w("w500",t.poster_path),children:[t.title,t.backdrop_path]},e)})),null===v||void 0===v?void 0:v.results.slice(0,20).map((function(t,e){return Object(M.jsxs)(Pe,{width:n,bgPhoto:w("w500",t.poster_path),children:[t.title,t.backdrop_path]},e)})),null===v||void 0===v?void 0:v.results.slice(0,20).map((function(t,e){return Object(M.jsxs)(Pe,{width:n,bgPhoto:w("w500",t.poster_path),children:[t.title,t.backdrop_path]},e)}))]})}),Object(M.jsx)(qe,{onClick:function(n){return y(-1)},style:{left:"-20px"},children:"Prev"}),Object(M.jsx)(qe,{onClick:function(n){return y(1)},style:{right:"-20px"},children:"Next"})]})]})},Ne=Object(d.b)(Ee||(Ee=Object(s.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:",";\n  line-height: 1.2;\n  background-color: ","\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.bgColor}));var Ve=function(){var n=Object(l.d)(b);return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)(d.a,{theme:n?nn:tn,children:[Object(M.jsx)(Ne,{}),Object(M.jsxs)(p.a,{basename:"/react-personal-pjt",children:[Object(M.jsx)(fn,{}),Object(M.jsxs)(x.c,{children:[Object(M.jsx)(x.a,{path:"/coinlist",children:Object(M.jsx)(En,{})}),Object(M.jsx)(x.a,{path:"/coin/:coinId",children:Object(M.jsx)(rt,{})}),Object(M.jsx)(x.a,{path:"/todolist",children:Object(M.jsx)(ne,{})}),Object(M.jsx)(x.a,{path:"/motion",children:Object(M.jsx)(he,{})}),Object(M.jsx)(x.a,{path:"/animate",children:Object(M.jsx)(Se,{})}),Object(M.jsx)(x.a,{path:"/slider",children:Object(M.jsx)(Ae,{})}),Object(M.jsx)(x.a,{path:"/movies",children:Object(M.jsx)($,{})}),Object(M.jsx)(x.a,{path:"/tv",children:Object(M.jsx)(he,{})}),Object(M.jsx)(x.a,{path:"/",children:Object(M.jsx)($,{})})]})]})]})})},Te=new o.QueryClient;a.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(l.a,{children:Object(M.jsx)(o.QueryClientProvider,{client:Te,children:Object(M.jsx)(Ve,{})})})}),document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.01b060b7.chunk.js.map