//跨域代理前缀
// const API_PROXY_PREFIX='/api'
// const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
const BASE_URL = 'http://39.107.105.242'
module.exports = {
  LOGIN: `${BASE_URL}`,
  ROUTES: `${BASE_URL}/routes`,
  permission: `${BASE_URL}/api/permission/tree`,
  GOODS: `${BASE_URL}/goods`,
  GOODS_COLUMNS: `${BASE_URL}/columns`,
}
