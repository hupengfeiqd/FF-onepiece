var url = require('url');
var fs = require('fs');
var opDao = require('../dao/onepieceDao');

var path = new Map();

function queryAllPirates(request, response) {
  opDao.queryAllPirates(function (result) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
    response.write(JSON.stringify(result));
    response.end();
  })
}

path.set("/api/queryAllPirates", queryAllPirates);

function queryPiratesByPowerName(request, response) {
  request.on("data", data => {
    var powerName = JSON.parse(data.toString()).powerName;
    opDao.queryPiratesByPowerName(powerName, function (result) {
      response.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
      response.write(JSON.stringify(result));
      response.end();
    })
  })
}

path.set("/api/queryPiratesByPowerName", queryPiratesByPowerName);

function queryPowerDescByPowerName(request, response) {
  request.on("data", data => {
    var powerName = JSON.parse(data.toString()).powerName;
    opDao.queryPowerDescByPowerName(powerName, function (result) {
      response.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
      response.write(JSON.stringify(result));
      response.end();
    })
  })
}

path.set("/api/queryPowerDescByPowerName", queryPowerDescByPowerName);

function pagingCount(request, response) {
  request.on("data", data => {
    var count = JSON.parse(data.toString()).count;
    opDao.pagingCount(count, function (result) {
      response.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
      response.write(JSON.stringify(result));
      response.end();
    })
  });
}

path.set("/api/pagingCount", pagingCount);

function paging(request, response) {
  request.on("data", data => {
    var page = JSON.parse(data.toString()).page;
    var count = JSON.parse(data.toString()).count;
    opDao.paging(page, count, function (result) {
      response.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
      response.write(JSON.stringify(result));
      response.end();
    })
  })
}

path.set("/api/paging", paging);

function queryPiratesPower(request, response) {
    opDao.queryPiratesPower(function (result) {
      response.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
      response.write(JSON.stringify(result));
      response.end();
    })
}

path.set("/api/queryPiratesPower", queryPiratesPower);

function queryAllTrip(request, response) {
  opDao.queryAllTrip(function (result) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
    response.write(JSON.stringify(result));
    response.end();
  })
}

path.set("/api/queryAllTrip", queryAllTrip);

function queryPersonByName(request, response) {
  request.on("data", data => {
    var arr = data.toString();
    opDao.queryPersonByName(arr,function (result) {
      response.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
      response.write(JSON.stringify(result));
      response.end();
    })
  })
}

path.set("/api/queryPersonByName", queryPersonByName);

function queryAllCartoon(request, response) {
  opDao.queryAllCartoon(function (result) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
    response.write(JSON.stringify(result));
    response.end();
  })
}

path.set("/api/queryAllCartoon", queryAllCartoon);

function queryAllAnimation(request, response) {
  opDao.queryAllAnimation(function (result) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
    response.write(JSON.stringify(result));
    response.end();
  })
}

path.set("/api/queryAllAnimation", queryAllAnimation);

module.exports.path = path;
