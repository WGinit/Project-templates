import Axios from 'axios'
const config = require('../config/index.ts')

const baseRequest = Axios.create({})
baseRequest.defaults.withCredentials = true

// 对所有的数据响应检查是否登录
baseRequest.interceptors.response.use(function (res) {
  // console.log('axios', res)
  const data = res.data
  // console.log(res)
  const errCode = data.return_code
  let errMsg = errCode + ':' + data.return_msg
  if (errCode === 'SUCCESS') {
    return Promise.resolve(data.data)
  } else {
    return Promise.reject(errMsg)
  }
}, function (error) {
  let errMsg
  if (error.response) {
    errMsg = error.response.status + ':' + error.config.url
  } else if (error.request) {
    errMsg = error.message
  } else {
    errMsg = error.message
  }
  console.log(errMsg + ':' + error.config.url)
  return Promise.reject(new Error(errMsg))
})

const get = function (url: string, params: object, isWxwork: boolean = false) {
  let _url = isWxwork ? 'https://qyapi.weixin.qq.com/cgi-bin/' : config.host + config.base
  return baseRequest.get(_url + url, {
    params: params
  })
}

const post = function (url: string, data: object) {
  return baseRequest.post(config.host + config.base + url, data)
}
export {
  get,
  post
}
