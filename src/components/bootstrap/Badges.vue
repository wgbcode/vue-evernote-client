<template>
  <div class="badges">
    <div>
      <h3>1、基本样式</h3>
      <div><a href="#">Mailbox <span class="badge">50</span></a></div>
    </div>
    <div>
      <h3>2、无消息时，隐藏徽章（:empty）</h3>
      <div class="container">
        <h2>徽章</h2>
        <p>.badge 类指定未读消息的数量:</p>
        <p><a href="#">收件箱 <span class="badge">21</span></a></p>
      </div>
    </div>
    <div>
      <h3>3、激活导航状态</h3>
      <div>
        <h4>胶囊式导航中的激活状态</h4>
        <ul class="nav nav-pills">
          <li class="active">
            <a href="#">首页
              <span class="badge">42</span>
            </a>
          </li>
          <li>
            <a href="#">简介</a>
          </li>
          <li>
            <a href="#">消息
              <span class="badge">3</span>
            </a>
          </li>
        </ul>
        <br>
        <h4>列表导航中的激活状态</h4>
        <ul class="nav nav-pills nav-stacked"
            style="max-width: 260px;">
          <li class="active">
            <a href="#">
              <span class="badge pull-right">42</span>首页</a>
          </li>
          <li>
            <a href="#">简介</a>
          </li>
          <li>
            <a href="#">
              <span class="badge pull-right">3</span>消息
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.badges {
  width: 100%;
  padding: 30px;
}
</style>