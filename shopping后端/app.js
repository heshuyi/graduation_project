//引入express 创建服务器
var express = require('express');
var app = express();

// 需要对表单数据进行解析的，安装bodyParser
var bodyParser = require('body-parser');    //解析函数
app.use(bodyParser.json());                 //json请求
app.use(bodyParser.urlencoded({ extended: true }));       //表单请求

// 设置跨域访问
// app.all('*', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", req.headers.origin);
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By", '3.2.1');
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// })
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin); //需要显示设置来源
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //带cookies7     
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

var info = [
  {
    data: 123,
    num: 1,
    age: 11
  }, {
    data: 456,
    num: 2,
    age: 22
  }
];

// 配置接口api
app.get('/api11', function (req, res) {
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  // res.setHeader('Access-Control-Allow-Credentials', true);
  res.status(200)
  // res.json(info)
  console.log(req.query);
  res.send(req.query)
})

app.post('/api12', function (req, res) {
  console.log(req.stack);
  console.log(req.body);
  console.log(req.url);
  console.log(req.query);
  // res.json(req.body)
  res.json(info)
})

// 配置服务端口
var server = app.listen(3001, function () {
  // var host = server.address().address;
  // var port = server.address().port;
  // console.log('listen at http://%s%s',host,port);
  console.log('服务启动');

})
