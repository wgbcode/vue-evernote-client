<template>
  <div class="alert-wrapper">
    <div>
      <h3>1、基本样式</h3>
      <div>
        <div class="alert alert-success">成功！很好地完成了提交。</div>
        <div class="alert alert-info">信息！请注意这个信息。</div>
        <div class="alert alert-warning">警告！请不要提交。</div>
        <div class="alert alert-danger">错误！请进行一些更改。</div>
      </div>
    </div>
    <div>
      <h3>2、可取消的警告</h3>
      <div>
        <div class="alert alert-success alert-dismissable">
          <button type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-hidden="true">
            &times;
          </button>
          成功！很好地完成了提交。
        </div>
        <div class="alert alert-info alert-dismissable">
          <button type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-hidden="true">
            &times;
          </button>
          信息！请注意这个信息。
        </div>
        <div class="alert alert-warning alert-dismissable">
          <button type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-hidden="true">
            &times;
          </button>
          警告！请不要提交。
        </div>
        <div class="alert alert-danger alert-dismissable">
          <button type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-hidden="true">
            &times;
          </button>
          错误！请进行一些更改。
        </div>
      </div>
    </div>
    <div>
      <h3>3、警告中的链接</h3>
      <div>
        <div class="alert alert-success">
          <a href="#"
             class="alert-link">成功！很好地完成了提交。</a>
        </div>
        <div class="alert alert-info">
          <a href="#"
             class="alert-link">信息！请注意这个信息。</a>
        </div>
        <div class="alert alert-warning">
          <a href="#"
             class="alert-link">警告！请不要提交。</a>
        </div>
        <div class="alert alert-danger">
          <a href="#"
             class="alert-link">错误！请进行一些更改。</a>
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
.alert-wrapper {
  width: 100%;
  padding: 30px;
}
</style>