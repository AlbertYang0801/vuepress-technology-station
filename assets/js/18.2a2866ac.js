(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{375:function(e,a,t){"use strict";t.r(a);var s=t(26),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"内存淘汰策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存淘汰策略"}},[e._v("#")]),e._v(" 内存淘汰策略")]),e._v(" "),t("h2",{attrs:{id:"最大内存设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最大内存设置"}},[e._v("#")]),e._v(" 最大内存设置")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("redis 默认内存是多少？")]),e._v(" "),t("p",[e._v("在 64 位操作系统不限制内存大小，在 32 位操作系统下最多使用 3GB。")])]),e._v(" "),t("li",[t("p",[e._v("查看 redis 最大内存？")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("config get maxmemory\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210725230010.png",alt:"image-20210725225656431"}})])]),e._v(" "),t("li",[t("p",[e._v("修改 redis 内存大小？")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("修改配置文件")]),e._v(" "),t("p",[e._v("在 "),t("code",[e._v("redis.conf")]),e._v(" 第 859 行可以设置最大内存大小（单位是字节）。")]),e._v(" "),t("blockquote",[t("p",[e._v(": set nu 可以显示文件行号")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210725222546.png",alt:"image-20210725222546949"}})])]),e._v(" "),t("li",[t("p",[e._v("使用命令配置")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" maxmemory "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210725225927.png",alt:"image-20210725225927031"}})])])])]),e._v(" "),t("li",[t("p",[e._v("redis 内存满了之后会怎样?")]),e._v(" "),t("p",[e._v("采用内存淘汰策略，默认是 "),t("code",[e._v("no-enviction")]),e._v("，会抛出 OOM 异常。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210725230125.png",alt:"image-20210725230125654"}})])]),e._v(" "),t("li",[t("p",[e._v("查看内存信息")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("info memory\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210725230742.png",alt:"image-20210725230742686"}})])]),e._v(" "),t("li",[t("p",[e._v("生产上一般怎么设置内存？")]),e._v(" "),t("p",[e._v("推荐设置内存为"),t("strong",[e._v("最大物理内存的四分之三")]),e._v("。")])])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"redis内存淘汰策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis内存淘汰策略"}},[e._v("#")]),e._v(" redis内存淘汰策略")]),e._v(" "),t("h3",{attrs:{id:"八种内存淘汰策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八种内存淘汰策略"}},[e._v("#")]),e._v(" 八种内存淘汰策略")]),e._v(" "),t("p",[e._v("在 redis.conf 文件中有体现。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210725232238.png",alt:"image-20210725232238442"}})]),e._v(" "),t("ul",[t("li",[e._v("2个范围\n"),t("ul",[t("li",[e._v("所有 key。")]),e._v(" "),t("li",[e._v("设置了过期时间的 key。")])])]),e._v(" "),t("li",[e._v("4个方式\n"),t("ul",[t("li",[e._v("LRU 算法。")]),e._v(" "),t("li",[e._v("LFU 算法。")]),e._v(" "),t("li",[e._v("random - 随机删除。")]),e._v(" "),t("li",[e._v("ttl - 删除马上要过期的。")])])])]),e._v(" "),t("hr"),e._v(" "),t("ol",[t("li",[e._v("volatile-lru：对所有设置了过期时间的 key 使用 LRU 算法进行删除。")]),e._v(" "),t("li",[e._v("allkeys-lru：对所有 key 使用 LRU 算法进行删除。")]),e._v(" "),t("li",[e._v("volatile-lfu：对所有设置了过期时间的 key 使用 LFU 算法进行删除。")]),e._v(" "),t("li",[e._v("allkeys-lfu：对所有 key 使用 LFU 算法进行删除。")]),e._v(" "),t("li",[e._v("volatile-random ：对所有设置了过期时间的 key 随机删除。")]),e._v(" "),t("li",[e._v("allkeys-random ：对所有 key 随机删除。")]),e._v(" "),t("li",[e._v("volatile-ttl：删除马上要过期的 key。")]),e._v(" "),t("li",[e._v("noeviction："),t("strong",[e._v("默认的内存淘汰策略")]),e._v("，禁止删除数据，能保证数据不丢失。当内存满了的时候，再写入数据会返回错误。")])]),e._v(" "),t("blockquote",[t("p",[e._v("LRU 算法：最近最久未使用。")]),e._v(" "),t("p",[e._v("LFU 算法：最近使用次数最少。")])]),e._v(" "),t("h3",{attrs:{id:"设置内存淘汰策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置内存淘汰策略"}},[e._v("#")]),e._v(" 设置内存淘汰策略")]),e._v(" "),t("ol",[t("li",[e._v("配置文件设置")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210726004413.png",alt:"image-20210726004413838"}})]),e._v(" "),t("p",[e._v("​\t在 redis.conf 配置文件中 "),t("code",[e._v("maxmemory-policy")]),e._v(" 对应设置内存淘汰策略，注释提示了默认淘汰策略是 "),t("code",[e._v("noeviction")]),e._v("。通过修改该配置就可以修改内存淘汰策略。")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[e._v("命令行设置")]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 获取maxmemory-policy配置")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" config get maxmemory"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("policy\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 设置maxmemory-policy配置为allkeys-lru")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" config set maxmemory"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("policy allkeys"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("lru\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])])])]),e._v(" "),t("h3",{attrs:{id:"如何选择内存淘汰策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何选择内存淘汰策略"}},[e._v("#")]),e._v(" 如何选择内存淘汰策略")]),e._v(" "),t("ul",[t("li",[e._v("若所有数据访问频率一样，可以使用 "),t("code",[e._v("allkeys-random")]),e._v("。")]),e._v(" "),t("li",[e._v("若有一部分是热点数据，有一部分是冷门数据，可以考虑使用 "),t("code",[e._v("allkeys-lru")]),e._v("。")]),e._v(" "),t("li",[e._v("若希望有一部分数据被长期保存，而有些可以被删除。可以选择 "),t("code",[e._v("volatile-lru")]),e._v("或 "),t("code",[e._v("volatile-random")]),e._v("。")]),e._v(" "),t("li",[e._v("若希望避免设置 key 的失效时间来减少内存的使用。可以使用 "),t("code",[e._v("allkeys-lru")]),e._v(" 搭配 key 不设置过期时间来高效利用内存。")])]),e._v(" "),t("h2",{attrs:{id:"参考链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[e._v("#")]),e._v(" 参考链接")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://blog.csdn.net/oneby1314/article/details/113789412",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.csdn.net/oneby1314/article/details/113789412"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.bilibili.com/video/BV1Hy4y1B78T?p=68",target:"_blank",rel:"noopener noreferrer"}},[e._v("尚硅谷2021逆袭版Java面试题第三季（java大厂面试题，周阳主讲）- 手写 LRU算法"),t("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=r.exports}}]);