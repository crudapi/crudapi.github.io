(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{378:function(a,t,s){"use strict";s.r(t);var r=s(45),n=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"基于vue和quasar的前端spa项目实战之数据导出-十三"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之数据导出-十三"}},[a._v("#")]),a._v(" 基于Vue和Quasar的前端SPA项目实战之数据导出（十三）")]),a._v(" "),s("h2",{attrs:{id:"回顾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[a._v("#")]),a._v(" 回顾")]),a._v(" "),s("p",[a._v("通过之前一篇文章"),s("RouterLink",{attrs:{to:"/crudapi-admin-web/import.html"}},[a._v(" 基于Vue和Quasar的前端SPA项目实战之数据导入（九）")]),a._v("的介绍，通过配置的方式可以零代码实现业务数据的批量导入功能，本文主要介绍业务数据批量导出相关内容。")],1),a._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),s("p",[a._v("针对每个业务表，有时需要导出数据到本地文件，用来备份或者分析，这里采用的文件格式为EXCEL，第一行为字段名称，从第二行开始为数据。")]),a._v(" "),s("h2",{attrs:{id:"ui界面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ui界面"}},[a._v("#")]),a._v(" UI界面")]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/crudapi-admin-web/export/ui.png",alt:"产品导出"}}),a._v("\n产品导出")]),a._v(" "),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[a._v("#")]),a._v(" API")]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/crudapi-admin-web/export/swagger.png",alt:"业务数据导出API"}}),a._v("\n业务数据导出相关API，具体的通过swagger文档可以查看。通过axios封装api，名称为table")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" axiosInstance "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"boot/axios"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" table "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("export")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("tableName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" axiosInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/api/business/"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" tableName "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/export"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        params"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" table "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"核心代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心代码"}},[a._v("#")]),a._v(" 核心代码")]),a._v(" "),s("h3",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[a._v("#")]),a._v(" 说明")]),a._v(" "),s("p",[a._v("export成功之后返回文件URL，直接下载即可！")]),a._v(" "),s("h3",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[a._v("#")]),a._v(" 代码")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("async")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("onExportClickAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("$q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("loading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    message"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"生成中"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("try")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("await")]),a._v(" tableService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("export")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("tableName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("$q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("notify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"数据导出成功，请等待下载完成后查看！"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"_blank"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("$q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("loading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("hide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("catch")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("$q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("loading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("hide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"产品为例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#产品为例"}},[a._v("#")]),a._v(" 产品为例")]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/crudapi-admin-web/export/excel.png",alt:"product"}}),s("br"),a._v("\n点击“批量导出”按钮，成功之后自动下载文件到本地，打开EXCEL查看发现3条数据已经生成，和系统中数据一致。")]),a._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[a._v("#")]),a._v(" 小结")]),a._v(" "),s("p",[a._v("本文主要介绍了介绍业务数据批量导出功能，不同的业务表单操作类似，通过配置的方式可以零代码实现业务数据的批量导出功能。")]),a._v(" "),s("h2",{attrs:{id:"crudapi简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crudapi简介"}},[a._v("#")]),a._v(" crudapi简介")]),a._v(" "),s("p",[a._v("crudapi是crud+api组合，表示增删改查接口，是一款零代码可配置的产品。使用crudapi可以告别枯燥无味的增删改查代码，让您更加专注业务，节约大量成本，从而提高工作效率。\ncrudapi的目标是让处理数据变得更简单，所有人都可以免费使用！\n无需编程，通过配置自动生成crud增删改查RESTful API，提供后台UI管理业务数据。基于主流的开源框架，拥有自主知识产权，支持二次开发。")]),a._v(" "),s("h2",{attrs:{id:"demo演示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo演示"}},[a._v("#")]),a._v(" demo演示")]),a._v(" "),s("p",[a._v("crudapi属于产品级的零代码平台，不同于自动代码生成器，不需要生成Controller、Service、Repository、Entity等业务代码，程序运行起来就可以使用，真正0代码，可以覆盖基本的和业务无关的CRUD RESTful API。")]),a._v(" "),s("p",[a._v("官网地址："),s("a",{attrs:{href:"https://crudapi.cn",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://crudapi.cn"),s("OutboundLink")],1),s("br"),a._v("\n测试地址："),s("a",{attrs:{href:"https://demo.crudapi.cn/crudapi/login",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://demo.crudapi.cn/crudapi/login"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"附源码地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附源码地址"}},[a._v("#")]),a._v(" 附源码地址")]),a._v(" "),s("h3",{attrs:{id:"github地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github地址"}},[a._v("#")]),a._v(" GitHub地址")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/crudapi/crudapi-admin-web",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/crudapi/crudapi-admin-web"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"gitee地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitee地址"}},[a._v("#")]),a._v(" Gitee地址")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/crudapi/crudapi-admin-web",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://gitee.com/crudapi/crudapi-admin-web"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("由于网络原因，GitHub可能速度慢，改成访问Gitee即可，代码同步更新。")]),a._v(" "),s("h2",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[a._v("#")]),a._v(" 目录")]),a._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之环境搭建-一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之环境搭建-一"}},[a._v("#")]),a._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/helloworld.html"}},[a._v("基于Vue和Quasar的前端SPA项目实战之环境搭建（一）")])],1),a._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之用户登录-二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之用户登录-二"}},[a._v("#")]),a._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/login.html"}},[a._v("基于Vue和Quasar的前端SPA项目实战之用户登录（二）")])],1),a._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之布局菜单-三"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之布局菜单-三"}},[a._v("#")]),a._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/layout.html"}},[a._v("基于Vue和Quasar的前端SPA项目实战之布局菜单（三）")])],1),a._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之序列号-四"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之序列号-四"}},[a._v("#")]),a._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/sequence.html"}},[a._v("基于Vue和Quasar的前端SPA项目实战之序列号（四）")])],1),a._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之动态表单-五"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之动态表单-五"}},[a._v("#")]),a._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/metadatatable.html"}},[a._v("基于Vue和Quasar的前端SPA项目实战之动态表单（五）")])],1),a._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之表关系-六"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之表关系-六"}},[a._v("#")]),a._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/metadatarelation.html"}},[a._v("基于Vue和Quasar的前端SPA项目实战之表关系（六）")])],1),a._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之业务数据-七"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之业务数据-七"}},[a._v("#")]),a._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/business.html"}},[a._v("基于Vue和Quasar的前端SPA项目实战之业务数据（七）")])],1),a._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之docker部署-八"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之docker部署-八"}},[a._v("#")]),a._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/docker.html"}},[a._v("基于Vue和Quasar的前端SPA项目实战之docker部署（八）")])],1),a._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之数据导入-九"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之数据导入-九"}},[a._v("#")]),a._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/import.html"}},[a._v("基于Vue和Quasar的前端SPA项目实战之数据导入（九）")])],1),a._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之文件上传-十"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之文件上传-十"}},[a._v("#")]),a._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/fileupload.html"}},[a._v("基于Vue和Quasar的前端SPA项目实战之文件上传（十）")])],1),a._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之联合索引-十一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之联合索引-十一"}},[a._v("#")]),a._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/unionindex.html"}},[a._v("基于Vue和Quasar的前端SPA项目实战之联合索引（十一）")])],1),a._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之数据库逆向-十二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之数据库逆向-十二"}},[a._v("#")]),a._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/dbfirst.html"}},[a._v("基于Vue和Quasar的前端SPA项目实战之数据库逆向（十二）")])],1)])}),[],!1,null,null,null);t.default=n.exports}}]);