let express = require('express');
let router = express.Router();

let sql_operation = require("./operation");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/week1', function(req, res, next) {
  sql_operation.query("select d2.CardNo,Sex,Major,Date,Dept,Money from data2 d2 inner join data1 d1 on d1.CardNo=d2.CardNo "+
      " where  STR_TO_DATE(Date,'%Y/%m/%d %H:%i') BETWEEN '2019/4/1 0:00' and '2019/4/8 0:00'" +
      "and Dept in ('第一食堂','第二食堂','第三食堂','第四食堂','第五食堂','好利来食品店','红太阳超市')"+
      "order by d2.Date asc",data=>{
    res.send(data);
      }
  )
});

router.get('/week2', function(req, res, next) {
  sql_operation.query("select d2.CardNo,Sex,Major,Date,Dept,Money from data2 d2 inner join data1 d1 on d1.CardNo=d2.CardNo "+
      " where  STR_TO_DATE(Date,'%Y/%m/%d %H:%i') BETWEEN '2019/4/8 0:00' and '2019/4/15 0:00'" +
      "and Dept in ('第一食堂','第二食堂','第三食堂','第四食堂','第五食堂','好利来食品店','红太阳超市')"+
      "order by d2.Date asc",data=>{
    res.send(data);
      }
  )
});
router.get('/week3', function(req, res, next) {
  sql_operation.query("select d2.CardNo,Sex,Major,Date,Dept,Money from data2 d2 inner join data1 d1 on d1.CardNo=d2.CardNo "+
      " where  STR_TO_DATE(Date,'%Y/%m/%d %H:%i') BETWEEN '2019/4/15 0:00' and '2019/4/22 0:00'" +
      "and Dept in ('第一食堂','第二食堂','第三食堂','第四食堂','第五食堂','好利来食品店','红太阳超市')"+
      "order by d2.Date asc",data=>{
    res.send(data);
      }
  )
});

router.get('/week4', function(req, res, next) {
  sql_operation.query("select d2.CardNo,Sex,Major,Date,Dept,Money from data2 d2 inner join data1 d1 on d1.CardNo=d2.CardNo "+
      " where  STR_TO_DATE(Date,'%Y/%m/%d %H:%i') BETWEEN '2019/4/22 0:00' and '2019/4/29 0:00'" +
      "and Dept in ('第一食堂','第二食堂','第三食堂','第四食堂','第五食堂','好利来食品店','红太阳超市')"+
      "order by d2.Date asc",data=>{
    res.send(data);
      }
  )
});

router.get('/week5', function(req, res, next) {
  sql_operation.query("select d2.CardNo,Sex,Major,Date,Dept,Money from data2 d2 inner join data1 d1 on d1.CardNo=d2.CardNo "+
      " where  STR_TO_DATE(Date,'%Y/%m/%d %H:%i') BETWEEN '2019/4/29 0:00' and '2019/5/1 0:00'" +
      "and Dept in ('第一食堂','第二食堂','第三食堂','第四食堂','第五食堂','好利来食品店','红太阳超市')"+
      "order by d2.Date asc",data=>{
    res.send(data);
      }
  )
});

router.get('/student', function(req, res, next) {
  sql_operation.query("select * from data1",data=>{
    res.send(data);
      }
  )
});
module.exports = router;
