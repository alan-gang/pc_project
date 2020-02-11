const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
const userModel = require('../model/user_model')

/* 定义验证信息对象 */
/* secret为当时创建token指定好的key值 */
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
/* 换成自己定义的secret值 */
opts.secretOrKey = 'hangang';

// 导出passport对象
module.exports = passport => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    // 使用userSchema模型进行passport查找
    userModel.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => console.log(err));
  }));
}
