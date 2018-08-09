import {
  wxRequest
} from '@/utils/wxRequest'

let env = '-test' // -dev 或者 -test
// const apiMall = 'https://sujiefs.com/'
// const apiMall = 'http://localhost:8080/'
const apiMall = 'http://192.168.0.103:8080'

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const getDiscoverList = (params) => wxRequest(params, apiMall + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2')
const getMachineList = (params) => wxRequest(params, apiMall + '/machine/list')
const getMachineListByCustomer = (params) => wxRequest(params, apiMall + '/machine/selectByAccount')
const getInstallRecordList = (params) => wxRequest(params, apiMall + '/install/record/getInstallRecordInfoList')
const getMaintainRecordList = (params) => wxRequest(params, apiMall + '/maintain/record/getMaintainRecordInfoList')
const getRepairRecordList = (params) => wxRequest(params, apiMall + '/repair/record/getRepairRecordInfoList')
const uploadInstallFeedback = (params) => wxRequest(params, apiMall + '/install/customer/feedback/add')
const uploadMaintainFeedback = (params) => wxRequest(params, apiMall + '/maintain/customer/feedback/add')
const uploadRepairFeedback = (params) => wxRequest(params, apiMall + '/repair/customer/feedback/add')

// 微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, apiMall + '/api/wechat/jscode2session')
const user2session = (params) => wxRequest(params, apiMall + '/api/wechat/user2session?jsoncallback=?')

// 商品接口---begin
// 首页发现商品接口
const hostGoodsList = (params) => wxRequest(params, apiMall + '/api/home/hostGoodsList')
const getHomeDisvocerList = (params) => wxRequest(params, apiMall + '/api/mall/discoverList')
// 查询商品列表
const getGoodsList = (params) => wxRequest(params, apiMall + '/api/mall/searchGoodsList')

// 查询商品详情信息
const goodsDetail = (params) => wxRequest(params, apiMall + '/api/mall/goods')

// 支付前生成订单
const saveByCart = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/saveByCart')

// 支付统一下单
const toPay = (params) => wxRequest(params, apiMall + '/wepay/toPay')

// 商品收藏
const goodsFavorite = (params) => wxRequest(params, apiMall + '/api/mall/goodsFavorite/add')

// 商品收藏删除
const goodsUnFavorite = (params) => wxRequest(params, apiMall + '/api/mall/goodsFavorite/delete')

// 商品是否已收藏
const goodsIsFavorite = (params) => wxRequest(params, apiMall + '/api/mall/goodsFavorite/goodsIsFavorite')

// 商品接口---end

// 用户相关信息--begin
// 用户的当天签到信息
const userSginInfo = (params) => wxRequest(params, apiMall + '/api/userSign/signInfo')
const doSign = (params) => wxRequest(params, apiMall + '/api/userSign/doSign')
// 获取最近七天签到情况
const getSignDate = (params) => wxRequest(params, apiMall + '/api/userSign/getSignDate')

// 用户是否绑定手机号
const getUserInfo = (params) => wxRequest(params, apiMall + '/api/userCenter/getUserInfo')

// 用户收货地址
const getUserAddress = (params) => wxRequest(params, apiMall + '/api/receiverInfo/list')

// 保存用户收货地址
const saveAddress = (params) => wxRequest(params, apiMall + '/api/receiverInfo/saveOrUpdate')

// 用户收货地址根据id查询
const receiverInfoById = (params) => wxRequest(params, apiMall + '/api/receiverInfo/receiverInfoById')

// 根据Id删除收货地址
const delUserAddress = (params) => wxRequest(params, apiMall + '/api/receiverInfo/operation')

// 查询关键字保存
const addSearchKeyword = (params) => wxRequest(params, apiMall + '/api/searchkeyword/add')
// 查询关键字列表
const searchKeywordList = (params) => wxRequest(params, apiMall + '/api/searchkeyword/list')
// 查询关键字清除
const clearSearchKeyword = (params) => wxRequest(params, apiMall + '/api/searchkeyword/clear')

// 查询我的订单
const getMyOrderList = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getMyOrderList')

// 查询我的订单数量
const getMyOrderSize = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getMyOrderSize')

// 根据订单号查询详情
const getOrderInfo = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getOrderDetail')

// 根据订单号查询详情
const getPayOrderDetail = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getPayOrderDetail')

// 根据订单号查询详情
const editOrderInfo = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/opt')

// 根据订单号查询物流
const orderExpressInfo = (params) => wxRequest(params, apiMall + '/api/orderExpress/orderExpressInfo')

// 查询用户的已订购产品
const goodsUserOrderList = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/goodsUserOrderList')

// 退货操作
const refundApply = (params) => wxRequest(params, apiMall + '/api/mall/refund/saveRefundApply')

// 用户相关信息--end

// 商品分类--begin
// 一级分类
const rootCtegoryList = (params) => wxRequest(params, apiMall + '/api/mall/rootCtegoryList')
// 二级三级分类
const childGoodsCatetoryList = (params) => wxRequest(params, apiMall + '/api/mall/childGoodsCatetoryList')
// 商品分类--end

// 查询广告列表
const getAdList = (params) => wxRequest(params, apiMall + '/api/adverts/list')

export default {
  getMachineList,
  getMachineListByCustomer,
  getInstallRecordList,
  getMaintainRecordList,
  getRepairRecordList,
  uploadInstallFeedback,
  uploadMaintainFeedback,
  uploadRepairFeedback,
  hostGoodsList,
  getDiscoverList,
  getHomeDisvocerList,
  getGoodsList,
  goodsDetail,
  wxJsCode2Session,
  getUserInfo,
  getUserAddress,
  saveAddress,
  receiverInfoById,
  getUserAddress,
  addSearchKeyword,
  searchKeywordList,
  clearSearchKeyword,
  getMyOrderList,
  saveByCart,
  toPay,
  rootCtegoryList,
  childGoodsCatetoryList,
  getOrderInfo,
  editOrderInfo,
  goodsUserOrderList,
  orderExpressInfo,
  delUserAddress,
  goodsFavorite,
  goodsUnFavorite,
  goodsIsFavorite,
  getMyOrderSize,
  getPayOrderDetail,
  getAdList,
  getSignDate
}
