(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,n){e.exports={Cell:"Cell_Cell__JGzUO",Right:"Cell_Right__1S8nq",Bottom:"Cell_Bottom__1TRkx",Input:"Cell_Input__1tQbS",example:"Cell_example__2fg_u",Error:"Cell_Error__25nXX"}},37:function(e,t,n){e.exports={Board:"Board_Board__2Vm6-"}},38:function(e,t,n){e.exports={Controls:"Controls_Controls__3E7kZ"}},49:function(e,t,n){e.exports=n(60)},54:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),o=(n(54),n(14)),u=n(7),i=n.n(u),s=n(24),m=n(15),f=n(34),p=n.n(f),h=[[7,0,9,0,0,2,6,8,0],[0,0,0,0,0,0,2,0,0],[0,0,2,0,5,0,7,0,4],[1,9,0,0,0,7,0,6,0],[8,6,7,1,9,5,0,4,0],[5,0,4,0,0,0,0,9,0],[4,3,5,7,8,0,0,2,0],[0,0,6,4,0,0,0,0,1],[9,8,0,5,0,6,0,0,3]],b=!1,d=function(e){for(var t=[],n=0;n<e.length;n++)t[n]=e[n].slice();return t},v=function(){var e=Object(m.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t.length)){e.next=23;break}a=0;case 3:if(!(a<t[n].length)){e.next=20;break}if(0!==t[n][a]){e.next=17;break}b=!1,r=1;case 7:if(!(r<10)){e.next=16;break}if(!E(t,n,a,r)){e.next=13;break}return t[n][a]=r,e.next=12,v(t);case 12:b||(t[n][a]=0);case 13:r++,e.next=7;break;case 16:return e.abrupt("return");case 17:a++,e.next=3;break;case 20:n++,e.next=1;break;case 23:return b=!0,e.abrupt("return");case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e,t,n,a){if(""===a)return!0;if(0===(a=parseInt(a)))return!0;if(isNaN(a)||a<0||a>9)return!1;for(var r=0;r<e[t].length;r++)if(e[t][r]===a&&n!==r)return!1;for(var c=0;c<e.length;c++)if(e[c][n]===a&&t!==c)return!1;for(var l=x(e,t),o=x(e,n),u=l[0];u<=l[1];u++)for(var i=o[0];i<=o[1];i++)if(e[u][i]===a&&(u!==t||i!==n))return!1;return!0},x=function(e,t){var n=[0,2],a=e.length;return t>=a/3&&t<=a/3*2&&(n[0]=a/3,n[1]=a/3*2-1),t>=a/3*2&&(n[0]=a/3*2,n[1]=a-1),n},k=function(){var e=Object(m.a)(i.a.mark((function e(t){var n,a,r,c,l,o,u,s,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g(),a=n.randRow,r=n.randCol,t[a][r]=Math.round(8*Math.random())+1,e.next=4,v(t);case 4:c=!0;case 5:if(!c){e.next=16;break}return l=g(),o=l.randRow,u=l.randCol,s=t[o][u],t[o][u]=0,m=[0],e.next=12,C(t,m);case 12:(c=1===m[0])||(t[o][u]=s),e.next=5;break;case 16:return e.abrupt("return",t);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){return{randRow:Math.round(8*Math.random()),randCol:Math.round(8*Math.random())}},C=function(){var e=Object(m.a)(i.a.mark((function e(t,n){var a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:if(!(a<t.length)){e.next=22;break}r=0;case 3:if(!(r<t[a].length)){e.next=19;break}if(0!==t[a][r]){e.next=16;break}c=1;case 6:if(!(c<10)){e.next=15;break}if(!E(t,a,r,c)){e.next=12;break}return t[a][r]=c,e.next=11,C(t,n);case 11:t[a][r]=0;case 12:c++,e.next=6;break;case 15:return e.abrupt("return");case 16:r++,e.next=3;break;case 19:a++,e.next=1;break;case 22:return n[0]+=1,e.abrupt("return");case 24:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=r.a.memo((function(e){var t=e.val,n=e.row,a=e.col,c=e.changeBoard,l=e.possible,u=function(e,t,n,a){var r=[a.Cell];return 2!==e&&5!==e||r.push(a.Bottom),2!==t&&5!==t||r.push(a.Right),n||r.push(a.Error),[r]}(n,a,l,p.a),i=Object(o.a)(u,1)[0];return r.a.createElement("div",{className:i.join(" ")},r.a.createElement("input",{value:0===t?"":t,onChange:function(e){return function(e){var t=parseInt(e.target.value),r=isNaN(t);c(n,a,r?0:t)}(e)},className:p.a.Input,maxLength:1}))}),(function(e,t){return e.val===t.val&&e.possible===t.possible})),O=n(37),_=n.n(O),y=n(87),j=n(5),S=n(38),N=n.n(S),B=Object(j.a)({root:{margin:"auto"}})(y.a),P=r.a.memo((function(e){var t=e.solver,n=e.reset,a=e.random,c=e.solveOne;return r.a.createElement("div",{className:N.a.Controls},r.a.createElement(B,{variant:"contained",color:"primary",onClick:t},"Solve"),r.a.createElement(B,{variant:"contained",color:"primary",onClick:c},"Solve One"),r.a.createElement(B,{variant:"contained",color:"secondary",onClick:n},"Clear"),r.a.createElement(B,{variant:"contained",onClick:a},"New Puzzle"))}),(function(){return!0})),T=function(){var e=function(){var e=Object(a.useState)((function(){return h})),t=Object(o.a)(e,2),n=t[0],r=t[1];return[n,r,function(e,t,a){var c=Object(s.a)(n);c[e][t]=a,r(c)},function(){for(var e=Object(s.a)(n),t=0;t<n.length;t++)for(var a=0;a<n[t].length;a++)e[t][a]=0;r(e)}]}(),t=Object(o.a)(e,4),n=t[0],c=t[1],l=t[2],u=t[3],f=function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(s.a)(n),e.next=3,v(t);case 3:c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(m.a)(i.a.mark((function e(){var t,a,r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0,a=0,r=0;case 3:if(!(r<n.length)){e.next=16;break}c=0;case 5:if(!(c<n[r].length)){e.next=13;break}if(0!==n[r][c]){e.next=10;break}return t=r,a=c,e.abrupt("break",13);case 10:c++,e.next=5;break;case 13:r++,e.next=3;break;case 16:return o=d(n),e.next=19,v(o);case 19:l(t,a,o[t][a]);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(),e.next=3,k(Object(s.a)(n));case 3:t=e.sent,c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=null;return n&&(x=n.map((function(e,t){return e.map((function(e,a){return r.a.createElement(w,{val:e,key:[t,a],col:a,row:t,board:n,changeBoard:l,possible:E(n,t,a,e)})}))}))),r.a.createElement(a.Fragment,null,r.a.createElement(P,{random:b,reset:u,solver:f,solveOne:p}),r.a.createElement("div",{className:_.a.Board},x))},z=n(85),M=n(80),R=n(86),I=n(81),q=n(82),D=n(83),G=n(84),A=function(e){var t=e.isOpen,n=e.handleClose,a=e.title,c=e.subtitle,l=e.children,o=e.howToPlay;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{fullWidth:!0,maxWidth:"md",open:t,onclose:n,"aria-labelledby":"max-width-dialog-title"},r.a.createElement(I.a,{id:"max-width-dialog-title"},a),r.a.createElement(q.a,null,r.a.createElement(D.a,null,c),l),r.a.createElement(G.a,null,o&&r.a.createElement(y.a,{color:"primary",onClick:function(){n(),o()}},"How to Play"),r.a.createElement(y.a,{onClick:n,color:"secondary"},"Close"))))},H=Object(j.a)({root:{margin:"auto"}})(y.a),J=Object(z.a)({paper:{padding:"10px"},customDialog:{display:"flex",flexDirection:"Column"}}),W=function(){var e=J(),t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],l=n[1],u=Object(a.useState)(""),i=Object(o.a)(u,2),s=i[0],m=i[1];Object(a.useEffect)((function(){f()}),[]);var f=function(){l(!0)};return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"Title"},"Sudoku Solver"),r.a.createElement("br",null),r.a.createElement(T,null),r.a.createElement("div",{className:"BottomControls"},r.a.createElement(H,{variant:"contained",color:"primary",onClick:f},"Help")),r.a.createElement(A,{isOpen:c,handleClose:function(){l(!1)},className:e.customDialog,howToPlay:function(){m(!0)}},r.a.createElement("h2",{style:{textAlign:"center"}},"Welcome to the Sudoku Solver!"),r.a.createElement(M.a,{className:e.paper},r.a.createElement("p",null,r.a.createElement("strong",null,"To get Started, click on New Puzzle")),r.a.createElement("strong",null,"Get Stuck?"),r.a.createElement("p",null,"Get a hint by pressing Solve One"),r.a.createElement("strong",null,"Give Up?"),r.a.createElement("p",null,"Press Solve to view the puzzle solution"),r.a.createElement("p",null,"Press Clear to start from scratch"))),r.a.createElement(A,{isOpen:s,handleClose:function(){m(!1)},className:e.customDialog},r.a.createElement("h2",{style:{textAlign:"center"}},"How to Play Sudoku"),r.a.createElement(M.a,{className:e.paper},r.a.createElement("p",null,r.a.createElement("strong",null,"Board Setup:")),r.a.createElement("p",null,"The classic Sudoku game involves a grid of 81 squares. The grid is divided into nine blocks, each containing nine squares."),r.a.createElement("p",null,r.a.createElement("strong",null,"The rules of the game are simple:")),r.a.createElement("p",null,"Each of the nine blocks has to contain all the numbers 1-9 within its squares. Each number can only appear once in a row, column or box."))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.8e32133b.chunk.js.map