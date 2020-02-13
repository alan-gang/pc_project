export default function (axios) {
  return ({ params = null, url = '', type = 'get' }) => {
    let data = (type == 'get' || type == 'delete') ? { params } : params;
    return new Promise((resolve, reject) => {
      axios[type](url, data).then(resolve).catch(reject)
    })
  }
}
