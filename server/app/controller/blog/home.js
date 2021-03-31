'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `Welcome to Roy's Blog`;
  }

  async list() {
    let sql = 'SELECT article.id as id ,' +
      'article.title as title ,' +
      'article.introduce as introduce ,' +
      // "FROM_UNIXTIME(article.update_time, '%Y-%m-%d %H:%i:%s') as update_time ," +
      'article.update_time as update_time ,' +
      'article.view_count as view_count ,' +
      'type.type_name as type_name ' +
      'FROM article LEFT JOIN type ON article.type_id = type.id'
    const results = await this.app.mysql.query(sql)
    this.ctx.body = {data: results}
  }
}

module.exports = HomeController;
