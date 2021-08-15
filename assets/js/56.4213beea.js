(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{415:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"多线程基础总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多线程基础总结"}},[t._v("#")]),t._v(" 多线程基础总结")]),t._v(" "),s("h3",{attrs:{id:"多线程三大特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多线程三大特性"}},[t._v("#")]),t._v(" 多线程三大特性")]),t._v(" "),s("h4",{attrs:{id:"_1-原子性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-原子性"}},[t._v("#")]),t._v(" 1. 原子性")]),t._v(" "),s("p",[t._v("原子性是指在一个操作中就是 CPU 不可以在中途暂停然后再调度，既不被中断操作，要不执行完成，要不就不执行。\n如果一个操作是原子性的，那么多线程并发的情况下，就不会出现变量被修改的情况。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("比如 "),s("code",[t._v("a = 0")]),t._v("；（ a  非 "),s("code",[t._v("long")]),t._v(" 和 "),s("code",[t._v("double")]),t._v(" 类型） 这个操作是不可分割的，那么我们说这个操作是原子操作。")])]),t._v(" "),s("li",[s("p",[t._v("再比如 "),s("code",[t._v("a++")]),t._v(" ； 这个操作实际是 "),s("code",[t._v("a = a + 1")]),t._v(" ；是可分割的，所以它不是一个原子操作。")])])]),t._v(" "),s("p",[t._v("非原子操作都会存在线程安全问题，需要我们使用同步技术（ "),s("code",[t._v("sychronized")]),t._v(" 等）来让它变成一个原子操作。一个操作是原子操作，那么我们称它具有原子性。")]),t._v(" "),s("p",[t._v("Java 的 "),s("code",[t._v("concurrent")]),t._v(" 包下提供了一些原子类，我们可以通过阅读 API 来了解这些原子类的用法。")]),t._v(" "),s("p",[t._v("比如："),s("code",[t._v("AtomicInteger")]),t._v("、"),s("code",[t._v("AtomicLong")]),t._v("、"),s("code",[t._v("AtomicReference")]),t._v(" 等。")]),t._v(" "),s("p",[t._v("（由 Java 内存模型来直接保证的原子性变量操作包括 "),s("code",[t._v("read")]),t._v("、 "),s("code",[t._v("load")]),t._v("、 "),s("code",[t._v("use")]),t._v("、 "),s("code",[t._v("assign")]),t._v("、 "),s("code",[t._v("store")]),t._v(" 和 "),s("code",[t._v("write")]),t._v(" 六个，大致可以认为基础数据类型的访问和读写是具备原子性的。如果应用场景需要一个更大范围的原子性保证，Java 内存模型还提供了 "),s("code",[t._v("lock")]),t._v(" 和 "),s("code",[t._v("unlock")]),t._v(" 操作来满足这种需求，尽管虚拟机未把 "),s("code",[t._v("lock")]),t._v(" 与 "),s("code",[t._v("unlock")]),t._v(" 操作直接开放给用户使用，但是却提供了更高层次的字节码指令 "),s("code",[t._v("monitorenter")]),t._v(" 和 "),s("code",[t._v("monitorexit")]),t._v(" 来隐匿地使用这两个操作，这两个字节码指令反映到 Java 代码中就是同步关键字 "),s("code",[t._v("synchronized")]),t._v("，因此在 "),s("code",[t._v("synchronized")]),t._v(" 块之间的操作也具备原子性。）")]),t._v(" "),s("p",[s("strong",[t._v("1.1  Java 中的原子性")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("除了 "),s("code",[t._v("long")]),t._v(" 和 "),s("code",[t._v("double")]),t._v(" 类型的赋值操作。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("原因：")]),t._v(" "),s("p",[t._v("在 32 位长度操作系统中，"),s("code",[t._v("long")]),t._v(" 和 "),s("code",[t._v("double")]),t._v(" 类型的赋值不是原子操作。\n因为 "),s("code",[t._v("long")]),t._v(" 和 "),s("code",[t._v("double")]),t._v(" 都是 64 位的，在 32 位系统上，对 "),s("code",[t._v("long")]),t._v(" 和 "),s("code",[t._v("double")]),t._v(" 类型的数据进行读写都要分为两步完成。若同时两个线程同时写一个变量内存，一个写低 8 位，一个写高 8 位，就会导致无效数据出现。")])]),t._v(" "),s("li",[s("p",[t._v("解决办法：")]),t._v(" "),s("p",[s("code",[t._v("long")]),t._v(" 和 "),s("code",[t._v("double")]),t._v(" 类型声明为 "),s("code",[t._v("volatile")]),t._v(" 。"),s("code",[t._v("Java")]),t._v(" 的内存模型保证声明为 "),s("code",[t._v("volatile")]),t._v(" 的 "),s("code",[t._v("long")]),t._v(" 和 "),s("code",[t._v("double")]),t._v(" 变量的 "),s("code",[t._v("get")]),t._v(" 和 "),s("code",[t._v("set")]),t._v(" 操作是原子的。")])])])]),t._v(" "),s("li",[s("p",[t._v("所有引用 "),s("code",[t._v("reference")]),t._v(" 的赋值操作(如 "),s("code",[t._v("AtomicReference")]),t._v(" )。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("java.concurrent.Atomic.*")]),t._v(" 包中所有类的一切操作。")])])]),t._v(" "),s("p",[s("strong",[t._v("1.2  如何保证原子性")])]),t._v(" "),s("ul",[s("li",[t._v("使用 "),s("code",[t._v("synchronized")]),t._v(" 关键字定义同步代码块或同步方法来保证原子性。")]),t._v(" "),s("li",[t._v("受用 "),s("code",[t._v("lock")]),t._v(" 加锁来保证原子性。")]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("Atomic")]),t._v(" 相关类保证原子性。")])]),t._v(" "),s("p",[s("strong",[t._v("1.3  参考链接")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/blob/master/src/test/java/com/albert/concurrent/book/chapterone/ThreadAtomicity_01.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("原子性练习"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"_2-可见性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-可见性"}},[t._v("#")]),t._v(" 2. 可见性")]),t._v(" "),s("p",[t._v("当一个线程修改了共享变量的值，其他线程能够看到修改的值。Java 内存模型是通过在变量修改后将新值同步回主内存，在变量读取前从主内存刷新变量值这种依赖主内存作为传递媒介的方法来实现可见性的。")]),t._v(" "),s("p",[s("strong",[t._v("2.1  如何保证可见性")])]),t._v(" "),s("ul",[s("li",[t._v("通过 "),s("code",[t._v("volatile")]),t._v(" 关键字标记变量保证可见性。")]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("synchronized")]),t._v(" 关键字定义同步代码块或同步方法来保证可见性。")]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("lock")]),t._v(" 加锁来保证可见性。")]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("Atomic")]),t._v(" 相关类保证可见性。")]),t._v(" "),s("li",[t._v("通过 "),s("code",[t._v("final")]),t._v(" 关键字来保证可见性。")])]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"_3-有序性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-有序性"}},[t._v("#")]),t._v(" 3. 有序性")]),t._v(" "),s("p",[t._v("即程序执行的顺序按照代码的先后顺序执行。Java 存在指令重排，所以存在有序性问题。")]),t._v(" "),s("p",[s("strong",[t._v("3.1 如何保证有序性")])]),t._v(" "),s("ul",[s("li",[t._v("通过 "),s("code",[t._v("volatile")]),t._v(" 关键字标记变量保证有序性。")]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("synchronized")]),t._v(" 关键字定义同步代码块或同步方法来保证有序性。")]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("lock")]),t._v(" 加锁来保证有序性。")])]),t._v(" "),s("p",[t._v("参考博客："),s("a",{attrs:{href:"https://www.cnblogs.com/weixuqin/p/11424688.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("并发三大特性"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"线程创建的三种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程创建的三种方式"}},[t._v("#")]),t._v(" 线程创建的三种方式")]),t._v(" "),s("h4",{attrs:{id:"_1-thread"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-thread"}},[t._v("#")]),t._v(" 1. Thread")]),t._v(" "),s("p",[t._v("不推荐使用。")]),t._v(" "),s("p",[t._v("线程类继承 Thread，由于Java 是单继承，不易于扩展，所以不推荐使用继承来实现并发类。\n注意：直接调用 "),s("code",[t._v("run()")]),t._v(" 方法，相当于调用了该方法，没有开启新线程。只有调用 "),s("code",[t._v("start()")]),t._v(" 方法，才是开启了一个新线程和主线程争夺资源。")]),t._v(" "),s("h4",{attrs:{id:"_2-ruunable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-ruunable"}},[t._v("#")]),t._v(" 2. Ruunable")]),t._v(" "),s("p",[t._v("推荐使用。")]),t._v(" "),s("p",[t._v("线程类继承 Runnable，需要作为 "),s("code",[t._v("Thread")]),t._v(" 类的参数创建线程，也可以与线程池捆绑使用。没有结果返回。")]),t._v(" "),s("h4",{attrs:{id:"_3-callable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-callable"}},[t._v("#")]),t._v(" 3. Callable")]),t._v(" "),s("p",[t._v("推荐使用。")]),t._v(" "),s("p",[t._v("线程类继承 Callable， 可与 "),s("code",[t._v("FutureTask")]),t._v(" 搭配使用，也可以与线程池捆绑使用，搭配 "),s("code",[t._v("Future")]),t._v(" 获取任务执行完成的返回值。有结果返回。")]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/blob/master/src/main/java/com/albert/concurrent/basic/create",target:"_blank",rel:"noopener noreferrer"}},[t._v("线程的三种创建方式练习目录"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"线程停止"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程停止"}},[t._v("#")]),t._v(" 线程停止")]),t._v(" "),s("h4",{attrs:{id:"停止方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#停止方法"}},[t._v("#")]),t._v(" 停止方法")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("stop()")]),t._v(" 方法(不推荐使用)\n"),s("code",[t._v("stop()")]),t._v(" 方法被调用的时候，会直接释放线程拥有的锁对象，这样会破坏临界区的原子性。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("stop()")]),t._v(" 方法的优化\n优化 "),s("code",[t._v("stop()")]),t._v(" 方法，在调用时不直接释放锁资源，保证临界区资源执行完成后再释放锁资源。")])])]),t._v(" "),s("h4",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/blob/master/src/test/java/com/albert/concurrent/book/chaptertwo/ThreadStop_01.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("stop 方法的练习"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/blob/master/src/test/java/com/albert/concurrent/book/chaptertwo/ThreadStopResolve_02.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("stop 方法的优化练习"),s("OutboundLink")],1)])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"线程中断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程中断"}},[t._v("#")]),t._v(" 线程中断")]),t._v(" "),s("p",[t._v("线程中断并不会立即将线程退出，而是发出一个中断信号。目标线程接收中断信号后，如何退出由目标线程的逻辑决定。")]),t._v(" "),s("h4",{attrs:{id:"常用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用方法"}},[t._v("#")]),t._v(" 常用方法")]),t._v(" "),s("p",[t._v("Java 中 "),s("code",[t._v("Thread")]),t._v(" 类提供了关于线程中断的三个方法：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("interrupt()")]),t._v(" : 中断线程。")]),t._v(" "),s("li",[s("code",[t._v("isInterrupted()")]),t._v(" : 判断线程中断的状态。")]),t._v(" "),s("li",[s("code",[t._v("interrupted()")]),t._v(" : 判断线程中断的状态，并重置中断标志。实际是调用了 "),s("code",[t._v("isInterrupted()")]),t._v(" 方法，并传入中断标志数据。")])]),t._v(" "),s("h4",{attrs:{id:"参考链接-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接-2"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/blob/master/src/test/java/com/albert/concurrent/book/chaptertwo/ThreadInterruption_03.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("线程中断的相关练习"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"线程等待-wait-和通知-notify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程等待-wait-和通知-notify"}},[t._v("#")]),t._v(" 线程等待(wait)和通知(notify)")]),t._v(" "),s("h4",{attrs:{id:"常用方法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用方法-2"}},[t._v("#")]),t._v(" 常用方法")]),t._v(" "),s("p",[s("code",[t._v("wait()")]),t._v(" 方法和 "),s("code",[t._v("notify()")]),t._v(" 方法是 "),s("code",[t._v("Object")]),t._v(" 类里的方法，意味着任何对象都可以调用这两个方法。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("wait()")]),t._v(" 方法使用时会释放锁对象，进入等待。")]),t._v(" "),s("li",[s("code",[t._v("notify()")]),t._v("会随机唤醒一个等待的线程，被唤醒的线程会重新竞争锁对象。")]),t._v(" "),s("li",[t._v("还有一个方法"),s("code",[t._v("notifyAll()")]),t._v(" ，会唤醒所有进入等待的线程。")])]),t._v(" "),s("p",[t._v("注意：不论是 "),s("code",[t._v("wait()")]),t._v(" 方法还是 "),s("code",[t._v("notify()")]),t._v(" 方法，都需要获取锁对象才能调用。")]),t._v(" "),s("h4",{attrs:{id:"参考链接-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接-3"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/blob/master/src/test/java/com/albert/concurrent/book/chaptertwo/ThreadWaitAndNotify_04.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("wait 和 notify的相关练习"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"扩展知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展知识"}},[t._v("#")]),t._v(" 扩展知识")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("Thread.sleep()")]),t._v(" 方法和 "),s("code",[t._v("Object.wait()")]),t._v(" 一样也可以让线程等待，而 "),s("code",[t._v("sleep()")]),t._v(" 可以指定等待时间，"),s("code",[t._v("wait()")]),t._v(" 可以被唤醒。还有一个主要区别，"),s("code",[t._v("wait()")]),t._v(" 会释放目标对象的锁，而 "),s("code",[t._v("sleep()")]),t._v(" 不会释放任何资源。")]),t._v(" "),s("li",[s("code",[t._v("Lock")]),t._v(" 有一个好搭档 "),s("code",[t._v("Condition")]),t._v(" 实现的功能和 "),s("code",[t._v("wait")]),t._v(" 和 "),s("code",[t._v("notify")]),t._v(" 基本一致，只不过 "),s("code",[t._v("Condition")]),t._v(" 依赖于 "),s("code",[t._v("Lock")]),t._v("。")])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"挂起-suspend-和继续执行-resume"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#挂起-suspend-和继续执行-resume"}},[t._v("#")]),t._v(" 挂起(suspend)和继续执行(resume)")]),t._v(" "),s("h4",{attrs:{id:"常用方法-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用方法-3"}},[t._v("#")]),t._v(" 常用方法")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("suspend()")]),t._v(" 会阻塞当前线程，但是不会释放锁对象。（不推荐使用，推荐使用并发工具 - "),s("code",[t._v("LockSupport")]),t._v(" ）")]),t._v(" "),s("li",[s("code",[t._v("resume()")]),t._v(" 会取消当前线程的阻塞状态。")])]),t._v(" "),s("p",[t._v("注意："),s("code",[t._v("Thread.suspend()")]),t._v(" 阻塞当前线程时，不会释放锁对象。若不调用 "),s("code",[t._v("resume()")]),t._v(" 方法，或者在 "),s("code",[t._v("suspend()")]),t._v(" 方法调用之前调用了 "),s("code",[t._v("resume()")]),t._v(" 方法，则该线程会一直持有锁对象，进而造成死锁。")]),t._v(" "),s("h4",{attrs:{id:"参考链接-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接-4"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/blob/master/src/test/java/com/albert/concurrent/book/chaptertwo/ThreadSuspendAndResume_05.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("suspend 和 resume 的相关练习"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"等待线程结束-join-和-礼让线程-yeild"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#等待线程结束-join-和-礼让线程-yeild"}},[t._v("#")]),t._v(" 等待线程结束(join) 和 礼让线程(yeild)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("join()")]),t._v(" : 等待调用线程执行结束。")])]),t._v(" "),s("p",[s("strong",[t._v("源码分析")])]),t._v(" "),s("p",[s("code",[t._v("join()")]),t._v(" 实际上是调用了 "),s("code",[t._v("wait()")]),t._v(" 方法，在当前线程实例上实现了线程等待。而线程在执行完成之前会调用 "),s("code",[t._v("notifyAll()")]),t._v(" 方法通知等待线程继续执行。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" millis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" base "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentTimeMillis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" now "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("millis "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IllegalArgumentException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"timeout value is negative"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("millis "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isAlive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isAlive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" delay "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" millis "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" now"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delay "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                now "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentTimeMillis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通知本地方法实现线程等待")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("native")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br")])]),s("ul",[s("li",[s("code",[t._v("yeild()")]),t._v(" 方法：让出线程资源,但是会重新竞争。")])]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/blob/master/src/test/java/com/albert/concurrent/book/chaptertwo/ThreadJoin_06.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("join 和 yeild 的练习"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"volatile-关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile-关键字"}},[t._v("#")]),t._v(" volatile 关键字")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("volatile")]),t._v(" 变量可保证可见性，但不保证原子性。"),s("code",[t._v("volatile")]),t._v(" 修饰变量时，会把该线程本地内存中的该变量刷新到主存中。")]),t._v(" "),s("li",[s("code",[t._v("volatile")]),t._v(" 变量会禁止指令重排。")])]),t._v(" "),s("p",[s("strong",[t._v("参考链接")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/blob/master/src/test/java/com/albert/concurrent/book/chaptertwo/ThreadVolatile_07.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("volatile 关键字练习"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/u012723673/article/details/80682208?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java volatile关键字最全总结：原理剖析与实例讲解(简单易懂)"),s("OutboundLink")],1)])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"线程组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程组"}},[t._v("#")]),t._v(" 线程组")]),t._v(" "),s("p",[t._v("可按照功能将不同线程进行分组。")]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/blob/master/src/test/java/com/albert/concurrent/book/chaptertwo/ThreadGroup_08.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("线程组的练习"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"守护线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#守护线程"}},[t._v("#")]),t._v(" 守护线程")]),t._v(" "),s("p",[t._v("守护线程是一种特殊的线程，会在所有的用户线程执行完成之后，随之结束。")]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/blob/master/src/test/java/com/albert/concurrent/book/chaptertwo/ThreadDaemon_09.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("守护线程的练习"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"线程优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程优先级"}},[t._v("#")]),t._v(" 线程优先级")]),t._v(" "),s("p",[t._v("可以为线程设置优先级，在线程之间抢占资源时，线程优先级越高，机会越大。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),t._v(" highThread "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HignPriority")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),t._v(" lowThread "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LowPriority")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置优先级")]),t._v("\n highThread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPriority")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MAX_PRIORITY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n lowThread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPriority")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MIN_PRIORITY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("线程优先级默认为 5 ，最大为 10，最小为 1。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * The minimum priority that a thread can have.\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" MIN_PRIORITY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * The default priority that is assigned to a thread.\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" NORM_PRIORITY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * The maximum priority that a thread can have.\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" MAX_PRIORITY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[t._v("参考："),s("a",{attrs:{href:"https://gitee.com/zztiyjw/concurrent-practice/blob/master/src/test/java/com/albert/concurrent/book/chaptertwo/ThreadPriority_10.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("线程优先级的练习"),s("OutboundLink")],1)]),t._v(" "),s("hr")])}),[],!1,null,null,null);a.default=n.exports}}]);