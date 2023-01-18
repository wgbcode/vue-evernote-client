<template>
  <div class="navBar">
    <div>
      <h3>1、默认的导航栏</h3>
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
      <h3>2、响应式的导航栏（实际上就是通过添加一个class把导航菜单折叠起来）</h3>
      <div>
        <nav class="navbar navbar-default"
             role="navigation">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button"
                      class="navbar-toggle"
                      data-toggle="collapse"
                      data-target="#example-navbar-collapse">
                <span class="sr-only">切换导航</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand"
                 href="#">菜鸟教程</a>
            </div>
            <div class="collapse navbar-collapse"
                 id="example-navbar-collapse">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">iOS</a></li>
                <li><a href="#">SVN</a></li>
                <li class="dropdown">
                  <a href="#"
                     class="dropdown-toggle"
                     data-toggle="dropdown">
                    Java <b class="caret"></b>
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
      <h3>3、导航栏中的表单</h3>
      <div>
        <nav class="navbar navbar-default"
             role="navigation">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand"
                 href="#">菜鸟教程</a>
            </div>
            <form class="navbar-form navbar-left"
                  role="search">
              <div class="form-group">
                <input type="text"
                       class="form-control"
                       placeholder="Search">
              </div>
              <button type="submit"
                      class="btn btn-default">提交</button>
            </form>
          </div>
        </nav>
      </div>
    </div>
    <div>
      <h3>4、导航栏中的按钮</h3>
      <div>
        <nav class="navbar navbar-default"
             role="navigation">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand"
                 href="#">菜鸟教程</a>
            </div>
            <div>
              <form class="navbar-form navbar-left"
                    role="search">
                <div class="form-group">
                  <input type="text"
                         class="form-control"
                         placeholder="Search">
                </div>
                <button type="submit"
                        class="btn btn-default">提交按钮</button>
              </form>
              <button type="button"
                      class="btn btn-default navbar-btn">
                导航栏按钮
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div>
      <h3>5、导航栏中的文本</h3>
      <div>
        <nav class="navbar navbar-default"
             role="navigation">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand"
                 href="#">菜鸟教程</a>
            </div>
            <div>
              <form class="navbar-form navbar-left"
                    role="search">
                <div class="form-group">
                  <input type="text"
                         class="form-control"
                         placeholder="Search">
                </div>
                <button type="submit"
                        class="btn btn-default">提交按钮</button>
              </form>
              <button type="button"
                      class="btn btn-default navbar-btn">
                导航栏按钮
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div>
      <h3>6、结合图标的导航链接</h3>
      <div>
        <nav class="navbar navbar-default"
             role="navigation">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand"
                 href="#">菜鸟教程</a>
            </div>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#"><span class="glyphicon glyphicon-user"></span> 注册</a></li>
              <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div>
      <h3>7、组件对齐方式</h3>
      <div>
        <nav class="navbar navbar-default"
             role="navigation">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand"
                 href="#">菜鸟教程</a>
            </div>
            <div>
              <!--向左对齐-->
              <ul class="nav navbar-nav navbar-left">
                <li class="dropdown">
                  <a href="#"
                     class="dropdown-toggle"
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
              <form class="navbar-form navbar-left"
                    role="search">
                <button type="submit"
                        class="btn btn-default">
                  向左对齐-提交按钮
                </button>
              </form>
              <p class="navbar-text navbar-left">向左对齐-文本</p>
              <!--向右对齐-->
              <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                  <a href="#"
                     class="dropdown-toggle"
                     data-toggle="dropdown">
                    Java <b class="caret"></b>
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
              <form class="navbar-form navbar-right"
                    role="search">
                <button type="submit"
                        class="btn btn-default">
                  向右对齐-提交按钮
                </button>
              </form>
              <p class="navbar-text navbar-right">向右对齐-文本</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div>
      <h3>8、固定到顶部</h3>
      <div>
        <nav class="navbar navbar-default navbar-fixed-top"
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
                     data-toggle="dropdown">
                    Java <b class="caret"></b>
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
      <h3>9、固定到底部</h3>
      <div>
        <nav class="navbar navbar-default navbar-fixed-bottom"
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
                     data-toggle="dropdown">
                    Java <b class="caret"></b>
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
      <h3>10、静态的顶部（随页面一起滚动）</h3>
      <div>
        <nav class="navbar navbar-default navbar-static-top"
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
                     data-toggle="dropdown">
                    Java <b class="caret"></b>
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
      <h3>11、反色的导航栏（黑色背景白色文本）</h3>
      <div>
        <nav class="navbar navbar-default navbar-static-top"
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
                     data-toggle="dropdown">
                    Java <b class="caret"></b>
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

}
</script>

<style lang="scss" scoped>
.navBar {
  width: 100%;
  padding: 30px;
}
</style>