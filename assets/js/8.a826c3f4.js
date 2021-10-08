(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{371:function(s,a,t){"use strict";t.r(a);var e=t(26),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql异常问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql异常问题"}},[s._v("#")]),s._v(" MySQL异常问题")]),s._v(" "),t("h2",{attrs:{id:"配置类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置类型"}},[s._v("#")]),s._v(" 配置类型")]),s._v(" "),t("h3",{attrs:{id:"_1-navicat连接数量过多"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-navicat连接数量过多"}},[s._v("#")]),s._v(" 1. Navicat连接数量过多")]),s._v(" "),t("h4",{attrs:{id:"异常体现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异常体现"}},[s._v("#")]),s._v(" 异常体现")]),s._v(" "),t("p",[s._v("报错 "),t("strong",[s._v("Too many connections")])]),s._v(" "),t("h4",{attrs:{id:"解决办法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[s._v("#")]),s._v(" 解决办法")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("查看最大连接数")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" variables "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%max_connections%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("全局修改最大连接数")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" max_connections "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("重启 MySQL")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("systemctl restart mysqld\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"_2-导入sql脚本提示-sql-mode-only-full-group-by"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-导入sql脚本提示-sql-mode-only-full-group-by"}},[s._v("#")]),s._v(' 2. 导入SQL脚本提示 "sql_mode=only_full_group_by"')]),s._v(" "),t("h4",{attrs:{id:"异常信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异常信息"}},[s._v("#")]),s._v(" 异常信息")]),s._v(" "),t("p",[s._v("导入SQL脚本提示 "),t("code",[s._v("sql_mode=only_full_group_by")])]),s._v(" "),t("h4",{attrs:{id:"解决办法-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决办法-2"}},[s._v("#")]),s._v(" 解决办法")]),s._v(" "),t("p",[s._v("1、查看sql_mode")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@sql_mode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查询出来的值为：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("ONLY_FULL_GROUP_BY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("STRICT_TRANS_TABLES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("NO_ZERO_IN_DATE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("NO_ZERO_DATE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ERROR_FOR_DIVISION_BY_ZERO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("NO_AUTO_CREATE_USER"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("NO_ENGINE_SUBSTITUTION\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("2、去掉 "),t("code",[s._v("ONLY_FULL_GROUP_BY")]),s._v("，重新设置值。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@global.sql_mode")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("3、上面是改变了全局 "),t("code",[s._v("sql_mode")]),s._v("，对于新建的数据库有效。对于已存在的数据库，则需要在对应数据库下执行：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" sql_mode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("————————————————\n版权声明：本文为CSDN博主「Ch3n」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。\n原文链接：https://blog.csdn.net/weixin_43064185/article/details/99646535")])])}),[],!1,null,null,null);a.default=r.exports}}]);