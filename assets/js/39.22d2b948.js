(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{397:function(a,t,s){"use strict";s.r(t);var n=s(26),r=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"spring-框架概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-框架概述"}},[a._v("#")]),a._v(" Spring 框架概述")]),a._v(" "),s("h3",{attrs:{id:"一、什么是-spring-框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是-spring-框架"}},[a._v("#")]),a._v(" 一、什么是 Spring 框架？")]),a._v(" "),s("p",[a._v("Spring 框架指的是 Spring Framework，是一种轻量级的开发框架，主要核心是控制反转 （IOC）和 面向切面编程（AOP）。")]),a._v(" "),s("h3",{attrs:{id:"二、spring-的优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、spring-的优点"}},[a._v("#")]),a._v(" 二、Spring 的优点")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("方便解耦，简化开发（高内聚低耦合）")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("Spring 是一个容器框架，将所有对象创建和依赖关系的维护交给 Spring 管理。")])]),a._v(" "),s("li",[s("p",[a._v("Spring 工厂用于生成 Bean。")])])])]),a._v(" "),s("li",[s("p",[a._v("AOP编程的支持")]),a._v(" "),s("ul",[s("li",[a._v("Spring 提供面向切面编程，可以方便的实现权限拦截、运行监控等功能")]),a._v(" "),s("li",[a._v("日志打印")])])]),a._v(" "),s("li",[s("p",[a._v("支持声明式事务")]),a._v(" "),s("ul",[s("li",[a._v("只需要通过配置就可以完成对事务的管理，而无需手动编程")])])]),a._v(" "),s("li",[s("p",[a._v("方便程序测试")]),a._v(" "),s("ul",[s("li",[a._v("Spring 支持 Junit4等测试框架，可以通过注解进行方便的测试。")])])]),a._v(" "),s("li",[s("p",[a._v("方便集成各种框架")]),a._v(" "),s("ul",[s("li",[a._v("Spring支持集成各种框架。（如：Mybatis、ActiveMQ等）")])])]),a._v(" "),s("li",[s("p",[a._v("内部封装各种API")]),a._v(" "),s("ul",[s("li",[a._v("Spring 内部封装了很多方便实用的 API。（如：JDBC、JavaMail等）")])])])]),a._v(" "),s("h3",{attrs:{id:"三、什么是-ioc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、什么是-ioc"}},[a._v("#")]),a._v(" 三、什么是 IOC ？")]),a._v(" "),s("p",[a._v("IOC（控制反转）是一种设计思想，将原本在程序中手动创建对象的控制权，交给 Spring 框架来管理。")]),a._v(" "),s("p",[a._v("IOC 容器是 Spring 用来实现 IOC 的载体。将对象之间的相互依赖关系交给 IOC 容器来管理，并由 IOC容器完成对象的注入。IOC 容器就像是一个工厂一样，当我们需要创建一个对象的时候，只需要配置对应注解即可，完全不用考虑对象是如何创建出来的，同时也保证了对象之间的松耦合。")]),a._v(" "),s("p",[a._v("总结来说 IOC 就是对 Bean 的注册管理，由 IOC 容器帮对象找相应的依赖对象并注入，而不是由对象主动去找。")]),a._v(" "),s("h4",{attrs:{id:"ioc-中的设计模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ioc-中的设计模式"}},[a._v("#")]),a._v(" IOC 中的设计模式")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("简单工厂模式")]),a._v(" "),s("p",[a._v("Spring 中的 BeanFactory 就是简单工厂的体现，根据传入的标识获取 Bean 对象。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeanFactory")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeansException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  \n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("工厂模式")]),a._v(" "),s("p",[a._v("Spring 中的 FactoryBean 就用到了工厂模式，对应的 "),s("code",[a._v("getObject()")]),a._v(" 方法可以返回一个对应的对象。")]),a._v(" "),s("p",[a._v("具体可参考： "),s("RouterLink",{attrs:{to:"/frame/spring/FactoryBean.html"}},[a._v("FactoryBean总结")])],1)]),a._v(" "),s("li",[s("p",[a._v("单例模式")]),a._v(" "),s("p",[a._v("在Spring中，所有的 Bean 默认都是单例创建的。")])]),a._v(" "),s("li",[s("p",[a._v("策略模式")])]),a._v(" "),s("li",[s("p",[a._v("装饰器模式")])])]),a._v(" "),s("h3",{attrs:{id:"四、什么是-aop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、什么是-aop"}},[a._v("#")]),a._v(" 四、什么是 AOP？")]),a._v(" "),s("p",[a._v("AOP（面向切面编程）能够将那些与业务无关，却为业务模块所共同调用的逻辑或责任（如事务管理、日志管理、权限控制等）封装起来，便于减少系统的重复代码，降低模块间的耦合度，并有利于未来的可扩展性和可维护性。")]),a._v(" "),s("h4",{attrs:{id:"动态代理和静态代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态代理和静态代理"}},[a._v("#")]),a._v(" 动态代理和静态代理")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("动态代理")]),a._v(" "),s("p",[a._v("以 Spring AOP 为代表。指代理类在JVM运行时动态生成的。效率会低一点，但是大大提高了代码的简洁度和开发工作。")])]),a._v(" "),s("li",[s("p",[a._v("静态代理")]),a._v(" "),s("p",[a._v("以 AspectJ 为代表。指代理类在编译期生成的，与动态代理相比，效率会很高，但是会生成大量代理类。")])])]),a._v(" "),s("h4",{attrs:{id:"springaop-和-aspectj-有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springaop-和-aspectj-有什么区别"}},[a._v("#")]),a._v(" SpringAOP 和 AspectJ 有什么区别？")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("SpringAOP 属于"),s("code",[a._v("运行时增强")]),a._v("，而 AspectJ 属于"),s("code",[a._v("编译期增强")]),a._v("。")])]),a._v(" "),s("li",[s("p",[a._v("SpringAOP 基于动态代理实现，而 AspectJ 属于静态代理。")])]),a._v(" "),s("li",[s("p",[a._v("SpringAOP 已经集成了 AspectJ ，AspectJ 相比于 SpringAOP 功能更加强大，但是 SpringAOP 更简单。")])])]),a._v(" "),s("h4",{attrs:{id:"springaop-动态代理的两种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springaop-动态代理的两种方式"}},[a._v("#")]),a._v(" SpringAOP 动态代理的两种方式？")]),a._v(" "),s("ul",[s("li",[a._v("JDK 动态代理")]),a._v(" "),s("li",[a._v("CGlib 动态代理")])]),a._v(" "),s("h3",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[a._v("#")]),a._v(" 参考链接")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://snailclimb.gitee.io/javaguide/#/docs/system-design/framework/spring/Spring%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93?id=_1-%e4%bb%80%e4%b9%88%e6%98%af-spring-%e6%a1%86%e6%9e%b6",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaGuide-Spring框架"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/wanghuaying/p/9678349.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("博客园：Spring 框架概述"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://javadoop.com/post/spring-ioc",target:"_blank",rel:"noopener noreferrer"}},[a._v("Spring IOC 容器源码分析"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);