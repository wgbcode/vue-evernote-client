<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  position: relative;
  .modal-backdrop {
    z-index: -1;
  }
}
#section1 {
  padding-top: 50px;
  height: 500px;
  color: #fff;
  background-color: #1e88e5;
}
#section2 {
  padding-top: 50px;
  height: 500px;
  color: #fff;
  background-color: #673ab7;
}
#section3 {
  padding-top: 50px;
  height: 500px;
  color: #fff;
  background-color: #ff9800;
}
#section41 {
  padding-top: 50px;
  height: 500px;
  color: #fff;
  background-color: #00bcd4;
}
#section42 {
  padding-top: 50px;
  height: 500px;
  color: #fff;
  background-color: #009688;
}
</style>
