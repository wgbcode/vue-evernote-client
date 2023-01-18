<template>
  <div class="navElement">
    <div>
      <h3>1、标签式导航</h3>
      <div>
        <p>标签式的导航菜单</p>
        <ul class="nav nav-tabs">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#">SVN</a></li>
          <li><a href="#">iOS</a></li>
          <li><a href="#">VB.Net</a></li>
          <li><a href="#">Java</a></li>
          <li><a href="#">PHP</a></li>
        </ul>
      </div>
    </div>
    <div>
      <h3>2、胶囊式导航</h3>
      <div>
        <h4>(1)基本样式</h4>
        <div>
          <p>基本的胶囊式导航菜单</p>
          <ul class="nav nav-pills">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">SVN</a></li>
            <li><a href="#">iOS</a></li>
            <li><a href="#">VB.Net</a></li>
            <li><a href="#">Java</a></li>
            <li><a href="#">PHP</a></li>
          </ul>
        </div>
      </div>
      <div>
        <h4>(2)垂直方向</h4>
        <div>
          <p>垂直的胶囊式导航菜单</p>
          <ul class="nav nav-pills nav-stacked">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">SVN</a></li>
            <li><a href="#">iOS</a></li>
            <li><a href="#">VB.Net</a></li>
            <li><a href="#">Java</a></li>
            <li><a href="#">PHP</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <h3>3、两端对齐</h3>
      <div>
        <p>两端对齐的导航元素</p>
        <ul class="nav nav-pills nav-justified">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#">SVN</a></li>
          <li><a href="#">iOS</a></li>
          <li><a href="#">VB.Net</a></li>
          <li><a href="#">Java</a></li>
          <li><a href="#">PHP</a></li>
        </ul><br><br><br>
        <ul class="nav nav-tabs nav-justified">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#">SVN</a></li>
          <li><a href="#">iOS</a></li>
          <li><a href="#">VB.Net</a></li>
          <li><a href="#">Java</a></li>
          <li><a href="#">PHP</a></li>
        </ul>
      </div>
    </div>
    <div>
      <h3>4、禁用链接</h3>
      <div>
        <p>导航元素中的禁用链接</p>
        <ul class="nav nav-pills">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#">SVN</a></li>
          <li class="disabled"><a href="#">iOS（禁用链接）</a></li>
          <li><a href="#">VB.Net</a></li>
          <li><a href="#">Java</a></li>
          <li><a href="#">PHP</a></li>
        </ul><br><br>
        <ul class="nav nav-tabs">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#">SVN</a></li>
          <li><a href="#">iOS</a></li>
          <li class="disabled"><a href="#">VB.Net（禁用链接）</a></li>
          <li><a href="#">Java</a></li>
          <li><a href="#">PHP</a></li>
        </ul>
      </div>
    </div>
    <div>
      <h3>5、下拉菜单</h3>
      <div>
        <p>带有下拉菜单的标签</p>
        <ul class="nav nav-tabs">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#">SVN</a></li>
          <li><a href="#">iOS</a></li>
          <li><a href="#">VB.Net</a></li>
          <li class="dropdown">
            <a class="dropdown-toggle"
               data-toggle="dropdown"
               href="#">
              Java <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="#">Swing</a></li>
              <li><a href="#">jMeter</a></li>
              <li><a href="#">EJB</a></li>
              <li class="divider"></li>
              <li><a href="#">分离的链接</a></li>
            </ul>
          </li>
          <li><a href="#">PHP</a></li>
        </ul>
      </div>
    </div>
    <div>
      <h3>6、与 data 属性绑定，内容按事件显示</h3>
      <div>
        <div class="container">
          <h2>动态标签</h2>
          <p><strong>提示:</strong> 与 .tab-pane 和 data-toggle="tab" (data-toggle="pill" ) 一同使用, 设置标签页对应的内容随标签的切换而更改。</p>
          <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab"
                 href="#home">首页</a></li>
            <li><a data-toggle="tab"
                 href="#menu1">菜单 1</a></li>
            <li><a data-toggle="tab"
                 href="#menu2">菜单 2</a></li>
            <li><a data-toggle="tab"
                 href="#menu3">菜单 3</a></li>
          </ul>

          <div class="tab-content">
            <div id="home"
                 class="tab-pane fade in active">
              <h3>首页</h3>
              <p>菜鸟教程 —— 学的不仅是技术，更是梦想！！！</p>
            </div>
            <div id="menu1"
                 class="tab-pane fade">
              <h3>菜单 1</h3>
              <p>这是菜单 1 显示的内容。这是菜单 1 显示的内容。这是菜单 1 显示的内容。</p>
            </div>
            <div id="menu2"
                 class="tab-pane fade">
              <h3>菜单 2</h3>
              <p>这是菜单 2 显示的内容。这是菜单 2 显示的内容。这是菜单 2 显示的内容。</p>
            </div>
            <div id="menu3"
                 class="tab-pane fade">
              <h3>菜单 3</h3>
              <p>这是菜单 3 显示的内容。这是菜单 3 显示的内容。这是菜单 3 显示的内容。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navElement {
  padding: 30px;
  width: 100%;
}
</style>