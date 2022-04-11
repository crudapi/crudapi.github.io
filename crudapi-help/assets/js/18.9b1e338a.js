(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{382:function(t,a,s){"use strict";s.r(a);var n=s(45),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"基于vue和quasar的前端spa项目实战之布局菜单-三"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之布局菜单-三"}},[t._v("#")]),t._v(" 基于Vue和Quasar的前端SPA项目实战之布局菜单（三）")]),t._v(" "),s("h2",{attrs:{id:"回顾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[t._v("#")]),t._v(" 回顾")]),t._v(" "),s("p",[t._v("通过上一篇文章 "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/login.html"}},[t._v("基于Vue和Quasar的前端SPA项目实战之用户登录（二）")]),t._v("的介绍，我们已经完成了登录页面，今天主要介绍布局菜单的实现。")],1),t._v(" "),s("h2",{attrs:{id:"ui界面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ui界面"}},[t._v("#")]),t._v(" UI界面")]),t._v(" "),s("h3",{attrs:{id:"效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#效果"}},[t._v("#")]),t._v(" 效果")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/crudapi-admin-web/layout/menu.png",alt:"布局菜单首页"}}),t._v("\n首页")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/crudapi-admin-web/layout/home.png",alt:"布局菜单展开"}}),t._v("\n业务数据菜单展开")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/crudapi-admin-web/layout/setting.png",alt:"布局菜单设置"}}),t._v("\n设置页面")]),t._v(" "),s("h3",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("p",[t._v("布局主页分为三个部分，")]),t._v(" "),s("ol",[s("li",[t._v("最上面为导航栏，主要包括刷新按钮，后退按钮，用户信息等内容。")]),t._v(" "),s("li",[t._v("左边为菜单，包括业务数据，元数据，系统三个一级菜单。业务数据菜单的二级菜单为表名称，元数据菜单包括序列号、表、关系三个二级菜单，系统菜单包括设置和关于两个二级菜单。")]),t._v(" "),s("li",[t._v("右边为页面主体部分。")])]),t._v(" "),s("h2",{attrs:{id:"布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局"}},[t._v("#")]),t._v(" 布局")]),t._v(" "),s("h3",{attrs:{id:"嵌套路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#嵌套路由"}},[t._v("#")]),t._v(" 嵌套路由")]),t._v(" "),s("p",[t._v("通常由多层嵌套的组件组合而成。同样地，URL 中各段动态路径也按某种结构对应嵌套的各层组件，例如：\n设置Setting页面和关于About页面切换的时候，导航和菜单部分都不变，变化的是主体部分，可以通过嵌套路由实现。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/about                                /setting\n+------------------+                  +-----------------+\n| nav             |                   | nav             |\n| +--------------+ |                  | +-------------+ |\n| | About        | |  +------------\x3e  | | Setting     | |\n| |              | |                  | |             | |\n| +--------------+ |                  | +-------------+ |\n+------------------+                  +-----------------+\n")])])]),s("h3",{attrs:{id:"mainlayout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mainlayout"}},[t._v("#")]),t._v(" MainLayout")]),t._v(" "),s("p",[t._v("文件为：src/layouts/MainLayout.vue")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<q-page-container>\n  <router-view />\n</q-page-container>\n")])])]),s("p",[t._v("其中"),s("code",[t._v("<router-view />")]),t._v("对应上图About和Setting部分。")]),t._v(" "),s("h2",{attrs:{id:"定义路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义路由"}},[t._v("#")]),t._v(" 定义路由")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'layouts/MainLayout.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pages/Index.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"about"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"about"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        meta"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" isAllowBack"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/About.vue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"setting"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"setting"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        meta"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" isAllowBack"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/Setting.vue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("其中，meta表示路由元信息，isAllowBack字段用于表示是否可以后退，在对应的component页面渲染的时候通过this.$route.meta.isAllowBack获取值，然后设置全局Vuex状态config/isAllowBack的值。")]),t._v(" "),s("h2",{attrs:{id:"computed计算属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#computed计算属性"}},[t._v("#")]),t._v(" computed计算属性")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("q"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("btn\n  v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("show"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isAllowBack === true"')]),t._v("\n  flat\n  dense\n  round\n  @click"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"goBack"')]),t._v("\n  icon"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arrow_back_ios"')]),t._v("\n  aria"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("label"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Back"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("q"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("btn"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\ncomputed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  isAllowBack"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isAllowBack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("MainLayout.vue中通过computed计算属性isAllowBack绑定q-btn，这样可以控制后退按钮是否显示。首页不需要后退，设置页面和关于页面就需要后退。后退按钮主要目的是适应不同的浏览器，不依赖浏览器的后退功能，比如H5页面全屏或者嵌入到Cordova壳子里面的时候就非常有用了。")]),t._v(" "),s("h2",{attrs:{id:"菜单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#菜单"}},[t._v("#")]),t._v(" 菜单")]),t._v(" "),s("h3",{attrs:{id:"控件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控件"}},[t._v("#")]),t._v(" 控件")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("q"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("tree\n  selected"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"primary"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("nodes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"allMenu"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("selected"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sync"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"selected"')]),t._v("\n  @update"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("selected"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"onMenuClickAction()"')]),t._v("\n  ref"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qTreeProxy"')]),t._v("\n  node"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"labelKey"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("expand"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("all\n  no"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("connectors\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("菜单用到了q-tree控件，菜单的内容是包括固定部分和动态部分。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rowsPerPage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" search"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" metadataTable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rowsPerPage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" search"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("其中业务数据是根据表单列表动态显示的，通过metadataTableService的list方法查询表单，然后动态渲染。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tables "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" metadataTableService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" tables"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" table "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tables"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("businessMenu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      label"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("caption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      labelKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBussinessPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      icon"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"insert_chart_outlined"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("allMenu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("businessMenu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("allMenu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("metadataMenu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("allMenu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("systemMenu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("qTreeProxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setExpanded")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"business"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("qTreeProxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setExpanded")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"metadata"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("qTreeProxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setExpanded")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"system"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("方法"),s("code",[t._v("this.$refs.qTreeProxy.setExpanded")]),t._v("可以控制菜单展开。")]),t._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[t._v("本文主要介绍了嵌套路由和菜单功能，用到了router-view和q-tree，然后实现了设置页面和关于页面功能。其它菜单对应的功能暂时为空，后续会从元数据菜单开始进一步介绍序列号功能。")]),t._v(" "),s("h2",{attrs:{id:"demo演示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo演示"}},[t._v("#")]),t._v(" demo演示")]),t._v(" "),s("p",[t._v("官网地址："),s("a",{attrs:{href:"https://crudapi.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://crudapi.cn"),s("OutboundLink")],1),s("br"),t._v("\n测试地址："),s("a",{attrs:{href:"https://demo.crudapi.cn/crudapi/login",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://demo.crudapi.cn/crudapi/login"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"附源码地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附源码地址"}},[t._v("#")]),t._v(" 附源码地址")]),t._v(" "),s("h3",{attrs:{id:"github地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github地址"}},[t._v("#")]),t._v(" GitHub地址")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/crudapi/crudapi-admin-web",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/crudapi/crudapi-admin-web"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"gitee地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitee地址"}},[t._v("#")]),t._v(" Gitee地址")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/crudapi/crudapi-admin-web",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/crudapi/crudapi-admin-web"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("由于网络原因，GitHub可能速度慢，改成访问Gitee即可，代码同步更新。")]),t._v(" "),s("h2",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之环境搭建-一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之环境搭建-一"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/helloworld.html"}},[t._v("基于Vue和Quasar的前端SPA项目实战之环境搭建（一）")])],1),t._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之用户登录-二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之用户登录-二"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/login.html"}},[t._v("基于Vue和Quasar的前端SPA项目实战之用户登录（二）")])],1),t._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之布局菜单-三-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之布局菜单-三-2"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/layout.html"}},[t._v("基于Vue和Quasar的前端SPA项目实战之布局菜单（三）")])],1)])}),[],!1,null,null,null);a.default=r.exports}}]);