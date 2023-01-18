<template>
  <div class="panels-wrapper">
    <div>
      <h3>1、基本样式</h3>
      <div>
        <div class="panel panel-default">
          <div class="panel-body">
            这是一个基本的面板
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>2、面板标题</h3>
      <div>
        <div class="panel panel-default">
          <div class="panel-heading">
            不带 title 的面板标题
          </div>
          <div class="panel-body">
            面板内容
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            不带 title 的面板标题
          </div>
          <div class="panel-body">
            面板内容
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>3、面板脚注</h3>
      <div>
        <div class="panel panel-default">
          <div class="panel-body">
            这是一个基本的面板
          </div>
          <div class="panel-footer">面板脚注</div>
        </div>
      </div>
    </div>
    <div>
      <h3>4、带语境色菜的面板</h3>
      <div>
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">面板标题</h3>
          </div>
          <div class="panel-body">
            这是一个基本的面板
          </div>
        </div>
        <div class="panel panel-success">
          <div class="panel-heading">
            <h3 class="panel-title">面板标题</h3>
          </div>
          <div class="panel-body">
            这是一个基本的面板
          </div>
        </div>
        <div class="panel panel-info">
          <div class="panel-heading">
            <h3 class="panel-title">面板标题</h3>
          </div>
          <div class="panel-body">
            这是一个基本的面板
          </div>
        </div>
        <div class="panel panel-warning">
          <div class="panel-heading">
            <h3 class="panel-title">面板标题</h3>
          </div>
          <div class="panel-body">
            这是一个基本的面板
          </div>
        </div>
        <div class="panel panel-danger">
          <div class="panel-heading">
            <h3 class="panel-title">面板标题</h3>
          </div>
          <div class="panel-body">
            这是一个基本的面板
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>5、带表格的面板</h3>
      <div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">面板标题</h3>
          </div>
          <div class="panel-body">
            这是一个基本的面板
          </div>
          <table class="table">
            <th>产品</th>
            <th>价格 </th>
            <tr>
              <td>产品 A</td>
              <td>200</td>
            </tr>
            <tr>
              <td>产品 B</td>
              <td>400</td>
            </tr>
          </table>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">面板标题</div>
          <table class="table">
            <th>产品</th>
            <th>价格 </th>
            <tr>
              <td>产品 A</td>
              <td>200</td>
            </tr>
            <tr>
              <td>产品 B</td>
              <td>400</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div>
      <h3>6、带列表组的面板</h3>
      <div>
        <div class="panel panel-default">
          <div class="panel-heading">面板标题</div>
          <div class="panel-body">
            <p>这是一个基本的面板内容。这是一个基本的面板内容。
              这是一个基本的面板内容。这是一个基本的面板内容。
              这是一个基本的面板内容。这是一个基本的面板内容。
              这是一个基本的面板内容。这是一个基本的面板内容。
            </p>
          </div>
          <ul class="list-group">
            <li class="list-group-item">免费域名注册</li>
            <li class="list-group-item">免费 Window 空间托管</li>
            <li class="list-group-item">图像的数量</li>
            <li class="list-group-item">24*7 支持</li>
            <li class="list-group-item">每年更新成本</li>
          </ul>
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
.panels-wrapper {
  width: 100%;
  padding: 30px;
}
</style>