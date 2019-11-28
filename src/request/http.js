// 封装axios对象
import axios from 'axios'; // 引入axios

var instance = axios.create({ timeout: 1000 * 12 });

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 环境的切换
if (process.env.NODE_ENV === 'production') {
  instance.defaults.baseURL = 'https://www.production.com';
}
else {
  instance.defaults.baseURL = process.env.VUE_APP_BASE_API;
}

/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
// const errorHandle = (status, other) => {
//   // 状态码判断
//   switch (status) {
//     // 401: 未登录状态，跳转登录页
//     case 401:
//       toLogin();
//       break;
//     // 403 token过期
//     // 清除token并跳转登录页
//     case 403:
//       tip('登录过期，请重新登录');
//       localStorage.removeItem('token');
//       store.commit('loginSuccess', null);
//       setTimeout(() => {
//         toLogin();
//       }, 1000);
//       break;
//     // 404请求不存在
//     case 404:
//       tip('请求的资源不存在');
//       break;
//     default:
//       console.log(other);
//   }
// }

//请求拦截器 可以添加请求头
instance.interceptors.request.use(config => {
  // const token = store.state.token;
  // token && (config.headers.Authorization = token);
  return config;
}, error => {
  return Promise.error(error);
})

// 响应拦截器
instance.interceptors.response.use(response => {
  if (response.status === 200) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }

}, error => {
  if (error) {
    // 请求已发出，但是不在2xx的范围 
    switch (error.response.status) {
      case 400: error.message = '请求错误(400)'; break;
      case 401:
        error.message = '没有权限(401)';
        break;
      case 403:
        error.message = 'Token过期(403)';
        break;
      case 404: error.message = '请求出错(404)'; break;
      default: error.message = `连接出错(${error.response.status})!`;
    }
  } else {
    // 处理断网的情况
  }
  return Promise.reject(error);
}
)

export default instance;