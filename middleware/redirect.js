export default function ({ route,app, redirect,req }) {
  if (!process.client) {
    if (!req.ctx.session.name && !route.path.includes('user')) {
      redirect('/user/login');
    }
  }
}
