(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,n,r){e.exports={Cell:"Cell_Cell__JGzUO",Right:"Cell_Right__1S8nq",Bottom:"Cell_Bottom__1TRkx",Input:"Cell_Input__1tQbS",example:"Cell_example__2fg_u",Error:"Cell_Error__25nXX"}},23:function(e,n,r){e.exports={Board:"Board_Board__2Vm6-"}},24:function(e,n,r){e.exports={Controls:"Controls_Controls__3E7kZ"}},30:function(e,n,r){e.exports=r(41)},35:function(e,n,r){},41:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(8),c=r.n(o),u=(r(35),r(3)),l=r.n(u),s=r(18),i=r(5),f=r(11),p=r(21),v=r.n(p),m=function(){for(var e=[],n=0;n<9;n++){e[n]=[];for(var r=0;r<9;r++)e[n][r]=0}return e},b=[[7,0,9,0,0,2,6,8,0],[0,0,0,0,0,0,2,0,0],[0,0,2,0,5,0,7,0,4],[1,9,0,0,0,7,0,6,0],[8,6,7,1,9,5,0,4,0],[5,0,4,0,0,0,0,9,0],[4,3,5,7,8,0,0,2,0],[0,0,6,4,0,0,0,0,1],[9,8,0,5,0,6,0,0,3]],d=!1,h=function(e){for(var n=[],r=0;r<e.length;r++)n[r]=e[r].slice();return n},x=function(){var e=Object(i.a)(l.a.mark((function e(n){var r,t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=0;case 1:if(!(r<n.length)){e.next=23;break}t=0;case 3:if(!(t<n[r].length)){e.next=20;break}if(0!==n[r][t]){e.next=17;break}d=!1,a=1;case 7:if(!(a<10)){e.next=16;break}if(!k(n,r,t,a)){e.next=13;break}return n[r][t]=a,e.next=12,x(n);case 12:d||(n[r][t]=0);case 13:a++,e.next=7;break;case 16:return e.abrupt("return");case 17:t++,e.next=3;break;case 20:r++,e.next=1;break;case 23:return d=!0,e.abrupt("return");case 25:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),k=function(e,n,r,t){if(""===t)return!0;if(0===(t=parseInt(t)))return!0;if(isNaN(t)||t<0||t>9)return!1;for(var a=0;a<e[n].length;a++)if(e[n][a]===t&&r!==a)return!1;for(var o=0;o<e.length;o++)if(e[o][r]===t&&n!==o)return!1;for(var c=g(e,n),u=g(e,r),l=c[0];l<=c[1];l++)for(var s=u[0];s<=u[1];s++)if(e[l][s]===t&&(l!==n||s!==r))return!1;return!0},g=function(e,n){var r=[0,2],t=e.length;return n>=t/3&&n<=t/3*2&&(r[0]=t/3,r[1]=t/3*2-1),n>=t/3*2&&(r[0]=t/3*2,r[1]=t-1),r},_=function(){var e=Object(i.a)(l.a.mark((function e(){var n,r,t,a,o,c,u,s,i,f;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=E(),r=n.randRow,t=n.randCol,(a=m())[r][t]=Math.round(8*Math.random())+1,e.next=5,x(a);case 5:o=!0;case 6:if(!o){e.next=18;break}return c=E(),u=c.randRow,s=c.randCol,i=a[u][s],a[u][s]=0,f=[0],e.next=13,C(a,f);case 13:console.log(f[0]),(o=1===f[0])||(a[u][s]=i),e.next=6;break;case 18:return e.abrupt("return",a);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){return{randRow:Math.round(8*Math.random()),randCol:Math.round(8*Math.random())}},C=function(){var e=Object(i.a)(l.a.mark((function e(n,r){var t,a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<n.length)){e.next=22;break}a=0;case 3:if(!(a<n[t].length)){e.next=19;break}if(0!==n[t][a]){e.next=16;break}o=1;case 6:if(!(o<10)){e.next=15;break}if(!k(n,t,a,o)){e.next=12;break}return n[t][a]=o,e.next=11,C(n,r);case 11:n[t][a]=0;case 12:o++,e.next=6;break;case 15:return e.abrupt("return");case 16:a++,e.next=3;break;case 19:t++,e.next=1;break;case 22:return r[0]+=1,e.abrupt("return");case 24:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),w=a.a.memo((function(e){var n=e.val,r=e.row,t=e.col,o=e.changeBoard,c=e.possible,u=function(e,n,r,t){var a=[t.Cell];return 2!==e&&5!==e||a.push(t.Bottom),2!==n&&5!==n||a.push(t.Right),r||a.push(t.Error),[a]}(r,t,c,v.a),l=Object(f.a)(u,1)[0];return console.log("Cell Rendered"),a.a.createElement("div",{className:l.join(" ")},a.a.createElement("input",{value:0===n?"":n,onChange:function(e){return function(e){var n=parseInt(e.target.value),a=isNaN(n);o(r,t,a?0:n)}(e)},className:v.a.Input,maxLength:1}))}),(function(e,n){return e.val===n.val&&e.possible===n.possible})),O=r(23),j=r.n(O),B=r(56),y=r(10),N=r(24),R=r.n(N),S=Object(y.a)({root:{margin:"auto"}})(B.a),M=a.a.memo((function(e){var n=e.solver,r=e.reset,t=e.random,o=e.solveOne;return a.a.createElement("div",{className:R.a.Controls},a.a.createElement(S,{variant:"contained",color:"primary",onClick:n},"Solve"),a.a.createElement(S,{variant:"contained",color:"primary",onClick:o},"SolveNext"),a.a.createElement(S,{variant:"contained",color:"secondary",onClick:r},"Reset"),a.a.createElement(S,{variant:"contained",onClick:t},"Random"))}),(function(){return!0})),I=function(){var e=function(){var e=Object(t.useState)((function(){return b})),n=Object(f.a)(e,2),r=n[0],a=n[1];return[r,a,function(e,n,t){var o=Object(s.a)(r);o[e][n]=t,a(o)},function(){for(var e=Object(s.a)(r),n=0;n<r.length;n++)for(var t=0;t<r[n].length;t++)e[n][t]=0;a(e)}]}(),n=Object(f.a)(e,4),r=n[0],o=n[1],c=n[2],u=n[3];Object(t.useEffect)((function(){console.log("[Board] useEffect")}),[r]);var p=function(){var e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(s.a)(r),e.next=3,x(n);case 3:o(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(l.a.mark((function e(){var n,t,a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Board:",r),n=h(r),t=r,e.next=5,x(t);case 5:console.log("newBoard:",t),console.log("anotherBoard:",n),a=0;case 8:if(!(a<n.length)){e.next=19;break}o=0;case 10:if(!(o<n[a].length)){e.next=16;break}if(0!==n[a][o]){e.next=13;break}return e.abrupt("return",c(a,o,t[a][o]));case 13:o++,e.next=10;break;case 16:a++,e.next=8;break;case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:n=e.sent,o(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=null;return r&&(d=r.map((function(e,n){return e.map((function(e,t){return a.a.createElement(w,{val:e,key:[n,t],col:t,row:n,board:r,changeBoard:c,possible:k(r,n,t,e)})}))}))),a.a.createElement(t.Fragment,null,a.a.createElement(M,{random:m,reset:u,solver:p,solveOne:v}),a.a.createElement("div",{className:j.a.Board},d))};var J=function(){return console.log("App Rendered"),a.a.createElement("div",{className:"App"},a.a.createElement("h1",{className:"Title"},"Sudoku Solver"),a.a.createElement("br",null),a.a.createElement(I,null))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(J,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.5b8af467.chunk.js.map