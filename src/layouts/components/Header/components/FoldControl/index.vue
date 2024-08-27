<template>
  <el-icon class="fold-icon" :size="20">
    <Expand v-if="true" />
    <Fold v-else />
  </el-icon>
  <!-- <el-icon class="fold-icon" :size="20"></el-icon> -->
</template>

<script setup lang="ts" name="FoldControl"></script>

<style scoped lang="less"></style>
