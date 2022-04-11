(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{391:function(t,a,r){"use strict";r.r(a);var e=r(45),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"crudapi增删改查接口零代码产品成功案例之金茶王投票系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#crudapi增删改查接口零代码产品成功案例之金茶王投票系统"}},[t._v("#")]),t._v(" crudapi增删改查接口零代码产品成功案例之金茶王投票系统")]),t._v(" "),r("h2",{attrs:{id:"简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),r("p",[t._v("2020年由于疫情原因，金茶王投票活动改成线上云投票，所以需要一套投票系统进行比赛。参赛选手包括两种类型，分别为餐厅和师傅，投票通过微信公众号页面进行，为了防止作弊，每人每天可以为3位师傅和3个餐厅投票，投票持续时间为一个星期，最终根据票数进行排名。")]),t._v(" "),r("h2",{attrs:{id:"ui界面原型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ui界面原型"}},[t._v("#")]),t._v(" UI界面原型")]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/crudapi-success-story/vote/kamcha1.png",alt:"kamcha1"}}),t._v(" "),r("img",{attrs:{src:"/img/crudapi-success-story/vote/kamcha2.png",alt:"kamcha2"}})]),t._v(" "),r("h2",{attrs:{id:"技术框架"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#技术框架"}},[t._v("#")]),t._v(" 技术框架")]),t._v(" "),r("p",[t._v("项目采用前后端分离的方式，数据库采用MySql，后端API采用Java+Spring boot，前端H5采用Vue+Quasar, 由于该项目业务逻辑主要就是基本表单的crud增删改查，所以非常适合用crudapi进行二次开发，通过配置实现RESTful API和后台管理Web，前端H5页面单独定制开发即可。")]),t._v(" "),r("h2",{attrs:{id:"数据库表单"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据库表单"}},[t._v("#")]),t._v(" 数据库表单")]),t._v(" "),r("p",[t._v("主要业务表单包括候选人（包括师傅和餐厅），赛区，投票活动，活动报名，投票记录等")]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/crudapi-success-story/vote/tablerelation.png",alt:"tablerelation"}}),t._v("\n不同表之间建立表关联")]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/crudapi-success-story/vote/candidate.png",alt:"candidate"}}),t._v("\n师傅和餐厅共用候选人candidate表，根据类型type字段进行区分，restaurant表示餐厅，chef表示师傅。")]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/crudapi-success-story/vote/voteLog.png",alt:"voteLog"}}),t._v("\n投票记录voteLog表，通过唯一性索引uq_vote_log_token限制刷票")]),t._v(" "),r("p",[t._v("包含设计表单到配置，工作量大概一个小时左右。")]),t._v(" "),r("h2",{attrs:{id:"后端api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#后端api"}},[t._v("#")]),t._v(" 后端API")]),t._v(" "),r("p",[t._v("表单和表关系配置好了，对应的crud增删改查RESTful API也就自动生成了，后端基本完成了80%工作量，然后再集成微信自动登录和阿里云OSS图片上传，剩余工作2天之内完成，")]),t._v(" "),r("h2",{attrs:{id:"后台管理web"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#后台管理web"}},[t._v("#")]),t._v(" 后台管理Web")]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/crudapi-success-story/vote/admin.png",alt:"admin"}}),t._v("\n用途主要是管理员编辑餐厅、师傅信息、查看投票结果和导出数据，crudapi默认页面已经基本满足需求。")]),t._v(" "),r("h2",{attrs:{id:"前端h5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端h5"}},[t._v("#")]),t._v(" 前端H5")]),t._v(" "),r("p",[t._v("定制开发，15个工作日完成开发和测试。")]),t._v(" "),r("h2",{attrs:{id:"小结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),r("p",[t._v("本文主要介绍了金茶王投票系统，利用了crudapi增删改查接口零代码产品进行二次开发，节约了大量时间，总共开发时间18人天。最终按时并高质量完成任务，2020国际金茶王大赛圆满成功。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("名称")]),t._v(" "),r("th",[t._v("采用框架")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("时间")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Java API")]),t._v(" "),r("td",[t._v("crudapi")]),t._v(" "),r("td",[t._v("Java SDK集成")]),t._v(" "),r("td",[t._v("3天")])]),t._v(" "),r("tr",[r("td",[t._v("后台管理Web")]),t._v(" "),r("td",[t._v("crudapi-admin-web")]),t._v(" "),r("td",[t._v("直接使用产品")]),t._v(" "),r("td",[t._v("0天")])]),t._v(" "),r("tr",[r("td",[t._v("前端H5")]),t._v(" "),r("td",[t._v("Vue + Quasar")]),t._v(" "),r("td",[t._v("定制")]),t._v(" "),r("td",[t._v("15天")])])])]),t._v(" "),r("h2",{attrs:{id:"附crudapi产品"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#附crudapi产品"}},[t._v("#")]),t._v(" 附crudapi产品")]),t._v(" "),r("h4",{attrs:{id:"简介-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介-2"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),r("p",[t._v("crudapi是crud+api组合，表示增删改查接口，是一款零代码可配置的产品。使用crudapi可以告别枯燥无味的增删改查代码，让您更加专注业务，节约大量成本，从而提高工作效率。\ncrudapi的目标是让处理数据变得更简单，所有人都可以免费使用！\n无需编程，通过配置自动生成crud增删改查RESTful API，提供后台UI管理业务数据。基于主流的开源框架，拥有自主知识产权，支持二次开发。")]),t._v(" "),r("h4",{attrs:{id:"demo演示"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#demo演示"}},[t._v("#")]),t._v(" demo演示")]),t._v(" "),r("p",[t._v("crudapi属于产品级的零代码平台，不同于自动代码生成器，不需要生成Controller、Service、Repository、Entity等业务代码，程序运行起来就可以使用，真正0代码，可以覆盖基本的和业务无关的CRUD RESTful API。")]),t._v(" "),r("p",[t._v("官网地址："),r("a",{attrs:{href:"https://crudapi.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://crudapi.cn"),r("OutboundLink")],1),r("br"),t._v("\n测试地址："),r("a",{attrs:{href:"https://demo.crudapi.cn/crudapi/login",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://demo.crudapi.cn/crudapi/login"),r("OutboundLink")],1)]),t._v(" "),r("h4",{attrs:{id:"源码地址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#源码地址"}},[t._v("#")]),t._v(" 源码地址")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("GitHub地址"),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/crudapi/crudapi-admin-web",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/crudapi/crudapi-admin-web"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[t._v("Gitee地址"),r("br"),t._v(" "),r("a",{attrs:{href:"https://gitee.com/crudapi/crudapi-admin-web",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/crudapi/crudapi-admin-web"),r("OutboundLink")],1)])])]),t._v(" "),r("p",[t._v("由于网络原因，GitHub可能速度慢，改成访问Gitee即可，代码同步更新。")])])}),[],!1,null,null,null);a.default=s.exports}}]);