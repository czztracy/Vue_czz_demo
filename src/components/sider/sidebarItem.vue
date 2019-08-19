<template>
  <div v-if="!item.hidden && item.children" class="menu-wrapper">
    <!-- 固定路由 -->
    <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
      <appLink :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <item v-if="onlyOneChild.meta" :icon="onlyOneChild.meta.icon || item.meta.icon" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </appLink>
    </template>

    <!-- 动态路由 -->
    <el-submenu v-else ref="submenu" :index="resolvePath(item.path)">
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title" />
      </template>

      <template v-for="child in item.children">
        <template v-if="!child.hidden">
          <sidebarItem
            v-if="child.children && child.children.length > 0"
            :is-nest="true"
            :item="child"
            :key="child.path"
            :base-path="resolvePath(child.path)"
            class="nest-menu"/>

          <appLink v-else :to="resolvePath(child.path)" :key="child.name">
            <el-menu-item :index="resolvePath(child.path)">
              <item v-if="child.meta" :icon="child.meta.icon" :title="child.meta.title" />
            </el-menu-item>
          </appLink>
        </template>
      </template>
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { validateURL } from '@/utils/validate'
import Item from './Item'
import AppLink from './link'

export default {
  name: 'sidebarItem',
  components: {
    Item,
    AppLink
  },
  props: {
    // route Object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      onlyOneChild: null
    }
  },
  methods: {
    hasOneShowingChild (children, parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // 如果只有一个显示子则使用
          this.onlyOneChild = item
          return true
        }
      })

      // 当只有一个子路由器时，默认情况下会显示子路由器
      if (showingChildren.length === 1) {
        return true
      }

      // 如果没有要显示的子路由器，则显示父路由器
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath (routePath) {
      return path.resolve(this.basePath, routePath)
    },
    isExternalLink (routePath) {
      return validateURL(routePath)
    },
    clickLink (routePath, e) {
      if (!this.isExternalLink(routePath)) {
        e.preventDefault()
        const path = this.resolvePath(routePath)
        this.$router.push(path)
      }
    }
  }
}
</script>

<style scoped>
.menu-wrapper a {
  text-decoration: none;
}
.el-menu-item.submenu-title-noDropdown i {
  font-size: 16px;
  margin-right: 20px;
  /* color: #fff; */
}
.el-submenu__title i {
  font-size: 16px;
  margin-right: 20px;
}
.el-menu.el-menu--inline .el-menu-item i {
  font-size: 16px;
  margin-right: 20px;
}
/* .el-menu-item.is-active {
  color: #fff;
}
.el-menu-item.is-active {
  background-color: #409EFF !important;
  color: #fff !important;
}
.el-menu-item.submenu-title-noDropdown:hover {
  background-color: rgb(0, 21, 41) !important;
}
.el-menu-item.is-active:hover {
  background-color: #409EFF !important;
} */

</style>
