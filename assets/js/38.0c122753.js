(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{404:function(t,a,s){"use strict";s.r(a);var n=s(40),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"java实现markdown增加目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java实现markdown增加目录"}},[t._v("#")]),t._v(" Java实现markdown增加目录")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#java%E5%AE%9E%E7%8E%B0markdown%E5%A2%9E%E5%8A%A0%E7%9B%AE%E5%BD%95"}},[t._v("Java实现markdown增加目录")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E9%9C%80%E6%B1%82"}},[t._v("需求")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#github%E5%9C%B0%E5%9D%80"}},[t._v("GitHub地址")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%AE%9E%E7%8E%B0%E6%AD%A5%E9%AA%A4"}},[t._v("实现步骤")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%AE%9E%E7%8E%B0%E6%95%88%E6%9E%9C"}},[t._v("实现效果")])])])])]),t._v(" "),s("h4",{attrs:{id:"需求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[t._v("#")]),t._v(" 需求")]),t._v(" "),s("p",[t._v("markdown的"),s("code",[t._v("[toc]")]),t._v("语法可以自动生成目录，但是上传到"),s("code",[t._v("github")]),t._v("之后目录会"),s("code",[t._v("失效")]),t._v("，所以需要手动为markdown文件添加目录。")]),t._v(" "),s("h4",{attrs:{id:"github地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github地址"}},[t._v("#")]),t._v(" GitHub地址")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/houbb/markdown-toc",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/houbb/markdown-toc"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"实现步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现步骤"}},[t._v("#")]),t._v(" 实现步骤")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("添加maven依赖")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\x3c!--MD文件添加目录--\x3e\n<dependency>\n    <groupId>com.github.houbb</groupId>\n    <artifactId>markdown-toc</artifactId>\n    <version>1.0.2</version>\n</dependency>\n")])])])]),t._v(" "),s("li",[s("p",[t._v("测试类")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 为指定MD文件生成目录\n * @author Albert\n * @date 2021/1/25 下午5:30\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MdCreateToc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" macPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/yangjunwei/IdeaProjects/concurrent-practice/src/test/java/com/albert/concurrent/md/READMEBak.md"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TocGen")]),t._v(" tocGen "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AtxMarkdownToc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("genTocFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("macPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//打印生成的目录内容")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tocGen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"实现效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现效果"}},[t._v("#")]),t._v(" 实现效果")])])]),t._v(" "),s("p",[t._v("自动在md文件顶部增加目录内容")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210220125103.png",alt:"实现效果"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);