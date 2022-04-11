(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{388:function(a,t,r){"use strict";r.r(t);var s=r(45),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"基于crudapi后端java-sdk二次开发之环境搭建-一"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基于crudapi后端java-sdk二次开发之环境搭建-一"}},[a._v("#")]),a._v(" 基于crudapi后端Java SDK二次开发之环境搭建（一）")]),a._v(" "),r("h2",{attrs:{id:"背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[a._v("#")]),a._v(" 背景")]),a._v(" "),r("p",[a._v("目前crudapi增删改查接口系统的后台Java API服务已经全部可用，为了满足复杂的场景，可以通过集成Java SDK的方式进行二次开发，以满足实际业务需求。")]),a._v(" "),r("h2",{attrs:{id:"环境搭建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[a._v("#")]),a._v(" 环境搭建")]),a._v(" "),r("h4",{attrs:{id:"安装jdk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装jdk"}},[a._v("#")]),a._v(" 安装JDK")]),a._v(" "),r("p",[a._v("官网"),r("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.oracle.com/java/technologies/javase-downloads.html"),r("OutboundLink")],1),a._v("下载1.8版本（Java SE 8，Java SE 8u281 is the latest release for the Java SE 8 Platform.）安装即可。")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("java -version\njava version "),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.8.0_241"')]),a._v("\n")])])]),r("h4",{attrs:{id:"安装maven"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装maven"}},[a._v("#")]),a._v(" 安装maven")]),a._v(" "),r("p",[a._v("官网"),r("a",{attrs:{href:"http://maven.apache.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://maven.apache.org"),r("OutboundLink")],1),a._v("下载最新稳定版安装即可，经验证版本3.6是可以的。")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("mvn -v\nApache Maven "),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.6")]),a._v(".3\n")])])]),r("h2",{attrs:{id:"下载demo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#下载demo"}},[a._v("#")]),a._v(" 下载demo")]),a._v(" "),r("h3",{attrs:{id:"github地址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#github地址"}},[a._v("#")]),a._v(" GitHub地址")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/crudapi/crudapi-example",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/crudapi/crudapi-example"),r("OutboundLink")],1)]),a._v(" "),r("h3",{attrs:{id:"gitee地址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gitee地址"}},[a._v("#")]),a._v(" Gitee地址")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://gitee.com/crudapi/crudapi-example",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://gitee.com/crudapi/crudapi-example"),r("OutboundLink")],1)]),a._v(" "),r("p",[a._v("由于网络原因，GitHub可能速度慢，改成访问Gitee即可，代码同步更新。")]),a._v(" "),r("h3",{attrs:{id:"本地安装jar包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本地安装jar包"}},[a._v("#")]),a._v(" 本地安装Jar包")]),a._v(" "),r("div",{staticClass:"language-build extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("cd lib\n./download.sh\n")])])]),r("h2",{attrs:{id:"mysql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[a._v("#")]),a._v(" Mysql")]),a._v(" "),r("h3",{attrs:{id:"导入数据库到crudapi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#导入数据库到crudapi"}},[a._v("#")]),a._v(" 导入数据库到crudapi")]),a._v(" "),r("p",[a._v("./database/mysql/crudapi-mysql.sql")]),a._v(" "),r("h3",{attrs:{id:"配置数据库信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置数据库信息"}},[a._v("#")]),a._v(" 配置数据库信息")]),a._v(" "),r("p",[a._v("src/main/resources/application.properties")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("spring.datasource.driverClassName"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("com.mysql.cj.jdbc.Driver\nspring.datasource.url"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("jdbc:mysql://localhost:3306/crudapi?serverTimezone"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Asia/Shanghai"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("useUnicode")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("characterEncoding")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("utf8"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("useSSL")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("allowPublicKeyRetrieval")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\nspring.datasource.username"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("root\nspring.datasource.password"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("root\n")])])]),r("h2",{attrs:{id:"postgresql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#postgresql"}},[a._v("#")]),a._v(" Postgresql")]),a._v(" "),r("h3",{attrs:{id:"导入数据库到模式crudapi-public"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#导入数据库到模式crudapi-public"}},[a._v("#")]),a._v(" 导入数据库到模式crudapi.public")]),a._v(" "),r("p",[a._v("./database/postgresql/crudapi-pgsql.sql")]),a._v(" "),r("h3",{attrs:{id:"配置数据库信息-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置数据库信息-2"}},[a._v("#")]),a._v(" 配置数据库信息")]),a._v(" "),r("p",[a._v("src/main/resources/application.properties")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("spring.datasource.driverClassName"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("org.postgresql.Driver\nspring.datasource.url"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("jdbc:postgresql://localhost:5432/crudapi\nspring.datasource.username"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("postgres\nspring.datasource.password"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("postgres\n")])])]),r("h2",{attrs:{id:"oracle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oracle"}},[a._v("#")]),a._v(" Oracle")]),a._v(" "),r("h3",{attrs:{id:"导入数据库到模式crudapi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#导入数据库到模式crudapi"}},[a._v("#")]),a._v(" 导入数据库到模式crudapi")]),a._v(" "),r("p",[a._v("./database/oracle/crudapi-oracle.sql")]),a._v(" "),r("h3",{attrs:{id:"配置数据库信息-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置数据库信息-3"}},[a._v("#")]),a._v(" 配置数据库信息")]),a._v(" "),r("p",[a._v("src/main/resources/application.properties")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("spring.datasource.url"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("jdbc:oracle:thin:@//localhost:1521/XEPDB1\nspring.datasource.driverClassName"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("oracle.jdbc.OracleDriver\nspring.datasource.username"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("crudapi\nspring.datasource.password"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("crudapi\nspring.datasource.initialization-mode"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always\nspring.datasource.schema"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("classpath:schema.sql\n")])])]),r("h2",{attrs:{id:"ms-sql-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ms-sql-server"}},[a._v("#")]),a._v(" MS SQL Server")]),a._v(" "),r("h3",{attrs:{id:"导入数据库到模式crudapi-dbo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#导入数据库到模式crudapi-dbo"}},[a._v("#")]),a._v(" 导入数据库到模式crudapi.dbo")]),a._v(" "),r("p",[a._v("./database/mssql/crudapi-mssql.sql")]),a._v(" "),r("h3",{attrs:{id:"配置数据库信息-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置数据库信息-4"}},[a._v("#")]),a._v(" 配置数据库信息")]),a._v(" "),r("p",[a._v("src/main/resources/application.properties")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("spring.datasource.url"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("jdbc:sqlserver://localhost:1433"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SelectMethod")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("cursor"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DatabaseName")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("crudapi\nspring.datasource.driverClassName"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("com.microsoft.sqlserver.jdbc.SQLServerDriver\nspring.datasource.username"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("sa\nspring.datasource.password"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Mssql1433\n")])])]),r("h3",{attrs:{id:"编译"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[a._v("#")]),a._v(" 编译")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" crudapi-example\nmvn clean "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -Dmaven.test.skip"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n")])])]),r("h3",{attrs:{id:"运行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[a._v("#")]),a._v(" 运行")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" crudapi-example\njava -jar ./target/crudapi-example-1.4.0.jar\n")])])]),r("h3",{attrs:{id:"crudapi后台管理web"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#crudapi后台管理web"}},[a._v("#")]),a._v(" crudapi后台管理WEB")]),a._v(" "),r("p",[r("a",{attrs:{href:"http://127.0.0.1:8888/crudapi/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://127.0.0.1:8888/crudapi/"),r("OutboundLink")],1)]),a._v(" "),r("h4",{attrs:{id:"用户名和密码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用户名和密码"}},[a._v("#")]),a._v(" 用户名和密码")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("superadmin\n1234567890\n")])])]),r("h4",{attrs:{id:"swagger文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#swagger文档"}},[a._v("#")]),a._v(" swagger文档")]),a._v(" "),r("p",[r("a",{attrs:{href:"http://127.0.0.1:8888/swagger-ui.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://127.0.0.1:8888/swagger-ui.html"),r("OutboundLink")],1)]),a._v(" "),r("h3",{attrs:{id:"crudapi后台管理web-二次开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#crudapi后台管理web-二次开发"}},[a._v("#")]),a._v(" crudapi后台管理WEB(二次开发)")]),a._v(" "),r("h4",{attrs:{id:"github仓库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#github仓库"}},[a._v("#")]),a._v(" GitHub仓库")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/crudapi/crudapi-admin-web",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/crudapi/crudapi-admin-web"),r("OutboundLink")],1)]),a._v(" "),r("h4",{attrs:{id:"gitee仓库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gitee仓库"}},[a._v("#")]),a._v(" Gitee仓库")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://gitee.com/crudapi/crudapi-admin-web",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://gitee.com/crudapi/crudapi-admin-web"),r("OutboundLink")],1)]),a._v(" "),r("h3",{attrs:{id:"crudapi后台管理web-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#crudapi后台管理web-2"}},[a._v("#")]),a._v(" crudapi后台管理WEB")]),a._v(" "),r("h4",{attrs:{id:"github仓库-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#github仓库-2"}},[a._v("#")]),a._v(" GitHub仓库")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/crudapi/crudapi-admin-web",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/crudapi/crudapi-admin-web"),r("OutboundLink")],1)]),a._v(" "),r("h4",{attrs:{id:"gitee仓库-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gitee仓库-2"}},[a._v("#")]),a._v(" Gitee仓库")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://gitee.com/crudapi/crudapi-admin-web",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://gitee.com/crudapi/crudapi-admin-web"),r("OutboundLink")],1)]),a._v(" "),r("h4",{attrs:{id:"修改配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[a._v("#")]),a._v(" 修改配置")]),a._v(" "),r("p",[a._v("修改quasar.conf.js文件中devServer->proxy->target")]),a._v(" "),r("div",{staticClass:"language-javascript extra-class"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[a._v("devServer"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  https"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  port"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  open"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  proxy"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/api/*"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      target"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://127.0.0.1:8888"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      changeOrigin"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),r("h2",{attrs:{id:"小结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[a._v("#")]),a._v(" 小结")]),a._v(" "),r("p",[a._v("本文主要介绍了crudapi后台Java SDK集成方式，demo运行起来后，既可以直接使用，也可以进行二次开发，后续会根据实际案例详情介绍中二次开发的使用场景。")]),a._v(" "),r("h2",{attrs:{id:"附demo演示"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#附demo演示"}},[a._v("#")]),a._v(" 附demo演示")]),a._v(" "),r("p",[a._v("主要功能：元数据管理，序列号管理，表关系设置，业务数据crud增删改查等。")]),a._v(" "),r("p",[r("img",{attrs:{src:"/img/scenario/table.png",alt:"table"}}),a._v("\n表单对应不同的对象")]),a._v(" "),r("p",[r("img",{attrs:{src:"/img/scenario/relation.png",alt:"table"}}),a._v("\n表关系图显示不同对象之间的关系")]),a._v(" "),r("p",[r("img",{attrs:{src:"/img/scenario/customer.png",alt:"customer"}}),a._v("\n业务数据操作")]),a._v(" "),r("p",[a._v("官网地址："),r("a",{attrs:{href:"https://crudapi.cn",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://crudapi.cn"),r("OutboundLink")],1),r("br"),a._v("\n测试地址："),r("a",{attrs:{href:"https://demo.crudapi.cn/crudapi/login",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://demo.crudapi.cn/crudapi/login"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);