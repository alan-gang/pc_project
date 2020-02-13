import qs from 'qs';
export default ({ $axios, redirect }) => {
  $axios.onRequest(config => {
    console.log(config.data)
  })
}
