<template>
  <div id="login">
    <div class="page-wrappper">
      <div class="page-container">
        <div class="main"></div>
        <div class="sidebar">
          <div class="userRigister">
            <button class="rigisterTitle"
                    @click="switchTag($event)">创建账户</button>
            <transition name="fade1">
              <main v-show="showRigister">
                <input type="text"
                       class="rigisterName"
                       placeholder="请输入用户名"
                       v-model="username">
                <input type="text"
                       class="rigisterPassword"
                       placeholder="请输入密码"
                       v-model="password">
                <span>{{ error }}</span>
                <button class="rigisterSubmit"
                        @click="onRigister">注册</button>
              </main>
            </transition>
          </div>
          <div class="userLogin">
            <button class="loginTitle"
                    @click="switchTag($event)">登录</button>
            <transition name="fade2">
              <main v-show="showLogin">
                <input type="text"
                       class="loginName"
                       placeholder="请输入用户名"
                       v-model="username">
                <input type="text"
                       class="loginPassword"
                       placeholder="请输入密码"
                       v-model="password">
                <span>{{ error }}</span>
                <button class="loginSubmit"
                        @click="onLogin">登录</button>
              </main>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div class="alert alert-success alert-position"
         v-show="rigisterSuccess">已成功注册</div>
    <div class="alert alert-danger alert-position"
         v-show="rigisterFail">注册失败</div>
    <div class="alert alert-success alert-position"
         v-show="loginSuccess">已成功登录</div>
    <div class="alert alert-danger alert-position"
         v-show="loginFail">登录失败</div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import request from "../axios/request"
export default {
  data() {
    return {
      timer: null,
      showRigister: false,
      showLogin: true,
      username: '',
      password: '',
      error: "",
      rigisterSuccess: false,
      rigisterFail: false,
      loginSuccess: false,
      loginFail: false,
    }
  },
  methods: {
    ...mapActions(['authLogin']),
    switchTag(e) {
      this.username = ''
      this.password = ''
      if (e.target._prevClass === "rigisterTitle") {
        this.showRigister = true
        this.showLogin = false
      } else {
        this.showRigister = false
        this.showLogin = true
      }
    },
    onRigister() {
      this.error = ""
      if (!/^[\u4e00-\u9fa5a-zA-Z0-9]{3,6}$/.test(this.username)) {
        this.error = "用户名3-6位，仅限于字母数字下划线中文。"
      } else if (!/^(?=.*?[A-Z])[^]{5,}$/.test(this.password)) {
        this.error = "密码至少5个字符，且包含1位大写字母。"
      } else if (this.error === "") {
        request("/rigister", "POST").then((data) => {
          this.showRigister = false
          this.showLogin = true
          this.username = ""
          this.password = ""
          this.rigisterSuccess = true
          this.timer = setTimeout(() => {
            this.rigisterSuccess = false
          }, 3000)
          this.$once('hook:beforeDestroy', () => {
            clearTimeout(this.timer)
            this.timer = null
          })
        }).catch(() => {
        })
      }
    },
    onLogin() {
      this.error = ""
      if (!/^[\u4e00-\u9fa5a-zA-Z0-9]{3,6}$/.test(this.username)) {
        this.error = "用户名3-6位，仅限于字母数字下划线中文。"
      } else if (!/^[^]{5,}$/.test(this.password)) {
        this.error = "密码至少5个字符"
      } else if (this.error === "") {
        this.authLogin({ username: this.username, password: this.password })
          .then((data) => {
            if (data.status === 200) {
              // this.$router.push("/main")
            } else {
              this.loginFail = true
              this.timer = setTimeout(() => {
                this.loginFail = false
              }, 3000)
              this.$once('hook:beforeDestroy', () => {
                clearTimeout(this.timer)
                this.timer = null
              })
            }
          }).catch((err) => {
            console.log(err)
          })
      }
    },

  }
}
</script>

<style lang="scss" scoped>
#login {
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
  display: table;
  position: fixed;
  .alert-position {
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    padding: 5px 15px;
  }
  .page-wrappper {
    display: table-cell;
    vertical-align: middle;
    .page-container {
      height: 450px;
      width: 700px;
      margin: 0 auto;
      display: flex;
      .main {
        width: 450px;
        background: url("../assets/loginMain.jpg") #36bc64 no-repeat center;
        background-size: contain;
      }
      .sidebar {
        flex: 1;
        background: white;

        .userRigister,
        .userLogin {
          .rigisterTitle,
          .loginTitle {
            width: 100%;
            height: 40px;
            background: white;
            border: none;
            border-bottom: 1px solid #cebaba;
            font-size: 16px;
            font-weight: 500;
          }
          main {
            display: flex;
            flex-direction: column;
            &.fade1-leave-to,
            &.fade2-leave-to {
              opacity: 0;
            }
            &.fade1-enter-to {
              opacity: 0.8;
            }
            &.fade2-enter-to {
              transform: translateY(-151px);
            }
            &.fade1-enter-active,
            &.fade2-enter-active,
            &.fade1-leave-active,
            &.fade2-leave-active {
              transition: all 1s ease;
            }
            input {
              height: 30px;
              border-radius: 4px;
              outline-style: none;
              border: 1px solid gray;
              padding: 0 5px;
            }
            input:focus {
              border: 3px solid #9dcaf8;
            }
            input:nth-child(1) {
              margin: 10px 20px 5px 20px;
            }
            input:nth-child(2) {
              margin: 5px 20px 10px 20px;
            }
            span {
              font-size: 12px;
              padding: 0 20px;
              color: red;
            }
            .rigisterSubmit,
            .loginSubmit {
              height: 35px;
              margin: 10px 20px 0 20px;
              background: #2bb964;
              border-radius: 4px;
              border: none;
              font-size: 16px;
              color: white;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>