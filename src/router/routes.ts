import type { RouteRecordRaw } from 'vue-router'

export const SyncRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layouts/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          title: '工作台',
          icon: 'Menu',
          isHide: true
        }
      },
      {
        path: '/system',
        name: 'system',
        redirect: '/system/user',
        meta: {
          title: '系统管理',
          icon: 'Setting',
          isHide: true
        },
        children: [
          {
            path: '/system/user',
            name: 'user',
            component: () => import('@/views/System/User/index.vue'),
            meta: {
              title: '用户管理',
              icon: 'User',
              isHide: true
            }
          },
          {
            path: '/system/role',
            name: 'role',
            component: () => import('@/views/System/Role/index.vue'),
            meta: {
              title: '角色管理',
              icon: 'Avatar',
              isHide: true
            }
          }
        ]
      }
    ]
  }
]

export const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue')
  }
]
