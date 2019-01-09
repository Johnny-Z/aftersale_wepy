import {
  wxLogin,
  wxRequest,
  wxRequestRaw,
  wxUploadFile
} from '@/utils/wxRequest'

const apiMall = 'https://aftersalesinsim.cn/api'
// const apiMall = 'https://eservice-tech.cn/api'
// const apiMall = 'http://wxm.vaiwan.com:8081/'
// const apiMall = 'http://192.168.43.223:8080'

const login = (params) => wxRequest(params, apiMall + '/login')
const autoLogin = (params) => wxRequest(params, apiMall + '/wechat/user/info/getUsersByJsCode')
const wxJsCode2Session = (params) => wxLogin(params, apiMall + '/wechat/user/info/loginGetUnionIdAndSave')

const getRepairList = (params) => wxRequest(params, apiMall + '/repair/record/selectRepairTaskByUser')
const getMaintainList = (params) => wxRequest(params, apiMall + '/maintain/record/selectMaintainTaskByUser')
const getInstallList = (params) => wxRequest(params, apiMall + '/install/record/selectInstallTaskByUser')
const getInstallRecordList = (params) => wxRequest(params, apiMall + '/install/record/getInstallRecordInfoList')
const getMaintainRecordList = (params) => wxRequest(params, apiMall + '/maintain/record/getMaintainRecordInfoList')
const getRepairRecordList = (params) => wxRequest(params, apiMall + '/repair/record/getRepairRecordInfoList')
const uploadInstallFeedback = (params) => wxRequest(params, apiMall + '/install/customer/feedback/add')
const uploadMaintainFeedback = (params) => wxRequest(params, apiMall + '/maintain/customer/feedback/add')
const getIssuePositionList = (params) => wxRequest(params, apiMall + '/issue/position/list/list')
const getMobileByUser = (params) => wxRequest(params, apiMall + '/user/detail')
const updatePassword = (params) => wxRequest(params, apiMall + '/user/updatePassword')
const getPersonInfo = (params) => wxRequest(params, apiMall + '/wechat/user/info/getWechatUserInfoByAccount')

const updateUserInfo = (params) => wxRequestRaw(params, apiMall + '/user/update')
const uploadRepairFeedback = (params) => wxRequestRaw(params, apiMall + '/repair/actual/info/add')
const updateInstallRecord = (params) => wxRequestRaw(params, apiMall + '/install/record/update')
const updateMaintainRecord = (params) => wxRequestRaw(params, apiMall + '/maintain/record/update')
const updateMaintainAbnormalRecord = (params) => wxRequestRaw(params, apiMall + '/maintain/abnormal/record/add')
const updateRepairRecord = (params) => wxRequestRaw(params, apiMall + '/repair/record/update')

const uploadRepairActualFiles = (params) => wxUploadFile(params, apiMall + '/repair/actual/info/update')

export default {
  login,
  autoLogin,
  wxJsCode2Session,
  getRepairList,
  getMaintainList,
  getInstallList,
  getInstallRecordList,
  getMaintainRecordList,
  getRepairRecordList,
  updateInstallRecord,
  updateMaintainRecord,
  updateRepairRecord,
  uploadInstallFeedback,
  uploadMaintainFeedback,
  updateMaintainAbnormalRecord,
  uploadRepairFeedback,
  uploadRepairActualFiles,
  getMobileByUser,
  updateUserInfo,
  updatePassword,
  getPersonInfo,
  getIssuePositionList
}
