// 获取账号密码
var dbConfig = require('./dbConfig');
var getTelPassword = (req, res) => {
  console.log(1);
  var account = req.body.account
  var password = req.body.password
  var sqlArr = [account]
  // console.log(sqlArr);
  var sql = `select password from theuserinformation where tel=?`
  var callback = function (err, data) {
    if (err) {
      console.log(err);
    } else {
      data = data[0]
      if (data) {
        if (password == data.password) {
          res.send({
            status: 1,
            msg: '成功',
            data: data
          })
        } else if (password != data.password && data.password) {
          res.send({
            status: 2,
            msg: '密码错误',
            data: data
          })
        }
      } else {
        {
          res.send({
            status: 3,
            msg: '账号不存在',
            data: data
          })
        }
      }
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback)
}
//  注册账号添加个人信息
var makeNewUser = function (req, res) {
  var flag = false;//标记没注册
  var userInformation = req.body;
  console.log(userInformation);
  console.log(userInformation.tel);
  var sql1 = `select tel from theuserinformation where tel=?`
  var sqlArr1 = [userInformation.tel]
  var callBack1 = function (err, data) {
    if (err) {
      console.log(err);
    } else {
      if (!data[0]) {
        flag = true
        console.log(flag);
      }
    }
  }
  dbConfig.sqlConnect(sql1, sqlArr1, callBack1)
  var sqladd = `insert into theuserinformation values(
    ${userInformation.tel},
    '${userInformation.name}',
    '${userInformation.password}',
    '${userInformation.province}',
    '${userInformation.city}',
    '${userInformation.county}',
    '${userInformation.postalCode}',
    '${userInformation.addressDetail}')`
  var sqladdArr = []
  var callback2 = function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.send({
        status: 1,
        msg: '成功'
      })
    }
  }
  if (flag == true) {
    dbConfig.sqlConnect(sqladd, sqladdArr, callback2)
  } else {
    res.send({
      status: 2,
      msg: '已拥有'
    })
  }

}
// 查看个人信息
var getMineInformation = function (req, res) {
  var account = req.body
  var sql = `select * from theuserinformation where tel=?`
  console.log(account);
  // var sqlArr = [account]
  // var callback = function (err, data) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.send({
  //       datas: data,
  //       msg: '基本信息'
  //     })
  //   }
  // }
  // dbConfig.sqlConnect(sql, sqlArr, callback)
}
module.exports = {
  getTelPassword,
  makeNewUser,
  getMineInformation
}