const mysql = require('mysql')
module.exports = {
  config: {
    host: 'localhost',
    post: '3306',
    user: 'root',
    password: 'root',
    database: 'shopping',
  },
  // 链接数据库连接池方式
  sqlConnect: function (sql, sqlArr, callback) {
    var pool = mysql.createPool(this.config)
    pool.getConnection((err, conn) => {
      // console.log('123456');
      if (err) {
        console.log('连接失败');
        return
      }
      // 事件驱动回调
      conn.query(sql, sqlArr, callback);
      conn.release();
    })
  }
}