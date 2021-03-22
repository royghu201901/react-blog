'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `Welcome to Roy's Blog`;
  }
}

module.exports = HomeController;
