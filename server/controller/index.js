const router = require('koa-router')()
const fs = require('fs')
const path = require('path')

/* 递归获取所有的文件夹 */
function readFileList (dir, filesList = []) {
  /* 同步读取文件（文件夹/文件名） */
  const files = fs.readdirSync(dir);
  files.forEach((item, index) => {
    var fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      readFileList(path.join(dir, item), filesList);
    } else {
      filesList.push(fullPath);
    }
  });
  return filesList;
}
const filesList = [];
readFileList(__dirname, filesList);


filesList
  .filter(file => ~file.search(/^[^\.].*\.js$/))
  .forEach(file => {

    /* TODOS linux与window系统的/处理 */
    let file_entity = require(path.resolve(__dirname, file));

    if (!file.includes('index')) {
      let reg = /[\\|\/](\w*)[\\|\/](\w*)\.js$/
      let str = file.split('routes')[1]

      let file_name = str.replace(reg, ($1, $2, $3) => {
        return '/' + $2 + '/' + $3
      })
      router.use(file_name, file_entity.routes(), file_entity.allowedMethods())
    }
  })


module.exports = router
