<template>
  <div class="dropdown2-wrapper">
    <div>
      <!-- 页面加载时，会给 data-xxx 的属性选择器添加一个点击事件。当点击事件被触发时，会调用存储在 dataset 中的 yyy 方法，从而来显示或隐藏元素 -->
      <h3>1、data-xxx = "yyy"</h3>
      <div>
        <nav class="navbar navbar-default"
             role="navigation">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand"
                 href="#">菜鸟教程</a>
            </div>
            <div>
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">iOS</a></li>
                <li><a href="#">SVN</a></li>
                <li class="dropdown">
                  <a href="#"
                     data-toggle="dropdown">
                    Java
                    <b class="caret"></b>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a href="#">jmeter</a></li>
                    <li><a href="#">EJB</a></li>
                    <li><a href="#">Jasper Report</a></li>
                    <li class="divider"></li>
                    <li><a href="#">分离的链接</a></li>
                    <li class="divider"></li>
                    <li><a href="#">另一个分离的链接</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div>
      <!-- 点击事件被解决时，会根据 class 的类选择器调用相应的函数，来显示或隐藏元素。 -->
      <h3>2、jQuery</h3>
      <div>
        <nav class="navbar navbar-default"
             role="navigation">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand"
                 href="#">菜鸟教程</a>
            </div>
            <div>
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">iOS</a></li>
                <li><a href="#">SVN</a></li>
                <li class="dropdown">
                  <a href="#"
                     class="dropdown-toggle"
                     @click="test()">
                    Java
                    <b class="caret"></b>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a href="#">jmeter</a></li>
                    <li><a href="#">EJB</a></li>
                    <li><a href="#">Jasper Report</a></li>
                    <li class="divider"></li>
                    <li><a href="#">分离的链接</a></li>
                    <li class="divider"></li>
                    <li><a href="#">另一个分离的链接</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      $('.dropdown-toggle').dropdown('toggle')
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown2-wrapper {
  width: 100%;
  padding: 30px;
}
</style>