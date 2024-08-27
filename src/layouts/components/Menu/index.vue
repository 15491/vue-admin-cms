<template>
  <div class="layout-menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <MenuItem />
    </el-menu>
  </div>
</template>

<script setup lang="ts" name="LayoutMenu">
import MenuItem from './components/Menu.vue'

defineOptions({
  name: ''
})

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="less">
.layout-menu {
  height: var(--layout-menu-height);
}
</style>
