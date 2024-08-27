<template>
  <div class="login-form">
    <!-- <div class="login-title">欢迎登录</div> -->
    <el-tabs v-model="activeName" type="border-card" class="form-tabs" :stretch="true">
      <el-tab-pane v-for="item in tabPanes" :key="item.name" :name="item.name">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span class="label">{{ item.label }}</span>
          </span>
        </template>
        <component :is="item.component" ref="form"></component>
      </el-tab-pane>
      <div class="text-option">
        <el-checkbox>记住我</el-checkbox>
        <el-button link>忘记密码</el-button>
      </div>
      <el-button class="login-btn" type="primary" @click="handleLogin"
        >登 录</el-button
      >
    </el-tabs>
  </div>
</template>

<script setup lang="ts" name="LoginForm">
import { ref } from 'vue'
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

// 选中的tab
const activeName = ref("first")

// 登录表单组件
const form = ref<any>()
// 登录
const handleLogin = () => {
  const tabIndex = tabPanes.findIndex(item => item.name === activeName.value)
  form.value[tabIndex].handleLogin()

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
        margin-left: 5px;
      }
    }

    .text-option {
      display: flex;
      justify-content: space-between;
      :deep(.el-form-item__content) {
        display: flex;
        justify-content: space-between;
      }
      margin: 8px;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
