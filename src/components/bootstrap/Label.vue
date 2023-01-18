<template>
  <div class="label-wrapper">
    <div>
      <h3>1、默认样式</h3>
      <div>
        <h1>Example Heading <span class="label label-default">Label</span></h1>
        <h2>Example Heading <span class="label label-default">Label</span></h2>
        <h3>Example Heading <span class="label label-default">Label</span></h3>
        <h4>Example Heading <span class="label label-default">Label</span></h4>
      </div>
    </div>
    <div>
      <h3>2、添加修饰 class</h3>
      <div>
        <span class="label label-default">默认标签</span>
        <span class="label label-primary">主要标签</span>
        <span class="label label-success">成功标签</span>
        <span class="label label-info">信息标签</span>
        <span class="label label-warning">警告标签</span>
        <span class="label label-danger">危险标签</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.label-wrapper {
  width: 100%;
  padding: 30px;
}
</style>