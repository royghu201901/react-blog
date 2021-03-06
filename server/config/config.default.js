/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1616395357008_3300';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '123456',
      // database
      database: 'react_blog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  config.security = {
    scrf: {
      enable: false
    },
    // 设置白名单，这里设置了全部可以跨域
    domainWhiteList: ['*']
  };

  config.cors = {
    origin: '*',
    // 需要什么接口形式自己加
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH, OPTIONS'
  }

  return {
    ...config,
    ...userConfig,
  };
};
