//榜单
const Service = require('egg').Service;
var Crawler = require("crawler");

class TopListService extends Service {


  async list() {

    const a = () => {
      return new Promise(function (reslove, reject) {
        var c = new Crawler({
          maxConnections: 10,
          // This will be called for each crawled page
          callback: function (error, res, done) {
            if (error) {
              console.log(error);
              reject(error)
            } else {
              var $ = res.$;
              let items = [];
              $('.top_list').find('li').each(function (idx, element) {
                var $element = $(element);
                let peoplePoint = $element.find('.mov_point').find('p').text().trim()
                items.push({
                  order: $element.find('.number').find('em').text(),
                  imgUrl: $element.find('.mov_pic').find('a').attr('href'),
                  title: $element.find('.mov_con').find('h2').find('a').text(),
                  director: $element.find('.mov_con').find('p').find('a').text(),
                  desc: $element.find('.mov_con').find('.mt3').text(),
                  point: $element.find('.mov_point').find('.point').find('.total').text() + $element.find('.mov_point').find('.point').find('.total2').text(),
                  people_point: peoplePoint.substring(0, peoplePoint.length - 3)
                });
              });
              reslove(items);
            }
            done();
          }
        });
        c.queue('http://www.mtime.com/top/movie/top100/');

      })
    }
    return  await a()
  }

}

module.exports = TopListService;