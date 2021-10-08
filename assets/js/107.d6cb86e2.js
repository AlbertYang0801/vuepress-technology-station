(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{465:function(a,t,s){"use strict";s.r(t);var n=s(26),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"java实现markdown增加目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java实现markdown增加目录"}},[a._v("#")]),a._v(" Java实现markdown增加目录")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#java%E5%AE%9E%E7%8E%B0markdown%E5%A2%9E%E5%8A%A0%E7%9B%AE%E5%BD%95"}},[a._v("Java实现markdown增加目录")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E9%9C%80%E6%B1%82"}},[a._v("需求")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#github%E5%9C%B0%E5%9D%80"}},[a._v("GitHub地址")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E5%AE%9E%E7%8E%B0%E6%AD%A5%E9%AA%A4"}},[a._v("实现步骤")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E5%AE%9E%E7%8E%B0%E6%95%88%E6%9E%9C"}},[a._v("实现效果")])])])])]),a._v(" "),s("h4",{attrs:{id:"需求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[a._v("#")]),a._v(" 需求")]),a._v(" "),s("p",[a._v("markdown的"),s("code",[a._v("[toc]")]),a._v("语法可以自动生成目录，但是上传到"),s("code",[a._v("github")]),a._v("之后目录会"),s("code",[a._v("失效")]),a._v("，所以需要手动为markdown文件添加目录。")]),a._v(" "),s("h4",{attrs:{id:"github地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github地址"}},[a._v("#")]),a._v(" GitHub地址")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/houbb/markdown-toc",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/houbb/markdown-toc"),s("OutboundLink")],1)]),a._v(" "),s("h4",{attrs:{id:"实现步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现步骤"}},[a._v("#")]),a._v(" 实现步骤")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("添加maven依赖")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("\x3c!--MD文件添加目录--\x3e\n<dependency>\n    <groupId>com.github.houbb</groupId>\n    <artifactId>markdown-toc</artifactId>\n    <version>1.0.2</version>\n</dependency>\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("测试类")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * 为指定MD文件生成目录\n * @author Albert\n * @date 2021/1/25 下午5:30\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MdCreateToc")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" macPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/Users/yangjunwei/IdeaProjects/concurrent-practice/src/test/java/com/albert/concurrent/md/READMEBak.md"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TocGen")]),a._v(" tocGen "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AtxMarkdownToc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("newInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("genTocFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("macPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n      \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//打印生成的目录内容")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("tocGen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br")])]),s("h4",{attrs:{id:"实现效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现效果"}},[a._v("#")]),a._v(" 实现效果")])])]),a._v(" "),s("p",[a._v("自动在md文件顶部增加目录内容")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210220125103.png",alt:"实现效果"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);