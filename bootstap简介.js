bootstrap是Twitter公司开发的基于HTML,CSS,JavaScript的前端框架
为实现web应用程序快速开发提供的一套前端工具包
响应式布局和移动端优先
学习内容：bootstrap全局样式的用法，viewport的意义，栅格化布局用法，字体图表，组件
实现相应布局的开发。

boot.css.com下载第三版本用于生产环境的bootstrap。http://jquery.com/download/下载Jquery。压缩后css文件夹中map后缀的是
预处理文件。先link 引入CSS文件，href引入Jquery文件，最后引入bootstrap文件。
    <link rel="stylesheet" href="G:/前端/bootstrap学习/bootstrap文档/
    bootstrap-3.3.7-dist/css/bootstrap.min.css"
    <script src="G:/前端/bootstrap学习/jquery-3.2.1.min.js"></script>
    <script src="G:/前端/bootstrap学习/bootstrap文档/
    bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
全局样式特点：代码整洁，风格统一，美观易用。bootstrap提供了大量的全局样式，基于HTML
可以通过class来设置样式得到增强的效果。
h1-h6像素36 30 24 18 14 12
class  h类设置标题样式，还增加了small标签
定义了段落的样式，text.left center right lowercase uppercase capitalize以及一些标签
表格样式.table-bordered带边框 striped带条纹 hover悬停变色 condensed紧凑风格
表单样式：输入框，单复选，下拉等。class="sr-only form-inline form-group has-success"
class="control-lable input-sm input-lg has-error"
按钮：class="btn btn-default btn-lg" class="btn btn-sucess btn-sm">
class="btn btn-primary active" class="btn btn-info btn-block"
class="btn btn-warning disabled" class="btn btn-danger "
class="btn btn-link">
图片形状：class='img-rounded circle thumbnail'
辅助类：文本颜色，背景颜色，状态设置，三角符号
如何实现栅格，图标，响应式？
何如响应式前端开发：
meta中的标签Viewport:
width height user-scalable initial-scale maximum-scale minimun-scale
<meta name='Viewport' content='width=device-width,initial-scale=1,maximum-scale=2,minimun-scale=0.5,user-scalable=no'
面试问题：将PC端改为手机端后，线条会变粗（手机端像素高，1px代表的像素点多）.
用淘宝开发的一个组件，判断当前手机用的分辨率是怎么样的，然后来改变intial-scale的大小。
响应式页面特点：视野开阔多变，信息丰富。排版新颖随意，设计师发挥空间较大。适用于PC端和手机端。
栅格布局:class="shange col-lg-3 col-md-4 col-sm-6 col-xs-12 col-lg-offset-3"
单位：px（相对屏幕分辨率的单位，无法跟随屏幕放大缩小，响应式或者手机端开发不合适）,
em（继承父元素的字体大小，适合做手机端，做大小调整，但是不一浏览器其大小是不一致点的）
rem（会继承根元素html元素的大小，稳定的，所有浏览器均支持）
图标：减少图标，图标以文字的形式出现，字体图标（直接复制上面的类名，还可以改颜色还有阿里图标）
bootstrap组件：一个网站，APP，或者一个系统的构建，一些零件的组合。
如字体图标，下拉菜单，警告框，弹出框等
组件-怪异的属性：role,aria-lable(焦点落到输入框),tabIndex,data-
图标：glyphicon  glyphicon-star
下拉菜单：
dropdown    dropdown-menu-right   divider
控件组：input-group  input-group-addon
导航组件：以一个带有class.nav的无序列表开始；.nav-tabs代表可切换导航
.nav-pills代表胶囊导航；.nav-justified代表导航垂直
分页：.pagination在父元素中添加表示分页。.pager防止在翻页区域。
.previous把连接向左对齐，.next把连接向右对齐, pagination-lg
进度条:progress表示进度条，通过状态类改变进度条的颜色，progress-bar-striped使得进度条颜色渐变
列表：list-group代表列表组；badge代表状态数
面板：panel代表面板   panel.body代表面板内容  panel-footer代表面板的注脚
bootstrap中的插件依赖bootstrap.js;bootstrap.js依赖 JQuery
