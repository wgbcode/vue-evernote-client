<template>
  <div class="jumbotron-wrapper">
    <div>
      <h3>1、基本样式(选择器 container 做了媒体查询，宽度固定设置为 750px 或 970px。)</h3>
      <div>
        <div class="container">
          <div class="jumbotron">
            <h1>欢迎登陆页面！</h1>
            <p>这是一个超大屏幕（Jumbotron）的实例。</p>
            <p><a class="btn btn-primary btn-lg"
                 role="button">
                学习更多</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>2、width 占满屏(更详细、优先级更高的 class 选择器 .jumbotron container 的 width 设置为 100%。)</h3>
      <div>
        <div class="jumbotron">
          <div class="container">
            <h1>欢迎登陆页面！</h1>
            <p>这是一个超大屏幕（Jumbotron）的实例。</p>
            <p><a class="btn btn-primary btn-lg"
                 role="button">
                学习更多</a>
            </p>
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
.jumbotron-wrapper {
  width: 100%;
  padding: 30px;
}
</style>