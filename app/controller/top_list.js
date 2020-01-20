// const {Controller} = require('egg');
const Controller = require('../core/BaseController');

class TopListController extends Controller {

    async list() {
        const createData = this.ctx.request.body;
        await this.returnService(
            this.ctx.service.topList.list()
        );
    }

}

module.exports = TopListController;