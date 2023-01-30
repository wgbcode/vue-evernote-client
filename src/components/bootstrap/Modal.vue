<template>
  <div class="modal-wrapper">
    <div>
      <h3>1、基本用法</h3>
      <div>
        <h2>创建模态框（Modal）</h2>
        <!-- 按钮触发模态框 -->
        <button class="btn btn-primary btn-lg"
                data-toggle="modal"
                data-target="#myModal">开始演示模态框</button>
        <!-- 模态框（Modal） -->
        <div class="modal fade"
             id="myModal"
             tabindex="-1"
             role="dialog"
             aria-labelledby="myModalLabel"
             aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-hidden="true">&times;</button>
                <h4 class="modal-title"
                    id="myModalLabel">模态框（Modal）标题</h4>
              </div>
              <div class="modal-body">在这里添加一些文本</div>
              <div class="modal-footer">
                <button type="button"
                        class="btn btn-default"
                        data-dismiss="modal">关闭</button>
                <button type="button"
                        class="btn btn-primary">提交更改</button>
              </div>
            </div><!-- /.modal-content -->
          </div><!-- /.modal -->
        </div>
      </div>
    </div>
    <div>
      <h3>2、数据属性（data-**；将 body 下的 z-index 设置为 -1)</h3>
      <div>
        <h2>模态框（Modal）插件方法</h2>
        <!-- 按钮触发模态框 -->
        <button class="btn btn-primary btn-lg"
                data-toggle="modal"
                data-target="#myModal"
                data-backdrop="true"
                data-keyboard="true">
          开始演示模态框
        </button>
        <!-- 模态框（Modal） -->
        <div class="modal fade"
             id="myModal"
             tabindex="-1"
             role="dialog"
             aria-labelledby="myModalLabel"
             aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-hidden="true">×
                </button>
                <h4 class="modal-title"
                    id="myModalLabel">
                  模态框（Modal）标题
                </h4>
              </div>
              <div class="modal-body">
                按下 ESC 按钮退出。
              </div>
              <div class="modal-footer">
                <button type="button"
                        class="btn btn-default"
                        data-dismiss="modal">关闭
                </button>
                <button type="button"
                        class="btn btn-primary">
                  提交更改
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>3、jQuery</h3>
      <div>
        <h2>模态框（Modal）插件方法</h2>
        <!-- 按钮触发模态框 -->
        <button @click="openModal()"
                class="btn btn-primary btn-lg">
          开始演示模态框
        </button>
        <!-- 模态框（Modal） -->
        <div class="modal fade"
             id="myModal"
             tabindex="-1"
             role="dialog"
             aria-labelledby="myModalLabel"
             aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-hidden="true">×
                </button>
                <h4 class="modal-title"
                    id="myModalLabel">
                  模态框（Modal）标题
                </h4>
              </div>
              <div class="modal-body">
                按下 ESC 按钮退出。
              </div>
              <div class="modal-footer">
                <button type="button"
                        class="btn btn-default"
                        data-dismiss="modal">关闭
                </button>
                <button type="button"
                        class="btn btn-primary">
                  提交更改
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      $('#myModal').on('show.bs.modal', function () {
        console.log('show 方法被调用了');
      })
      $('#myModal').on('shown.bs.modal', function () {
        console.log('模态框已展示');
      })
      $('#myModal').on('hide.bs.modal', function () {
        console.log('hide 方法被调用了');
      })
      $('#myModal').on('hidden.bs.modal', function () {
        console.log('模态框已隐藏');
      })

      $('#myModal').modal({ keyboard: true })

      setTimeout(() => $('#myModal').modal('hide'), 3000)


    }
  }
}
</script>

<style lang="scss" scoped>
.modal-wrapper {
  width: 100%;
  padding: 30px;
}
</style>