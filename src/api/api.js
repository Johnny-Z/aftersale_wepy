import {
  wxRequest,
  wxRequestRaw,
    wxUploadFile
} from '@/utils/wxRequest'

let env = '-test' // -dev 或者 -test
// const apiMall = 'https://eservice-tech.cn/'
// const apiMall = 'http://47.101.141.182:2032/'
const apiMall = 'http://192.168.43.223:8080'

const wxJsCode2Session = (params) => wxRequest(params, apiMall + '/api/wechat/jscode2session')

const getMachineList = (params) => wxRequest(params, apiMall + '/machine/list')
const getMachineListByCustomer = (params) => wxRequest(params, apiMall + '/machine/selectByAccount')
const getRepairList = (params) => wxRequest(params, apiMall + '/repair/record/selectRepairTaskByUser')
const getMaintainList = (params) => wxRequest(params, apiMall + '/maintain/record/selectMaintainTaskByUser')
const getInstallList = (params) => wxRequest(params, apiMall + '/install/record/selectInstallTaskByUser')

const getInstallRecordList = (params) => wxRequest(params, apiMall + '/install/record/getInstallRecordInfoList')
const getMaintainRecordList = (params) => wxRequest(params, apiMall + '/maintain/record/getMaintainRecordInfoList')
const getRepairRecordList = (params) => wxRequest(params, apiMall + '/repair/record/getRepairRecordInfoList')
const uploadInstallFeedback = (params) => wxRequest(params, apiMall + '/install/customer/feedback/add')
const uploadMaintainFeedback = (params) => wxRequest(params, apiMall + '/maintain/customer/feedback/add')

const uploadRepairFeedback = (params) => wxRequestRaw(params, apiMall + '/repair/actual/info/add')

const updateInstallRecord = (params) => wxRequestRaw(params, apiMall + '/install/record/update')
const updateMaintainRecord = (params) => wxRequestRaw(params, apiMall + '/maintain/record/update')
const updateRepairRecord = (params) => wxRequestRaw(params, apiMall + '/repair/record/update')

const uploadRepairActualFiles = (params) => wxUploadFile(params, apiMall + '/repair/actual/info/update')

export default {
  wxJsCode2Session,
  getMachineList,
  getMachineListByCustomer,
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
  uploadRepairFeedback,
  uploadRepairActualFiles
}
