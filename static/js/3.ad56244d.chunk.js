/*! For license information please see 3.ad56244d.chunk.js.LICENSE.txt */
(this.webpackJsonpdebugged_frontend=this.webpackJsonpdebugged_frontend||[]).push([[3],{101:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var a=t(1);function r(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var i=r(a),o=function(){return(o=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)};!function(e){if(e&&"undefined"!==typeof window){var n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n)}}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  display: flex;\n  flex-direction: row;\n  margin-right: var(--margin-right);\n  animation: scroll var(--duration) linear var(--delay) infinite;\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(calc(-100% - var(--margin-right)));\n  }\n}');n.default=function(e){var n,t,r,l,d=e.style,s=void 0===d?{}:d,c=e.className,u=void 0===c?"":c,f=e.play,h=void 0===f||f,p=e.pauseOnHover,v=void 0!==p&&p,m=e.pauseOnClick,g=void 0!==m&&m,y=e.direction,b=void 0===y?"left":y,x=e.speed,j=void 0===x?20:x,w=e.delay,O=void 0===w?0:w,k=e.gradient,E=void 0===k||k,N=e.gradientColor,q=void 0===N?[255,255,255]:N,C=e.gradientWidth,R=void 0===C?200:C,S=e.children,_=a.useState(0),F=_[0],H=_[1],M=a.useState(0),B=M[0],J=M[1],P=a.useState(0),X=P[0],z=P[1],A=a.useState(!1),L=A[0],T=A[1],W=a.useRef(null),Y=a.useRef(null);a.useEffect((function(){T(!0)}),[]),a.useEffect((function(){Y.current&&W.current&&(H(W.current.getBoundingClientRect().width),J(Y.current.getBoundingClientRect().width)),z(B<F?F/j:B/j)}));var Z="rgba("+q[0]+", "+q[1]+", "+q[2];return i.default.createElement(a.Fragment,null,L?i.default.createElement("div",{ref:W,style:o(o({},s),(n={},n["--pause-on-hover"]=v?"paused":"running",n["--pause-on-click"]=g?"paused":"running",n)),className:u+" marquee-container"},E&&i.default.createElement("div",{style:(t={},t["--gradient-color"]=Z+", 1), "+Z+", 0)",t["--gradient-width"]="number"===typeof R?R+"px":R,t),className:"overlay"}),i.default.createElement("div",{ref:Y,style:(r={},r["--play"]=h?"running":"paused",r["--direction"]="left"===b?"normal":"reverse",r["--duration"]=X+"s",r["--delay"]=O+"s",r["--margin-right"]=(B<F?F-B:0)+"px",r),className:"marquee"},S),i.default.createElement("div",{style:(l={},l["--play"]=h?"running":"paused",l["--direction"]="left"===b?"normal":"reverse",l["--duration"]=X+"s",l["--delay"]=O+"s",l["--margin-right"]=(B<F?F-B:0)+"px",l),className:"marquee"},S)):null)}},103:function(e,n,t){"use strict";t.r(n);var a=t(20),r=t(1),i=(t(65),t(12),t(13),t(51),t(101)),o=t.n(i),l=t(2);n.default=function(){var e=Object(r.useState)([]),n=Object(a.a)(e,2),t=n[0],i=n[1];return Object(r.useEffect)((function(){fetch("https://fierce-wave-93667.herokuapp.com/digital").then((function(e){return e.json()})).then((function(e){e[0]._id&&(i(e),console.log(e.length,"gal"))})).catch((function(e){console.log(e)}))}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"flex flex-wrap",children:Object(l.jsx)(o.a,{pauseOnHover:!0,gradient:!1,speed:40,children:t.map((function(e){return Object(l.jsx)("div",{className:"mh5 mv2",style:{height:"300px",width:"300px"},children:Object(l.jsxs)("a",{className:"dim flex flex-column items-center justify-center",href:e.link,children:[Object(l.jsx)("img",{src:e.image,style:{borderRadius:"30px"},height:e.height,width:e.width}),Object(l.jsx)("h3",{className:"white",style:{fontFamily:"Yusei Magic"}})]})})}))})})})}}}]);
//# sourceMappingURL=3.ad56244d.chunk.js.map