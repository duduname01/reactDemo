import Storage from 'storage-util'
/**
 * type: 可选 值->sessionStorage(0)、localStorage(1)、cookie(2)之一，默认sessionStorage(0)
 * success: 可选 设置成功后的回调，注意要放在对象里，下同
 * fail: 可选 设置失败后的回调
 */
const session = new Storage(1)
const LoginState = 'SYMBOL_LOGIN_STATE'
// 获取登录状态
const getLogin = () => {
  return session.get(LoginState)
}

// 设置登录状态
const setLogin = () => {
  session.set(LoginState, 1)
}

// 删除登录
const deleteLogin = () => {
  session.remove(LoginState)
}

export { getLogin, setLogin, deleteLogin }
