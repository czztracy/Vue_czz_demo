<template>
  <div class="logo">
    <!-- <svg-icon
      class-name="menu-fold"
      icon-class="menu-fold"
      @click="handleClickCollapse"
      >
      </svg-icon> -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="index">
        <!-- {{ item.meta.title }} -->
        <span v-if="item.meta.noChild">{{ item.meta.title }}</span>
        <router-link v-else :to=" item.redirect || item.path">{{ item.meta.title }}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <span class="logout" @click="handlelogout">注销</span>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  // computed: {
  //   ...mapGetters(['isCollapse'])
  // },
  data () {
    return {
      levelList: null
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  methods: {
    // handleClickCollapse () {
    //   this.$store.dispatch('GET_ISCOLLAPSE', !this.isCollapse)
    // },
    getBreadcrumb () {
      let matched = this.$route.matched.filter(item => {
        if (item.meta && Object.keys(item.meta).length !== 0) {
          return true
        }
      })
      this.levelList = matched
    },
    handlelogout () {
      this.$store.dispatch('FedLogOut')
      this.$router.push({ path: '/login' })
    }
  },
  created () {
    this.getBreadcrumb()
  }
}
</script>

<style scoped>
.logo {
  padding: 0 10px;
  width: 100%;
}
.svg-iconmenu-fold {
  cursor: pointer;
  width: 16px;
  height: 16px;
  float: left;
  margin-right: 10px;
  /* transform: rotate(90deg); */
  /* transition: .38s; */
  /* transform-origin: 50% 50%; */
}
.logo .logout {
  float: right;
  cursor: pointer;
}
.logo /deep/ .el-breadcrumb {
  float: left;
  line-height: 65px;
}
/* .svg-iconmenu-fold.is-active {
  transform: rotate(180deg);
} */
</style>
