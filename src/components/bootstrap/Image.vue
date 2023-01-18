<template>
  <div class="image">
    <div>
      <h3>1、添加圆角</h3>
      <img src="../../assets/picture.png"
           alt=""
           class="img-rounded"
           style="width: 100%;">
    </div>
    <div>
      <h3>2、变成圆形</h3>
      <img src="../../assets/picture.png"
           alt=""
           class="img-circle"
           style="width: 100%;">
    </div>
    <div>
      <h3>3、缩略图功能(内边距和边框)</h3>
      <img src="../../assets/picture.png"
           alt=""
           class="img-thumbnail">
    </div>
    <div>
      <h3>4、图片响应式</h3>
      <img src="../../assets/picture.png"
           alt=""
           class="img-responsive">
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  padding: 30px;
}
</style>