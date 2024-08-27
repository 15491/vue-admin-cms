import login from "./data/login"
import userInfo from "./data/userInfo"

export default [
  {
    url: '/mock/api/login', //请求地址
    method: 'post', //请求方式
    response: () => {
      return login
    },
  },
  {
    url: '/mock/api/userInfo',
    method: 'post',
    response: () => {
      return userInfo
    }
  }
]
