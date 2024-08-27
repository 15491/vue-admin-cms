import { defineStore } from 'pinia'
import { queryLogin } from '@/api/Login/index'
import type { IUser } from '@/types/Login/index'

const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {}
  }),
  actions: {
    // 用户登录
    async login(formData: IUser) {
      try {
        const res = await queryLogin(formData)
        this.userInfo = res
      } catch (error) {
        console.log(error)
      }
    },
    setUserInfo(userInfo: object) {
      this.userInfo = userInfo
    }
  },
  persist: true
})

export default useUserStore
