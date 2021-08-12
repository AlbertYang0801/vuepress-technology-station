(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{382:function(t,a,r){"use strict";r.r(a);var e=r(26),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"责任链模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#责任链模式"}},[t._v("#")]),t._v(" 责任链模式")]),t._v(" "),r("p",[t._v("责任链模式——某个请求需要多个对象进行处理，从而避免请求的发送者和接收之间的耦合关系。将这些对象连成一条链子，并沿着这条链子传递该请求，直到有对象处理它为止。主要涉及两个角色：")]),t._v(" "),r("ul",[r("li",[t._v("抽象处理者角色（Handler）：定义出一个处理请求的接口。这个接口通常由接口或抽象类来实现。")]),t._v(" "),r("li",[t._v("具体处理者角色（ConcreteHandler）：具体处理者接受到请求后，可以选择将该请求处理掉，或者将请求传给下一个处理者。因此，每个具体处理者需要保存下一个处理者的引用，以便把请求传递下去。")])]),t._v(" "),r("h3",{attrs:{id:"优缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[t._v("#")]),t._v(" 优缺点")]),t._v(" "),r("h4",{attrs:{id:"优点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),r("ul",[r("li",[t._v("降低耦合度。它将请求的发送者和接收者解耦")]),t._v(" "),r("li",[t._v("简化了对象，使得对象不需要知道链的结构")]),t._v(" "),r("li",[t._v("增强给对象指派职责的灵活性，允许动态地新增或者删除责任链")]),t._v(" "),r("li",[t._v("增加新的请求处理类方便")])]),t._v(" "),r("h4",{attrs:{id:"缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),r("ul",[r("li",[t._v("不能保证请求一定被接收；")]),t._v(" "),r("li",[t._v("当链条过长时，系统性能将受到一定影响，调试时不方便，可能会造成循环调用")])]),t._v(" "),r("h3",{attrs:{id:"源码中的应用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#源码中的应用"}},[t._v("#")]),t._v(" 源码中的应用")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("JDK的ClassLoader加载类"),r("code",[t._v("Launcher")]),t._v("。\n双亲委派模型里的层级委派就使用了责任链模式。")])]),t._v(" "),r("li",[r("p",[t._v("Spring中的拦截器（待研究）")])])]),t._v(" "),r("h3",{attrs:{id:"实战应用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实战应用"}},[t._v("#")]),t._v(" 实战应用")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://gitee.com/zztiyjw/gitbook-publish-autoscript",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/zztiyjw/gitbook-publish-autoscript"),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);