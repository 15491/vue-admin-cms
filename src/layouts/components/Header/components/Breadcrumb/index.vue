<template>
  <el-breadcrumb class="Breadcrumb" :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>promotion management</el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts" name="Breadcrumb">
import { ArrowRight } from '@element-plus/icons-vue'
</script>

<style scoped lang="less">
.Breadcrumb {
  margin-left: 20px;
}
</style>
