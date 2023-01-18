<template>
  <div class="bootstrap-wrapper">
    <div class="bootstrap-title">Bootstrap 示例</div>
    <div class="bootstrap-sidebar">
      <div>
        <h2>Bootstrap CSS</h2>
        <router-link to="/bootstrap/gridsystem">网格系统</router-link>
        <router-link to="/bootstrap/typeset">排版</router-link>
        <router-link to="/bootstrap/code">代码</router-link>
        <router-link to="/bootstrap/table">表格</router-link>
        <router-link to="/bootstrap/form">表单</router-link>
        <router-link to="/bootstrap/button">按钮</router-link>
        <router-link to="/bootstrap/image">图片</router-link>
      </div>
      <div>
        <h2>Bootstrap 布局组件</h2>
        <router-link to="/bootstrap/glyphicons">字体图标</router-link>
        <router-link to="/bootstrap/dropdowns">下拉菜单</router-link>
        <router-link to="/bootstrap/buttongroup">按钮组</router-link>
        <router-link to="/bootstrap/buttondrapdown">按钮下拉菜单</router-link>
        <router-link to="/bootstrap/inputgroup">输入框组</router-link>
        <router-link to="/bootstrap/navelement">导航元素</router-link>
        <router-link to="/bootstrap/navbar">导航栏</router-link>
        <router-link to="/bootstrap/breadcrumbs">面包屑导航</router-link>
        <router-link to="/bootstrap/pagination">分页</router-link>
        <router-link to="/bootstrap/label">标签</router-link>
        <router-link to="/bootstrap/badges">徽章</router-link>
        <router-link to="/bootstrap/jumbotron">超大屏幕</router-link>
        <router-link to="/bootstrap/pageheader">页面标题</router-link>
        <router-link to="/bootstrap/phumbnail">缩略图</router-link>
        <router-link to="/bootstrap/alerts">警告</router-link>
        <router-link to="/bootstrap/grogressbar">进度条</router-link>
        <router-link to="/bootstrap/mediaobject">多媒体对象</router-link>
        <router-link to="/bootstrap/listgrooup">列表组</router-link>
        <router-link to="/bootstrap/panels">面板</router-link>
        <router-link to="/bootstrap/wells">Wells</router-link>
        <router-link to="/bootstrap/createweb">创建一个网页</router-link>
      </div>
      <div>
        <h2>Bootstrap 插件</h2>
        <router-link to="/bootstrap/">过渡效果</router-link>
        <router-link to="/bootstrap/">模态框</router-link>
        <router-link to="/bootstrap/">下拉菜单</router-link>
        <router-link to="/bootstrap/">滚动监听</router-link>
        <router-link to="/bootstrap/">标签页</router-link>
        <router-link to="/bootstrap/">提示工具</router-link>
        <router-link to="/bootstrap/">弹出框</router-link>
        <router-link to="/bootstrap/">警告框</router-link>
        <router-link to="/bootstrap/">按钮</router-link>
        <router-link to="/bootstrap/">折叠</router-link>
        <router-link to="/bootstrap/">轮播</router-link>
        <router-link to="/bootstrap/">附加导航</router-link>
      </div>
    </div>
    <div class="bootstrap-main">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
export default {
  methods: {
  }

}
</script>

<style lang="scss" scoped>
.bootstrap-wrapper {
  .bootstrap-title {
    height: 60px;
    background: rgb(174, 165, 165);
    font-size: 24px;
    text-align: center;
    line-height: 60px;
  }
  .bootstrap-sidebar {
    padding: 20px 40px;
    width: 200px;
    position: fixed;
    left: 0;
    top: 60px;
    bottom: 0;
    overflow-y: auto;
    h2 {
      font-size: 20px;
      font-weight: 700;
    }
    h2,
    a {
      padding: 10px;
      display: block;
    }
  }
  .bootstrap-main {
    position: fixed;
    left: 200px;
    top: 60px;
    right: 0;
    bottom: 0;
    overflow-y: auto;
  }
}
</style>