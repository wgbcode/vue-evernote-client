<template>
  <div class="bootonGroup">
    <div>
      <h3>1、基本样式</h3>
      <div>
        <div class="btn-group">
          <button type="button"
                  class="btn btn-default">按钮 1</button>
          <button type="button"
                  class="btn btn-default">按钮 2</button>
          <button type="button"
                  class="btn btn-default">按钮 3</button>
        </div>
      </div>
    </div>
    <div>
      <h3>2、按钮工具栏</h3>
      <div>
        <div class="btn-toolbar"
             role="toolbar">
          <div class="btn-group">
            <button type="button"
                    class="btn btn-default">按钮 1</button>
            <button type="button"
                    class="btn btn-default">按钮 2</button>
            <button type="button"
                    class="btn btn-default">按钮 3</button>
          </div>
          <div class="btn-group">
            <button type="button"
                    class="btn btn-default">按钮 4</button>
            <button type="button"
                    class="btn btn-default">按钮 5</button>
            <button type="button"
                    class="btn btn-default">按钮 6</button>
          </div>
          <div class="btn-group">
            <button type="button"
                    class="btn btn-default">按钮 7</button>
            <button type="button"
                    class="btn btn-default">按钮 8</button>
            <button type="button"
                    class="btn btn-default">按钮 9</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>3、按钮的大小</h3>
      <div>
        <div class="btn-group btn-group-lg">
          <button type="button"
                  class="btn btn-default">按钮 1</button>
          <button type="button"
                  class="btn btn-default">按钮 2</button>
          <button type="button"
                  class="btn btn-default">按钮 3</button>
        </div>
        <div class="btn-group btn-group-sm">
          <button type="button"
                  class="btn btn-default">按钮 4</button>
          <button type="button"
                  class="btn btn-default">按钮 5</button>
          <button type="button"
                  class="btn btn-default">按钮 6</button>
        </div>
        <div class="btn-group btn-group-xs">
          <button type="button"
                  class="btn btn-default">按钮 7</button>
          <button type="button"
                  class="btn btn-default">按钮 8</button>
          <button type="button"
                  class="btn btn-default">按钮 9</button>
        </div>
      </div>
    </div>
    <div>
      <h3>4、嵌套</h3>
      <div>
        <div class="btn-group">
          <button type="button"
                  class="btn btn-default">按钮 1</button>
          <button type="button"
                  class="btn btn-default">按钮 2</button>
          <div class="btn-group">
            <button type="button"
                    class="btn btn-default dropdown-toggle"
                    data-toggle="dropdown">
              下拉
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a href="#">下拉链接 1</a></li>
              <li><a href="#">下拉链接 2</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>5、垂直的按钮组</h3>
      <div>
        <div class="btn-group-vertical">
          <button type="button"
                  class="btn btn-default">按钮 1</button>
          <button type="button"
                  class="btn btn-default">按钮 2</button>
          <div class="btn-group-vertical">
            <button type="button"
                    class="btn btn-default dropdown-toggle"
                    data-toggle="dropdown">
              下拉
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a href="#">下拉链接 1</a></li>
              <li><a href="#">下拉链接 2</a></li>
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
.bootonGroup {
  padding: 30px;
  width: 100%;
}
</style>