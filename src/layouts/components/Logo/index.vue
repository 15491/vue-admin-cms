<template>
  <div class="layout-logo">
    <img class="logo-img" src="@/assets/images/layout-logo.png" />
    <span>vue-admin</span>
  </div>
</template>

<script setup lang="ts" name="LayoutLogo"></script>

<style scoped lang="less">
.layout-logo {
  height: var(--layout-logoOrHeader-height);
  font-size: var(--layout-logo-size);
  display: flex;
  align-items: center;
  justify-content: space-around;

  .logo-img {
    height: var(--layout-logoImg-height);
    border-radius: 50%;
  }
}
</style>
