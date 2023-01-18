<template>
  <div class="buttonDrapdown">
    <div>
      <h3>1、基本用法</h3>
      <div>
        <div class="btn-group">
          <button type="button"
                  class="btn btn-default dropdown-toggle"
                  data-toggle="dropdown">默认
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu"
              role="menu">
            <li>
              <a href="#">功能</a>
            </li>
            <li>
              <a href="#">另一个功能</a>
            </li>
            <li>
              <a href="#">其他</a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="#">分离的链接</a>
            </li>
          </ul>
        </div>
        <div class="btn-group">
          <button type="button"
                  class="btn btn-primary dropdown-toggle"
                  data-toggle="dropdown">原始
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu"
              role="menu">
            <li>
              <a href="#">功能</a>
            </li>
            <li>
              <a href="#">另一个功能</a>
            </li>
            <li>
              <a href="#">其他</a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="#">分离的链接</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <h3>2、分割的按钮下拉菜单</h3>
      <div>
        <div class="btn-group">
          <button type="button"
                  class="btn btn-default">默认</button>
          <button type="button"
                  class="btn btn-default dropdown-toggle"
                  data-toggle="dropdown">
            <span class="caret"></span>
            <span class="sr-only">切换下拉菜单</span>
          </button>
          <ul class="dropdown-menu"
              role="menu">
            <li><a href="#">功能</a></li>
            <li><a href="#">另一个功能</a></li>
            <li><a href="#">其他</a></li>
            <li class="divider"></li>
            <li><a href="#">分离的链接</a></li>
          </ul>
        </div>
        <div class="btn-group">
          <button type="button"
                  class="btn btn-primary">原始</button>
          <button type="button"
                  class="btn btn-primary dropdown-toggle"
                  data-toggle="dropdown">
            <span class="caret"></span>
            <span class="sr-only">切换下拉菜单</span>
          </button>
          <ul class="dropdown-menu"
              role="menu">
            <li><a href="#">功能</a></li>
            <li><a href="#">另一个功能</a></li>
            <li><a href="#">其他</a></li>
            <li class="divider"></li>
            <li><a href="#">分离的链接</a></li>
          </ul>
        </div>

      </div>
    </div>
    <div>
      <h3>3、按钮下拉菜单的大小</h3>
      <div>
        <div class="btn-group">
          <button type="button"
                  class="btn btn-default dropdown-toggle btn-lg"
                  data-toggle="dropdown">默认
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu"
              role="menu">
            <li>
              <a href="#">功能</a>
            </li>
            <li>
              <a href="#">另一个功能</a>
            </li>
            <li>
              <a href="#">其他</a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="#">分离的链接</a>
            </li>
          </ul>
        </div>
        <div class="btn-group">
          <button type="button"
                  class="btn btn-primary dropdown-toggle btn-sm"
                  data-toggle="dropdown">原始
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu"
              role="menu">
            <li>
              <a href="#">功能</a>
            </li>
            <li>
              <a href="#">另一个功能</a>
            </li>
            <li>
              <a href="#">其他</a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="#">分离的链接</a>
            </li>
          </ul>
        </div>
        <div class="btn-group">
          <button type="button"
                  class="btn btn-success dropdown-toggle btn-xs"
                  data-toggle="dropdown">成功
            <span class="caret"></span></button>
          <ul class="dropdown-menu"
              role="menu">
            <li>
              <a href="#">功能</a>
            </li>
            <li>
              <a href="#">另一个功能</a>
            </li>
            <li>
              <a href="#">其他</a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="#">分离的链接</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <h3>4、按钮上拉菜单</h3>
      <div>
        <div class="row"
             style="margin-left:50px; margin-top:200px">
          <div class="btn-group dropup">
            <button type="button"
                    class="btn btn-default dropdown-toggle"
                    data-toggle="dropdown">默认
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu"
                role="menu">
              <li>
                <a href="#">功能</a>
              </li>
              <li>
                <a href="#">另一个功能</a>
              </li>
              <li>
                <a href="#">其他</a>
              </li>
              <li class="divider"></li>
              <li>
                <a href="#">分离的链接</a>
              </li>
            </ul>
          </div>
          <div class="btn-group dropup">
            <button type="button"
                    class="btn btn-primary dropdown-toggle"
                    data-toggle="dropdown">原始
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu"
                role="menu">
              <li>
                <a href="#">功能</a>
              </li>
              <li>
                <a href="#">另一个功能</a>
              </li>
              <li>
                <a href="#">其他</a>
              </li>
              <li class="divider"></li>
              <li>
                <a href="#">分离的链接</a>
              </li>
            </ul>
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
.buttonDrapdown {
  padding: 30px;
  width: 100%;
}
</style>