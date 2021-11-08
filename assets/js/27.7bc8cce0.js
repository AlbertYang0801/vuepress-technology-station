(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{385:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"缓存问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存问题"}},[t._v("#")]),t._v(" 缓存问题")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("在使用缓存的时候，简单的缓存处理流程如下。针对如下流程会遇到缓存穿透、缓存击穿、缓存雪崩等问题。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210807191220.png",alt:"临时文件 (1)"}})]),t._v(" "),a("h2",{attrs:{id:"缓存穿透"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[t._v("#")]),t._v(" 缓存穿透")]),t._v(" "),a("p",[t._v("缓存穿透："),a("strong",[t._v("当用户请求查询某个数据时，先从缓存查询，缓存中没有这个数据。然后向数据库查询数据，数据库中也没有这个数据，导致查询失败。")])]),t._v(" "),a("p",[a("em",[t._v("像一些恶意攻击时，故意查询数据库中不存在的数据，比如查询 id = -1 的数据，会造成数据库压力非常大。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210807192757.png",alt:"临时文件 (3)"}})]),t._v(" "),a("h4",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("对空值做缓存。")])]),t._v(" "),a("p",[a("strong",[t._v("当出现从缓存和数据库都查不到数据的情况时，可以将空值存到缓存中，即 K-V 存为 key-null，缓存过期时间可以设置短点，来防止短时间的频繁恶意攻击。")])]),t._v(" "),a("p",[t._v("由于将空值存放到了缓存中，存在的问题：")]),t._v(" "),a("ul",[a("li",[t._v("缓存需要内存空间存放空值。")]),t._v(" "),a("li",[t._v("对空值设置了过期时间，导致缓存和数据库中的数据可能出现不一致的问题（数据库中有真实数据，而缓存中的空值数据未过期），不能保证数据一致性。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("设置可访问 IP 的白名单，防止恶意攻击。")])]),t._v(" "),a("p",[t._v("针对可能出现的恶意攻击情况，使用 "),a("strong",[t._v("bitmaps")]),t._v(" 存放白名单（可以访问的 IP 地址）。")]),t._v(" "),a("p",[t._v("存在的问题：")]),t._v(" "),a("ul",[a("li",[t._v("在每次查询之前，都需要判断是否在白名单中，影响效率。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("使用布隆过滤器。")])]),t._v(" "),a("p",[t._v("布隆过滤器是一种数据结构，"),a("strong",[t._v("能够很快的判断某个数据是否存在")]),t._v("。")]),t._v(" "),a("p",[a("em",[t._v("在查询数据之前，先从布隆过滤器判断数据是否存在，若存在，则继续从缓存开始查数据。若是不存在，则不继续查询。")])]),t._v(" "),a("p",[t._v("存在的问题：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("布隆过滤器存在误判的情况。")]),t._v(" "),a("p",[t._v("若布隆过滤器判断数据不存在，则一定不存在。")]),t._v(" "),a("p",[t._v("若布隆过滤器判断数据存在，则不一定存在。")])]),t._v(" "),a("li",[a("p",[t._v("布隆过滤器不支持删除元素。")])])])])]),t._v(" "),a("h2",{attrs:{id:"缓存击穿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿"}},[t._v("#")]),t._v(" 缓存击穿")]),t._v(" "),a("p",[t._v("缓存击穿："),a("strong",[t._v("当缓存中某个热点数据过期后，用户从缓存中查不到数据，然后去查询数据库，由于热点数据访问频率高，导致大量请求查询数据库，造成数据库压力过大，即发生了缓存击穿。")])]),t._v(" "),a("p",[a("em",[t._v("注意发生缓存击穿的时候，redis 是正常的，redis 中不会发生大量 key 过期的问题，只是数据库受到了很大的访问压力。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210807200938.png",alt:"临时文件 (4)"}})]),t._v(" "),a("h4",{attrs:{id:"解决方案-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-2"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("设置热点数据永不过期。")])]),t._v(" "),a("li",[a("p",[t._v("预先延长热点数据的过期时间。")]),t._v(" "),a("p",[t._v("在能够提前知道高并发情况时，预先延长热点数据的过期时间来避免缓存击穿。")])]),t._v(" "),a("li",[a("p",[t._v("使用锁。")]),t._v(" "),a("p",[t._v("在高并发访问热点数据的情况下，若缓存中没有数据，对"),a("strong",[t._v("访问数据库数据并添加到缓存中的过程")]),t._v("加锁。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1.从缓存查询数据")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResultForCache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2.缓存中没数据")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取锁")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tryLock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//从数据库查数据")]),t._v("\n      result"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDataForMySQL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//添加到缓存中")]),t._v("\n     \t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDataToCache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//没获取到锁的，睡眠100ms，再重新查询缓存")]),t._v("\n      result"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"缓存雪崩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩"}},[t._v("#")]),t._v(" 缓存雪崩")]),t._v(" "),a("p",[t._v("缓存雪崩："),a("strong",[t._v("在短时间内，缓存中的大量 key 集中过期，导致大量请求去查询数据库，导致数据库压力过大。")])]),t._v(" "),a("h4",{attrs:{id:"解决方案-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-3"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("锁或者队列。")]),t._v(" "),a("p",[t._v("在高并发情况访问缓存时，增加锁或者队列，来确保同一时间不会有多个线程同时访问缓存。")]),t._v(" "),a("p",[a("em",[t._v("加锁或队列是一种治标不治本的方式，虽然能够解决缓存雪崩的问题，但是没有提高系统吞吐量，在高并发情况下，阻塞问题严重。而且若是在分布式环境下，需要使用分布式锁，导致系统效率大大降低。")])])]),t._v(" "),a("li",[a("p",[t._v("将缓存失效时间分散。")]),t._v(" "),a("p",[t._v("在设置缓存失效时间时，增加随即因子，保证失效时间的随机性，减少大量 key 集中过期的问题。")])]),t._v(" "),a("li",[a("p",[t._v("设置缓存永不过期。")]),t._v(" "),a("p",[t._v("设置缓存永不过期需要更多的内存空间。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);