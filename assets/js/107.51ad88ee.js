(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{466:function(a,t,s){"use strict";s.r(t);var n=s(26),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"gitbook自动发布到github脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitbook自动发布到github脚本"}},[a._v("#")]),a._v(" Gitbook自动发布到GitHub脚本")]),a._v(" "),s("h2",{attrs:{id:"脚本概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚本概述"}},[a._v("#")]),a._v(" 脚本概述")]),a._v(" "),s("p",[a._v("我在使用 "),s("code",[a._v("Gitbook")]),a._v(" 的时候，搭配使用了GitHub Pages 搭建主页。由于 "),s("code",[a._v("Gitbook")]),a._v(" 静态文件发布到 "),s("code",[a._v("GitHub")]),a._v(" 较为繁琐，故开发了脚本来实现自动发布。")]),a._v(" "),s("h2",{attrs:{id:"本地文件介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地文件介绍"}},[a._v("#")]),a._v(" 本地文件介绍")]),a._v(" "),s("p",[a._v("首先在本地创建了一个存放 "),s("code",[a._v("Gitbook基础文件")]),a._v(" 的目录 "),s("code",[a._v("gitbook")]),a._v("，创建了一个 "),s("code",[a._v("Java项目")]),a._v(" 用来同步 "),s("code",[a._v("Gitbook生成的静态文件")]),a._v(" 到 "),s("code",[a._v("Github")]),a._v("。")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("gitbook 文件目录")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210222154231.png",alt:"gitbook目录"}})])]),a._v(" "),s("li",[s("p",[a._v("java 项目结构")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210222154325.png",alt:"Java项目结构"}})])])]),a._v(" "),s("h2",{attrs:{id:"传统发布流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传统发布流程"}},[a._v("#")]),a._v(" 传统发布流程")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("编写 md 文章。")])]),a._v(" "),s("li",[s("p",[a._v("使用 "),s("code",[a._v("gitbook build")]),a._v(" 命令生成 html 静态文件，使用后会在 "),s("code",[a._v("gitbook基础文件目录")]),a._v(" 下的 "),s("code",[a._v("_book")]),a._v(" 文件夹生成静态文件。")])]),a._v(" "),s("li",[s("p",[a._v("复制 "),s("code",[a._v("_book")]),a._v(" 文件夹下所有文件到 "),s("code",[a._v("java项目")]),a._v(" 根路径下。")])]),a._v(" "),s("li",[s("p",[a._v("使用 GIT 命令将 "),s("code",[a._v("java项目")]),a._v(" 新增内容同步到 github。")]),a._v(" "),s("p",[s("em",[a._v("由于发布流程的第 2、3、4 步太过繁琐，故开发一个脚本，按照顺序执行 2、3、4 步完成自动发布的功能。")])])])]),a._v(" "),s("h2",{attrs:{id:"自动脚本发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动脚本发布"}},[a._v("#")]),a._v(" 自动脚本发布")]),a._v(" "),s("blockquote",[s("p",[a._v("支持手动同步和定时同步，可实现 gitbook 文件一键 "),s("code",[a._v("gitbook build")]),a._v(",然后发布到 "),s("code",[a._v("GitHub")]),a._v(" 上。")])]),a._v(" "),s("h3",{attrs:{id:"手动同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动同步"}},[a._v("#")]),a._v(" 手动同步")]),a._v(" "),s("blockquote",[s("p",[a._v("不需要部署服务器")])]),a._v(" "),s("ol",[s("li",[s("p",[a._v("跳转到手动脚本："),s("a",{attrs:{href:"https://gitee.com/zztiyjw/gitbook-publish-autoscript/tree/master/src/main/java/com/albert/script/GitbookManualScript.java",target:"_blank",rel:"noopener noreferrer"}},[a._v("GitbookManualScript.java"),s("OutboundLink")],1)])]),a._v(" "),s("li",[s("p",[a._v("手动指定必要参数")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * gitbook本地目录\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" GITBOOK_PATH "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/Users/yangjunwei/gitbook"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * github对应本地项目目录\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" GITHUB_PROJECT_PATH "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/Users/yangjunwei/IdeaProjects/gitbook-technology"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * github对应remote\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" GITHUB_REMOTE "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"origin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * github分支名称\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" GITHUB_BRANCH "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"main"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("执行main()方法")])])]),a._v(" "),s("h3",{attrs:{id:"定时同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定时同步"}},[a._v("#")]),a._v(" 定时同步")]),a._v(" "),s("blockquote",[s("p",[a._v("可部署到服务器，参考安装教程")])]),a._v(" "),s("ol",[s("li",[s("p",[a._v("修改配置文件："),s("a",{attrs:{href:"config/application.properties"}},[a._v("application.properties ")]),a._v(" 中的属性值")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("#gitbook本地目录\ngitbook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Users")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("yangjunwei"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("gitbook\n#github项目本地路径\ngithub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Users")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("yangjunwei"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IdeaProjects")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("gitbook"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("technology\n#github的remote值\ngithub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("remote"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("origin\n#github分支名称\ngithub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("branch"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("main\n#定时同步gitbook的cron表达式\nauto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sync"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("gitbook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cron"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'0 0 23 * * *'")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])])])]),a._v(" "),s("p",[a._v("2.启动 "),s("a",{attrs:{href:"src/main/java/com/albert/Application.java"}},[a._v("Application.java")])]),a._v(" "),s("h3",{attrs:{id:"实现思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现思路"}},[a._v("#")]),a._v(" 实现思路")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("使用Java执行命令 "),s("code",[a._v("gitbook build")]),a._v("。")])]),a._v(" "),s("li",[s("p",[a._v("Java实现复制文件夹下的所有文件，将 "),s("code",[a._v("_book")]),a._v("文件夹下所有文件复制到Java项目根路径下。")])]),a._v(" "),s("li",[s("p",[a._v("使用 GIT 命令将 Java项目新增内容同步到 GitHub，同第一步一样，使用 Java 依次执行以下命令。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("git add "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\ngit commit "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("m "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\ngit push "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])])])]),a._v(" "),s("p",[a._v("​")])])}),[],!1,null,null,null);t.default=e.exports}}]);