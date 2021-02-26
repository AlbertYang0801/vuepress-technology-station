(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{383:function(s,n,a){"use strict";a.r(n);var e=a(40),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"同步代码块和同步方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步代码块和同步方法"}},[s._v("#")]),s._v(" 同步代码块和同步方法")]),s._v(" "),a("h3",{attrs:{id:"同步代码块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步代码块"}},[s._v("#")]),s._v(" 同步代码块")]),s._v(" "),a("hr"),s._v(" "),a("blockquote",[a("p",[s._v("重点是保证多个线程的锁对象是一致的。")])]),s._v(" "),a("ul",[a("li",[s._v("this作为锁对象")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//this的锁对象指当前类的实例\nsynchronized (this) {\n    i++;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("当前类作为锁对象")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//使用当前类作为锁对象\nsynchronized (SynchrodizedCodebolck.class) {\n    x++;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("不变对象作为锁对象")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("static final Object OBJECT = new Object();\n//正确使用对象作为锁\nsynchronized (OBJECT) {\n    n++;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("参考："),a("a",{attrs:{href:"src/main/java/com/albert/concurrent/synchronizedprac/SynchrodizedCodebolck.java"}},[s._v("synchronized同步代码块的练习")])]),s._v(" "),a("h3",{attrs:{id:"同步方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步方法"}},[s._v("#")]),s._v(" 同步方法")]),s._v(" "),a("hr"),s._v(" "),a("blockquote",[a("p",[s._v("synchronized加在普通方法上或者静态方法上，可实现同步方法。")])]),s._v(" "),a("ul",[a("li",[s._v("同步普通方法")])]),s._v(" "),a("blockquote",[a("p",[s._v("普通同步方法，锁对象为当前类的实例对象等同于this。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    public synchronized void increaseI() {\n        i++;\n    }\n    等价于\n    public void increase() {\n        synchronized (this) {\n            i++;\n        }\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("同步静态方法")])]),s._v(" "),a("blockquote",[a("p",[s._v("静态同步方法，锁对象为当前类对象")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    private synchronized static void increaseM() {\n        m++;\n    }\n    等价于\n    private static void increase() {\n        synchronized (NumberOperatingStatic.class) {\n            m++;\n        }\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);