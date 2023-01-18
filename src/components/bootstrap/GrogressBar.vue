<template>
  <div class="progressBar-wrapper">
    <div>
      <h3>1、默认的进度条</h3>
      <div>
        <div class="progress">
          <div class="progress-bar"
               role="progressbar"
               aria-valuenow="60"
               aria-valuemin="0"
               aria-valuemax="100"
               style="width: 40%;">
            <span class="sr-only">40% 完成</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>2、添加文本内容</h3>
      <div>
        <div class="progress">
          <div class="progress-bar"
               role="progressbar"
               aria-valuenow="70"
               aria-valuemin="0"
               aria-valuemax="100"
               style="width:70%">
            70%
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>3、四种样式</h3>
      <div>
        <div class="progress">
          <div class="progress-bar progress-bar-success"
               role="progressbar"
               aria-valuenow="60"
               aria-valuemin="0"
               aria-valuemax="100"
               style="width: 90%;">
            <span class="sr-only">90% 完成（成功）</span>
          </div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-info"
               role="progressbar"
               aria-valuenow="60"
               aria-valuemin="0"
               aria-valuemax="100"
               style="width: 30%;">
            <span class="sr-only">30% 完成（信息）</span>
          </div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-warning"
               role="progressbar"
               aria-valuenow="60"
               aria-valuemin="0"
               aria-valuemax="100"
               style="width: 20%;">
            <span class="sr-only">20% 完成（警告）</span>
          </div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-danger"
               role="progressbar"
               aria-valuenow="60"
               aria-valuemin="0"
               aria-valuemax="100"
               style="width: 10%;">
            <span class="sr-only">10% 完成（危险）</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>4、条纹效果</h3>
      <div>
        <div class="progress progress-striped">
          <div class="progress-bar progress-bar-success"
               role="progressbar"
               aria-valuenow="60"
               aria-valuemin="0"
               aria-valuemax="100"
               style="width: 90%;">
            <span class="sr-only">90% 完成（成功）</span>
          </div>
        </div>
        <div class="progress progress-striped">
          <div class="progress-bar progress-bar-info"
               role="progressbar"
               aria-valuenow="60"
               aria-valuemin="0"
               aria-valuemax="100"
               style="width: 30%;">
            <span class="sr-only">30% 完成（信息）</span>
          </div>
        </div>
        <div class="progress progress-striped">
          <div class="progress-bar progress-bar-warning"
               role="progressbar"
               aria-valuenow="60"
               aria-valuemin="0"
               aria-valuemax="100"
               style="width: 20%;">
            <span class="sr-only">20% 完成（警告）</span>
          </div>
        </div>
        <div class="progress progress-striped">
          <div class="progress-bar progress-bar-danger"
               role="progressbar"
               aria-valuenow="60"
               aria-valuemin="0"
               aria-valuemax="100"
               style="width: 10%;">
            <span class="sr-only">10% 完成（危险）</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>5、动画效果</h3>
      <div>
        <div class="progress progress-striped active">
          <div class="progress-bar progress-bar-success"
               role="progressbar"
               aria-valuenow="60"
               aria-valuemin="0"
               aria-valuemax="100"
               style="width: 40%;">
            <span class="sr-only">40% 完成</span>
          </div>
        </div>

      </div>
    </div>
    <div>
      <h3>6、堆叠效果</h3>
      <div>
        <div class="progress">
          <div class="progress-bar progress-bar-success"
               role="progressbar"
               aria-valuenow="60"
               aria-valuemin="0"
               aria-valuemax="100"
               style="width: 40%;">
            <span class="sr-only">40% 完成</span>
          </div>
          <div class="progress-bar progress-bar-info"
               role="progressbar"
               aria-valuenow="60"
               aria-valuemin="0"
               aria-valuemax="100"
               style="width: 30%;">
            <span class="sr-only">30% 完成（信息）</span>
          </div>
          <div class="progress-bar progress-bar-warning"
               role="progressbar"
               aria-valuenow="60"
               aria-valuemin="0"
               aria-valuemax="100"
               style="width: 20%;">
            <span class="sr-only">20% 完成（警告）</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>7、设置高度</h3>
      <div>
        <div class="progress"
             style="height: 1px;">
          <div class="progress-bar"
               role="progressbar"
               style="width: 25%;"
               aria-valuenow="25"
               aria-valuemin="0"
               aria-valuemax="100"></div>
        </div>
        <div class="progress"
             style="height: 20px;">
          <div class="progress-bar"
               role="progressbar"
               style="width: 25%;"
               aria-valuenow="25"
               aria-valuemin="0"
               aria-valuemax="100"></div>
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
.progressBar-wrapper {
  width: 100%;
  padding: 30px;
}
</style>