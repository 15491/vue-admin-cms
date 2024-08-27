export default {
  code: 200,
  msg: 'ok',
  data: [
    {
      componentPath: null,
      icon: "icon-park-outline:analysis",
      id: 1,
      menuType: "dir",
      name: "dashboard",
      path: "/dashboard",
      pid: null,
      requiresAuth: true,
      title: "仪表盘"
    },
    {
      componentPath: "/dashboard/workbench/index.vue",
      icon: "icon-park-outline:alarm",
      id: 2,
      menuType: "page",
      name: "workbench",
      path: "/dashboard/workbench",
      pid: 1,
      pinTab: true,
      requiresAuth: true,
      title: "工作台"
    }
  ]
}
