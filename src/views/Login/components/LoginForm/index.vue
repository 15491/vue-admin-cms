<template>
  <div class="login-form">
    <!-- <div class="login-title">欢迎登录</div> -->
    <el-tabs type="border-card" class="form-tabs" :stretch="true">
      <el-tab-pane v-for="item in tabPanes" :key="item.name">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <component :is="item.icon" ref="form"></component>
            </el-icon>
            <span class="label">{{ item.label }}</span>
          </span>
        </template>
        <component :is="item.component"></component>
      </el-tab-pane>

      <el-button @click="handleLogin">按钮</el-button>
    </el-tabs>
  </div>
</template>

<script setup lang="ts" name="LoginForm">
import { ref } from 'vue';
import UserAccount from '../UserAccount/index.vue'
import VerificationCode from '../VerificationCode/index.vue'

// 登录选项卡
const tabPanes = [
  {
    label: '账号登陆',
    name: 'first',
    component: UserAccount,
    icon: 'User'
  },
  {
    label: '验证码登录',
    name: 'second',
    component: VerificationCode,
    icon: 'Iphone'
  }
]

const form = ref("")

const handleLogin = () => {
  console.log(form);
}
</script>

<style scoped lang="less">
.login-form {
  width: 100%;
  padding: 20px;
  .login-title {
    font-size: 22px;
    font-weight: 700;
  }
  .form-tabs {
    margin-top: 10px;
    .custom-tabs-label {
      display: flex;
      align-items: center;
      .label {
        margin-left: 5px;;
      }
    }
  }
}
</style>
