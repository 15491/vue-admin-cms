<template>
  <div class="login-content">
    <div class="login-center">
      <LoginForm />
    </div>
  </div>
</template>

<script setup lang="ts" name="Login"">
import LoginForm from './components/LoginForm/index.vue'
</script>

<style scoped lang="less">
.login-content {
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/images/login-bg.jpg');
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  .login-center {
    margin-right: 100px;
    display: flex;
    background-color: white;
    width: 420px;
    opacity: 0.9;
    border-radius: 10px;
  }
}
</style>
