<template>
  <div class="button">
    <div>
      <h3>1、基本样式</h3>
      <button type="button"
              class="btn btn-default">默认按钮</button>
      <button type="button"
              class="btn btn-primary">原始按钮</button>
      <button type="button"
              class="btn btn-success">成功按钮</button>
      <button type="button"
              class="btn btn-info">信息按钮</button>
      <button type="button"
              class="btn btn-warning">警告按钮</button>
      <button type="button"
              class="btn btn-danger">危险按钮</button>
      <button type="button"
              class="btn btn-link">链接按钮</button>
    </div>
    <hr>
    <div>
      <h3>2、按键的大小</h3>
      <p>
        <button type="button"
                class="btn btn-primary btn-lg">大的原始按钮</button>
        <button type="button"
                class="btn btn-default btn-lg">大的按钮</button>
      </p>
      <p>
        <button type="button"
                class="btn btn-primary">默认大小的原始按钮</button>
        <button type="button"
                class="btn btn-default">默认大小的按钮</button>
      </p>
      <p>
        <button type="button"
                class="btn btn-primary btn-sm">小的原始按钮</button>
        <button type="button"
                class="btn btn-default btn-sm">小的按钮</button>
      </p>
      <p>
        <button type="button"
                class="btn btn-primary btn-xs">特别小的原始按钮</button>
        <button type="button"
                class="btn btn-default btn-xs">特别小的按钮</button>
      </p>
      <p>
        <button type="button"
                class="btn btn-primary btn-lg btn-block">块级的原始按钮</button>
        <button type="button"
                class="btn btn-default btn-lg btn-block">块级的按钮</button>
      </p>
    </div>
    <hr>
    <div>
      <h3>3、按钮的状态</h3>
      <div>
        <h4>(1)激活状态</h4>
        <p>
          <button type="button"
                  class="btn btn-default btn-lg ">默认按钮</button>
          <button type="button"
                  class="btn btn-default btn-lg active">激活按钮</button>
        </p>
        <p>
          <button type="button"
                  class="btn btn-primary btn-lg ">原始按钮</button>
          <button type="button"
                  class="btn btn-primary btn-lg active">激活的原始按钮</button>
        </p>
      </div>
      <hr>
      <div>
        <h4>(2)禁用状态</h4>
        <p>
          <button type="button"
                  class="btn btn-default btn-lg">默认按钮</button>
          <button type="button"
                  class="btn btn-default btn-lg"
                  disabled="disabled">禁用按钮</button>
        </p>
        <p>
          <button type="button"
                  class="btn btn-primary btn-lg ">原始按钮</button>
          <button type="button"
                  class="btn btn-primary btn-lg"
                  disabled="disabled">禁用的原始按钮</button>
        </p>
        <p>
          <a href="#"
             class="btn btn-default btn-lg"
             role="button">链接</a>
          <a href="#"
             class="btn btn-default btn-lg disabled"
             role="button">禁用链接</a>
        </p>
        <p>
          <a href="#"
             class="btn btn-primary btn-lg"
             role="button">原始链接</a>
          <a href="#"
             class="btn btn-primary btn-lg disabled"
             role="button">禁用的原始链接</a>
        </p>
      </div>
    </div>
    <hr>
    <div>
      <h3>4、按钮组</h3>
      <div>
        <h4>(1)基本样式</h4>
        <div class="btn-group">
          <button type="button"
                  class="btn btn-primary">Apple</button>
          <button type="button"
                  class="btn btn-primary">Samsung</button>
          <button type="button"
                  class="btn btn-primary">Sony</button>
        </div>

      </div>
      <hr>
      <div>
        <h4>(2)控制大小</h4>
        <div class="btn-group btn-group-lg">
          <button type="button"
                  class="btn btn-primary">Apple</button>
          <button type="button"
                  class="btn btn-primary">Samsung</button>
          <button type="button"
                  class="btn btn-primary">Sony</button>
        </div>
      </div>
      <hr>
      <div>
        <h4>(3)控制方向</h4>
        <div class="btn-group-vertical">
          <button type="button"
                  class="btn btn-primary">Apple</button>
          <button type="button"
                  class="btn btn-primary">Samsung</button>
          <button type="button"
                  class="btn btn-primary">Sony</button>
        </div>
      </div>
    </div>
    <hr>
    <div>
      <h3>5、自适应大小的按钮组</h3>
      <div>
        <h4>(1)a 标签</h4>
        <div class="btn-group btn-group-justified">
          <a href="#"
             class="btn btn-primary">Apple</a>
          <a href="#"
             class="btn btn-primary">Samsung</a>
          <a href="#"
             class="btn btn-primary">Sony</a>
        </div>
      </div>
      <hr>
      <div>
        <h4>(2)button 元素</h4>
        <div class="btn-group btn-group-justified">
          <div class="btn-group">
            <button type="button"
                    class="btn btn-primary">Apple</button>
          </div>
          <div class="btn-group">
            <button type="button"
                    class="btn btn-primary">Samsung</button>
          </div>
          <div class="btn-group">
            <button type="button"
                    class="btn btn-primary">Sony</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>6、内嵌下拉菜单的按钮组</h3>
      <div>
        <h4>(1)基本样式</h4>
        <div class="btn-group">
          <button type="button"
                  class="btn btn-primary">Apple</button>
          <button type="button"
                  class="btn btn-primary">Samsung</button>
          <div class="btn-group">
            <button type="button"
                    class="btn btn-primary dropdown-toggle"
                    data-toggle="dropdown">
              Sony <span class="caret"></span></button>
            <ul class="dropdown-menu"
                role="menu">
              <li><a href="#">Tablet</a></li>
              <li><a href="#">Smartphone</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr>
      <div>
        <h4>(2)分割按钮</h4>
        <div class="btn-group">
          <button type="button"
                  class="btn btn-primary">Sony</button>
          <button type="button"
                  class="btn btn-primary dropdown-toggle"
                  data-toggle="dropdown">
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu"
              role="menu">
            <li><a href="#">Tablet</a></li>
            <li><a href="#">Smartphone</a></li>
          </ul>
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
.button {
  width: 100%;
  padding: 30px;
}
</style>