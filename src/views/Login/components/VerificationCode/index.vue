<template>
  <div>
    <el-form
      label-position="left"
      label-width="auto"
      :model="formData"
      :rules="rules"
      ref="formEl"
    >
      <el-form-item label="手机号" prop="phoneNumber">
        <el-input
          v-model="formData.phoneNumber"
          placeholder="请输入手机号"
          prefix-icon="User"
          clearable
        />
      </el-form-item>
      <el-form-item label="验证码" class="auth-code" prop="authCode">
        <el-input
          v-model="formData.authCode"
          class="code"
          placeholder="请输入验证码"
          prefix-icon="Key"
          clearable
        />
        <el-button class="code-btn" type="primary">获取验证码</el-button>
      </el-form-item>
      <el-form-item class="text-option">
        <el-checkbox>记住我</el-checkbox>
        <el-button link>忘记密码</el-button>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="handleLogin"
          >登 录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts" name="VerifyCode">
import { reactive, ref } from 'vue'
import type { FormRules, FormInstance } from 'element-plus'
import type { IPhone } from '@/types/Login/index'

// 表单
const formEl = ref<FormInstance>()

// 表单数据
const formData = reactive<IPhone>({
  phoneNumber: '',
  authCode: ''
})

// 验证规则
const rules: FormRules<IPhone> = {
  phoneNumber: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  authCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
}

const handleLogin = async () => {
  if (!formEl) return
  await formEl.value?.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style scoped lang="less">
.auth-code {
  box-sizing: border-box;
  :deep(.el-form-item__content) {
    display: flex;
    justify-content: space-between;
    .code {
      width: 48%;
    }
    .code-btn {
      width: 48%;
    }
  }
}

.login-btn {
  // margin-top: 50px;
  width: 100%;
}

.text-option {
  :deep(.el-form-item__content) {
    display: flex;
    justify-content: space-between;
  }
}
.login-btn {
  width: 100%;
}
</style>
