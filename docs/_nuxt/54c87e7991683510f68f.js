(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{175:function(t,e,n){"use strict";e.a=function(t){var title=t.title,e=t.desc,desc=void 0===e?"令狐少侠的个人空间":e,n=t.script,script=void 0===n?[]:n;return{head:{title:"".concat(title,"-").concat(desc),script:script}}}},184:function(t,e,n){var content=n(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("3c703c78",content,!0,{sourceMap:!1})},196:function(t,e,n){"use strict";var r=n(184);n.n(r).a},197:function(t,e,n){(e=n(10)(!1)).push([t.i,"[data-v-1e467007]:root{--ns-primary:47,88,255;--ns-success:70,201,58;--ns-warning:255,186,0;--ns-danger:255,71,87;--ns-dark:30,30,30}.creation-list[data-v-1e467007]{display:grid;grid-template-columns:1fr;grid-gap:2rem;gap:2rem}@media (min-width:768px){.creation-list[data-v-1e467007]{grid-template-columns:1fr 1fr;grid-gap:2.4rem;gap:2.4rem}}@media (min-width:1024px){.creation-list[data-v-1e467007]{grid-template-columns:1fr 1fr 1fr;grid-gap:2.4rem;gap:2.4rem}}@media (min-width:1280px){.creation-list[data-v-1e467007]{grid-template-columns:1fr 1fr 1fr 1fr;grid-column-gap:2.1rem;-webkit-column-gap:2.1rem;-moz-column-gap:2.1rem;column-gap:2.1rem}}.creation-list .creation-item[data-v-1e467007]{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;overflow:hidden}.creation-list .creation-item[data-v-1e467007],.creation-list .creation-item .cover-img[data-v-1e467007]{-webkit-transition:all .3s;transition:all .3s}.creation-list .creation-item[data-v-1e467007]:hover{-webkit-box-shadow:0 0 20px 5px rgba(0,0,0,.09);box-shadow:0 0 20px 5px rgba(0,0,0,.09)}.creation-list .creation-item:hover .cover-img[data-v-1e467007]{-webkit-transform:scale(1.1);transform:scale(1.1)}",""]),t.exports=e},211:function(t,e,n){"use strict";n.r(e);var head=n(175),r={mixins:[Object(head.a)({title:"作品"})],data:function(){return{creations:[{img:"https://gitee.com/chinesee/images/raw/master/img/img_011.jpg",title:"意想社团 - 高校社团小程序",links:{repository:"https://gitee.com/chinesee/hr-clubs"}},{img:"https://gitee.com/chinesee/images/raw/master/img/img_004.jpg",title:"意想课表 - 教务信息查询助手",links:{repository:"https://gitee.com/chinesee/mpvue-hr"}},{img:"https://gitee.com/chinesee/images/raw/master/img/img_027.png",title:"乐享校园后台系统 - 校园二手交易平台",links:{online:"https://hrspider.top/admin",repository:"https://gitee.com/chinesee/love-share-admin"}},{img:"https://gitee.com/chinesee/images/raw/master/img/img_028.png",title:"乐享校园客户端 - 校园二手交易平台",links:{online:"https://holdme.top/client",repository:"https://gitee.com/chinesee/love-share-client"}}],icons:{online:{icon:"🎨",label:"在线地址"},repository:{icon:"🎉",label:"项目仓库"}}}},methods:{linkTo:function(link){window.open(link)}}},o=(n(196),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-6 md:p-8 lg:p-10 transition"},[n("ul",{staticClass:"creation-list"},t._l(t.creations,(function(e,i){var img=e.img,title=e.title,r=e.links;return n("li",{key:i,staticClass:"creation-item lg-radius base-shadow"},[n("div",{staticStyle:{height:"15rem"}},[n("img",{staticClass:"cover-img w-full h-full object-cover",attrs:{src:img,alt:"封面图片"}}),t._v(" "),n("div",{staticClass:"absolute bottom-0 w-full px-3 py-2"},[n("div",{staticClass:"relative z-50 flex items-center justify-between"},[n("h3",{staticClass:"font-bold truncate"},[t._v(t._s(title))]),t._v(" "),n("ul",{staticClass:"flex justify-end items-center"},[t._l(Object.keys(r),(function(e,o){return[n("li",{key:o,staticClass:"ml-1 text-lg cursor-pointer",attrs:{title:t.icons[e].label},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.linkTo(r[e])}}},[t._v("\n                  "+t._s(t.icons[e].icon)+"\n                ")])]}))],2)]),t._v(" "),n("div",{staticClass:"absolute top-0 left-0 z-40 w-full h-full bg-white opacity-75"})])])])})),0)])}),[],!1,null,"1e467007",null);e.default=component.exports}}]);