
// 获取存储内容
export const gLS = (val) => {
  if (process.client) {
    let data = localStorage[val] && JSON.parse(localStorage[val])
    if (!data) {
      return false
    } else {
      return data
    }
  }
}

/* 报错本地储存 */
export const sLS = (key, val) => {
  if (process.client) {
    if (typeof val == 'object') {
      localStorage[key] = JSON.stringify(val)
    } else {
      localStorage[key] = val
    }
  }
}

/* 清除本地存储 */
export const cLS = (key) => {
  if (process.client) {
    localStorage.removeItem(key)
  }
}
