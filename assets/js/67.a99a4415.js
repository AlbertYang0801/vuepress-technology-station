(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{424:function(s,a,t){"use strict";t.r(a);var n=t(26),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"jdk提供的线程池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk提供的线程池"}},[s._v("#")]),s._v(" JDK提供的线程池")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("Java 从 "),t("code",[s._v("JDK1.5")]),s._v(" 开始提供了线程池的四种类型：分别为"),t("code",[s._v("CachedThreadPool")]),s._v("、"),t("code",[s._v("FixedThreadPool")]),s._v("、"),t("code",[s._v("ScheduledThreadPool")]),s._v("、"),t("code",[s._v("SingleThreadExecutor")]),s._v("；\n从 "),t("code",[s._v("JDK1.8")]),s._v(" 开始提供了"),t("code",[s._v("WorkStealingPool")]),s._v("。这 5 种线程池都位于"),t("code",[s._v("Executors")]),s._v("线程池工厂中。"),t("code",[s._v("ThreadPoolExecutor")]),s._v("表示一个线程池，里面包含了创建线程池的实现。")]),s._v(" "),t("p",[s._v("注意：由于 "),t("code",[s._v("Executors")]),s._v(" 线程池工厂创建出的线程存在一定弊端（具体见各个线程池的分析）,推荐使用手动创建的方式来创建线程池。（出自阿里规约）")]),s._v(" "),t("hr"),s._v(" "),t("h3",{attrs:{id:"缓存型线程池-cachedthreadpool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存型线程池-cachedthreadpool"}},[s._v("#")]),s._v(" 缓存型线程池：CachedThreadPool")]),s._v(" "),t("p",[s._v("可灵活创建线程，如果线程池长度超过任务长度，可灵活回收线程。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//源码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newCachedThreadPool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MAX_VALUE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SECONDS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SynchronousQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newCachedThreadPool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadFactory")]),s._v(" threadFactory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MAX_VALUE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SECONDS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SynchronousQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                  threadFactory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[t("strong",[s._v("创建原理")])]),s._v(" "),t("ol",[t("li",[s._v("指定核心线程数为 0，即线程池最小的线程数为 0；")]),s._v(" "),t("li",[s._v("指定线程池最大允许存在的线程数为 "),t("code",[s._v("Integer.MAX_VALUE")]),s._v("；")]),s._v(" "),t("li",[s._v("指定空闲线程的销毁时间是 "),t("code",[s._v("60s")]),s._v(" ；")]),s._v(" "),t("li",[s._v("指定任务队列为同步队列 "),t("code",[s._v("SynchronousQueue")]),s._v(" 只能包含一个任务的队列；")]),s._v(" "),t("li",[s._v("线程工厂可使用默认的或自定义的线程工程；")]),s._v(" "),t("li",[s._v("任务拒绝策略使用默认的 "),t("code",[s._v("ThreadPoolExecutor.AbortPolicy")]),s._v(" （对于新增任务，拒绝处理，直接抛出"),t("code",[s._v("RejectedExecutionException")]),s._v(" 异常）。")])]),s._v(" "),t("p",[t("strong",[s._v("缓存型线程池使用")])]),s._v(" "),t("p",[s._v("任务队列只允许存放一个任务，线程池中若有任务进来，则立刻新建线程去执行任务。若有大量任务同时进来，则在线程池中新建对应的线程，若线程空闲 60s，则会自动回收。")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("CachedThreadPool()")]),s._v(" 的好处：由于 "),t("code",[s._v("CachedThreadPool()")]),s._v(" 线程池允许线程数量很大，并且会自动回收，非常适合执行数量很大的短期任务。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("CachedThreadPool()")]),s._v(" 的弊端：允许的创建线程数量为 "),t("code",[s._v("Integer.MAX_VALUE")]),s._v(" ，可能会创建大量的线程，从而导致 "),t("code",[s._v("OOM(内存溢出)")]),s._v(" 。（出自阿里规约）")])])]),s._v(" "),t("hr"),s._v(" "),t("h3",{attrs:{id:"定长型线程池-fixedthreadpool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定长型线程池-fixedthreadpool"}},[s._v("#")]),s._v(" 定长型线程池： FixedThreadPool")]),s._v(" "),t("p",[s._v("固定线程池的线程数量，控制线程数，多余的任务在任务队列中等待。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//源码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newFixedThreadPool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" nThreads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nThreads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nThreads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MILLISECONDS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedBlockingQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newFixedThreadPool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" nThreads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadFactory")]),s._v(" threadFactory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nThreads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nThreads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MILLISECONDS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedBlockingQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                  threadFactory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[t("strong",[s._v("创建原理")])]),s._v(" "),t("ol",[t("li",[s._v("指定核心线程数和最大线程数都为 "),t("code",[s._v("n")]),s._v(" ，即线程池一直保持拥有着 "),t("code",[s._v("n")]),s._v(" 个线程；")]),s._v(" "),t("li",[s._v("指定空闲线程的销毁时间是 0；")]),s._v(" "),t("li",[s._v("指定任务队列为无界队列 "),t("code",[s._v("LinkedBlockingQueue")]),s._v(" ，队列长度为 "),t("code",[s._v("Integer.MAX_VALUE的队列")]),s._v(" ；")]),s._v(" "),t("li",[s._v("线程工厂可使用默认的或自定义的线程工程；")]),s._v(" "),t("li",[s._v("任务拒绝策略使用默认的 "),t("code",[s._v("ThreadPoolExecutor.AbortPolicy")]),s._v(" 对于新增任务，拒绝处理，直接抛出 "),t("code",[s._v("RejectedExecutionException")]),s._v(" 异常。")])]),s._v(" "),t("p",[t("strong",[s._v("定长型线程池使用")])]),s._v(" "),t("p",[s._v("线程池从初始化开始便恒定拥有 "),t("code",[s._v("n")]),s._v(" 个线程，不存在线程个数的增减，任务队列允许放接近无穷的任务，即线程池没有线程可以处理新任务时，会将新任务加入任务队列中，该线程池任务的拒绝策略不会执行，因为任务队列被允许一直放入任务。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("FixedThreadPool()")]),s._v(" 线程池的好处：由于 "),t("code",[s._v("FixedThreadPool()")]),s._v(" 线程池线程数量恒定，非常适合执行时间长且任务量固定的任务。")]),s._v(" "),t("li",[t("code",[s._v("FixedThreadPool()")]),s._v(" 线程池的弊端：允许的任务队列长度为 "),t("code",[s._v("Integer.MAX_VALUE")]),s._v(" ，可能会堆积大量的任务请求，从而导致 "),t("code",[s._v("OOM(内存溢出)")]),s._v("。（出自阿里规约）")])]),s._v(" "),t("hr"),s._v(" "),t("h3",{attrs:{id:"单线程线程池-singlethreadexecutor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单线程线程池-singlethreadexecutor"}},[s._v("#")]),s._v(" 单线程线程池：SingleThreadExecutor")]),s._v(" "),t("p",[s._v("线程池只有一个线程，若因为任务失败而终止当前线程，则新的线程会替代它继续执行后续任务。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//源码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newSingleThreadExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FinalizableDelegatedExecutorService")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MILLISECONDS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedBlockingQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newSingleThreadExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadFactory")]),s._v(" threadFactory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FinalizableDelegatedExecutorService")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MILLISECONDS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedBlockingQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                threadFactory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[t("strong",[s._v("创建原理")])]),s._v(" "),t("ol",[t("li",[s._v("指定核心线程数和最大线程数都为 "),t("code",[s._v("1")]),s._v("，即线程池一直保持拥有着 "),t("code",[s._v("1")]),s._v(" 个线程；")]),s._v(" "),t("li",[s._v("指定空闲线程的销毁时间是 0；")]),s._v(" "),t("li",[s._v("指定任务队列为队列长度为 "),t("code",[s._v("Integer.MAX_VALUE")]),s._v(" 的队列；")]),s._v(" "),t("li",[s._v("线程工厂可使用默认的或自定义的线程工程；")]),s._v(" "),t("li",[s._v("任务拒绝策略使用默认的 "),t("code",[s._v("ThreadPoolExecutor.AbortPolicy")]),s._v(" 对于新增任务，拒绝处理，直接抛出 "),t("code",[s._v("RejectedExecutionException")]),s._v(" 异常。")])]),s._v(" "),t("p",[t("strong",[s._v("单线程线程池的使用")])]),s._v(" "),t("p",[s._v("线程池只初始化并维护一个线程，并设置 "),t("code",[s._v("LinkedBlockingQueue")]),s._v(" 为任务队列。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("SingleThreadExecutor()")]),s._v(" 线程池的好处：使用 "),t("code",[s._v("SingleThreadExecutor")]),s._v(" 来自动维护一个单线程。")]),s._v(" "),t("li",[t("code",[s._v("SingleThreadExecutor()")]),s._v(" 线程池的弊端：允许的任务队列长度为 "),t("code",[s._v("Integer.MAX_VALUE")]),s._v("，可能会堆积大量的任务请求，从而导致 "),t("code",[s._v("OOM(内存溢出)")]),s._v("。（出自阿里规约）")])]),s._v(" "),t("hr"),s._v(" "),t("h3",{attrs:{id:"定时线程池-scheduledthreadpool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定时线程池-scheduledthreadpool"}},[s._v("#")]),s._v(" 定时线程池：ScheduledThreadPool")]),s._v(" "),t("p",[s._v("可以定时执行任务。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//源码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ScheduledThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" corePoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("corePoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MAX_VALUE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" NANOSECONDS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DelayedWorkQueue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" corePoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" maximumPoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" keepAliveTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                          "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),s._v(" unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                          "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BlockingQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" workQueue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("corePoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" maximumPoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" keepAliveTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" workQueue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Executors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("defaultThreadFactory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" defaultHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[t("strong",[s._v("创建原理")])]),s._v(" "),t("ol",[t("li",[s._v("可指定核心线程数。")]),s._v(" "),t("li",[s._v("最大线程数为 "),t("code",[s._v("Integer.MAX_VALUE")]),s._v(" 。")]),s._v(" "),t("li",[s._v("指定空闲线程的销毁时间是 0；")]),s._v(" "),t("li",[s._v("指定任务队列为专门延时队列 "),t("code",[s._v("DelayedWorkQueue")]),s._v(" ，来实现定时任务的执行。")]),s._v(" "),t("li",[s._v("线程工厂可使用默认的或自定义的线程工程。")]),s._v(" "),t("li",[s._v("任务拒绝策略使用默认的 "),t("code",[s._v("ThreadPoolExecutor.AbortPolicy")]),s._v(" 对于新增任务，拒绝处理，直接抛出 "),t("code",[s._v("RejectedExecutionException")]),s._v(" 异常。")])]),s._v(" "),t("p",[t("strong",[s._v("定时线程池的使用")])]),s._v(" "),t("p",[s._v("可实现定时执行任务，或延时执行任务。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("ScheduledThreadPool()")]),s._v(" 线程池的好处：可以定时周期的执行任务。")]),s._v(" "),t("li",[t("code",[s._v("ScheduledThreadPool()")]),s._v(" 线程池的弊端：允许的线程最大长度为 "),t("code",[s._v("Integer.MAX_VALUE")]),s._v("，可能会创建大量的线程，从而导致 "),t("code",[s._v("OOM(内存溢出)")]),s._v(" 。（出自阿里规约）")])]),s._v(" "),t("hr"),s._v(" "),t("h3",{attrs:{id:"抢占式线程池-workstealingpool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抢占式线程池-workstealingpool"}},[s._v("#")]),s._v(" 抢占式线程池：WorkStealingPool")]),s._v(" "),t("p",[s._v("抢占式的线程池，能合理的使用 CPU 进行任务处理，适合很耗时的任务。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//源码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newWorkStealingPool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ForkJoinPool")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runtime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getRuntime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("availableProcessors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ForkJoinPool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("defaultForkJoinWorkerThreadFactory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newWorkStealingPool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" parallelism"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ForkJoinPool")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parallelism"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ForkJoinPool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("defaultForkJoinWorkerThreadFactory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[t("strong",[s._v("创建原理")])]),s._v(" "),t("ol",[t("li",[s._v("实际上是创建了一个 "),t("code",[s._v("ForkJoinPool()")]),s._v(" 对象。")]),s._v(" "),t("li",[s._v("传入参数则使用传入的线程数量，若不传入，则默认使用当前计算机可用的 CPU 数量。")])]),s._v(" "),t("hr")])}),[],!1,null,null,null);a.default=e.exports}}]);