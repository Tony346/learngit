import axios from 'axios'
import md5 from 'blueimp-md5';
import { Notify } from 'vant';
import { isPlainObject } from '@/assets/utils';
import qs from 'qs';

axios.defaults.transformRequest = data => {
    if (isPlainObject(data)) return qs.stringify(data);
    return data;
};

const instance = axios.create({
    // axios 的一些配置，baseURL  timeout
    baseURL: '/api',
    timeout: 5000
})

instance.interceptors.request.use((config) => {
    // 针对于部分接口，我们携带令牌和签名信息
    let apiList = ['/check_login', '/user_info', '/user_update', '/store', '/store_remove', '/store_list'],
        token = localStorage.getItem('token');
    if (apiList.includes(config.url.replace('/api', '')) && token) {
        let time = +new Date(),
            sign = md5(`${token}@${time}@zhufeng`);
        config.headers['authorzation'] = token;
        config.headers['time'] = time;
        config.headers['sign'] = sign;
    }
    return config;
})

instance.interceptors.response.use(response => {
    return response.data;
}, reason => {
    Notify({
        type: 'danger',
        message: '小主,当前网络繁忙,请稍后再试!'
    });
    return Promise.reject(reason);
});

export default (url, method, submitData) => {
    // 负责发请求：请求地址，请求方式，提交的数据
    return instance({
      url,
      method,
      // 1. 如果是get请求  需要使用params来传递submitData   ?a=10&c=10
      // 2. 如果不是get请求  需要使用data来传递submitData   请求体传参
      // [] 设置一个动态的key, 写js表达式，js表达式的执行结果当作KEY
      // method参数：get,Get,GET  转换成小写再来判断
      // 在对象，['params']:submitData ===== params:submitData 这样理解
      [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
  }