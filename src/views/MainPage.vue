<template>
  <div class="router-wrapper">
    <h1>主页面</h1>
    <router-link to="/login">登录页</router-link>
    <router-link to="/bootstrap">Bootstrap</router-link>
    <router-link to="/lazyload">图片懒加载</router-link>
  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.router-wrapper {
  display: flex;
  flex-direction: column;
  margin: 40px 100px;
  h1 {
    display: inline;
    text-align: center;
  }
  a {
    padding: 10px;
    font-size: 24px;
  }
}
</style>