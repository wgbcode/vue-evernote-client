<template>
  <div class="table">
    <h3>1、基本的表格</h3>
    <table class="table">
      <caption>基本的表格布局</caption>
      <thead>
        <tr>
          <th>名称</th>
          <th>城市</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tanmay</td>
          <td>Bangalore</td>
        </tr>
        <tr>
          <td>Sachin</td>
          <td>Mumbai</td>
        </tr>
      </tbody>
    </table>
    <h3>2、可选的表格类</h3>
    <h4>(1)条纹表格</h4>
    <table class="table table-striped">
      <caption>条纹表格布局</caption>
      <thead>
        <tr>
          <th>名称</th>
          <th>城市</th>
          <th>邮编</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tanmay</td>
          <td>Bangalore</td>
          <td>560001</td>
        </tr>
        <tr>
          <td>Sachin</td>
          <td>Mumbai</td>
          <td>400003</td>
        </tr>
        <tr>
          <td>Uma</td>
          <td>Pune</td>
          <td>411027</td>
        </tr>
      </tbody>
    </table>
    <h4>(2)边框表格</h4>
    <table class="table table-bordered">
      <caption>边框表格布局</caption>
      <thead>
        <tr>
          <th>名称</th>
          <th>城市</th>
          <th>邮编</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tanmay</td>
          <td>Bangalore</td>
          <td>560001</td>
        </tr>
        <tr>
          <td>Sachin</td>
          <td>Mumbai</td>
          <td>400003</td>
        </tr>
        <tr>
          <td>Uma</td>
          <td>Pune</td>
          <td>411027</td>
        </tr>
      </tbody>
    </table>
    <h4>(3)悬停表格</h4>
    <table class="table table-hover">
      <caption>悬停表格布局</caption>
      <thead>
        <tr>
          <th>名称</th>
          <th>城市</th>
          <th>邮编</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tanmay</td>
          <td>Bangalore</td>
          <td>560001</td>
        </tr>
        <tr>
          <td>Sachin</td>
          <td>Mumbai</td>
          <td>400003</td>
        </tr>
        <tr>
          <td>Uma</td>
          <td>Pune</td>
          <td>411027</td>
        </tr>
      </tbody>
    </table>
    <h4>精简表格</h4>
    <table class="table table-condensed">
      <caption>精简表格布局</caption>
      <thead>
        <tr>
          <th>名称</th>
          <th>城市</th>
          <th>邮编</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tanmay</td>
          <td>Bangalore</td>
          <td>560001</td>
        </tr>
        <tr>
          <td>Sachin</td>
          <td>Mumbai</td>
          <td>400003</td>
        </tr>
        <tr>
          <td>Uma</td>
          <td>Pune</td>
          <td>411027</td>
        </tr>
      </tbody>
    </table>
    <h3>3、上下文类</h3>
    <table class="table">
      <caption>上下文表格布局</caption>
      <thead>
        <tr>
          <th>产品</th>
          <th>付款日期</th>
          <th>状态</th>
        </tr>
      </thead>
      <tbody>
        <tr class="active">
          <td>产品1</td>
          <td>23/11/2013</td>
          <td>待发货</td>
        </tr>
        <tr class="success">
          <td>产品2</td>
          <td>10/11/2013</td>
          <td>发货中</td>
        </tr>
        <tr class="warning">
          <td>产品3</td>
          <td>20/10/2013</td>
          <td>待确认</td>
        </tr>
        <tr class="danger">
          <td>产品4</td>
          <td>20/10/2013</td>
          <td>已退货</td>
        </tr>
      </tbody>
    </table>
    <h3>4、响应式表格</h3>
    <div class="table-responsive">
      <table class="table">
        <caption>响应式表格布局</caption>
        <thead>
          <tr>
            <th>产品</th>
            <th>付款日期</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>产品1</td>
            <td>23/11/2013</td>
            <td>待发货</td>
          </tr>
          <tr>
            <td>产品2</td>
            <td>10/11/2013</td>
            <td>发货中</td>
          </tr>
          <tr>
            <td>产品3</td>
            <td>20/10/2013</td>
            <td>待确认</td>
          </tr>
          <tr>
            <td>产品4</td>
            <td>20/10/2013</td>
            <td>已退货</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  padding: 30px;
}
</style>