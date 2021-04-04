(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{373:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据条件查询和分页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据条件查询和分页"}},[t._v("#")]),t._v(" 数据条件查询和分页")]),t._v(" "),a("p",[t._v("前面文档主要介绍了元数据配置，包括表单定义和表关系管理，以及表单数据的录入，本文主要介绍数据查询和分页在crudapi中的实现。")]),t._v(" "),a("h3",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),a("h4",{attrs:{id:"数据查询api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据查询api"}},[t._v("#")]),t._v(" 数据查询API")]),t._v(" "),a("p",[t._v("数据查询主要是指按照输入条件检索出符合要求的数据列表，如果数据量大的情况下，需要考虑分页。\n"),a("img",{attrs:{src:"/img/business/dataquery/listapi.png",alt:"listapi"}}),t._v("\nAPI为/api/business/{name}，其中name为对象名称复数形式（兼容对象名称），查询参数如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("select")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("选择查询需要的字段和关联子表，默认查询全部字段和关联子表")])]),t._v(" "),a("tr",[a("td",[t._v("expand")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("选择需要展开的关联主表，默认关联主表字段只查询id和name")])]),t._v(" "),a("tr",[a("td",[t._v("search")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("全文检索关键字，通过内置的系统字段全文索引fullTextBody实现")])]),t._v(" "),a("tr",[a("td",[t._v("filter")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("智能查询条件，格式为Condition对象JSON序列化后的字符串")])]),t._v(" "),a("tr",[a("td",[t._v("orderby")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("排序方式，ASC和DESC")])]),t._v(" "),a("tr",[a("td",[t._v("offset")]),t._v(" "),a("td",[t._v("int32")]),t._v(" "),a("td",[t._v("分页开始位置")])]),t._v(" "),a("tr",[a("td",[t._v("limit")]),t._v(" "),a("td",[t._v("int32")]),t._v(" "),a("td",[t._v("每页数量")])]),t._v(" "),a("tr",[a("td",[t._v("字段1")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("最终转换成mysql中=操作符")])]),t._v(" "),a("tr",[a("td",[t._v("字段2")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("最终转换成mysql中=操作符")])]),t._v(" "),a("tr",[a("td",[t._v("......")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("最终转换成mysql中=操作符")])])])]),t._v(" "),a("p",[t._v("字段1，字段2，...之间的关系为并且AND关系")]),t._v(" "),a("h4",{attrs:{id:"查询客户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询客户"}},[t._v("#")]),t._v(" 查询客户")]),t._v(" "),a("h5",{attrs:{id:"字段查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字段查询"}},[t._v("#")]),t._v(" 字段查询")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/business/dataquery/customerList.png",alt:"customerList"}}),t._v("\n客户customer一共录入四条数据")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/business/dataquery/liushan.png",alt:"liushan"}}),t._v("\n分别通过名称、手机、邮箱、会员卡号进行查询，请求url如下：\nhttps://demo.crudapi.cn/api/business/customer?offset=0&limit=10&name=刘禅&mobile=13088889999&email=liushan@crudapi.cn&membershipNo=VIP000000004\n查到客户刘禅")]),t._v(" "),a("h5",{attrs:{id:"全文检索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全文检索"}},[t._v("#")]),t._v(" 全文检索")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/business/dataquery/liu.png",alt:"liu"}}),t._v("\n通过关键字“刘”对客户表全文检索，请求url如下：\nhttps://demo.crudapi.cn/api/business/customer?offset=0&limit=10&search=刘"),a("br"),t._v("\n查到客户刘禅和刘备，具体原理如下：表单中所启用了“可查询”属性的字段最终拼接成一个全文检索文本fullTextBody，在插入数据和更新数据的时候及时更新，这样就可以利用mysql全文检索功能实现关键字查询, 最终转成SQL语句如下：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("ca_customer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("MATCH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("fullTextBody"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" AGAINST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'张*'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BOOLEAN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("MODE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"/img/business/dataquery/liu2.png",alt:"liu2"}}),t._v("\n类似的，通过关键字“liu”对客户表全文检索，通过邮箱匹配，也可以查询数据。")]),t._v(" "),a("h5",{attrs:{id:"智能查询原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#智能查询原理"}},[t._v("#")]),t._v(" 智能查询原理")]),t._v(" "),a("p",[t._v("定义接口条件Condition，叶子条件LeafCondition继承Condition，组合条件CompositeCondition条件继承Condition，CompositeCondition由多个Condition组合而成，通过AND和OR两种运算可以实现任何形式的复杂查询条件，这样就利用组合模式实现了智能查询，")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OperatorTypeEnum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    EQ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    NE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    LIKE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    IN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    INSELECT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    SEARCH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    GE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    GT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    LE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    LT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    BETWEEN\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("数据库查询操作符包括等于、大于、LIKE等")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@JsonPropertyOrder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alphabetic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@JsonIgnoreProperties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ignoreUnknown "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@JsonTypeInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JsonTypeInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" include "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JsonTypeInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("As")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PROPERTY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("property "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@JsonSubTypes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@JsonSubTypes.Type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompositeCondition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@JsonSubTypes.Type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LeafCondition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"L"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Condition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toQuerySql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toQueryValues")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("条件接口")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@JsonPropertyOrder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alphabetic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@JsonIgnoreProperties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ignoreUnknown "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Data")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LeafCondition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Condition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"L"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" columnName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@JsonProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"operatorType"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OperatorTypeEnum")]),t._v(" operatorType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@JsonProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"values"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" valueList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("叶子条件")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@JsonPropertyOrder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alphabetic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@JsonIgnoreProperties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ignoreUnknown "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Data")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompositeCondition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Condition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@JsonProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"conditionType"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConditionTypeEnum")]),t._v(" conditionType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConditionTypeEnum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AND"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@JsonProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"conditions"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Condition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" conditionList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Condition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("组合条件")]),t._v(" "),a("h5",{attrs:{id:"智能查询验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#智能查询验证"}},[t._v("#")]),t._v(" 智能查询验证")]),t._v(" "),a("p",[t._v("Postman验证，首先沟通mobile等于13622228888的叶子条件如下：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"L"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"columnName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mobile"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"operatorType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EQ"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"values"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"13622228888"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("序列化值为：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"L"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"columnName"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mobile"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"operatorType"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EQ"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"values"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"13622228888"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("通过encodeURIComponent编码之后为：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("%7B%22name%22%3A%22L%22%2C%22columnName%22%3A%22mobile%22%2C%22operatorType%22%3A%22EQ%22%2C%22values%22%3A%5B%2213622228888%22%5D%7D\n")])])]),a("p",[a("img",{attrs:{src:"/img/business/dataquery/condition.png",alt:"condition"}}),t._v("\n最终查询到客户关羽，因为手机号满足条件。类似的，可以构造更复杂的组合条件。")]),t._v(" "),a("h3",{attrs:{id:"字段选择select"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字段选择select"}},[t._v("#")]),t._v(" 字段选择select")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/business/dataquery/select1.png",alt:"select1"}}),t._v("\n默认情况下会选择所有字段，select如果不指定表示所有的意思")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/business/dataquery/select2.png",alt:"select2"}}),t._v("\n如果指定了字段，就查询部分字段，比如只查询id，name和mobile，其它字段和子表profile就不需要查询了，这样可以节约时间和数据大小。")]),t._v(" "),a("h3",{attrs:{id:"关联表扩展expand"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关联表扩展expand"}},[t._v("#")]),t._v(" 关联表扩展expand")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/business/dataquery/expand1.png",alt:"expand1"}}),t._v("\n子主关系中，默认只查询主表id和name，避免主表查询层次太深。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/business/dataquery/expand2.png",alt:"expand2"}}),t._v("\n如果指定expand关联对象名称，就查询主表所有字段，适用不需要延时加载的场景，比如查询客户资料时候一起查询客户customer完整信息。")]),t._v(" "),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("本文介绍了列表查询API所有的参数，包括智能查询、全文检索以及字段选择等。crudapi系统通过配置的方式实现了对象的查询和分页。")]),t._v(" "),a("h3",{attrs:{id:"附demo演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附demo演示"}},[t._v("#")]),t._v(" 附demo演示")]),t._v(" "),a("p",[t._v("本系统属于产品级的零代码平台，不同于自动代码生成器，不需要生成Controller、Service、Repository、Entity等业务代码，程序运行起来就可以使用，真正0代码，可以覆盖基本的和业务无关的CRUD RESTful API。")]),t._v(" "),a("p",[t._v("官网地址："),a("a",{attrs:{href:"https://crudapi.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://crudapi.cn"),a("OutboundLink")],1),a("br"),t._v("\n测试地址："),a("a",{attrs:{href:"https://demo.crudapi.cn/crudapi/login",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://demo.crudapi.cn/crudapi/login"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),a("h4",{attrs:{id:"crudapi系列一-入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crudapi系列一-入门"}},[t._v("#")]),t._v(" "),a("RouterLink",{attrs:{to:"/helloworld.html"}},[t._v("crudapi系列一 入门")])],1),t._v(" "),a("h4",{attrs:{id:"crudapi系列二-序列号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crudapi系列二-序列号"}},[t._v("#")]),t._v(" "),a("RouterLink",{attrs:{to:"/sequence.html"}},[t._v("crudapi系列二 序列号")])],1),t._v(" "),a("h4",{attrs:{id:"crudapi系列三-表关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crudapi系列三-表关系"}},[t._v("#")]),t._v(" "),a("RouterLink",{attrs:{to:"/relation.html"}},[t._v("crudapi系列三 表关系")])],1),t._v(" "),a("h4",{attrs:{id:"crudapi系列四-表关系高阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crudapi系列四-表关系高阶"}},[t._v("#")]),t._v(" "),a("RouterLink",{attrs:{to:"/relations.html"}},[t._v("crudapi系列四 表关系高阶")])],1),t._v(" "),a("h4",{attrs:{id:"crudapi系列五-数据条件查询和分页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crudapi系列五-数据条件查询和分页"}},[t._v("#")]),t._v(" "),a("RouterLink",{attrs:{to:"/dataquery.html"}},[t._v("crudapi系列五 数据条件查询和分页")])],1),t._v(" "),a("h4",{attrs:{id:"crudapi系列六-rbac权限模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crudapi系列六-rbac权限模型"}},[t._v("#")]),t._v(" "),a("RouterLink",{attrs:{to:"/rbac.html"}},[t._v("crudapi系列六 RBAC权限模型")])],1),t._v(" "),a("h4",{attrs:{id:"crudapi系列七-表单设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crudapi系列七-表单设计"}},[t._v("#")]),t._v(" "),a("RouterLink",{attrs:{to:"/table.html"}},[t._v("crudapi系列七 表单设计")])],1),t._v(" "),a("h4",{attrs:{id:"crudapi系列八-应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crudapi系列八-应用场景"}},[t._v("#")]),t._v(" "),a("RouterLink",{attrs:{to:"/scenario.html"}},[t._v("crudapi系列八 应用场景")])],1)])}),[],!1,null,null,null);s.default=r.exports}}]);