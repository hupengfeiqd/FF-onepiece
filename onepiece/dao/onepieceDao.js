var dbutil = require('./dbutil');
var fs = require('fs');

// 查询所有海贼
function queryAllPirates (callback) {
    var querySql = "select * from op_person";
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql,function(error, result){
      if (error == null) {
        callback(result)
      } else {
        throw new Error(error);
      }
    })
    connection.end();
}

// 通过势力名称查询海贼
function queryPiratesByPowerName (powerName,callback) {
    var querySql = "select * from op_person,(select power_id from op_power where power_name = ?) as power where power.power_id = op_person.power_id or power.power_id = op_person.power_id_repeat order by op_person.member_sort;";
    var connection = dbutil.createConnection();
    var params = [powerName]
    connection.connect();
    connection.query(querySql,params,function(error, result){
      if (error == null) {
        callback(result)
      } else {
        throw new Error(error);
      }
    })
    connection.end();
}

// 通过势力名称查询该势力的信息
function queryPowerDescByPowerName (powerName, callback) {
  var querySql = "select power_name,power_icon,power_desc from op_power where power_name=?";
    var connection = dbutil.createConnection();
    var params = [powerName]
    connection.connect();
    connection.query(querySql,params,function(error, result){
      if (error == null) {
        callback(result)
      } else {
        throw new Error(error);
      }
    })
    connection.end();
}

// 分页功能，查询一共多少页
function pagingCount (count, callback) {
  var querySql = "select count(1) as pageCount from op_person where reward_gold != 0";
  var connection = dbutil.createConnection();
  connection.connect();
  connection.query(querySql,function(error, result){
    if (error == null) {
      var res = {
        "pageNum" : Math.ceil(result[0].pageCount / count)
      }
      callback(res)
    } else {
      throw new Error(error);
    }
  })
  connection.end();
}

// 分页主接口，传入页数和每页显示的数据条数
function paging (page, count, callback) {
    var querySql = "SELECT a.id,a.name,a.img_path,a.title,a.reward_gold,a.ability,a.abStr,b.power_icon,b.power_name FROM op_person as a INNER JOIN op_power as b where a.power_id = b.power_id and a.reward_gold != 0 ORDER BY reward_gold desc LIMIT ?,?";
    var connection = dbutil.createConnection();
    var pageTem = page - 1;
    var params = [pageTem * count,count];
    connection.connect();
    connection.query(querySql,params,function(error, result){
      if (error == null) {
        callback(result)
      } else {
        throw new Error(error);
      }
    })
    connection.end();
}

// 展示海贼团
function queryPiratesPower (callback) {
  var querySql = "SELECT a.power_id,a.power_name,a.power_icon,a.power_desc,b.name as person_name FROM op_power as a,op_person as b where (b.member_sort = 1 or b.member_sort = 0) and a.power_id = b.power_id and a.show_index != 99 ORDER BY show_index;";
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql,function(error, result){
      if (error == null) {
        callback(result)
      } else {
        throw new Error(error);
      }
    })
    connection.end();
}

// 查询所有航线
function queryAllTrip (callback) {
  var querySql = "select * from op_trip;";
  var connection = dbutil.createConnection();
  connection.connect();
  connection.query(querySql,function(error, result){
    if (error == null) {
      callback(result)
    } else {
      throw new Error(error);
    }
  })
  connection.end();
}

function queryPersonByName (arr, callback) {
  var temp = JSON.parse(arr);
  var querySql = "select * from op_person where";
  for (var i = 0 ; i < temp.length; i ++ ) {
    if (i == 0) {
      querySql += " name=? ";
    } else {
      querySql += "or name=? ";
    }
  }
  querySql += "ORDER BY member_sort;"
  var connection = dbutil.createConnection();
  connection.connect();
  connection.query(querySql,temp,function(error, result){
    if (error == null) {
      callback(result)
    } else {
      throw new Error(error);
    }
  })
  connection.end();
}

function queryAllCartoon (callback) {
  var querySql = "select * from op_cartoon;";
  var connection = dbutil.createConnection();
  connection.connect();
  connection.query(querySql,function(error, result){
    if (error == null) {
      callback(result)
    } else {
      throw new Error(error);
    }
  })
  connection.end();
}

// function xie() {
//   var arr = [];
//   var asd = fs.readFileSync("dao/manhuatest.txt");
//   var querySql = "insert into op_cartoon (cartoon_num,cartoon_title,cartoon_href) values ";
//   arr = asd.toString().split('\r\n');
//   for (var i = 0; i < arr.length; i ++ ) {
//     if (i == 0) {
//       querySql += `('${arr[i].split("|")[0]}','${arr[i].split("|")[1]}','https://ac.qq.com/${arr[i].split("|")[2]}')`;
//     } else {
//       querySql += `,('${arr[i].split("|")[0]}','${arr[i].split("|")[1]}','https://ac.qq.com/${arr[i].split("|")[2]}')`;
//     }
//   }
//     var connection = dbutil.createConnection();
//     connection.connect();
//     connection.query(querySql,function(error, result){
//       if (error == null) {
//         console.log("ok了")
//       } else {
//         throw new Error(error);
//       }
//     })
//     connection.end();
// }
// xie();

module.exports = {
  "queryAllPirates": queryAllPirates,
  "queryPiratesByPowerName": queryPiratesByPowerName,
  "queryPowerDescByPowerName": queryPowerDescByPowerName,
  "pagingCount": pagingCount,
  "paging": paging,
  "queryPiratesPower": queryPiratesPower,
  "queryAllTrip": queryAllTrip,
  "queryPersonByName": queryPersonByName,
  "queryAllCartoon": queryAllCartoon
}
