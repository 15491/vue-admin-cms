import { defineStore } from 'pinia'

const useAppStore = defineStore('app', {
  state: () => ({
    isCollapse: false
  }),
  actions: {
    setCollapse(isCollapse: boolean) {
      this.isCollapse = isCollapse
    }
  },
  persist: true
})

export default useAppStore
