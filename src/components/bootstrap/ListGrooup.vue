<template>
  <div class="listGroup-wrapper">
    <div>
      <h3>1、基本的样式</h3>
      <div>
        <ul class="list-group">
          <li class="list-group-item">免费域名注册</li>
          <li class="list-group-item">免费 Window 空间托管</li>
          <li class="list-group-item">图像的数量</li>
          <li class="list-group-item">24*7 支持</li>
          <li class="list-group-item">每年更新成本</li>
        </ul>
      </div>
    </div>
    <div>
      <h3>2、添加徽章</h3>
      <div>
        <ul class="list-group">
          <li class="list-group-item">免费域名注册</li>
          <li class="list-group-item">免费 Window 空间托管</li>
          <li class="list-group-item">图像的数量</li>
          <li class="list-group-item">
            <span class="badge">新</span>
            24*7 支持
          </li>
          <li class="list-group-item">每年更新成本</li>
          <li class="list-group-item">
            <span class="badge">新</span>
            折扣优惠
          </li>
        </ul>
      </div>
    </div>
    <div>
      <h3>4、添加链接</h3>
      <div>
        <a href="#"
           class="list-group-item active">
          免费域名注册
        </a>
        <a href="#"
           class="list-group-item">24*7 支持</a>
        <a href="#"
           class="list-group-item">免费 Window 空间托管</a>
        <a href="#"
           class="list-group-item">图像的数量</a>
        <a href="#"
           class="list-group-item">每年更新成本</a>
      </div>
    </div>
    <div>
      <h3>5、自定义内容</h3>
      <div>
        <div class="list-group">
          <a href="#"
             class="list-group-item active">
            <h4 class="list-group-item-heading">
              入门网站包
            </h4>
          </a>
          <a href="#"
             class="list-group-item">
            <h4 class="list-group-item-heading">
              免费域名注册
            </h4>
            <p class="list-group-item-text">
              您将通过网页进行免费域名注册。
            </p>
          </a>
          <a href="#"
             class="list-group-item">
            <h4 class="list-group-item-heading">
              24*7 支持
            </h4>
            <p class="list-group-item-text">
              我们提供 24*7 支持。
            </p>
          </a>
        </div>
      </div>
    </div>
    <div>
      <h3>6、水平列表</h3>
      <div>
        <div class="container">
          <div class="row"
               style="padding-top:50px">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center">
              <div class="list-group list-group-horizontal">
                <a href="#"
                   class="list-group-item active">Google</a>
                <a href="#"
                   class="list-group-item">Runoob</a>
                <a href="#"
                   class="list-group-item">Taobao</a>
                <a href="#"
                   class="list-group-item">Github</a>
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

}
</script>

<style lang="scss" scoped>
.listGroup-wrapper {
  width: 100%;
  padding: 30px;
  .list-group-horizontal .list-group-item {
    display: inline-block;
  }
  .list-group-horizontal .list-group-item {
    margin-bottom: 0;
    margin-left: -4px;
    margin-right: 0;
  }
  .list-group-horizontal .list-group-item:first-child {
    border-top-right-radius: 0;
    border-bottom-left-radius: 4px;
  }
  .list-group-horizontal .list-group-item:last-child {
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0;
  }
}
</style>