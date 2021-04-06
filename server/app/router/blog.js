module.exports = app => {
  const { router, controller } = app;
  router.get('/blog/index', controller.blog.home.index);
  router.get('/blog/getArticleList', controller.blog.home.getArticleList);
  router.get('/blog/getArticleById/:id', controller.blog.home.getArticleById);
  router.get('/blog/getArticleFullList', controller.blog.home.getArticleFullList);
}
// 此处结构，router.js中就无需再结构，只要引入就可以了