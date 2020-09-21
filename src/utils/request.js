// import { setToken, getToken, getOrg } from './tools'
import { message } from 'antd'

const { fetch } = require('dva')

function checkStatus(response) {
  if (
    (response.status >= 200 && response.status < 300) ||
    response.status === 304
  ) {
    return response
  } else {
    message.error('系统发生错误')
  }
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 */
const parseQuery = obj => {
  let str = ''
  for (const key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      const value = typeof obj[key] !== 'string' ? JSON.stringify(obj[key]) : obj[key]
      str += `&${key}=${value}`
    }
  }
  return str.substr(1)
}
export async function request(url, method = 'post', params = '') {
  let requestUrl = url
  if (process.env.NODE_ENV === 'production') {
    if (!url.includes('http')) {
      requestUrl = httpsUrl + url
    }
  }
  const headers = {
    'Content-Type': 'application/json',
  }
  const options = {
    headers,
    method,
  }
  if (method === 'get') {
    if (Object.keys(params).length !== 0) {
      requestUrl = `${requestUrl}?${parseQuery(params)}`
    } else {
      requestUrl = `${requestUrl}`
    }
  } else {
    options.body = JSON.stringify(params)
  }

  const response = await fetch(requestUrl, options)
  checkStatus(response)
  try {
    const data = await response.json()
    return data
  } catch (error) {
    return null
  }
}

export async function userLogin(urlPath, method, params) {
  let url = urlPath
  if (process.env.NODE_ENV === 'production') {
    url = httpsUrl + url
  }
  const options = {
    headers: {
      // HTTP的请求头，默认为{}
      'Content-Type': 'application/json',
    },
    method: method || 'post',
  }
  if (method.toLowerCase() === 'get') {
    url = `${url}?${parseQuery(params)}`
  } else {
    options.body = JSON.stringify(params)
  }
  const response = await fetch(url, options)
  checkStatus(response)
  const data = await response.json()

  return data
}

export const httpsUrl = 'https://www.baidu.com'
