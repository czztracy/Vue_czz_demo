<template>
  <div class="logo">
    <svg-icon
      class-name="menu-fold"
      icon-class="menu-fold"
      @click="handleClickCollapse"
      >
      <!-- :class="{'is-active': !isCollapse}" -->
      <!-- :style="{ transform: isCollapse ? 'rotate(180deg)':'rotate(0deg)' }" -->
      </svg-icon>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in levelList" :key="index" :to="{ path: item.redirect || item.path }">
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import pathToRegexp from 'path-to-regexp'

export default {
  computed: {
    ...mapGetters(['isCollapse'])
  },
  data () {
    return {
      levelList: [{ name: '1' }]
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  methods: {
    handleClickCollapse () {
      this.$store.dispatch('GET_ISCOLLAPSE', !this.isCollapse)
    },
    getBreadcrumb () {
      const { params } = this.$route
      let matched = this.$route.matched.filter(item => {
        if (item.name) {
          var toPath = pathToRegexp.compile(item.path)
          item.path = toPath(params)
          return true
        }
      })

      // const first = matched[0]
      // if (first && first.name.trim().toLocaleLowerCase() !== 'Dashboard'.toLocaleLowerCase()) {
      //   matched = [{
      //     path: '/dashboard',
      //     meta: { title: 'dashboard' }
      //   }].concat(matched)
      // }
      this.levelList = matched
      console.log(this.$route.matched)
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
.logo /deep/ .el-breadcrumb {
  float: left;
}
/* .svg-iconmenu-fold.is-active {
  transform: rotate(180deg);
} */
</style>
