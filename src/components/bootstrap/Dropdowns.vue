<template>
  <div class="dropdown">
    <div>
      <h3>1、基本用法</h3>
      <div>
        <div class="dropdown">
          <button type="button"
                  class="btn dropdown-toggle"
                  id="dropdownMenu1"
                  data-toggle="dropdown">主题
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu"
              role="menu"
              aria-labelledby="dropdownMenu1">
            <li role="presentation">
              <a role="menuitem"
                 tabindex="-1"
                 href="#">Java</a>
            </li>
            <li role="presentation">
              <a role="menuitem"
                 tabindex="-1"
                 href="#">数据挖掘</a>
            </li>
            <li role="presentation">
              <a role="menuitem"
                 tabindex="-1"
                 href="#">数据通信/网络</a>
            </li>
            <li role="presentation"
                class="divider"></li>
            <li role="presentation">
              <a role="menuitem"
                 tabindex="-1"
                 href="#">分离的链接</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <h3>2、选项</h3>
      <div>
        <div>
          <h4>（1）对齐方式</h4>
          <div>
            <div class="dropdown">
              <button type="button"
                      class="btn dropdown-toggle"
                      id="dropdownMenu1"
                      data-toggle="dropdown">主题
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu pull-right"
                  role="menu"
                  aria-labelledby="dropdownMenu1">
                <li role="presentation">
                  <a role="menuitem"
                     tabindex="-1"
                     href="#">Java</a>
                </li>
                <li role="presentation">
                  <a role="menuitem"
                     tabindex="-1"
                     href="#">数据挖掘</a>
                </li>
                <li role="presentation">
                  <a role="menuitem"
                     tabindex="-1"
                     href="#">数据通信/网络</a>
                </li>
                <li role="presentation"
                    class="divider"></li>
                <li role="presentation">
                  <a role="menuitem"
                     tabindex="-1"
                     href="#">分离的链接</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h4>（2）添加标题</h4>
          <div>
            <div class="dropdown">
              <button type="button"
                      class="btn dropdown-toggle"
                      id="dropdownMenu1"
                      data-toggle="dropdown">主题
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu"
                  role="menu"
                  aria-labelledby="dropdownMenu1">
                <li role="presentation"
                    class="dropdown-header">下拉菜单标题</li>
                <li role="presentation">
                  <a role="menuitem"
                     tabindex="-1"
                     href="#">Java</a>
                </li>
                <li role="presentation">
                  <a role="menuitem"
                     tabindex="-1"
                     href="#">数据挖掘</a>
                </li>
                <li role="presentation">
                  <a role="menuitem"
                     tabindex="-1"
                     href="#">数据通信/网络</a>
                </li>
                <li role="presentation"
                    class="divider"></li>
                <li role="presentation"
                    class="dropdown-header">下拉菜单标题</li>
                <li role="presentation">
                  <a role="menuitem"
                     tabindex="-1"
                     href="#">分离的链接</a>
                </li>
              </ul>
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
.dropdown {
  padding: 30px;
  width: 100%;
}
</style>