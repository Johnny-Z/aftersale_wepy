import wepy from 'wepy'
import util from './util'
import md5 from './md5'
import tip from './tip'
import {
    AUTHORIZATION
} from '@/utils/constant'

const API_SECRET_KEY = 'www.mall.cycle.com'
const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())
const TOKEN_AUTHORIZATION = wepy.getStorageSync(AUTHORIZATION)

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
      'Authorization': TOKEN_AUTHORIZATION }
  })
  tip.loaded()
  return res
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
    header: { 'Authorization': TOKEN_AUTHORIZATION }
  })
  tip.loaded()
  return res
}

module.exports = {
  wxRequest,
  wxUploadFile
}
