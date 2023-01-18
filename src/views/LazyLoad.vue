<template>
  <div class="img">
    <div v-for="(img,index) in list"
         :key="index">
      <img v-lazy='img' />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { list: [] }
  },
  created() {
    const pathName = 'picture.png'
    for (let i = 0; i < 50; i++) {
      this.list.push(require("../assets/" + pathName))
    }
  }
}
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  div {
    display: flex;
    justify-content: center;
    img {
      width: 50%;
      margin: 20px 0;
    }
  }
}
</style>