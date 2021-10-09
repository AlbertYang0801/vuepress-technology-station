(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{433:function(_,v,t){"use strict";t.r(v);var a=t(26),r=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"jvm内存模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm内存模型"}},[_._v("#")]),_._v(" JVM内存模型")]),_._v(" "),t("p",[_._v("Java 内存模型在 JDK1.7 主要包含以下区域。")]),_._v(" "),t("ul",[t("li",[_._v("程序计数器")]),_._v(" "),t("li",[_._v("虚拟机栈")]),_._v(" "),t("li",[_._v("本地方法栈")]),_._v(" "),t("li",[_._v("方法区")]),_._v(" "),t("li",[_._v("堆")])]),_._v(" "),t("p",[_._v("而在 JDK1.8中将运行时数据区中的方法区给取消了，换成了本地内存中的元数据区。")]),_._v(" "),t("ul",[t("li",[_._v("程序计数器")]),_._v(" "),t("li",[_._v("虚拟机栈")]),_._v(" "),t("li",[_._v("本地方法栈")]),_._v(" "),t("li",[_._v("堆")]),_._v(" "),t("li",[_._v("元数据区")])]),_._v(" "),t("h2",{attrs:{id:"内存模型图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存模型图"}},[_._v("#")]),_._v(" 内存模型图")]),_._v(" "),t("ol",[t("li",[_._v("JDK 1.7 内存模型图")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210611155359.png",alt:""}})]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[_._v("JDK 1.8 内存模型图")]),_._v(" "),t("p",[_._v("JDK1.8中取消了运行时数据区中的方法区，换成了元数据区放到了本地内存里。")])])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210611160927.png",alt:""}})]),_._v(" "),t("h2",{attrs:{id:"运行时数据区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行时数据区"}},[_._v("#")]),_._v(" 运行时数据区")]),_._v(" "),t("h3",{attrs:{id:"_1、程序计数器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、程序计数器"}},[_._v("#")]),_._v(" 1、程序计数器")]),_._v(" "),t("p",[_._v("程序计数器保存的是程序执行到的指令地址。程序计数器是是线程私有的，各个线程之间互不影响。")]),_._v(" "),t("ul",[t("li",[_._v("如果线程执行的是非 native 方法，则程序计数器保存的是当前需要执行的指令地址。")]),_._v(" "),t("li",[_._v("如果线程执行的是 native 方法，则程序计数器中的值是 undefined。")])]),_._v(" "),t("p",[_._v("由于程序计数器保存的数据占用空间不会随程序执行而改变，因为程序计数器是内存区域中没有规定 "),t("code",[_._v("OutOfMemoryError")]),_._v(" 情况的区域。")]),_._v(" "),t("h3",{attrs:{id:"_2、虚拟机栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、虚拟机栈"}},[_._v("#")]),_._v(" 2、虚拟机栈")]),_._v(" "),t("p",[_._v("虚拟机栈是常说的栈内存，是 Java 方法执行的区域，虚拟机栈存放的是一个个"),t("code",[_._v("栈帧")]),_._v("，每个栈帧对应一个调用的方法。虚拟机栈是线程私有的，每个线程都有自己的虚拟机栈，保存了线程私有的 Java 方法。")]),_._v(" "),t("p",[_._v("**栈帧 **包含 "),t("strong",[_._v("局部变量表、操作数栈、指向运行时常量池的引用、方法返回地址、附加信息")]),_._v("。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/Snipaste_2021-06-16_22-44-43.png",alt:""}})]),_._v(" "),t("ul",[t("li",[t("p",[_._v("局部变量表")]),_._v(" "),t("blockquote",[t("p",[_._v("主要用来保存方法中的局部变量，包含方法中声明的非静态变量和函数形参。")])]),_._v(" "),t("ul",[t("li",[_._v("基本数据类型保存"),t("strong",[_._v("值")]),_._v("。")]),_._v(" "),t("li",[_._v("引用类型保存的是"),t("strong",[_._v("对象引用地址")]),_._v("。")])]),_._v(" "),t("p",[_._v("局部变量表的大小在编译器可以指定其大小，因此在程序执行期间局部变量表的大小是不会改变的。")])]),_._v(" "),t("li",[t("p",[_._v("操作数栈")]),_._v(" "),t("blockquote",[t("p",[_._v("是方法中进行数据运算的地方。用来计算表达式求值，程序中的计算过程都是借助于操作数栈来完成的。")])])]),_._v(" "),t("li",[t("p",[_._v("指向引用时常量池的引用")]),_._v(" "),t("blockquote",[t("p",[_._v("因为在方法执行的过程中可能需要用到类中的变量，所以每个方法也就是栈帧需要保存一个执行运行时常量的引用。")])]),_._v(" "),t("p",[_._v("运行时常量池在方法区中。")])]),_._v(" "),t("li",[t("p",[_._v("方法返回地址")]),_._v(" "),t("blockquote",[t("p",[_._v("在线程中，每个方法执行完成之后，需要返回到之前调用它的地方。所以在栈帧中需要保存方法的返回地址。由于每个线程执行的方法可能不同，所以每个线程都要有一个自己的虚拟机栈。")])]),_._v(" "),t("p",[_._v("当线程执行一个方法的时候，对应创建一个栈帧压栈。当方法执行完毕之后，便会将栈帧出栈。线程当前执行的方法必定位于虚拟机栈的顶部。")]),_._v(" "),t("p",[_._v("在该区域会发生两种异常：")]),_._v(" "),t("ul",[t("li",[_._v("如果线程请求的栈大于虚拟机允许的深度，会抛出 "),t("code",[_._v("StackOverFlowError")]),_._v(" 异常。")]),_._v(" "),t("li",[_._v("如果虚拟机栈可以动态扩展，当扩展到无法申请到足够内存时，就会抛出 "),t("code",[_._v("OutOfMemoryError")]),_._v(" 异常。")])])])]),_._v(" "),t("h3",{attrs:{id:"_3、本地方法栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、本地方法栈"}},[_._v("#")]),_._v(" 3、本地方法栈")]),_._v(" "),t("p",[_._v("本地方法栈和虚拟机栈的作用很相似，虚拟机栈为虚拟机执行 Java 方法，而本地方法栈则为 Java 方法使用到的本地方法服务（navite 方法）。相同的本地方法栈也可能抛出 "),t("code",[_._v("StackOverFlowError")]),_._v(" 和 "),t("code",[_._v("OutOfMemoryError")]),_._v(" 异常。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/123.png",alt:""}})]),_._v(" "),t("h3",{attrs:{id:"_4、堆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、堆"}},[_._v("#")]),_._v(" 4、堆")]),_._v(" "),t("p",[_._v("堆是 JVM 内存管理最大的一块区域，堆存放的是内存的实例，所有对象实例都要在堆上分配内存。Java 堆可以处于物理上不连续的空间，只要逻辑上是连续的即可。")]),_._v(" "),t("p",[_._v("堆空间是线程共享的一个区域。若堆内存不足以创建新对象实例时，将抛出 "),t("code",[_._v("OutOfMemoryError")]),_._v(" 异常。")]),_._v(" "),t("p",[_._v("堆是垃圾收集器的主要管理区域，为了支持垃圾回收，堆被划分为三个区域。")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("年轻代")]),_._v(" "),t("p",[_._v("年轻代被划分为 "),t("strong",[_._v("Eden区、S1区和 S2区")]),_._v("（空间分配比例是 8:1:1）。")])]),_._v(" "),t("li",[t("p",[_._v("老年代")])]),_._v(" "),t("li",[t("p",[_._v("永久代（JDK 1.8 已经移除永久代）")])])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210617202525.png",alt:""}})]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210617202509.png",alt:""}})]),_._v(" "),t("h3",{attrs:{id:"_5、方法区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、方法区"}},[_._v("#")]),_._v(" 5、方法区")]),_._v(" "),t("p",[_._v("方法区在 JVM 中也是一个非常重要的区域，是线程共享的内存区域。")]),_._v(" "),t("p",[_._v("在方法区中，存储了每个类的信息（包含类名称、方法信息、字段信息）、静态变量、常量以及编译后的代码等。方法区是堆的一个逻辑部分，为了区分 Java 堆，它还有一个别名叫 Non - Heap （非堆）。")]),_._v(" "),t("p",[_._v("当方法区无法满足内存分配时，将抛出 "),t("code",[_._v("OutOfMemoryError")]),_._v(" 异常。")]),_._v(" "),t("p",[_._v("方法区是 JVM 中的一种规范定义,在 JDK 1.7 以及之前版本，永久代是方法区的实现。在 JDK 1.8 方法区的实现是元数据区。")]),_._v(" "),t("h3",{attrs:{id:"_6、运行时常量池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、运行时常量池"}},[_._v("#")]),_._v(" 6、运行时常量池")]),_._v(" "),t("p",[_._v("运行时常量池是方法区的一部分，用于存放编译期生成的各种字面量和符号引用，这部分内容将在被类加载后，进去方法区的运行时常量池中存放。")]),_._v(" "),t("p",[_._v("运行时常量池的重要特征是具备动态性，运行期间也可以把新的常量放进运行时常量池。 String 的 "),t("code",[_._v("intern()")]),_._v(" 方法就可实现这一特征。")]),_._v(" "),t("h3",{attrs:{id:"_7、直接内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、直接内存"}},[_._v("#")]),_._v(" 7、直接内存")]),_._v(" "),t("p",[_._v("直接内存是 JDK 1.8 之后被利用到的区域，并不是虚拟机运行时数据区的一部分，但是这部分内存由于取代了方法区，会被频繁使用也可能导致 "),t("code",[_._v("OutOfMemory")]),_._v(" 异常。")]),_._v(" "),t("h2",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[_._v("#")]),_._v(" 常见问题")]),_._v(" "),t("h3",{attrs:{id:"_1-jdk-1-7-和-jdk-1-8-内存模型发生的变化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-jdk-1-7-和-jdk-1-8-内存模型发生的变化"}},[_._v("#")]),_._v(" 1. JDK 1.7 和 JDK 1.8 内存模型发生的变化？")]),_._v(" "),t("p",[_._v("最大的变化就是在 JDK 1.8 中 元数据区取代了永久代。永久代位于虚拟机运行时数据区，而元数据区位于本地内存中。")]),_._v(" "),t("h3",{attrs:{id:"_2-方法区和永久代的区分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-方法区和永久代的区分"}},[_._v("#")]),_._v(" 2. 方法区和永久代的区分？")]),_._v(" "),t("p",[_._v("方法区是 JVM 中的一种规范定义，永久代是其具体的实现，在 JDK 1.8 中 元空间也是方法区的一种实现。")]),_._v(" "),t("h3",{attrs:{id:"_3-为什么取消永久代"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-为什么取消永久代"}},[_._v("#")]),_._v(" 3. 为什么取消永久代？")]),_._v(" "),t("ul",[t("li",[_._v("根据官方文档的解释，是为了融合 "),t("code",[_._v("HotSpot JVM")]),_._v(" 和 "),t("code",[_._v("JRockit VM")]),_._v(" 做出的努力，因为 "),t("code",[_._v("JRockit VM")]),_._v(" 没有永久代，不需要配置。")]),_._v(" "),t("li",[_._v("永久代大小指定比较困难，因为存放类和方法信息大小不易确定，并且永久代使用比较频繁，容易发生内存不够用的情况，即容易内存溢出。")]),_._v(" "),t("li",[_._v("永久代容易发生内存泄漏，永久代中的一些类不使用时，也不容易被 GC 回收，容易造成内存泄漏问题。")])]),_._v(" "),t("h3",{attrs:{id:"_4-什么是内存溢出和内存泄漏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-什么是内存溢出和内存泄漏"}},[_._v("#")]),_._v(" 4. 什么是内存溢出和内存泄漏？")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("内存溢出")]),_._v(" "),t("p",[_._v("当创建新对象的时候无法申请到足够的内存时，就会发生内存溢出。")])]),_._v(" "),t("li",[t("p",[_._v("内存泄露")]),_._v(" "),t("p",[_._v("对象位于内存中不被使用，但是无法被 GC 回收掉，始终堆积在内存中。当堆积到一定程度会发生内存溢出。")])])]),_._v(" "),t("h2",{attrs:{id:"参考链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[_._v("#")]),_._v(" 参考链接")]),_._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844903909983535111#heading-8",target:"_blank",rel:"noopener noreferrer"}},[_._v("Java内存管理-JVM内存模型以及JDK7和JDK8内存模型对比总结（三）"),t("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=r.exports}}]);