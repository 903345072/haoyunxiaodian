(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-football-order"],{4740:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}));var i={uniPopup:n("975d").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"content"},slot:"content"},[e._v("投注单")])],2),1==e.can_order()?i("v-uni-view",{staticStyle:{display:"flex",width:"100%","justify-content":"space-around","margin-top":"30rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","background-color":"white",width:"40%","justify-content":"center",padding:"10rpx 0","border-radius":"10rpx"}},[i("v-uni-view",{staticClass:"cuIcon-add",staticStyle:{"font-weight":"bold","margin-right":"10rpx"}}),i("v-uni-view",{staticStyle:{"font-weight":"bold"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goBack()}}},[e._v("添加赛事")])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","background-color":"white",width:"40%","justify-content":"center",padding:"10rpx 0","border-radius":"10rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.launchFlow()}}},[i("v-uni-view",{staticClass:"cuIcon-people",staticStyle:{"font-weight":"bold","margin-right":"10rpx"}}),i("v-uni-view",{staticStyle:{"font-weight":"bold"}},[e._v("发起跟单")])],1)],1):e._e(),0==e.can_order()?i("v-uni-view",{staticStyle:{display:"flex",width:"100%","justify-content":"space-around","margin-top":"30rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","background-color":"white",width:"90%","justify-content":"center",padding:"10rpx 0","border-radius":"10rpx"}},[i("v-uni-view",{staticClass:"cuIcon-add",staticStyle:{"font-weight":"bold","margin-right":"10rpx"}}),i("v-uni-view",{staticStyle:{"font-weight":"bold"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goBack()}}},[e._v("添加赛事")])],1)],1):e._e(),i("v-uni-view",{staticStyle:{width:"100%",display:"flex","justify-content":"center","margin-top":"20rpx"}},[i("v-uni-image",{staticStyle:{height:"30rpx",width:"680rpx"},attrs:{src:n("0137")}})],1),i("v-uni-view",{staticStyle:{width:"100%",display:"flex","justify-content":"center"}},[i("v-uni-view",{staticStyle:{"background-color":"white",width:"655rpx","margin-top":"-20rpx","box-shadow":"11rpx 2rpx 15rpx 12rpx #DCDCDC"}},e._l(e.check_game,(function(t,n){return i("v-uni-view",{key:n,staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center","border-bottom":"1px dashed #acacac",padding:"20rpx 0"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-around",width:"100%",padding:"20rpx 0"}},[i("v-uni-view",{staticStyle:{width:"250rpx",display:"flex","align-items":"center","justify-content":"space-around","font-size":"25rpx"}},[i("v-uni-view",[e._v("周"+e._s(t["week"])+e._s(t["suffix_num"]))]),i("v-uni-view",[e._v(e._s(t["h_name"]))])],1),i("v-uni-view",[e._v("VS")]),i("v-uni-view",{staticStyle:{width:"250rpx",display:"flex","align-items":"center","justify-content":"space-around","font-size":"25rpx"}},[i("v-uni-view",[e._v(e._s(t["a_name"]))]),i("v-uni-view",{staticClass:"cuIcon-roundclose",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteItem(n)}}})],1)],1),i("v-uni-view",{staticStyle:{"background-color":"#f3f3f3",width:"90%",height:"70rpx",display:"flex","justify-content":"center","align-items":"center",color:"#4e90f7","font-size":"26rpx"}},e._l(t["bet"],(function(t,n){return i("v-uni-view",{key:n,staticStyle:{display:"flex",padding:"0 6rpx"}},[e._v(e._s(t["name"]))])})),1)],1)})),1)],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center",position:"relative"}},[i("v-uni-image",{staticStyle:{height:"100rpx",width:"655rpx"},attrs:{src:n("394c")}}),e.check_game.length>0?i("v-uni-text",{staticStyle:{position:"absolute",left:"280rpx",top:"15rpx",color:"grey","font-size":"25rpx"}},[e._v("您已选择"+e._s(e.check_game.length)+"场比赛")]):e._e(),0==e.check_game.length?i("v-uni-text",{staticStyle:{position:"absolute",left:"320rpx",top:"15rpx",color:"grey","font-size":"25rpx"}},[e._v("请选择比赛")]):e._e()],1),i("uni-popup",{ref:"popup",staticStyle:{"z-index":"99",height:"600rpx"},attrs:{"mask-click":!0,type:"bottom","background-color":"#fff"}},[i("v-uni-view",{staticStyle:{"min-height":"300rpx",padding:"15rpx 20rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between",color:"grey","padding-bottom":"20rpx"}},[i("v-uni-view",[e._v("自由过关")]),e._v("、"),i("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.open()}}},[e._v("收起")])],1),e._l(e.chuan_arr,(function(t,n){return i("v-uni-view",{key:n,staticStyle:{display:"inline-block"}},[i("v-uni-view",{class:["border-style",{checked:1==t["checked"]},{unchecked:0==t["checked"]}],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.checkedChuan(n)}}},[e._v(e._s("单关"!=t["value"]?t["value"]+"串1":"单关"))])],1)}))],2)],1),i("payorder",{ref:"orderpop_",attrs:{expect_min_award:e.getExpectMinAward(),expect_max_award:e.getExpectMaxAward(),amount:e.getPlzh().length*e.bei*2,shop_money:this.shop_money,bei:e.bei,check_game:e.getPlzh(),mode:1,chuan_arr:e.chuan_arr,game_type:e.type},on:{closeopendoor:function(t){arguments[0]=t=e.$handleEvent(t),e.closeopendoor()}}}),i("v-uni-view",{staticStyle:{position:"fixed",left:"0",right:"0",bottom:"0","background-color":"white","z-index":"999",display:"flex","flex-direction":"column"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center","border-top":"2px solid #EEEEEE","padding-top":"20rpx","padding-left":"30rpx"}},[i("v-uni-view",{staticStyle:{border:"1px solid #d1d1d1",display:"flex","align-items":"center","justify-content":"center","min-width":"200rpx",padding:"0 20rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.open()}}},[i("v-uni-view",{staticStyle:{"margin-right":"40rpx"}},[e._v(e._s(e.getChuanStr()))]),i("v-uni-view",{staticClass:"cuIcon-unfold"})],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel()}}},[e._v("投")]),i("v-uni-view",{staticStyle:{"background-color":"#EEEEEE",height:"50rpx","text-align":"center",width:"50rpx","margin-left":"20rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.subBei()}}},[e._v("一")]),i("v-uni-input",{staticStyle:{background:"#EEEEEE",width:"50rpx",margin:"0 5rpx",height:"50rpx","text-align":"center"},attrs:{type:"number"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.starBlur_(e.bei)},input:function(t){arguments[0]=t=e.$handleEvent(t),e.starBlur(t,3)}},model:{value:e.bei,callback:function(t){e.bei=t},expression:"bei"}}),i("v-uni-view",{staticClass:"cuIcon-add",staticStyle:{color:"#000000","background-color":"#EEEEEE",height:"50rpx","text-align":"center",width:"50rpx","line-height":"50rpx","margin-right":"20rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addBei()}}}),i("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[e._v("倍")])],1)],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center",padding:"10rpx 20rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},[i("v-uni-view",{staticStyle:{"font-size":"25rpx"}},[i("v-uni-text",[e._v("共")]),i("v-uni-text",[e._v(e._s(e.getPlzh().length)+"注")]),i("v-uni-text",[e._v(e._s(e.bei)+"倍")]),i("v-uni-text",[e._v(e._s(e.getPlzh().length*e.bei*2)+"元")])],1),0==e.getExpectMaxAward()?i("v-uni-view",{staticStyle:{color:"red","font-size":"25rpx"}},[e._v("预测奖金 0.00元")]):e._e(),e.getExpectMaxAward()==e.getExpectMinAward()&&e.getExpectMinAward()>0?i("v-uni-view",{staticStyle:{color:"red","font-size":"25rpx"}},[e._v("预测奖金 "+e._s(e.getExpectMinAward())+"元")]):e._e(),e.getExpectMaxAward()>0&&e.getExpectMaxAward()!=e.getExpectMinAward()?i("v-uni-view",{staticStyle:{color:"red","font-size":"25rpx"}},[e._v("预测奖金 "+e._s(e.getExpectMinAward())+" ~ "+e._s(e.getExpectMaxAward()))]):e._e()],1),i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"inline-block","background-color":"#dcf4f2",padding:"10rpx 20rpx","border-radius":"20rpx 0 0 20rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goOptimize()}}},[e._v("奖金优化")]),i("v-uni-view",{staticStyle:{display:"inline-block",background:"linear-gradient(to right,#97e2e2,#ffaaff)",padding:"10rpx 50rpx","border-radius":"0 20rpx 20rpx 0"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openorderpop()}}},[e._v("提交")])],1)],1)],1)],1)},s=[]},"636a":function(e,t,n){var i=n("ad88");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("60353b30",i,!0,{sourceMap:!1,shadowMode:!1})},"7a97":function(e,t,n){"use strict";n.r(t);var i=n("94b0"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a},"94b0":function(e,t,n){"use strict";var i=n("4ea4");n("99af"),n("4de4"),n("4160"),n("13d5"),n("4e82"),n("a434"),n("07ac"),n("acd8"),n("e25e"),n("ac1f"),n("1276"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("6ae7")),s=i(n("9132")),r=i(n("43be")),p={name:"order",components:{barTitle:s.default,ldSelect:a.default,payorder:r.default},data:function(){return{shop_money:0,is_order_open:!1,chuan_arr:[],is_open:!1,bei:50,type:"foot",check_game:[]}},methods:{launchFlow:function(){var e=this.chuan_arr;e=e.filter((function(e){return 1==e["checked"]}));var t=this.getPlzh(),n={type:"foot",num:t.length,checkGame:JSON.stringify(t),bei:this.bei,mode:1,chuan:JSON.stringify(e),en_type:"竞彩足球",money:t.length*this.bei*2,check_game:t,chuan_arr:e,expect_min_award:this.getExpectMinAward(),expect_max_award:this.getExpectMaxAward()};uni.navigateTo({url:"/pages/flow/index?data="+encodeURIComponent(JSON.stringify(n))})},doorder:function(){var e=this.chuan_arr;e=e.filter((function(e){return 1==e["checked"]}));var t={type:"foot",num:this.getPlzh().length,checkGame:JSON.stringify(this.getPlzh()),bei:this.bei,mode:1,chuan:JSON.stringify(e)};this.$api.doorder_(t).then((function(e){var t=encodeURIComponent(JSON.stringify(e.data));uni.navigateTo({url:"/pages/order/orderdetail?str="+t})}))},goOptimize:function(){if(this.getPlzh().length>1){var e=encodeURIComponent(JSON.stringify(this.getPlzh())),t=this.getPlzh().length*this.bei*2;uni.navigateTo({url:"/pages/football/optimize?str="+e+"&money="+t+"&tyep="+this.type})}},getPlzh:function(){var e=this.chuan_arr,t=[];for(var n in e)1==e[n]["checked"]&&t.push(e[n]["value"]);var i=[],a=[];for(var s in t){var r="单关"!=t[s]?t[s]:1;a.push(this.pl(this.check_game,r))}for(var p in a){var h=a[p];for(var u in h){var o=this.dikaer(h[u]);for(var c in o)i.push(o[c])}}return i},clone:function(e){var t;if(e instanceof Array){t=[];var n=e.length;while(n--)t[n]=this.clone(e[n]);return t}if(e instanceof Object){for(var i in t={},e)t[i]=this.clone(e[i]);return t}return e},getExpectMinAward:function(){var e=this.clone(this.check_game),t=[];for(var n in e){var i=e[n]["bet"],a=[],s=[],r=[],p=[],h=[],u=[];for(var o in i){var c=i[o],l=c["met"].split("-");1==l[0]&&s.push(c),2==l[0]&&r.push(c),3==l[0]&&p.push(c),4==l[0]&&h.push(c),5==l[0]&&u.push(c)}s.length>0&&a.push(s),r.length>0&&a.push(r),p.length>0&&a.push(p),h.length>0&&a.push(h),u.length>0&&a.push(u);var f=this.dikaer(a),v=[];for(var d in f){var g=f[d];Array.isArray(g)||(g=[g]),v.push(this.filter_game(g))}var m=v.sort((function(e,t){var n=0,i=0;for(var a in e)n+=parseInt(e[a]["pl"]);for(var s in t)i+=parseInt(t[s]["pl"]);return i-n}))[0];t.push(m)}var x=this.chuan_arr,_=[];for(var b in x)1==x[b]["checked"]&&_.push(x[b]["value"]);var y=[],w=[],k={};for(var I in _){var E="单关"!=_[I]?_[I]:1,S={};S["chuan"]=_[I],S["content"]=this.pl(this.check_game,E),w.push(S),k[_[I]]=9999999}var M=[];for(var A in w){var $=w[A]["content"],z=w[A]["chuan"];for(var C in $){var j=this.dikaer($[C]);for(var O in j){if("单关"!=z){var F=2;for(var P in j[O])F*=parseFloat(j[O][P]["pl"]);M.push(F),F<k[z]&&(k[z]=F)}else{F=2*parseFloat(j[O]["pl"]);M.push(F),F<k[z]&&(k[z]=F)}y.push(j[O])}}}M=M.sort((function(e,t){return e-t}));return k=Object.values(k).sort((function(e,t){return e-t})),0==k.length?0:parseFloat(k[0]*this.bei).toFixed(2)},getExpectMaxAward:function(){var e=this.clone(this.check_game),t=[];for(var n in e){var i=e[n]["bet"],a=[],s=[],r=[],p=[],h=[],u=[];for(var o in i){var c=i[o],l=c["met"].split("-");1==l[0]&&s.push(c),2==l[0]&&r.push(c),3==l[0]&&p.push(c),4==l[0]&&h.push(c),5==l[0]&&u.push(c)}s.length>0&&a.push(s),r.length>0&&a.push(r),p.length>0&&a.push(p),h.length>0&&a.push(h),u.length>0&&a.push(u);var f=this.dikaer(a),v=[];for(var d in f){var g=f[d];Array.isArray(g)||(g=[g]),v.push(this.filter_game(g))}var m=v.sort((function(e,t){var n=0,i=0;for(var a in e)n+=parseInt(e[a]["pl"]);for(var s in t)i+=parseInt(t[s]["pl"]);return i-n}))[0];t.push(m)}var x=this.chuan_arr,_=[];for(var b in x)1==x[b]["checked"]&&_.push(x[b]["value"]);var y=[],w=[],k={};for(var I in _){var E="单关"!=_[I]?_[I]:1,S={};S["chuan"]=_[I],S["content"]=this.pl(t,E),w.push(S),k[_[I]]=9999999}var M=[];for(var A in w){var $=w[A]["content"],z=w[A]["chuan"];for(var C in $){var j=this.dikaer($[C]);for(var O in j){if("单关"!=z){var F=2;for(var P in j[O])F*=parseFloat(j[O][P]["pl"]);M.push(F),F<k[z]&&(k[z]=F)}else{F=2*parseFloat(j[O]["pl"]);M.push(F),F<k[z]&&(k[z]=F)}y.push(j[O])}}}M=M.sort((function(e,t){return e-t}));var B=0;for(var J in M)B+=M[J];return 0==M.length?0:M.length>=1?parseFloat(B*this.bei).toFixed(2):void 0},filter_game:function(e){var t=[],n=[],i=[],a=[],s=[],r=[],p=[],h=[],u=[],o=[],c=[],l=[],f=[],v=[],d=[],g=[],m=[],x=[],_=[],b=[],y=[],w=[],k=[],I=[],E=[],S=[],M=[],A=[],$=[],z=[],C=[];for(var j in e){var O=e[j],F=O["met"].split("-"),P=parseFloat(O["p_goal"]);if(P<0){if("1-1"==O["met"]&&n.push(O),"2-3"==O["met"]&&n.push(O),3==F[0]){if(F[1]<13){var B=O["name"].split(":"),J=parseInt(B[0])-parseInt(B[1]);J<Math.abs(P)&&parseInt(B[1])>0&&n.push(O)}13==F[1]&&n.push(O)}4==F[0]&&F[1]>=4&&n.push(O),5==F[0]&&7==F[1]&&n.push(O)}if(P<0){if("1-1"==O["met"]&&i.push(O),"2-3"==O["met"]&&i.push(O),3==F[0]){if(F[1]<13){B=O["name"].split(":"),J=parseInt(B[0])-parseInt(B[1]);J<Math.abs(P)&&i.push(O)}13==F[1]&&i.push(O)}4==F[0]&&F[1]>1&&i.push(O),5==F[0]&&4==F[1]&&i.push(O)}if(P<0){if("1-1"==O["met"]&&a.push(O),"2-3"==O["met"]&&a.push(O),3==F[0]){if(F[1]<13){B=O["name"].split(":"),J=parseInt(B[0])-parseInt(B[1]);J<Math.abs(P)&&a.push(O)}13==F[1]&&a.push(O)}4==F[0]&&F[1]>1&&a.push(O),5==F[0]&&1==F[1]&&a.push(O)}if(P<0){if("1-1"==O["met"]&&s.push(O),"2-2"==O["met"]&&s.push(O),3==F[0]){if(F[1]<13){B=O["name"].split(":"),J=parseInt(B[0])-parseInt(B[1]);J==Math.abs(P)&&parseInt(B[1])>0&&s.push(O)}13==F[1]&&s.push(O)}4==F[0]&&F[1]>=4&&s.push(O),5==F[0]&&7==F[1]&&s.push(O)}if(P<0){if("1-1"==O["met"]&&r.push(O),"2-2"==O["met"]&&r.push(O),3==F[0]){if(F[1]<13){B=O["name"].split(":"),J=parseInt(B[0])-parseInt(B[1]);J==Math.abs(P)&&r.push(O)}13==F[1]&&r.push(O)}4==F[0]&&F[1]>1&&r.push(O),5==F[0]&&4==F[1]&&r.push(O)}if(P<0){if("1-1"==O["met"]&&p.push(O),"2-2"==O["met"]&&p.push(O),3==F[0]){if(F[1]<13){B=O["name"].split(":"),J=parseInt(B[0])-parseInt(B[1]);J==Math.abs(P)&&p.push(O)}13==F[1]&&p.push(O)}4==F[0]&&F[1]>1&&p.push(O),5==F[0]&&1==F[1]&&p.push(O)}if(P<0){if("1-1"==O["met"]&&h.push(O),"2-1"==O["met"]&&h.push(O),3==F[0]){if(F[1]<13){B=O["name"].split(":"),J=parseInt(B[0])-parseInt(B[1]);J>Math.abs(P)&&parseInt(B[1])>0&&h.push(O)}13==F[1]&&h.push(O)}4==F[0]&&F[1]>=4&&h.push(O),5==F[0]&&7==F[1]&&h.push(O)}if(P<0){if("1-1"==O["met"]&&u.push(O),"2-1"==O["met"]&&u.push(O),3==F[0]){if(F[1]<13){B=O["name"].split(":"),J=parseInt(B[0])-parseInt(B[1]);J>Math.abs(P)&&u.push(O)}13==F[1]&&u.push(O)}4==F[0]&&F[1]>1&&u.push(O),5==F[0]&&4==F[1]&&u.push(O)}if(P<0){if("1-1"==O["met"]&&o.push(O),"2-1"==O["met"]&&o.push(O),3==F[0]){if(F[1]<13){B=O["name"].split(":"),J=parseInt(B[0])-parseInt(B[1]);J>Math.abs(P)&&o.push(O)}13==F[1]&&o.push(O)}4==F[0]&&F[1]>1&&o.push(O),5==F[0]&&1==F[1]&&o.push(O)}if(P>0){if("1-1"==O["met"]&&c.push(O),"2-1"==O["met"]&&c.push(O),3==F[0]&&F[1]<=13){B=O["name"].split(":");parseInt(B[1])>0&&c.push(O)}4==F[0]&&F[1]>=4&&c.push(O),5==F[0]&&7==F[1]&&c.push(O)}if(P>0){if("1-1"==O["met"]&&l.push(O),"2-1"==O["met"]&&l.push(O),3==F[0]&&F[1]<=13){B=O["name"].split(":");l.push(O)}4==F[0]&&F[1]>1&&l.push(O),5==F[0]&&4==F[1]&&l.push(O)}if(P>0){if("1-1"==O["met"]&&f.push(O),"2-1"==O["met"]&&f.push(O),3==F[0]&&F[1]<=13){B=O["name"].split(":");f.push(O)}4==F[0]&&F[1]>1&&f.push(O),5==F[0]&&1==F[1]&&f.push(O)}if(P<0){if("1-2"==O["met"]&&v.push(O),"2-3"==O["met"]&&v.push(O),3==F[0]&&F[1]>=14&&F[1]<=18){B=O["name"].split(":");parseInt(B[1])>0&&v.push(O)}4==F[0]&&F[1]>=3&&v.push(O),5==F[0]&&8==F[1]&&v.push(O)}if(P<0&&("1-2"==O["met"]&&d.push(O),"2-3"==O["met"]&&d.push(O),3==F[0]&&F[1]>=14&&F[1]<=18&&d.push(O),4==F[0]&&d.push(O),5==F[0]&&5==F[1]&&d.push(O)),P<0&&("1-2"==O["met"]&&g.push(O),"2-3"==O["met"]&&g.push(O),3==F[0]&&F[1]>=15&&F[1]<=18&&g.push(O),4==F[0]&&F[1]>=3&&g.push(O),5==F[0]&&2==F[1]&&g.push(O)),P>0){if("1-2"==O["met"]&&m.push(O),"2-1"==O["met"]&&m.push(O),3==F[0]&&F[1]>=14&&F[1]<=18){B=O["name"].split(":");parseInt(B[1])>0&&m.push(O)}4==F[0]&&F[1]>=3&&m.push(O),5==F[0]&&8==F[1]&&m.push(O)}if(P>0&&("1-2"==O["met"]&&x.push(O),"2-1"==O["met"]&&x.push(O),3==F[0]&&F[1]>=14&&F[1]<=18&&x.push(O),4==F[0]&&x.push(O),5==F[0]&&5==F[1]&&x.push(O)),P>0&&("1-2"==O["met"]&&_.push(O),"2-1"==O["met"]&&_.push(O),3==F[0]&&F[1]>=15&&F[1]<=18&&_.push(O),4==F[0]&&F[1]>=3&&_.push(O),5==F[0]&&2==F[1]&&_.push(O)),P>0){if("1-3"==O["met"]&&b.push(O),"2-1"==O["met"]&&b.push(O),3==F[0]){if(F[1]>=19&&F[1]<31){B=O["name"].split(":"),J=parseInt(B[0])-parseInt(B[1]);Math.abs(J)<P&&b.push(O)}31==F[1]&&b.push(O)}4==F[0]&&F[1]>1&&b.push(O),5==F[0]&&9==F[1]&&b.push(O)}if(P>0){if("1-3"==O["met"]&&y.push(O),"2-1"==O["met"]&&y.push(O),3==F[0]){if(F[1]>=19&&F[1]<31){B=O["name"].split(":"),J=parseInt(B[0])-parseInt(B[1]);Math.abs(J)<P&&y.push(O)}31==F[1]&&y.push(O)}4==F[0]&&F[1]>1&&y.push(O),5==F[0]&&6==F[1]&&y.push(O)}if(P>0){if("1-3"==O["met"]&&w.push(O),"2-1"==O["met"]&&w.push(O),3==F[0]){if(F[1]>=19&&F[1]<31){B=O["name"].split(":"),J=parseInt(B[0])-parseInt(B[1]);Math.abs(J)<P&&parseInt(B[0])>0&&w.push(O)}31==F[1]&&w.push(O)}4==F[0]&&F[1]>=4&&w.push(O),5==F[0]&&3==F[1]&&w.push(O)}if(P>0){if("1-3"==O["met"]&&k.push(O),"2-2"==O["met"]&&k.push(O),3==F[0]){if(F[1]>=19&&F[1]<31){B=O["name"].split(":"),J=parseInt(B[0])-parseInt(B[1]);Math.abs(J)==P&&k.push(O)}31==F[1]&&k.push(O)}4==F[0]&&F[1]>1&&k.push(O),5==F[0]&&9==F[1]&&k.push(O)}if(P>0){if("1-3"==O["met"]&&I.push(O),"2-2"==O["met"]&&I.push(O),3==F[0]){if(F[1]>=19&&F[1]<31){B=O["name"].split(":"),J=parseInt(B[0])-parseInt(B[1]);Math.abs(J)==P&&I.push(O)}31==F[1]&&I.push(O)}4==F[0]&&F[1]>1&&I.push(O),5==F[0]&&6==F[1]&&I.push(O)}if(P>0){if("1-3"==O["met"]&&E.push(O),"2-2"==O["met"]&&E.push(O),3==F[0]){if(F[1]>=19&&F[1]<31){B=O["name"].split(":"),J=parseInt(B[0])-parseInt(B[1]);Math.abs(J)==P&&parseInt(B[0])>0&&E.push(O)}31==F[1]&&E.push(O)}4==F[0]&&F[1]>=4&&E.push(O),5==F[0]&&3==F[1]&&E.push(O)}if(P>0){if("1-3"==O["met"]&&S.push(O),"2-3"==O["met"]&&S.push(O),3==F[0]){if(F[1]>=19&&F[1]<31){B=O["name"].split(":"),J=parseInt(B[0])-parseInt(B[1]);Math.abs(J)>P&&S.push(O)}31==F[1]&&S.push(O)}4==F[0]&&F[1]>1&&S.push(O),5==F[0]&&9==F[1]&&S.push(O)}if(P>0){if("1-3"==O["met"]&&M.push(O),"2-3"==O["met"]&&M.push(O),3==F[0]){if(F[1]>=19&&F[1]<31){B=O["name"].split(":"),J=parseInt(B[0])-parseInt(B[1]);Math.abs(J)>P&&M.push(O)}31==F[1]&&M.push(O)}4==F[0]&&F[1]>1&&M.push(O),5==F[0]&&6==F[1]&&M.push(O)}if(P>0){if("1-3"==O["met"]&&A.push(O),"2-3"==O["met"]&&A.push(O),3==F[0]){if(F[1]>=19&&F[1]<31){B=O["name"].split(":"),J=parseInt(B[0])-parseInt(B[1]);Math.abs(J)>P&&parseInt(B[0])>0&&A.push(O)}31==F[1]&&A.push(O)}4==F[0]&&F[1]>=4&&A.push(O),5==F[0]&&3==F[1]&&A.push(O)}if(P<0&&("1-3"==O["met"]&&$.push(O),"2-3"==O["met"]&&$.push(O),3==F[0]&&F[1]>=19&&F[1]<=31&&$.push(O),4==F[0]&&F[1]>1&&$.push(O),5==F[0]&&9==F[1]&&$.push(O)),P<0&&("1-3"==O["met"]&&z.push(O),"2-3"==O["met"]&&z.push(O),3==F[0]&&F[1]>=19&&F[1]<=31&&z.push(O),4==F[0]&&F[1]>1&&z.push(O),5==F[0]&&6==F[1]&&z.push(O)),P<0){if("1-3"==O["met"]&&C.push(O),"2-3"==O["met"]&&C.push(O),3==F[0]&&F[1]>=19&&F[1]<=31){B=O["name"].split(":");parseInt(B[0])>0&&C.push(O)}4==F[0]&&F[1]>=4&&C.push(O),5==F[0]&&3==F[1]&&C.push(O)}}for(var N in n.length>0&&t.push(n),s.length>0&&t.push(s),h.length>0&&t.push(h),c.length>0&&t.push(c),v.length>0&&t.push(v),m.length>0&&t.push(m),b.length>0&&t.push(b),k.length>0&&t.push(k),S.length>0&&t.push(S),$.length>0&&t.push($),i.length>0&&t.push(i),a.length>0&&t.push(a),r.length>0&&t.push(r),p.length>0&&t.push(p),u.length>0&&t.push(u),o.length>0&&t.push(o),l.length>0&&t.push(l),f.length>0&&t.push(f),d.length>0&&t.push(d),g.length>0&&t.push(g),x.length>0&&t.push(x),_.length>0&&t.push(_),y.length>0&&t.push(y),w.length>0&&t.push(w),I.length>0&&t.push(I),E.length>0&&t.push(E),M.length>0&&t.push(M),A.length>0&&t.push(A),z.length>0&&t.push(z),C.length>0&&t.push(C),t){var U=t[N],R=!1,T=!1,D=(B="",""),G="",L="",V="",q="";for(var H in U){O=U[H],F=O["met"].split("-");if(3==F[0]){R=!0;var K=O["name"].split(":");B=parseInt(K[0])+parseInt(K[1]),G=parseFloat(O["pl"]),q=H}4==F[0]&&(T=!0,D=parseInt(O["name"]),L=parseFloat(O["pl"]),V=H)}1==R&&1==T&&B!=D&&B<7&&7!=D&&(console.log("同时共存"),G>=L&&delete t[N][V],G<L&&delete t[N][q])}var Q=t.sort((function(e,t){var n=0,i=0;for(var a in e)n+=parseFloat(e[a]["pl"]);for(var s in t)i+=parseFloat(t[s]["pl"]);return i-n}))[0];return Q},pl:function(e,t){for(var n=e.length,i=Math.pow(2,n),a=Math.pow(2,t)-1,s=[],r=a;r<i;r++){for(var p=0,h=[],u=0;u<n;u++){var o=Math.pow(2,u),c=r&o;c==o&&(e[u]["bet"]?h.push(e[u]["bet"]):h.push(e[u]),p++)}p==t&&s.push(h)}return s},dikaer:function(e){return e.length<2?e[0]||[]:[].reduce.call(e,(function(e,t){var n=[];return Object.values(e).forEach((function(e){Object.values(t).forEach((function(t){var i=[].concat(Array.isArray(e)?e:[e]);i.push(t),n.push(i)}))})),n}))},checkedChuan:function(e){this.chuan_arr[e]["checked"]=!this.chuan_arr[e]["checked"]},getChuanStr:function(){var e=this.chuan_arr;e=e.filter((function(e){return 1==e["checked"]}));var t="";return 0==e.length&&(t+="请选择"),1==e.length&&(t+="单关"==e[0]["value"]?"单关":e[0]["value"]+"串1 "),2==e.length&&(t+="单关"==e[0]["value"]?"单关":e[0]["value"]+"串1 ",t+="单关"==e[1]["value"]?"单关":e[1]["value"]+"串1 "),e.length>2&&(t+="单关"==e[0]["value"]?"单关":e[0]["value"]+"串1 ",t+="...",t+="单关"==e[e.length-1]["value"]?"单关":e[e.length-1]["value"]+"串1 "),t},getChuanArr:function(){var e=[],t=this.check_game.length;if(0==t)return this.chuan_arr=[],[];if(2==t&&(e=[{value:2,checked:!0}]),t>2)for(var n=2;n<=t;n++){var i=!1;n==t&&(i=!0),e.push({value:n,checked:i})}var a=!0;for(var s in this.check_game){var r=this.check_game[s];for(var p in r["bet"])if(0==r["bet"][p]["p_single"]){a=!1;break}}return 1==a&&(0==e.length?e.push({value:"单关",checked:!0}):e.push({value:"单关",checked:!1})),this.chuan_arr=e,e},subBei:function(){this.bei>1&&this.bei--},addBei:function(){this.bei++},starBlur:function(e,t){e.detail.value<1&&(this.bei=1)},starBlur_:function(e){e<1&&(this.bei=1)},cancel:function(){this.$refs.popup.close("bottom")},open:function(e){0==this.is_open?(this.$refs.popup.open("bottom"),this.is_open=!0):(this.$refs.popup.close("bottom"),this.is_open=!1)},getUserInfo:function(){var e=this,t={};this.$api.getUserInfo(t).then((function(t){var n=t.data.data;e.shop_money=n.total_money,e.$refs.orderpop_.$refs.orderpop.open("bottom"),e.is_order_open=!0}))},closeopendoor:function(){this.$refs.orderpop_.$refs.orderpop.close("bottom"),this.is_order_open=!1},openorderpop:function(){0==this.is_order_open&&this.getPlzh().length>0?this.getUserInfo():(this.$refs.orderpop_.$refs.orderpop.close("bottom"),this.is_order_open=!1)},selectChange:function(e){this.value=e},selectChange2:function(e){this.value2=e},selectChange4:function(e){this.value4=e},selectChange5:function(e){this.value5=e},goBack:function(){uni.navigateBack()},deleteItem:function(e){this.check_game.splice(e,1),this.getChuanArr()},can_order:function(){var e=this.check_game.length;if(0==e)return!1;if(1==e){var t=!0,n=this.check_game[0];for(var i in n["bet"])"1"!=n["bet"][i]["p_single"]&&(t=!1);return 1==t}return!0}},onLoad:function(e){var t=JSON.parse(decodeURIComponent(e.data));for(var n in this.type=t["type"],this.check_game=t["check_game"],this.check_game){var i=this.check_game[n]["bet"];for(var a in i)i[a]["met"]=a,i[a]["h_name"]=this.check_game[n]["h_name"],i[a]["a_name"]=this.check_game[n]["a_name"]}this.getChuanArr()}};t.default=p},ad88:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"uni-page-body[data-v-9ac5c56a]{background:#f3f3f3}.border-style[data-v-9ac5c56a]{padding:%?5?% %?20?%;margin:0 %?10?%;border:1px solid #d1d1d1}.checked[data-v-9ac5c56a]{background-color:#09f;color:#fff}.unchecked[data-v-9ac5c56a]{background-color:#fff;color:#000}body.?%PAGE?%[data-v-9ac5c56a]{background:#f3f3f3}",""]),e.exports=t},cee9:function(e,t,n){"use strict";var i=n("636a"),a=n.n(i);a.a},fb5b:function(e,t,n){"use strict";n.r(t);var i=n("4740"),a=n("7a97");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("cee9");var r,p=n("f0c5"),h=Object(p["a"])(a["default"],i["b"],i["c"],!1,null,"9ac5c56a",null,!1,i["a"],r);t["default"]=h.exports}}]);