export default function ({ route, app, redirect, req, $axios, error }) {
  if (!process.client) {
    if (!req.ctx.session.email && !route.path.includes('user')) {
      redirect('/user/login');
    }

  }
}
