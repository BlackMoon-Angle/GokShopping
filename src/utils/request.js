//对axios进行二次封装
import axios from 'axios';//引入axios

//创建一个axios对象，配置公共信息
const request = axios.create({ // request==axios
    baseURL: '/dev-api',
    timeout: 3000,//3秒：请求超时时间，如果3秒还没有拿到数据就断开
    // headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    // }
});

// 请求拦截器:只要发送请求，就会触发这个拦截器
request.interceptors.request.use(config => {
    return config
}, error => {
    // 出现异常
    return Promise.reject(error);
})

// 响应拦截器:如果服务器有响应，就会触发这个拦截器
request.interceptors.response.use(response => {
    return response
}, error => {
    //如果有异常：发送请求的异常  404 500
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })

    if (error.status == 404) {
        //找不到该页面
        router.push("/404");
    }

    if (error.status == 500) {
        //服务器异常
        router.push("/500");
    }
    return Promise.reject(error);
})

//导出axios对象
export default request;