import axios from 'axios';
import store from '../store'
import router from '../router'
import env from './env';

const ajaxUrl = env === 'development'
    // ? 'http://172.16.11.149:3000'
    ? 'http://localhost:3000'
    : env === 'production'
        ? 'https://www.url.com'
        : 'https://debug.url.com';
// 创建axios实例
const service = axios.create({
  header: {'Content-Type': 'application/json' },
  baseURL: ajaxUrl,
  timeout: 5000                  // 请求超时时间
})
export default service;