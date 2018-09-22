import {
  wxRequest,
  wxRequestRaw,
  wxUploadFile
} from '@/utils/wxRequest'

const apiMall = 'https://eservice-tech.cn'
// const apiMall = 'http://47.101.141.182:2032/'
// const apiMall = 'http://192.168.0.104:8080'

const login = (params) => wxRequest(params, apiMall + '/api/login')
const wxJsCode2Session = (params) => wxRequest(params, apiMall + '/api/wechat/jscode2session')

const getRepairList = (params) => wxRequest(params, apiMall + '/api/repair/record/selectRepairTaskByUser')
const getMaintainList = (params) => wxRequest(params, apiMall + '/api/maintain/record/selectMaintainTaskByUser')
const getInstallList = (params) => wxRequest(params, apiMall + '/api/install/record/selectInstallTaskByUser')

const getInstallRecordList = (params) => wxRequest(params, apiMall + '/api/install/record/getInstallRecordInfoList')
const getMaintainRecordList = (params) => wxRequest(params, apiMall + '/api/maintain/record/getMaintainRecordInfoList')
const getRepairRecordList = (params) => wxRequest(params, apiMall + '/api/repair/record/getRepairRecordInfoList')
const uploadInstallFeedback = (params) => wxRequest(params, apiMall + '/api/install/customer/feedback/add')
const uploadMaintainFeedback = (params) => wxRequest(params, apiMall + '/api/maintain/customer/feedback/add')

const uploadRepairFeedback = (params) => wxRequestRaw(params, apiMall + '/api/repair/actual/info/add')

const updateInstallRecord = (params) => wxRequestRaw(params, apiMall + '/api/install/record/update')
const updateMaintainRecord = (params) => wxRequestRaw(params, apiMall + '/api/maintain/record/update')
const updateMaintainAbnormalRecord = (params) => wxRequestRaw(params, apiMall + '/api/maintain/abnormal/record/add')
const updateRepairRecord = (params) => wxRequestRaw(params, apiMall + '/api/repair/record/update')

const uploadRepairActualFiles = (params) => wxUploadFile(params, apiMall + '/api/repair/actual/info/update')

export default {
  login,
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
  uploadRepairActualFiles
}
