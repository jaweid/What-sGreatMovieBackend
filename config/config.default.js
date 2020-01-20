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
  config.keys = appInfo.name + '_1579504745498_8040';

  // add your middleware config here
  // config.middleware = [errorHandler];

  // config.errorHandler = {
  //   match: '/api'
  // }
  config.cors = {
    origin: '*',
    allowMethods: 'GET,POST,PUT,HEAD,DELETE,PATCH'
  }

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ['*'],
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
