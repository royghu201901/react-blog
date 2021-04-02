'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `Welcome to Roy's Blog`;
  }

  async getArticleList() {
    let sql = 'SELECT article.id as id ,' +
      'article.title as title ,' +
      'article.introduce as introduce ,' +
      "DATE_FORMAT(article.update_time, '%Y-%m-%d %H:%i:%s') as update_time ," +
      'article.view_count as view_count ,' +
      'type.type_name as type_name ' +
      'FROM article LEFT JOIN type ON article.type_id = type.id ' +
      'ORDER BY article.id DESC'
      
    const results = await this.app.mysql.query(sql)
    this.ctx.body = {data: results}
  }

  async getArticleById() {
    let id = this.ctx.params.id
    let sql = 'SELECT article.id as id ,' +
      'article.title as title ,' +
      'article.introduce as introduce ,' +
      'article.article_content as article_content ,' +
      "DATE_FORMAT(article.update_time, '%Y-%m-%d %H:%i:%s') as update_time ," +
      'article.view_count as view_count ,' +
      'type.type_name as type_name ,' +
      'type.id as type_id ' +
      'FROM article LEFT JOIN type ON article.type_id = type.id ' +
      'WHERE article.id=' + id

    const result = await this.app.mysql.query(sql)
    this.ctx.body = {data: result}
  }
}

module.exports = HomeController;
