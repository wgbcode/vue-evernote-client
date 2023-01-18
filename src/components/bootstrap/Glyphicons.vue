<template>
  <div class="glyphicons">
    <div>
      <h3>1、基本用法</h3>
      <div>
        <p>
          <button type="button"
                  class="btn btn-default">
            <span class="glyphicon glyphicon-sort-by-attributes"></span>
          </button>
          <button type="button"
                  class="btn btn-default">
            <span class="glyphicon glyphicon-sort-by-attributes-alt"></span>
          </button>
          <button type="button"
                  class="btn btn-default">
            <span class="glyphicon glyphicon-sort-by-order"></span>
          </button>
          <button type="button"
                  class="btn btn-default">
            <span class="glyphicon glyphicon-sort-by-order-alt"></span>
          </button>
        </p>
        <button type="button"
                class="btn btn-default btn-lg">
          <span class="glyphicon glyphicon-user"></span> User
        </button>
        <button type="button"
                class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-user"></span> User
        </button>
        <button type="button"
                class="btn btn-default btn-xs">
          <span class="glyphicon glyphicon-user"></span> User
        </button>
      </div>
    </div>
    <div>
      <h3>2、定制字体图标</h3>
      <div>
        <h4>(1)定制字体尺寸</h4>
        <div>
          <button type="button"
                  class="btn btn-primary btn-lg">
            <span class="glyphicon glyphicon-user"></span> User
          </button>
        </div>
      </div>
    </div>
    <div>
      <h4>(2)定制字体颜色</h4>
      <div>
        <button type="button"
                class="btn btn-primary btn-lg"
                style="color: rgb(212, 106, 64);">
          <span class="glyphicon glyphicon-user"></span> User
        </button>
      </div>
    </div>
    <div>
      <h4>(3)应用文本阴影</h4>
      <div>
        <button type="button"
                class="btn btn-primary btn-lg"
                style="text-shadow: black 5px 3px 3px;">
          <span class="glyphicon glyphicon-user"></span> User
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.glyphicons {
  padding: 30px;
  width: 100%;
}
</style>