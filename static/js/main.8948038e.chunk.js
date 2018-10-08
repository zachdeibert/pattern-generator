(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),i=a(2),l=a(3),h=a(5),s=a(4),u=a(6),p=a(1),f=(a(14),function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pattern-view"},this.props.pattern)}}]),t}(r.a.Component)),d=[],v={},g=function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,null,[{key:"register",value:function(e,t,a){d.push(e),v[e]={parameters:t,pattern:a}}},{key:"getPatternNames",value:function(){return d}},{key:"getPattern",value:function(e){return v[e]}}]),e}(),b=(a(16),function(e){function t(e){var a;Object(i.a)(this,t),a=Object(h.a)(this,Object(s.a)(t).call(this,e));var n=g.getPatternNames()[0],r=g.getPattern(n);return a.state={patternName:n,parameters:r.parameters},a.props.handlePatternChange(r.pattern),a.handleChange=a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=g.getPattern(e.target.value);this.setState({patternName:e.target.value,parameters:t.parameters}),this.props.handlePatternChange(t.pattern)}},{key:"render",value:function(){return r.a.createElement("div",{className:"control-view"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Pattern Type"),r.a.createElement("select",{value:this.state.patternName,onChange:this.handleChange},g.getPatternNames().map(function(e,t){return r.a.createElement("option",{key:"pattern-".concat(t),value:e},e)}))),this.state.parameters)}}]),t}(r.a.Component)),m=(a(18),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(s.a)(t).call(this,e))).state={dataURI:null},a.handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){this.state.dataURI?this.setState({dataURI:null}):this.setState({dataURI:"data:application/octet-stream;base64,"+btoa(document.querySelector("svg").outerHTML)})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.dataURI&&r.a.createElement("div",{className:"download-dialog"},r.a.createElement("div",{className:"background",onClick:this.handleClick}),r.a.createElement("div",{className:"dialog"},r.a.createElement("h2",null,"Download Ready"),r.a.createElement("a",{download:"pattern.svg",href:this.state.dataURI},"Download pattern.svg"))),r.a.createElement("div",{className:"download-button material-icons",onClick:this.handleClick},"cloud_download"))}}]),t}(r.a.Component)),O=(a(20),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(s.a)(t).call(this,e))).state={pattern:null},a.handlePatternChange=a.handlePatternChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handlePatternChange",value:function(e){this.setState({pattern:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(b,{handlePatternChange:this.handlePatternChange}),r.a.createElement(f,{pattern:this.state.pattern}),r.a.createElement(m,null))}}]),t}(r.a.Component)),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var j,M,k,y,x,C,S,F,P,N,V,R,q,z,I,U,W,B,D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(s.a)(t).call(this,e))).state={value:localStorage["NumericParameter-".concat(a.props.label)]||a.props.defaultValue||0,textValue:localStorage["NumericParameter-".concat(a.props.label)]||a.props.defaultValue||""},a.handleChange=a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a.handleStateChanged=a.handleStateChanged.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleStateChanged",value:function(){this.pattern.forceUpdate(),localStorage["NumericParameter-".concat(this.props.label)]=this.state.value}},{key:"handleChange",value:function(e){if(""===e.target.value)this.setState({value:0,textValue:""},this.handleStateChanged);else{var t=parseFloat(e.target.value);isNaN(t)||(e.target.value.endsWith(".")?this.setState({value:t,textValue:"".concat(t,".")},this.handleStateChanged):this.setState({value:t,textValue:t},this.handleStateChanged))}}},{key:"render",value:function(){return r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,this.props.label),r.a.createElement("input",{type:"text",value:this.state.textValue,onChange:this.handleChange}))}}]),t}(r.a.Component),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(s.a)(t).call(this,e))).state={value:localStorage["ColorParameter-".concat(a.props.label)]||a.props.defaultValue||"#000000"},a.handleChange=a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=this;e.target.value.match(/^#[0-9a-fA-F]{6}$/)&&this.setState({value:e.target.value},function(){t.pattern.forceUpdate(),localStorage["ColorParameter-".concat(t.props.label)]=t.state.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,this.props.label),r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange}))}}]),t}(r.a.Component),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(s.a)(t).call(this,e))).props.width.current.pattern=Object(p.a)(Object(p.a)(a)),a.props.height.current.pattern=Object(p.a)(Object(p.a)(a)),a.props.spacing.current.pattern=Object(p.a)(Object(p.a)(a)),a.props.spacingDeviation.current.pattern=Object(p.a)(Object(p.a)(a)),a.props.vertexSize.current.pattern=Object(p.a)(Object(p.a)(a)),a.props.edgeSize.current.pattern=Object(p.a)(Object(p.a)(a)),a.props.steps.current.pattern=Object(p.a)(Object(p.a)(a)),a.props.background.current.pattern=Object(p.a)(Object(p.a)(a)),a.props.foreground.current.pattern=Object(p.a)(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=300*this.props.width.current.state.value,a=300*this.props.height.current.state.value,n=300*this.props.spacing.current.state.value,c=n*Math.sin(Math.PI/3),o=300*this.props.spacingDeviation.current.state.value,i=300*this.props.vertexSize.current.state.value,l=300*this.props.edgeSize.current.state.value,h=this.props.foreground.current.state.value,s=[];return 0===n&&0===o||o<0?s.push(r.a.createElement("rect",{x:"0",y:"0",width:t,height:a,fill:h,key:"box"})):function(){var u=[],p=[];try{!function(){for(var r=0,i=5*-c,l=0;i<a+5*c;i+=c){for(var h=0,s=5*-n+r,f=!0;s<t+5*n;s+=n){var d=[s,i,[]];u.push(d),f||(p.push([d,u[u.length-2]]),d[2].push(u[u.length-2]),u[u.length-2][2].push(d)),l>0&&h<l&&(p.push([d,u[u.length-l-1]]),d[2].push(u[u.length-l-1]),u[u.length-l-1][2].push(d),f&&0===r||(p.push([d,u[u.length-l-(0===r?2:0)]]),d[2].push(u[u.length-l-(0===r?2:0)]),u[u.length-l-(0===r?2:0)][2].push(d))),f=!1,++h}l=h,r=n/2-r}for(var v=0;v<e.props.steps.current.state.value;++v){u.forEach(function(e){var t=o*Math.random(),a=2*Math.PI*Math.random(),r=e[0]+t*Math.cos(a),c=e[1]+t*Math.sin(a),i=!0;e[2].forEach(function(e){Math.sqrt(Math.pow(r-e[0],2)+Math.pow(c-e[1],2))>n+o&&(i=!1)}),i&&(e[0]=r,e[1]=c)});var g=void 0;do{g=!1;for(var b=function(e){var t=u.filter(function(t){return Math.sqrt(Math.pow(t[0]-u[e][0],2)+Math.pow(t[1]-u[e][1],2))<n-o});if(t.length>1){var a=0,r=0;t.forEach(function(e){a+=e[0],r+=e[1]}),a/=t.length,r/=t.length;var c=t[0];t.splice(0,1),c[0]=a,c[1]=r,t.forEach(function(e){e[2].forEach(function(t){c[2].indexOf(t)<0&&(c[2].push(t),t[2][t[2].indexOf(e)]=c,p.push([c,t]))});var t=[];p.forEach(function(a){a[0]!==e&&a[1]!==e||t.push(a)}),t.forEach(function(e){p.splice(p.indexOf(e),1)}),u.splice(u.indexOf(e),1)})}},m=0;m<u.length;++m)b(m)}while(g)}var O=[];u.forEach(function(e){(e[0]<0||e[0]>t||e[1]<0&&e[1]>a)&&O.push(e)}),O.forEach(function(e){u.splice(u.indexOf(e),1)}),u.forEach(function(e){O=[],e[2].forEach(function(e){u.indexOf(e)<0&&O.push(e)}),O.forEach(function(t){e[2].splice(e[2].indexOf(t),1)})});var E=[];p.forEach(function(e){(u.indexOf(e[0])<0||u.indexOf(e[1])<0)&&E.push(e)}),E.forEach(function(e){p.splice(p.indexOf(e),1)}),r=t/2,u.forEach(function(e){e[0]>r?e[0]-=r:e[0]+=r});var w=u[0],j=u[0],M=u[0],k=u[0];u.forEach(function(e){Math.sqrt(Math.pow(w[0],2)+Math.pow(w[1],2))>Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2))&&(w=e),Math.sqrt(Math.pow(t-j[0],2)+Math.pow(j[1],2))>Math.sqrt(Math.pow(t-e[0],2)+Math.pow(e[1],2))&&(j=e),Math.sqrt(Math.pow(M[0],2)+Math.pow(a-M[1],2))>Math.sqrt(Math.pow(e[0],2)+Math.pow(a-e[1],2))&&(M=e),Math.sqrt(Math.pow(t-k[0],2)+Math.pow(a-k[1],2))>Math.sqrt(Math.pow(t-e[0],2)+Math.pow(a-e[1],2))&&(k=e)});var y,x={},C=function(e){var a=[t+e[0],e[1],[]];u.push(a),x[e.slice(0,2)]=a},S=function(){C(y);var e=y[2].filter(function(e){return e[1]>y[1]}),t=e[0];e.forEach(function(e){t[0]>e[0]&&(t=e)}),y=t};for(y=w;y!==M;)S();C(y),C=function(e){var a=[e[0]-t,e[1],[]];u.push(a),x[e.slice(0,2)]=a};var F=function(){C(y);var e=y[2].filter(function(e){return e[1]>y[1]}),t=e[0];e.forEach(function(e){t[0]<e[0]&&(t=e)}),y=t};for(y=j;y!==k;)F();C(y),E=[];var P=[];p.forEach(function(e){var a=e[0].slice(0,2),n=e[1].slice(0,2);x[a]&&x[n]&&Math.abs(e[0][0]-e[1][0])>t/2&&(e[0][2].splice(e[0][2].indexOf(e[1])),e[1][2].splice(e[1][2].indexOf(e[0])),E.push(e),P.push([e[0],x[n]]),e[0][2].push(x[n]),x[n][2].push(e[0]),P.push([e[1],x[a]]),e[1][2].push(x[a]),x[a][2].push(e[1]))}),E.forEach(function(e){p.splice(p.indexOf(e),1)}),P.forEach(function(e){p.push(e)}),w=[t,a],j=[0,a],k=[0,0],M=[t,0],u.forEach(function(e){e[0]<t/2?(Math.sqrt(Math.pow(t/2-w[0],2)+Math.pow(w[1],2))>Math.sqrt(Math.pow(t/2-e[0],2)+Math.pow(e[1],2))&&(w=e),Math.sqrt(Math.pow(t/2-M[0],2)+Math.pow(a-M[1],2))>Math.sqrt(Math.pow(t/2-e[0],2)+Math.pow(a-e[1],2))&&(M=e)):(Math.sqrt(Math.pow(j[0],2)+Math.pow(j[1],2))>Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2))&&(j=e),Math.sqrt(Math.pow(k[0],2)+Math.pow(a-k[1],2))>Math.sqrt(Math.pow(e[0],2)+Math.pow(a-e[1],2))&&(k=e))});var N=[];C=function(e){e&&N.push(e)};var V=function(){C(y);var e=y[2].filter(function(e){return e[1]>y[1]}),t=e[0];e.forEach(function(e){t[0]<e[0]&&(t=e)}),y=t};for(y=w;y!==M;)V();C(y),C=function(e){for(var t=N.sort(function(t,a){return Math.abs(e[1]-t[1])-Math.abs(e[1]-a[1])}),a=0;a<3;++a)e[2].push(t[a]),t[a][2].push(e),p.push([e,t[a]])};var R=function(){var e=y[2].filter(function(e){return e[1]>y[1]}),t=e[0];e.forEach(function(e){t[0]>e[0]&&(t=e)}),C(y),y=t};for(y=j;y!==k;)R();C(y),E=[],p.forEach(function(e){if(E.indexOf(e)<0){var t=(e[0][1]-e[1][1])/(e[0][0]-e[1][0]),a=t*e[0][0]-e[0][1],n=Math.min(e[0][0],e[1][0])+1e-4,r=Math.max(e[0][0],e[1][0])-1e-4;p.forEach(function(e){var c=(e[0][1]-e[1][1])/(e[0][0]-e[1][0]),o=c*e[0][0]-e[0][1],i=Math.min(e[0][0],e[1][0])+1e-4,l=Math.max(e[0][0],e[1][0])-1e-4,h=(a-o)/(t-c);h>n&&h>i&&h<r&&h<l&&(e[0][2].splice(e[0][2].indexOf(e[1]),1),e[1][2].splice(e[1][2].indexOf(e[0]),1),p.splice(p.indexOf(e),1),E.push(e))})}});for(var q=u.filter(function(e){return Math.abs(t/2-e[0])<t/4}),z=0;z<e.props.steps.current.state.value;++z){q.forEach(function(e){var t=o*Math.random(),a=2*Math.PI*Math.random(),r=e[0]+t*Math.cos(a),c=e[1]+t*Math.sin(a),i=!0;e[2].forEach(function(e){Math.sqrt(Math.pow(r-e[0],2)+Math.pow(c-e[1],2))>n+o&&(i=!1)}),i&&(e[0]=r,e[1]=c)});var I=void 0;do{I=!1;var U=function(e){var t=u.filter(function(t){return Math.sqrt(Math.pow(t[0]-u[e][0],2)+Math.pow(t[1]-u[e][1],2))<n-o});if(t.length>1){var a=0,r=0;t.forEach(function(e){a+=e[0],r+=e[1]}),a/=t.length,r/=t.length;var c=t[0];t.splice(0,1),c[0]=a,c[1]=r,t.forEach(function(e){e[2].forEach(function(t){c[2].indexOf(t)<0&&(c[2].push(t),t[2][t[2].indexOf(e)]=c,p.push([c,t]))});var t=[];p.forEach(function(a){a[0]!==e&&a[1]!==e||t.push(a)}),t.forEach(function(e){p.splice(p.indexOf(e),1)}),u.splice(u.indexOf(e),1),q.splice(q.indexOf(e),1)})}};for(m=0;m<u.length;++m)U(m)}while(I)}E=[],p.forEach(function(e){(u.indexOf(e[0])<0||u.indexOf(e[1])<0)&&E.push(e)}),E.forEach(function(e){p.splice(p.indexOf(e),1)})}()}catch(f){console.error(f)}p.forEach(function(e,t){s.push(r.a.createElement("line",{x1:e[0][0],y1:e[0][1],x2:e[1][0],y2:e[1][1],strokeWidth:l,stroke:h,key:"edge-".concat(t)}))}),u.forEach(function(e,t){s.push(r.a.createElement("circle",{cx:e[0],cy:e[1],r:i,fill:h,key:"vert-".concat(t)}))})}(),r.a.createElement("svg",{viewBox:"0 0 ".concat(t," ").concat(a)},r.a.createElement("rect",{x:"0",y:"0",width:t,height:a,fill:this.props.background.current.state.value}),s)}}]),t}(r.a.Component);j=r.a.createRef(),M=r.a.createRef(),k=r.a.createRef(),y=r.a.createRef(),x=r.a.createRef(),C=r.a.createRef(),S=r.a.createRef(),F=r.a.createRef(),P=r.a.createRef(),N=r.a.createElement(D,{label:"Width",defaultValue:8.5,key:"width",ref:j}),V=r.a.createElement(D,{label:"Height",defaultValue:11,key:"height",ref:M}),R=r.a.createElement(D,{label:"Average Spacing",defaultValue:1,key:"spacing",ref:k}),q=r.a.createElement(D,{label:"Spacing Deviation",defaultValue:.5,key:"spacing-dev",ref:y}),z=r.a.createElement(D,{label:"Vertex Size",defaultValue:.125,key:"vertex",ref:x}),I=r.a.createElement(D,{label:"Edge Size",defaultValue:.02,key:"edge",ref:C}),U=r.a.createElement(D,{label:"Steps",defaultValue:10,key:"steps",ref:S}),W=r.a.createElement(T,{label:"Background Color",defaultValue:"#FFFFFF",key:"background",ref:F}),B=r.a.createElement(T,{label:"Foreground Color",defaultValue:"#3F3FFF",key:"foreground",ref:P}),g.register("Triangle Mesh",[N,V,R,q,z,I,U,W,B],r.a.createElement(A,{width:j,height:M,spacing:k,spacingDeviation:y,vertexSize:x,edgeSize:C,steps:S,background:F,foreground:P}));var H=Math.tan(Math.PI/6),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(s.a)(t).call(this,e))).props.width.current.pattern=Object(p.a)(Object(p.a)(a)),a.props.height.current.pattern=Object(p.a)(Object(p.a)(a)),a.props.size.current.pattern=Object(p.a)(Object(p.a)(a)),a.props.foreground.current.pattern=Object(p.a)(Object(p.a)(a)),a.props.background.current.pattern=Object(p.a)(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=300*this.props.width.current.state.value,t=300*this.props.height.current.state.value,a=300*this.props.size.current.state.value,n=this.props.foreground.current.state.value,c=a/H/2,o=[],i=0;if(a>0){for(var l=c;l<t;l+=c)o.push(r.a.createElement("line",{x1:0,x2:e,y1:l,y2:l,stroke:n,key:"line-".concat(i++)}));for(var h=c,s=c;s<t+e/H;s+=2*c){var u=0,p=s;p>t?(u=(p-t)*H,p=t):h=p;var f=e,d=s-e/H;d<0&&(f-=-d*H,d=0),o.push(r.a.createElement("line",{x1:u,y1:p,x2:f,y2:d,stroke:n,key:"line-".concat(i++)}))}for(var v=h;v>-e/H;v-=2*c){var g=0,b=v;b<0&&(g+=-b*H,b=0);var m=e,O=v+e/H;O>t&&(m-=(O-t)*H,O=t),o.push(r.a.createElement("line",{x1:g,y1:b,x2:m,y2:O,stroke:n,key:"line-".concat(i++)}))}}else o.push(r.a.createElement("rect",{x:"0",y:"0",width:e,height:t,fill:n,key:"line-".concat(i++)}));return r.a.createElement("svg",{viewBox:"0 0 ".concat(e," ").concat(t)},r.a.createElement("rect",{x:"0",y:"0",width:e,height:t,fill:this.props.background.current.state.value}),o)}}]),t}(r.a.Component);!function(){var e=r.a.createRef(),t=r.a.createRef(),a=r.a.createRef(),n=r.a.createRef(),c=r.a.createRef(),o=r.a.createElement(D,{label:"Width",defaultValue:8.5,key:"width",ref:e}),i=r.a.createElement(D,{label:"Height",defaultValue:11,key:"height",ref:t}),l=r.a.createElement(D,{label:"Size",defaultValue:.25,key:"size",ref:a}),h=r.a.createElement(T,{label:"Background Color",defaultValue:"#FFFFFF",key:"background",ref:n}),s=r.a.createElement(T,{label:"Foreground Color",defaultValue:"#3F3FFF",key:"foreground",ref:c});g.register("Isometric Paper",[o,i,l,h,s],r.a.createElement(L,{width:e,height:t,size:a,background:n,foreground:c}))}(),o.a.render(r.a.createElement(O,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(".","/service-worker.js");E?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):w(t,e)})}}()},9:function(e,t,a){e.exports=a(22)}},[[9,2,1]]]);
//# sourceMappingURL=main.8948038e.chunk.js.map