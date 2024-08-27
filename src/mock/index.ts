import { createProdMockServer } from 'vite-plugin-mock/client'
import mockApi from './api'

export function setupProdMockServer() {
  createProdMockServer([...mockApi])
}
