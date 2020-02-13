export default function ({ route, app, redirect, ctx, req, $axios, error }) {
  if (!process.client) {
    if (!req.ctx.session.user && (!route.path.includes('user/login') && !route.path.includes('user/register') && !route.path.includes('user/resetpassword'))) {
      redirect('/user/login');
    } else {
      if (req.ctx.session.user && (req.ctx.session.user.identity === '1' && !req.ctx.session.user.classClassify)) {
        redirect('/user/usersetting')
      }
    }
  } else {
  }
}
