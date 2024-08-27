<template>
  <template v-for="menu in SyncRoutes[0].children">
    <el-sub-menu v-if="menu.children?.length" :index="menu.path">
      <template #title>
        123
        <!-- {{ menu.meta.name }} -->
        <!-- <el-icon v-if="menu?.meta.icon">
          <component :is="menu.meta.icon"></component>
        </el-icon> -->
      </template>
    </el-sub-menu>
    <el-menu-item v-else :index="menu.path">
      456
      <!-- {{ menu.meta.name }} -->
      <!-- <el-icon v-if="menu?.meta.icon">
        <component :is="menu.meta.icon"></component>
      </el-icon> -->
    </el-menu-item>
  </template>
</template>

<script setup lang="ts" name="menuItem">
import { SyncRoutes } from '@/router/routes'
</script>

<style scoped lang="less"></style>
