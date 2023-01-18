<template>
  <div class="mediaObject-wrapper">
    <div>
      <h3>1、基本样式（图片、音频和视频；图文混排）</h3>
      <div>
        <!-- 左对齐 -->
        <div class="media">
          <div class="media-left">
            <img decoding="async"
                 src="../../assets/picture.png"
                 class="media-object"
                 style="width:60px">
          </div>
          <div class="media-body">
            <h4 class="media-heading">左对齐</h4>
            <p>这是一些示例文本...</p>
          </div>
        </div>

        <!-- 右对齐 -->
        <div class="media">
          <div class="media-body">
            <h4 class="media-heading">左对齐</h4>
            <p>这是一些示例文本...</p>
          </div>
          <div class="media-right">
            <img decoding="async"
                 src="../../assets/picture.png"
                 class="media-object"
                 style="width:60px">
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>2、上中下</h3>
      <div>
        <!-- 左对齐 -->
        <div class="media">
          <div class="media-left">
            <img decoding="async"
                 src="../../assets/picture.png"
                 class="media-object"
                 style="width:60px">
          </div>
          <div class="media-body">
            <h4 class="media-heading">左对齐</h4>
            <p>这是一些示例文本...</p>
          </div>
        </div>

        <!-- 右对齐 -->
        <div class="media">
          <div class="media-body">
            <h4 class="media-heading">左对齐</h4>
            <p>这是一些示例文本...</p>
          </div>
          <div class="media-right">
            <img decoding="async"
                 src="../../assets/picture.png"
                 class="media-object"
                 style="width:60px">
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>3、嵌套</h3>
      <div>
        <div class="media">
          <div class="media-left">
            <img decoding="async"
                 src="../../assets/picture.png"
                 class="media-object"
                 style="width:45px">
          </div>
          <div class="media-body">
            <h4 class="media-heading">RUNOOB-1 <small><i>Posted on February 19, 2016</i></small></h4>
            <p>这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。</p>

            <!-- 内嵌多媒体对象 -->
            <div class="media">
              <div class="media-left">
                <img decoding="async"
                     src="../../assets/picture.png"
                     class="media-object"
                     style="width:45px">
              </div>
              <div class="media-body">
                <h4 class="media-heading">RUNOOB-2 <small><i>Posted on February 20, 2016</i></small></h4>
                <p>这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。</p>

                <!-- 内嵌多媒体对象 -->
                <div class="media">
                  <div class="media-left">
                    <img decoding="async"
                         src="../../assets/picture.png"
                         class="media-object"
                         style="width:45px">
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">RUNOOB-3 <small><i>Posted on February 21, 2016</i></small></h4>
                    <p>这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。</p>
                  </div>
                </div>

              </div>

              <!-- 内嵌多媒体对象 -->
              <div class="media">
                <div class="media-left">
                  <img decoding="async"
                       src="../../assets/picture.png"
                       class="media-object"
                       style="width:45px">
                </div>
                <div class="media-body">
                  <h4 class="media-heading">RUNOOB-4 <small><i>Posted on February 20, 2016</i></small></h4>
                  <p>这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。</p>
                </div>
              </div>

            </div>
          </div>

          <!-- 内嵌多媒体对象 -->
          <div class="media">
            <div class="media-left">
              <img decoding="async"
                   src="../../assets/picture.png"
                   class="media-object"
                   style="width:45px">
            </div>
            <div class="media-body">
              <h4 class="media-heading">RUNOOB-5 <small><i>Posted on February 19, 2016</i></small></h4>
              <p>这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。这是一些示例文本。</p>
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
.mediaObject-wrapper {
  width: 100%;
  padding: 30px;
}
</style>