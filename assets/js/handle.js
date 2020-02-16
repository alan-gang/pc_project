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

export const sLS = (key, val) => {
  if (process.client) {
    if (typeof val == 'object') {
      localStorage[key] = JSON.stringify(val)
    } else {
      localStorage[key] = val
    }
  }
}
