<template>
  <div class="cc-login">
    <div class="cc-login-wrapper">
      <div class="cc-login-form" @keyup.enter="doLogin">
        <el-card shadow="never"
          title="欢迎登陆"
        >
          <div slot="header" class="clearfix">
            <span>欢迎登陆</span>
          </div>
          <el-form ref="form" :model="form" :rules="rules">
            <el-form-item prop="name">
              <el-input autofocus v-model="form.name" placeholder="请输入用户名">
                <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="form.password" type="password" placeholder="请输入密码">
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width: 100%" size="small" @click="doLogin" :loading="loading">{{loading ? '正在登陆中...' : '登录'}}</el-button>
            </el-form-item>
            <p style="font-size: 12px;text-align: center;color: #999;">输入任意用户名密码登录</p>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { setToken } from '@/utils/cookie'
import { setTimeout } from 'timers'
export default {
  name: 'login',
  data () {
    return {
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  computed: {
  },
  methods: {
    doLogin () {
      this.loading = true
      this.$refs.form.validate(async validate => {
        setTimeout(() => {
          if (validate) {
            setToken(this.form.name)
            this.$router.push('/')
          }
          this.loading = false
        }, 2000)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cc-login {
  &-wrapper {
    height: 100vh;
    background: url('https://img.ccode.live/image/jpg/login.jpglogin-bg.29b543c1.jpg') no-repeat center center;
    background-size: cover;
  }
  &-form {
    width: 330px;
    position: absolute;
    right: 250px;
    top: 50%;
    transform: translateY(-60%);
  }
}
</style>
