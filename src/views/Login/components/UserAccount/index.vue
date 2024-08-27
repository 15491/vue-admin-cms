<template>
  <el-form
    label-position="left"
    label-width="auto"
    :model="formData"
    ref="formEl"
    @keyup.enter="handleLogin"
  >
  <!--     :rules="rules" -->
    <el-form-item label="用户名" prop="username">
      <el-input
        v-model="formData.username"
        placeholder="请输入用户名"
        prefix-icon="User"
        clearable
      />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="formData.password"
        type="password"
        placeholder="请输入密码"
        prefix-icon="Lock"
        show-password
        clearable
      />
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
</template>

<script setup lang="ts" name="UserAccount">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import useUserStore from '@/stores/modules/user'
import { ElMessage } from 'element-plus'
import type {  FormRules, FormInstance } from 'element-plus'
import type { IUser } from '@/types/Login/index'
const userStore = useUserStore()
const router = useRouter()
// 表单数据
const formData = reactive<IUser>({
  username: '',
  password: ''
})

// 表单
const formEl = ref<FormInstance>()

// 验证规则
const rules: FormRules<IUser> = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    {
      pattern: /^[\w-]{4,16}$/,
      message: '请输入正确用户名',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      // 密码强度
      pattern:
        /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
      message: '请输入合法密码',
      trigger: ['blur']
    }
  ]
}

// 登录
const handleLogin = async () => {
  if (!formEl.value) return
  await formEl.value.validate((valid, fields) => {
    if (valid) {
      userStore.login(formData)
      // router.push('/')
    } else {
      ElMessage.error('登录信息格式错误')
    }
  })
}
</script>

<style scoped lang="less">
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
