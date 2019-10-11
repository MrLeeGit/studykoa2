const router = require('koa-router')()
const { exec } = require('../db/mysql')
const {getLoginInfo } = require('../controller/user');

router.prefix('/users')

router.get('/',  async(ctx, next) => {
  const callbackName = ctx.query.callback
  
  let result = await getLoginInfo();
  result = JSON.stringify(result);
  
  if (callbackName && result) {
    result = `${callbackName}(${result})`;
  }

  ctx.body = result;
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
