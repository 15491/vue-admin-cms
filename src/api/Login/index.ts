import request from '@/service/index'
import type { IUser } from '@/types/Login/index.d.ts'

// 登录
export const queryLogin = (userInfo: IUser) =>
  request.post({
    url: '/login',
    data: userInfo
  })
