<template>
  <div class="layout-header">
    <div class="header-left">
      <!-- 折叠控制 -->
      <FoldControl />
      <!-- 面包屑 -->
      <Breadcrumb />
    </div>

    <!-- 工具栏 -->
    <Toolbar />
  </div>
</template>

<script setup lang="ts" name="LayoutHeader">
import FoldControl from './components/FoldControl/index.vue'
import Breadcrumb from './components/Breadcrumb/index.vue'
import Toolbar from './components/Toolbar/index.vue'
</script>

<style scoped lang="less">
.layout-header {
  height: var(--layout-logoOrHeader-height);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-left {
    display: flex;
    align-items: center;
  }
}
</style>
