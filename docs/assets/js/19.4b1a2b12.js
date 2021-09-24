(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{384:function(t,a,s){"use strict";s.r(a);var n=s(45),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"基于vue和quasar的前端spa项目实战之元数据导出导入-十五"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之元数据导出导入-十五"}},[t._v("#")]),t._v(" 基于Vue和Quasar的前端SPA项目实战之元数据导出导入（十五）")]),t._v(" "),s("h2",{attrs:{id:"回顾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[t._v("#")]),t._v(" 回顾")]),t._v(" "),s("p",[t._v("通过前一篇文章"),s("RouterLink",{attrs:{to:"/crudapi-admin-web/module.html"}},[t._v(" 基于Vue和Quasar的前端SPA项目实战之模块管理（十四）")]),t._v("的介绍，通过模块管理将具有相同类型或属于同一业务的表单进行分类，方便快速查找。本文主要介绍元数据表单的导出和导入功能。")],1),t._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("针对元数据表，有时需要导出元数据到本地文件，用来备份数据，这里采用的文件格式为json。后续可以通过导入功能进行导入，既可以用来恢复元数据，也可以用于分享元数据给其他系统。")]),t._v(" "),s("h2",{attrs:{id:"ui界面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ui界面"}},[t._v("#")]),t._v(" UI界面")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/crudapi-admin-web/metadataexportimport/export.png",alt:"export"}}),s("br"),t._v("\n选中需要导出的表单，然后点击“批量导出”按钮")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/crudapi-admin-web/metadataexportimport/import.png",alt:"import"}}),s("br"),t._v("\n选择之前导出的元数据json文件，然后点击“提交”按钮")]),t._v(" "),s("h2",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),s("h3",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("p",[t._v("导出的时候需要把表单引用的序列号sequence和表关系relation一并导出")]),t._v(" "),s("h3",{attrs:{id:"数据格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据格式"}},[t._v("#")]),t._v(" 数据格式")]),t._v(" "),s("p",[t._v("包括sequences, tables, tableRelations三个字段，类型都是数组")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sequences"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tables"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tableRelations"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"核心代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心代码"}},[t._v("#")]),t._v(" 核心代码")]),t._v(" "),s("h4",{attrs:{id:"导出元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导出元数据"}},[t._v("#")]),t._v(" 导出元数据")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onExportClickAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ids "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selected"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ids"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"list->onExportClickAction"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"导出中"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fileName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" metadataTableService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ids"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"元数据表生成成功，请等待下载完成后查看！"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/file/"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" fileName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_blank"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"导入元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入元数据"}},[t._v("#")]),t._v(" 导入元数据")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onSubmitClick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"import->onSubmitClick"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"上传中"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" form "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FormData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    form"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fileInfo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" metadataTableService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("form"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"导入成功"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),s("p",[t._v("以学生表、成绩表为例，其中学生表学号字段引用了序列号studenNo，学生表和成绩表之间是一对多关系，")]),t._v(" "),s("h4",{attrs:{id:"元数据定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元数据定义"}},[t._v("#")]),t._v(" 元数据定义")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/crudapi-admin-web/metadataexportimport/seq.png",alt:"seq"}}),s("br"),t._v("\n学号studenNo流水号")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/crudapi-admin-web/metadataexportimport/student.png",alt:"student"}}),s("br"),t._v("\n学生表student")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/crudapi-admin-web/metadataexportimport/relation.png",alt:"relation"}}),s("br"),t._v("\n一对多relation")]),t._v(" "),s("h4",{attrs:{id:"导出导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导出导入"}},[t._v("#")]),t._v(" 导出导入")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/crudapi-admin-web/metadataexportimport/metadatajson.png",alt:"metadatajson"}}),s("br"),t._v("\n导出的json文件")]),t._v(" "),s("h4",{attrs:{id:"验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/crudapi-admin-web/metadataexportimport/business.png",alt:"业务数据"}}),s("br"),t._v("\n导出json文件之后删除已有表单，然后重新导入，得到的元数据和之前的一样，测试录入学生成绩业务数据，结果和期望的一致。")]),t._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[t._v("本文主要介绍了元数据表单的导出导入功能，可以用于日常元数据表单备份，也可以分享给其他系统进行导入，以达到复用的目标。后续可以利用元数据导出导入功能配置一些常见的业务表单，比如电商、CRM、教育等领域，然后将这些业务表单导出供用户下载和使用。")]),t._v(" "),s("h2",{attrs:{id:"crudapi简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crudapi简介"}},[t._v("#")]),t._v(" crudapi简介")]),t._v(" "),s("p",[t._v("crudapi是crud+api组合，表示增删改查接口，是一款零代码可配置的产品。使用crudapi可以告别枯燥无味的增删改查代码，让您更加专注业务，节约大量成本，从而提高工作效率。crudapi的目标是让处理数据变得更简单，所有人都可以免费使用！无需编程，通过配置自动生成crud增删改查RESTful API，提供后台UI管理业务数据。基于主流的开源框架，拥有自主知识产权，支持二次开发。")]),t._v(" "),s("h2",{attrs:{id:"demo演示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo演示"}},[t._v("#")]),t._v(" demo演示")]),t._v(" "),s("p",[t._v("crudapi属于产品级的零代码平台，不同于自动代码生成器，不需要生成Controller、Service、Repository、Entity等业务代码，程序运行起来就可以使用，真正0代码，可以覆盖基本的和业务无关的CRUD RESTful API。")]),t._v(" "),s("p",[t._v("官网地址："),s("a",{attrs:{href:"https://crudapi.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://crudapi.cn"),s("OutboundLink")],1),s("br"),t._v("\n测试地址："),s("a",{attrs:{href:"https://demo.crudapi.cn/crudapi/login",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://demo.crudapi.cn/crudapi/login"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"附源码地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附源码地址"}},[t._v("#")]),t._v(" 附源码地址")]),t._v(" "),s("h3",{attrs:{id:"github地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github地址"}},[t._v("#")]),t._v(" GitHub地址")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/crudapi/crudapi-admin-web",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/crudapi/crudapi-admin-web"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"gitee地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitee地址"}},[t._v("#")]),t._v(" Gitee地址")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/crudapi/crudapi-admin-web",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/crudapi/crudapi-admin-web"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("由于网络原因，GitHub可能速度慢，改成访问Gitee即可，代码同步更新。")]),t._v(" "),s("h2",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之环境搭建-一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之环境搭建-一"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/helloworld.html"}},[t._v("基于Vue和Quasar的前端SPA项目实战之环境搭建（一）")])],1),t._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之用户登录-二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之用户登录-二"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/login.html"}},[t._v("基于Vue和Quasar的前端SPA项目实战之用户登录（二）")])],1),t._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之布局菜单-三"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之布局菜单-三"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/layout.html"}},[t._v("基于Vue和Quasar的前端SPA项目实战之布局菜单（三）")])],1),t._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之序列号-四"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之序列号-四"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/sequence.html"}},[t._v("基于Vue和Quasar的前端SPA项目实战之序列号（四）")])],1),t._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之动态表单-五"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之动态表单-五"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/metadatatable.html"}},[t._v("基于Vue和Quasar的前端SPA项目实战之动态表单（五）")])],1),t._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之表关系-六"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之表关系-六"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/metadatarelation.html"}},[t._v("基于Vue和Quasar的前端SPA项目实战之表关系（六）")])],1),t._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之业务数据-七"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之业务数据-七"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/business.html"}},[t._v("基于Vue和Quasar的前端SPA项目实战之业务数据（七）")])],1),t._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之docker部署-八"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之docker部署-八"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/docker.html"}},[t._v("基于Vue和Quasar的前端SPA项目实战之docker部署（八）")])],1),t._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之数据导入-九"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之数据导入-九"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/import.html"}},[t._v("基于Vue和Quasar的前端SPA项目实战之数据导入（九）")])],1),t._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之文件上传-十"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之文件上传-十"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/fileupload.html"}},[t._v("基于Vue和Quasar的前端SPA项目实战之文件上传（十）")])],1),t._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之联合索引-十一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之联合索引-十一"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/unionindex.html"}},[t._v("基于Vue和Quasar的前端SPA项目实战之联合索引（十一）")])],1),t._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之数据库逆向-十二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之数据库逆向-十二"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/dbfirst.html"}},[t._v("基于Vue和Quasar的前端SPA项目实战之数据库逆向（十二）")])],1),t._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之数据导出-十三"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之数据导出-十三"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/export.html"}},[t._v("基于Vue和Quasar的前端SPA项目实战之数据导出（十三）")])],1),t._v(" "),s("h4",{attrs:{id:"基于vue和quasar的前端spa项目实战之模块管理-十四"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于vue和quasar的前端spa项目实战之模块管理-十四"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/crudapi-admin-web/module.html"}},[t._v("基于Vue和Quasar的前端SPA项目实战之模块管理（十四）")])],1)])}),[],!1,null,null,null);a.default=r.exports}}]);