<template>
  <div class="img">
    <div v-for="(img,index) in list"
         :key="index">
      <img v-lazy='img' />
    </div>
  </div>
</template>

<script>
import request from '../axios/request.js'

export default {
  data() {
    return { list: [] }
  },
  created() {
    const pathName = 'picture.png'
    for (let i = 0; i < 10; i++) {
      // 加载本地图片
      // this.list.push(require("../assets/" + pathName))
      // 通过 http 请求加载 faskmock 上的图片
      request('/lazyload', "POST", { id: 1, name: "zs" }).then((data) => {
        this.list.push(data.img)
      })
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
      margin: 20px;
    }
  }
}
</style>