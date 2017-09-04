# webpack-primary

学习webpack打包服务
本项目分两部分，一部分是网页代码，一部分是打包配置。网页代码是演示部分，暂不解释。
## webpack配置
webpack分为三部分，分别是公共配置，开发部分配置和打包服务配置
1. <em>common.js</em>
是公共配置，包含了文件入口，输出配置和公共插件以及loader部分
2. <em>dev.js</em>
<em>inline-source-map</em>追踪错误和警告
<em>devServer</em>开发服务器配置
3. <em>prod.js</em>
<em> UglifyJSPlugin </em> 避免将无用的模块打包进文件中。
