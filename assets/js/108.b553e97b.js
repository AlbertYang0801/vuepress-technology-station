(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{467:function(s,a,t){"use strict";t.r(a);var e=t(26),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"端口占用问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#端口占用问题"}},[s._v("#")]),s._v(" 端口占用问题")]),s._v(" "),t("p",[s._v("初学tomcat的时候经常会遇到端口占用问题，还有项目未成功关闭时也可能会遇到端口占用问题。以下是本人常用的两种解决端口占用问题的方法。")]),s._v(" "),t("h4",{attrs:{id:"_1-查看端口号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看端口号"}},[s._v("#")]),s._v(" 1.查看端口号")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#查看所有端口号 netstat -ano\n#查看端口号 netstat -ano|findstr 8005 \n#结束端口号进程 taskkill /pid 27456 /f \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"_2-结束指定端口号进程-mac"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-结束指定端口号进程-mac"}},[s._v("#")]),s._v(" 2.结束指定端口号进程(mac)")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo lsof -i :8100（查看指定端口号)\nsudo kill -9 8100 （结束端口号进程）\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);