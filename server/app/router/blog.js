module.exports = app => {
  const { router, controller } = app;
  router.get('/blog/index', controller.blog.home.index);
}
// 此处结构，router.js中就无需再结构，只要引入就可以了