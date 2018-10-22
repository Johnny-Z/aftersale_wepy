/* eslint-disable eqeqeq,no-undef */
import wepy from 'wepy'
import util from './util'
import md5 from './md5'
import tip from './tip'
import {
    AUTHORIZATION,
    JWT_ERROR_MESSAGE,
    NO_JWT_ERROR_MESSAGE
} from '@/utils/constant'

const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP).toLowerCase())

const wxLogin = async(params = {}, url) => {
  tip.loading()
  let data = params.query || {}
  data.sign = SIGN
  data.time = TIMESTAMP
  let res = await wepy.request({
    url: url,
    method: params.method || 'POST',
    data: data,
    header: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
  tip.loaded()
  return res
}
const wxRequest = async(params = {}, url) => {
  tip.loading()
  let data = params.query || {}
  data.sign = SIGN
  data.time = TIMESTAMP
  let res = await wepy.request({
    url: url,
    method: params.method || 'POST',
    data: data,
    header: { 'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': wepy.getStorageSync(AUTHORIZATION) }
  })
  tip.loaded()
  if (res.message == JWT_ERROR_MESSAGE || res.message == NO_JWT_ERROR_MESSAGE) {
    tip.confirm('JWT错误', 'TOP')
  } else {
    return res
  }
}
const wxRequestRaw = async(params = {}, url) => {
  tip.loading()
  let data = params.query || {}
  data.sign = SIGN
  data.time = TIMESTAMP
  let res = await wepy.request({
    url: url,
    method: params.method || 'POST',
    data: data,
    header: { 'Content-Type': 'application/json',
      'Authorization': wepy.getStorageSync(AUTHORIZATION) }
  })
  tip.loaded()
  if (res.message == JWT_ERROR_MESSAGE || res.message == NO_JWT_ERROR_MESSAGE) {
    tip.confirm('JWT错误', 'TOP')
  } else {
    return res
  }
}
const wxUploadFile = async(params = {}, url) => {
  tip.loading()
  let data = params.query || {}
  data.sign = SIGN
  data.time = TIMESTAMP
  let res = await wepy.uploadFile({
    url: url,
    filePath: data.filePath,
    name: data.name,
    formData: data.data,
    header: { 'Content-Type': 'multipart/form-data',
      'Authorization': wepy.getStorageSync(AUTHORIZATION) }
  })
  tip.loaded()
  if (res.message == JWT_ERROR_MESSAGE || res.message == NO_JWT_ERROR_MESSAGE) {
    tip.confirm('JWT错误', 'TOP')
  } else {
    return res
  }
}

module.exports = {
  wxLogin,
  wxRequest,
  wxRequestRaw,
  wxUploadFile
}
