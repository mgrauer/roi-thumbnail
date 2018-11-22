(function(t){function e(e){for(var r,o,s=e[0],u=e[1],c=e[2],l=0,f=[];l<s.length;l++)o=s[l],i[o]&&f.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);h&&h(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var h=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("96cf");var r=n("1da1"),i=(n("cadf"),n("551c"),n("097d"),n("2b0e")),a=n("2f62"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("DffPlot"),n("ROIPlot")],1)},s=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{float:"left"}},[n("svg",{attrs:{width:"512",height:"512",xmlns:"http://www.w3.org/2000/svg"}})])},c=[],h=(n("ac6a"),n("456d"),n("fd32")),l=n("ce24"),f=n("a1eb"),d=n("f1df");function p(t){var e=t.map(function(t){return[Math.min.apply(null,t),Math.max.apply(null,t)]});return[Math.min.apply(null,e.map(function(t){return t[0]})),Math.max.apply(null,e.map(function(t){return t[1]}))]}var g={name:"DffPlot",computed:{dff:function(){return this.$store.state.dff},focus:function(){return this.$store.state.focus},epochs:function(){var t=this.$store.state.epochs,e=[];for(var n in Object.keys(t.stimulus))e.push({stimulus:t.stimulus[n],start:t.start[n],end:t.end[n]});for(var r=this.dff[0].length/e[e.length-1].end,i=0;i<e.length;i++)e[i].start*=r,e[i].end*=r;return e}},watch:{focus:function(t){Object(h["a"])(this.$el).selectAll("path").each(function(e,n){n===t?Object(h["a"])(this).attr("stroke","green").attr("stroke-width",3):Object(h["a"])(this).attr("stroke","black").attr("stroke-width",1.5)})}},mounted:function(){var t=this.dff,e=p(t),n=Object(l["a"])().domain([0,t[0].length]).range([0,512]),r=Object(l["a"])().domain([e[0],e[1]]).range([10.24,-10.24]),i=Object(d["a"])().x(function(t,e){return n(e)}).y(r),a=Object(h["a"])(this.$el).select("svg"),o=this.epochs,s=Object(l["b"])(f["a"]);a.append("g").classed("epochs",!0).selectAll("rect").data(o).enter().append("rect").attr("x",function(t){return n(t.start)}).attr("y",0).attr("width",function(t){return n(t.end)-n(t.start)}).attr("height",512).attr("fill",function(t){return s(t.stimulus)});var u=this,c=a.selectAll("g.dff").data(t).enter().append("g").classed("dff",!0).attr("transform",function(t,e){return"translate(0, ".concat(512*e/50,")")}).on("mouseover",function(t,e){u.$store.commit("focus",e)});c.append("rect").attr("x",0).attr("y",0).attr("width",512).attr("height",10.24).attr("stroke","none").attr("stroke-width",2).attr("fill","none").attr("pointer-events","fill"),c.selectAll("path").data(function(t){return[t]}).enter().append("path").attr("stroke","black").attr("stroke-width",1.5).attr("fill","none").attr("d",i)}},v=g,m=n("2877"),w=Object(m["a"])(v,u,c,!1,null,null,null);w.options.__file="DffPlot.vue";var b=w.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{float:"left"}},[n("canvas",{attrs:{width:t.width,height:t.height},on:{click:t.click}})])},O=[],x=n("d4ec"),j=n("bee2"),k=function(){function t(e,n){var r=this,i=n.width,a=n.height;Object(x["a"])(this,t),this.el=e,this.width=i,this.height=a,this.ctx=this.el.getContext("2d"),this.img=this.ctx.createImageData(this.width,this.height),Object(h["a"])(this.el).on("click",function(){var t=event.target.getBoundingClientRect();r.click={x:event.clientX-t.left,y:event.clientY-t.top}})}return Object(j["a"])(t,[{key:"clear",value:function(t,e,n,r){for(var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.update,o=void 0===a||a,s=0;s<this.height;s++)for(var u=0;u<this.width;u++)this.setPixel(s,u,{r:t,g:e,b:n,a:r,update:!1});o&&this.update()}},{key:"setPixel",value:function(t,e,n){var r=n.r,i=n.g,a=n.b,o=n.a,s=n.update,u=void 0===s||s,c=e*this.width+t;void 0!==r&&(this.img.data[4*c+0]=r),void 0!==i&&(this.img.data[4*c+1]=i),void 0!==a&&(this.img.data[4*c+2]=a),void 0!==o&&(this.img.data[4*c+3]=o),u&&this.update()}},{key:"update",value:function(){this.ctx.putImageData(this.img,0,0)}}]),t}(),P={name:"ROIPlot",computed:{width:function(){return this.$store.state.roiPlot.width},height:function(){return this.$store.state.roiPlot.height},rois:function(){return this.$store.state.rois},focus:function(){return this.$store.state.focus}},watch:{focus:function(t,e){null!==e&&this.drawROI(e,{r:100,g:100,b:100}),null!==t&&this.drawROI(t,{r:0,g:255,b:0}),this.img.update()}},mounted:function(){var t=this.$el,e=t.getElementsByTagName("canvas")[0];this.img=new k(e,{width:this.width,height:this.height}),this.img.clear(0,0,0,255);for(var n=this.rois,r=0;r<n.length;r++){var i=r<50?{r:100,g:100,b:100}:{r:50,g:50,b:50};this.drawROI(r,i,!1)}this.img.update()},methods:{drawROI:function(t,e,n){for(var r=this.rois,i=0;i<r[t].length;i++)this.img.setPixel(r[t][i][0],r[t][i][1],{r:e.r,g:e.g,b:e.b,a:e.a,update:!1});n&&this.img.update()},click:function(){var t=this;window.setTimeout(function(){var e,n=t.img.click,r=t.rois;t:for(e=0;e<r.length;e++)for(var i=0;i<r[e].length;i++)if(r[e][i][0]===n.x&&r[e][i][1]===n.y)break t;t.$store.commit("focus",e<50?e:null)},0)}}},_=P,$=Object(m["a"])(_,y,O,!1,null,null,null);$.options.__file="index.vue";var R=$.exports,I={name:"app",components:{DffPlot:b,ROIPlot:R}},D=I,S=(n("034f"),Object(m["a"])(D,o,s,!1,null,null,null));S.options.__file="App.vue";var M=S.exports;function A(t){return T.apply(this,arguments)}function T(){return T=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}},t,this)})),T.apply(this,arguments)}function E(){return z.apply(this,arguments)}function z(){return z=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,r,o,s,u,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=new a["a"].Store({state:{roiPlot:{width:0,height:0},rois:[],dff:[],epochs:[],focus:null},mutations:{setData:function(t,e){var n=e.which,r=e.data;t[n]=r},setROISize:function(t,e){t.roiPlot.width=e.width,t.roiPlot.height=e.height},focus:function(t,e){t.focus=e}}}),n=A("data/rois.json"),r=A("data/dff.json"),o=A("data/stim_epoch.json"),t.next=6,n;case 6:return s=t.sent,t.next=9,r;case 9:return u=t.sent,t.next=12,o;case 12:c=t.sent,e.commit("setROISize",{width:512,height:512}),e.commit("setData",{which:"rois",data:s}),e.commit("setData",{which:"dff",data:u}),e.commit("setData",{which:"epochs",data:c}),new i["a"]({store:e,render:function(t){return t(M)}}).$mount("#app");case 18:case"end":return t.stop()}},t,this)})),z.apply(this,arguments)}i["a"].config.productionTip=!1,i["a"].use(a["a"]),E()},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.9eb453c6.js.map