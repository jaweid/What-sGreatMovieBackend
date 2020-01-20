'use strict';

const {Controller} = require('egg');

class BaseController extends Controller {
    async returnService(promise) {
        const [error, data] = await this.wapperError(promise);
        if (error) {
            this.error(error);
        } else {
            this.success(data);
        }
    }

    success(data) {
        this.ctx.body = {
            status: 'success',
            success:true,
            data
        }
    }

    error(error) {
        this.ctx.body = {
            status: 'error',
            success:false,
            msg: error.message || error
        }
    }

    wapperError(promise) {
        return promise.then(
            data => {
                return [undefined, data];
            }
        ).catch(err => [err])
    }
}

module.exports = BaseController;
