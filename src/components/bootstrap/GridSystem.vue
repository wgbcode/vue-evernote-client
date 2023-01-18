<template>
  <div class="gridsystem">
    <h3>1、基本网格结构</h3>
    <div class="container">
      <div class="row">
        <div class="col-md-4"
             style="background-color:aqua">4</div>
        <div class="col-md-4"
             style="background-color:antiquewhite">4</div>
        <div class="col-md-4"
             style="background-color:burlywood">4</div>
      </div>
    </div>
    <h3>2、响应式布局</h3>
    <div class="container">
      <div class="row">
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"
             style="background-color:aqua">4</div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"
             style="background-color:antiquewhite">4</div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"
             style="background-color:burlywood">4</div>
      </div>
    </div>
    <h3>3、列偏移</h3>
    <div class="container">
      <div class="row">
        <div class="col-md-4"
             style="background-color:aqua">偏移前</div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-4 col-md-offset-8"
             style="background-color:aqua">偏移后</div>
      </div>
    </div>
    <h3>4、列嵌套</h3>
    <div class="container">
      <div class="row">
        <div class="col-md-6"
             style="background-color:aqua">第一列</div>
        <div class="col-md-6"
             style="background-color:aqua">第二列
          <div class="row">
            <div class="col-md-6"
                 style="background-color:cornflowerblue">嵌套内容</div>
            <div class="col-md-6"
                 style="background-color:darkgreen">嵌套内容</div>
          </div>
        </div>
      </div>
    </div>
    <h3>5、列排序</h3>
    <div class="container">
      <h4>排序前</h4>
      <div class="row">
        <div class="col-md-4"
             style="background-color:aqua">前</div>
        <div class="col-md-8"
             style="background-color:cornflowerblue">后</div>
      </div>
      <hr>
      <h4>排序后</h4>
      <div class="row">
        <div class="col-md-4 col-md-push-8"
             style="background-color:aqua">前</div>
        <div class="col-md-8 col-md-pull-4"
             style="background-color:cornflowerblue">后</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.gridsystem {
  padding: 30px;
  .container {
    width: 100%;
  }
}
</style>