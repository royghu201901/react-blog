//* 接口管理文件

// 默认api
let BASE_API = 'http://127.0.0.1:7001/blog/'

// 默认路径
let SERVICE_PATH = {
  // 首页获取列表接口（最多10篇）
  GET_ARTICLE_LIST: BASE_API + 'getArticleList/',
  // 详情页获取文章内容接口
  GET_ARTICLE_BY_ID: BASE_API + 'getArticleById/',
  // 列表页获取列表接口（没有限制几篇）
  GET_ARTICLE_FULL_LIST: BASE_API + 'getArticleFullList/',
}

export default SERVICE_PATH
