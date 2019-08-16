<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <!-- text-color="#333" active-text-color="#fff" -->
    <!-- background-color="rgb(0, 21, 41)"
      text-color="#fff" -->
    <el-menu :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      :unique-opened="true"
      mode="vertical"
      class="el-menu-vertical-demo">
      <sidebarItem
        v-for="route in routes"
        :key="route.name"
        :item="route"
        :base-path="route.path"></sidebarItem>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import sidebarItem from './sidebarItem'
export default {
  computed: {
    ...mapGetters(['isCollapse']),
    routes () {
      return this.$router.options.routes
    }
  },
  components: {
    sidebarItem
  },
  mounted () {
    // console.log(this.$router.options.routes, this.$route)
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 256px;
  min-height: 400px;
  /* background-color: rgb(0, 21, 41); */
}
.el-menu {
  /* border-right: solid 1px #e6e6e6; */
  border-right: 0;
}
</style>
