<template>
  <div class="main">
    <el-container>
      <!--  background-color: rgb(0, 21, 41); -->
      <el-aside style="min-height: 100vh;" width="auto;">
        <div class="sider-logo">Vue</div>
        <Sider />
      </el-aside>
      <el-container>
        <el-header style="height: 65px;">
          <Header />
        </el-header>
        <el-main>
          <transition name="fade-transform" mode="out-in">
            <router-view />
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Sider from '@/components/sider/sider'
export default {
  name: 'home',
  components: {
    Header,
    Sider
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.sider-logo {
  height: 65px;
  /* background: #022445;
  color: #fff; */
  line-height: 65px;
  text-align: center;
  font-size: 18px;
  /* color: rgb(255, 255, 255); */
  /* background-color: rgb(2, 36, 69); */
}
.el-header {
  height: 65px;
  line-height: 65px;
  padding: 0 35px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.el-aside {
  /* background-color: rgb(0, 21, 41); */
  border-right: solid 1px #e6e6e6;
  color: #333;
  text-align: left;
}

.el-main {
  /* background-color: #E9EEF3; */
  color: #333;
  text-align: center;
}
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 65px;
}
body > .el-container {
  margin-bottom: 40px;
}
</style>
