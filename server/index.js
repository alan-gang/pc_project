const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const koajwt = require('koa-jwt');
const app = new Koa()
const Redis = require('koa-redis')

/* 处理psot请求 */
const bodyParser = require('koa-bodyparser');
/* 使用post请求中间 */
app.use(bodyParser())

/* 全局使用session ================*/
const session = require('koa-session');
app.keys = ['secrt'];
const CONFIG = {
  key: 'session',
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  renew: false,
  store: new Redis({
    port: 6379,
    host: '123.56.119.225',
  })
};
app.use(session(CONFIG, app));


/* 使用错误处理 */
app.use(require('./util/handleError.js')())
app.onerror = (err) => {
  console.log('捕获到了!', err.message);
}

/* 全局变量定义 */
app.use(require('./util/globalVariable')())


// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'


/* 接口数据 */
const common = require('./controller/')
app.use(common.routes(), common.allowedMethods())

async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
    // ctx.session.name = 'demo'
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
