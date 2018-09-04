/**
 * 用户code 换取 session_key
 * @type {String}
 */
export const USER_SPECICAL_INFO = 'userSpecialInfo'

/**
 * 用户信息
 * @type {String}
 */
export const USER_INFO = 'userInfo'

/**
 * 系统信息
 * @type {String}
 */
export const SYSTEM_INFO = 'systemInfo'

export const ADDRESS_ID = 'addressId'

export const SEL_CLASS_CODE = 'selClassCode'

/**
 * JWT
 * @type {String}
 */
export const AUTHORIZATION = 'Authorization'
/**
 * 用户名
 * @type {String}
 */
export const ACCOUNT = 'account'
/**
 * 用户id
 * @type {String}
 */
export const USER_ID = 'user_id'
/**
 * 维修状态
 * 0: 报修进行中（报修过程中，文件上传没完成等情况）
 * 1：未派单，
 * 2：已派单（但未接单）,
 * 3：已接受（进行中，可以再派），
 * 4：失败，(可以 再派，代理商可以 转派)
 * 5：已再派，
 * 6：已转派，
 * 7：已完成(客户未确认)，
 * 8. 客户确认（维修成功）。转派后，前面的维修记录要保留，但是客户只需要看到成功的最后那次记录。
 */
export const REPAIR_STATUS_IN_REQUESTING = '0'
export const REPAIR_STATUS_UNSIGNED_TO_REPAIRER = '1'
export const REPAIR_STATUS_SIGNED_TO_REPAIRER = '2'
export const REPAIR_STATUS_REPAIRER_ACCEPTED = '3'
export const REPAIR_STATUS_REPAIR_NG = '4'
export const REPAIR_STATUS_REPAIRER_REASSIGN = '5'
export const REPAIR_STATUS_REPAIRER_FORWARD = '6'
export const REPAIR_STATUS_REPAIR_OK = '7'
export const REPAIR_STATUS_REPAIR_CUSTOMER_CONFIRMED = '8'
/**
 保养状态
  0：待分配，
  1：已分配(但未接单）
  2：已接受任务，
  3：保养完成(客户未确认)，
  4：已确认保养结果
 */
export const MAINTAIN_STATUS_NOT_ASSIGN = '0'
export const MAINTAIN_STATUS_ASSIGNED = '1'
export const MAINTAIN_STATUS_TASK_DOING = '2'
export const MAINTAIN_STATUS_FINISHED = '3'
export const MAINTAIN_STATUS_CONFIRMED = '4'
/**
 * 安装状态，
 0：待分配，
 1：已分配(但未接单）
 2：已接受
 3：完成(客户未确认)，
 4：已确认
 */
export const INSTALL_STATUS_NOT_ASSIGN = '0'
export const INSTALL_STATUS_ASSIGNED = '1'
export const INSTALL_STATUS_TASK_DOING = '2'
export const INSTALL_STATUS_FINISHED = '3'
export const INSTALL_STATUS_CONFIRMED = '4'
