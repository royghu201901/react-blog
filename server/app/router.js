'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // 引入router文件夹下已结构的文件就可以，此处用的require方法
  require('./router/blog')(app)
};
