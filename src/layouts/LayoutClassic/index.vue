<template>
  <el-container class="layout-container">
    <el-container>
      <el-aside class="layout-aside">
        <Logo />
        <Menu />
      </el-aside>
      <el-container>
        <el-header class="layout-header">
          <HeaderContent />
        </el-header>
        <el-main class="layout-main">
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup lang="ts" name="LayoutClassic">
import HeaderContent from '@/layouts/components/Header/index.vue'
import Menu from '@/layouts/components/Menu/index.vue'
import Logo from '@/layouts/components/Logo/index.vue'
</script>

<style scoped lang="less">
.layout-container {
  height: 100vh;
  width: 100vw;

  .layout-header {
  }

  .layout-aside {
    width: var(--layout-aside-width);
  }

  .layout-main {
    width: var(--layout-main-width);
  }
}
</style>
