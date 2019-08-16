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
      <!-- <transition-group name="breadcrumb">

      </transition-group> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isCollapse'])
  },
  data () {
    return {}
  },
  methods: {
    handleClickCollapse () {
      this.$store.dispatch('GET_ISCOLLAPSE', !this.isCollapse)
    }
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
/* .svg-iconmenu-fold.is-active {
  transform: rotate(180deg);
} */
</style>
