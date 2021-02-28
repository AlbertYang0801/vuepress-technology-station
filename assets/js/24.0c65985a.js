(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{387:function(e,n,a){"use strict";a.r(n);var r=a(40),s=Object(r.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"jdk提供的线程池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk提供的线程池"}},[e._v("#")]),e._v(" JDK提供的线程池")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("java从jdk1.5开始提供了线程池的四种类型：分别为"),a("code",[e._v("CachedThreadPool")]),e._v("、"),a("code",[e._v("FixedThreadPool")]),e._v("、"),a("code",[e._v("ScheduledThreadPool")]),e._v("、"),a("code",[e._v("SingleThreadExecutor")]),e._v("；\n从jdk1.8开始提供了"),a("code",[e._v("WorkStealingPool")]),e._v("。这5种线程池都位于"),a("code",[e._v("Executors")]),e._v("线程池工厂中。"),a("code",[e._v("ThreadPoolExecutor")]),e._v("表示一个线程池，里面包含了创建线程池的实现。")]),e._v(" "),a("p",[e._v("注意：由于Executors线程池工厂创建出的线程存在一定弊端（具体见各个线程池的分析）,推荐使用手动创建的方式来创建线程池。（出自阿里规约）")]),e._v(" "),a("h4",{attrs:{id:"缓存型线程池-cachedthreadpool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存型线程池-cachedthreadpool"}},[e._v("#")]),e._v(" 缓存型线程池：CachedThreadPool")]),e._v(" "),a("blockquote",[a("p",[e._v("可灵活创建线程，如果线程池长度超过任务长度，可灵活回收线程。")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//源码\npublic static ExecutorService newCachedThreadPool() {\n    return new ThreadPoolExecutor(0, Integer.MAX_VALUE,\n                                  60L, TimeUnit.SECONDS,\n                                  new SynchronousQueue<Runnable>());\n}\n\npublic static ExecutorService newCachedThreadPool(ThreadFactory threadFactory) {\n    return new ThreadPoolExecutor(0, Integer.MAX_VALUE,\n                                  60L, TimeUnit.SECONDS,\n                                  new SynchronousQueue<Runnable>(),\n                                  threadFactory);\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("ul",[a("li",[e._v("CachedThreadPool()线程池的创建原理：")])]),e._v(" "),a("blockquote",[a("p",[e._v("实际上是创建了一个ThreadPoolExecutor()对象。")]),e._v(" "),a("ul",[a("li",[e._v("指定核心线程数为0，即线程池最小的线程数为0；")]),e._v(" "),a("li",[e._v("指定线程池最大允许存在的线程数为Integer.MAX_VALUE；")]),e._v(" "),a("li",[e._v("指定空闲线程的销毁时间是60s；")]),e._v(" "),a("li",[e._v("指定任务队列为同步队列SynchronousQueue只能包含一个任务的队列；")]),e._v(" "),a("li",[e._v("线程工厂可使用默认的或自定义的线程工程；")]),e._v(" "),a("li",[e._v("任务拒绝策略使用默认的ThreadPoolExecutor.AbortPolicy对于新增任务，拒绝处理，直接抛出RejectedExecutionException异常。")])])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("CachedThreadPool()线程池的使用：任务队列只允许存放一个任务，线程池中若有任务进来，则立刻新建线程去执行任务。若有大量任务同时进来，则在线程池中新建对应的线程，若线程空闲60s，则会自动回收。")])]),e._v(" "),a("li",[a("p",[e._v("CachedThreadPool()线程池的好处：由于CachedThreadPool()线程池允许线程数量很大，并且会自动回收，非常适合执行数量很大的短期任务。")])]),e._v(" "),a("li",[a("p",[e._v("CachedThreadPool()线程池的弊端：允许的创建线程数量为Integer.MAX_VALUE，可能会创建大量的线程，从而导致OOM(内存溢出)。（出自阿里规约）")])])]),e._v(" "),a("h4",{attrs:{id:"定长型线程池-fixedthreadpool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定长型线程池-fixedthreadpool"}},[e._v("#")]),e._v(" 定长型线程池： FixedThreadPool")]),e._v(" "),a("blockquote",[a("p",[e._v("固定线程池的线程数量，控制线程数，多余的任务在任务队列中等待。")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//源码\npublic static ExecutorService newFixedThreadPool(int nThreads) {\n    return new ThreadPoolExecutor(nThreads, nThreads,\n                                  0L, TimeUnit.MILLISECONDS,\n                                  new LinkedBlockingQueue<Runnable>());\n}\n\npublic static ExecutorService newFixedThreadPool(int nThreads, ThreadFactory threadFactory) {\n    return new ThreadPoolExecutor(nThreads, nThreads,\n                                  0L, TimeUnit.MILLISECONDS,\n                                  new LinkedBlockingQueue<Runnable>(),\n                                  threadFactory);\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("ul",[a("li",[e._v("FixedThreadPool()线程池的创建原理:")])]),e._v(" "),a("blockquote",[a("p",[e._v("实际上是创建了一个ThreadPoolExecutor()对象.")]),e._v(" "),a("ul",[a("li",[e._v("指定核心线程数和最大线程数都为n，即线程池一直保持拥有着n个线程；")]),e._v(" "),a("li",[e._v("指定空闲线程的销毁时间是0；")]),e._v(" "),a("li",[e._v("指定任务队列为无界队列LinkedBlockingQueue，队列长度为Integer.MAX_VALUE的队列；")]),e._v(" "),a("li",[e._v("线程工厂可使用默认的或自定义的线程工程；")]),e._v(" "),a("li",[e._v("任务拒绝策略使用默认的ThreadPoolExecutor.AbortPolicy对于新增任务，拒绝处理，直接抛出RejectedExecutionException异常。")])])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("FixedThreadPool()线程池的使用：线程池从初始化开始便恒定拥有n个线程，不存在线程个数的增减，任务队列允许放接近无穷的任务，即线程池没有线程可以处理新任务时，会将新任务加入任务队列中，该线程池任务的拒绝策略不会执行，因为任务队列被允许一直放入任务。")])]),e._v(" "),a("li",[a("p",[e._v("FixedThreadPool()线程池的好处：由于FixedThreadPool()线程池线程数量恒定，非常适合执行时间长且任务量固定的任务。")])]),e._v(" "),a("li",[a("p",[e._v("FixedThreadPool()线程池的弊端：允许的任务队列长度为Integer.MAX_VALUE，可能会堆积大量的任务请求，从而导致OOM(内存溢出)。（出自阿里规约）")])])]),e._v(" "),a("h4",{attrs:{id:"单线程线程池-singlethreadexecutor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单线程线程池-singlethreadexecutor"}},[e._v("#")]),e._v(" 单线程线程池：SingleThreadExecutor")]),e._v(" "),a("blockquote",[a("p",[e._v("线程池只有一个线程，若因为任务失败而终止当前线程，则新的线程会替代它继续执行后续任务。")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//源码\npublic static ExecutorService newSingleThreadExecutor() {\n    return new FinalizableDelegatedExecutorService\n        (new ThreadPoolExecutor(1, 1,\n                                0L, TimeUnit.MILLISECONDS,\n                                new LinkedBlockingQueue<Runnable>()));\n}\n\npublic static ExecutorService newSingleThreadExecutor(ThreadFactory threadFactory) {\n    return new FinalizableDelegatedExecutorService\n        (new ThreadPoolExecutor(1, 1,\n                                0L, TimeUnit.MILLISECONDS,\n                                new LinkedBlockingQueue<Runnable>(),\n                                threadFactory));\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br")])]),a("ul",[a("li",[e._v("SingleThreadExecutor()线程池的创建原理：")])]),e._v(" "),a("blockquote",[a("p",[e._v("实际上是创建了一个ThreadPoolExecutor()对象。")]),e._v(" "),a("ul",[a("li",[e._v("指定核心线程数和最大线程数都为1，即线程池一直保持拥有着1个线程；")]),e._v(" "),a("li",[e._v("指定空闲线程的销毁时间是0；")]),e._v(" "),a("li",[e._v("指定任务队列为队列长度为Integer.MAX_VALUE的队列；")]),e._v(" "),a("li",[e._v("线程工厂可使用默认的或自定义的线程工程；")]),e._v(" "),a("li",[e._v("任务拒绝策略使用默认的ThreadPoolExecutor.AbortPolicy对于新增任务，拒绝处理，直接抛出RejectedExecutionException异常。")])])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("SingleThreadExecutor()线程池的使用：线程池只初始化并维护一个线程，并设置LinkedBlockingQueue为任务队列。")])]),e._v(" "),a("li",[a("p",[e._v("SingleThreadExecutor()线程池的好处：使用SingleThreadExecutor来自动维护一个单线程。")])]),e._v(" "),a("li",[a("p",[e._v("SingleThreadExecutor()线程池的弊端：允许的任务队列长度为Integer.MAX_VALUE，可能会堆积大量的任务请求，从而导致OOM(内存溢出)。（出自阿里规约）")])])]),e._v(" "),a("h4",{attrs:{id:"定时线程池-scheduledthreadpool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定时线程池-scheduledthreadpool"}},[e._v("#")]),e._v(" 定时线程池：ScheduledThreadPool")]),e._v(" "),a("blockquote",[a("p",[e._v("可以定时执行任务。")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//源码\npublic ScheduledThreadPoolExecutor(int corePoolSize) {\n    super(corePoolSize, Integer.MAX_VALUE, 0, NANOSECONDS,\n          new DelayedWorkQueue());\n}\n\npublic ThreadPoolExecutor(int corePoolSize,\n                          int maximumPoolSize,\n                          long keepAliveTime,\n                          TimeUnit unit,\n                          BlockingQueue<Runnable> workQueue) {\n    this(corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue,\n         Executors.defaultThreadFactory(), defaultHandler);\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br")])]),a("ul",[a("li",[e._v("ScheduledThreadPool()线程池的创建原理：")])]),e._v(" "),a("blockquote",[a("ul",[a("li",[e._v("实际上是创建了一个ThreadPoolExecutor()对象。")]),e._v(" "),a("li",[e._v("可指定核心线程数。")]),e._v(" "),a("li",[e._v("最大线程数为Integer.MAX_VALUE。")]),e._v(" "),a("li",[e._v("指定空闲线程的销毁时间是0；")]),e._v(" "),a("li",[e._v("指定任务队列为专门延时队列DelayedWorkQueue，来实现定时任务的执行。")]),e._v(" "),a("li",[e._v("线程工厂可使用默认的或自定义的线程工程。")]),e._v(" "),a("li",[e._v("任务拒绝策略使用默认的ThreadPoolExecutor.AbortPolicy对于新增任务，拒绝处理，直接抛出RejectedExecutionException异常。")])])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("ScheduledThreadPool()线程池的使用：可实现定时执行任务，或延时执行任务。")])]),e._v(" "),a("li",[a("p",[e._v("ScheduledThreadPool()线程池的好处：可以定时周期的执行任务。")])]),e._v(" "),a("li",[a("p",[e._v("ScheduledThreadPool()线程池的弊端：允许的线程最大长度为Integer.MAX_VALUE，可能会创建大量的线程，从而导致OOM(内存溢出)。（出自阿里规约）")])])]),e._v(" "),a("h4",{attrs:{id:"抢占式线程池-workstealingpool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抢占式线程池-workstealingpool"}},[e._v("#")]),e._v(" 抢占式线程池：WorkStealingPool")]),e._v(" "),a("blockquote",[a("p",[e._v("抢占式的线程池，能合理的使用CPU进行任务处理，适合很耗时的任务。")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//源码\npublic static ExecutorService newWorkStealingPool() {\n    return new ForkJoinPool\n        (Runtime.getRuntime().availableProcessors(),\n         ForkJoinPool.defaultForkJoinWorkerThreadFactory,\n         null, true);\n}\n\npublic static ExecutorService newWorkStealingPool(int parallelism) {\n    return new ForkJoinPool\n        (parallelism,\n         ForkJoinPool.defaultForkJoinWorkerThreadFactory,\n         null, true);\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br")])]),a("ul",[a("li",[e._v("WorkStealingPool()线程池的创建原理：")])]),e._v(" "),a("blockquote",[a("ul",[a("li",[e._v("实际上是创建了一个ForkJoinPool()对象。")]),e._v(" "),a("li",[e._v("传入参数则使用传入的线程数量，若不传入，则默认使用当前计算机可用的CPU数量。")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);