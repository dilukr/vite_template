import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

const BaseUrl = '/api/';

const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: BaseUrl,
    // 超时时间
    timeout: 60000
})


//响应拦截器
service.interceptors.response.use(
    res => {
        const code = res.data.code;
        if(code === 1){
            return res
        }else if(code === '61023'){
            console.error('授权已过期,请重新授权')
            return Promise.reject('error')
        }
    },
    error => {
        return Promise.reject(error)
    }
)


function post(url,data){
    return new Promise((resolve, reject) => {
        service.post(url, data)
        .then(response => {
            return resolve(response.data)
        })
        .catch(e => {
            return reject(e)
        })
    })  
}

export { post }