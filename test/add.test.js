require ('babel-polyfill');
var fetch = require ('node-fetch');
var add = require('../src/add.js');
var expect = require('chai').expect;

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('任何数加0应该等于自身', function() {
    expect(add(1, 0)).to.be.equal(1);
  });

  it('测试应该5000毫秒后结束', function(done) {
    var x = true;
    var f = function(resolve) {
      x = false;
      console.log('done');
      resolve(expect(x).to.be.not.ok);
      done(); // 通知Mocha测试结束
    };

    return new Promise(function (resolve,reject) {
      setTimeout(f(resolve), 4000);
    })
  });

  it('异步请求应该返回一个对象', function (done) {
    return fetch("https://api.github.com")
        .then(function (res) {
          return res.json()
        }).then(function (json) {
          expect(json).to.be.an('object');
          done();
        })
  })
});
