# Mocha-dome
##Mocha

* 需求


----------


因为之前的项目没有涉及到测试这一块,没有完整的测试体系。最近看了阮一峰老师的[测试框架 Mocha 实例教程][1]
来总结一下。


* 小试牛刀


----------


具体的教程在阮一峰老师的博客上有介绍，这里就不再赘述。
以自己的github上的小工具klocation.js做了个示例：

```
/**
 * Created by caozheng on 2016/11/28.
 */
require('./../KLoction');
var expect = require('chai').expect;


(function (win) {
    var testUrl = "https://github.com/karzanOnline?a=1";
    describe('constructor', function () {
        var testResult =  KLocation(testUrl);

        describe('#output', function () {
            it("return value is an object", function () {
                expect(testResult).to.be.an("object")
            });
            it("property url is string", function () {
                expect(testResult.url).to.be.a("string")
            });
            it("property port is number", function () {
                expect(testResult.port).to.be.a("number")
            });
            it("property host is string", function () {
                expect(testResult.host).to.be.a("string")
            });
            it("property protocol is string", function () {
                expect(testResult.protocol).to.be.a("string")
            });
            it("property pathname is string", function () {
                expect(testResult.pathname).to.be.a("string")
            });
        });

        describe("#method", function () {
            it("getParam", function () {
                expect(testResult.getParam()).to.be.deep.equal({a : '1'})
            });
            it("getProtocol", function () {
                expect(testResult.getProtocol()).to.be.equal("https:")
            });
            it("getHost", function () {
                expect(testResult.getHost()).to.be.equal("github.com")
            });
            it("getPort", function () {
                expect(testResult.getPort()).to.be.empty;
            });
            it("getPathname", function () {
                expect(testResult.getPathname()).to.be.equal("/karzanOnline")
            })

        })

    })

})(this);
```
在github上还要去https://travis-ci.org注册一下,然后通过配置.travis.yml文件(确定使用的语言和node的版本)，如果测试通过就会生成一个图标
[![Build Status](https://travis-ci.org/karzanOnline/url-location.svg?branch=master)](https://travis-ci.org/karzanOnline/url-location)
然后把url放到README.md就可以了。
* expect(经常用到的方法)


----------


```
// 相等或不相等
expect(4 + 5).to.be.equal(9);
expect(4 + 5).to.be.not.equal(10);
expect(foo).to.be.deep.equal({ bar: 'baz' });

// 布尔值为true
expect('everthing').to.be.ok;
expect(false).to.not.be.ok;

// typeof
expect('test').to.be.a('string');
expect({ foo: 'bar' }).to.be.an('object');
expect(foo).to.be.an.instanceof(Foo);

// include
expect([1,2,3]).to.include(2);
expect('foobar').to.contain('foo');
expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

// empty
expect([]).to.be.empty;
expect('').to.be.empty;
expect({}).to.be.empty;

// match
expect('foobar').to.match(/^foo/);
```
* mochawesome


----------


这里阮一峰老师给的code是(三个步骤改进一下)

```
$ npm install --save-dev mochawesome
$ ../node_modules/.bin/mocha --reporter mochawesome
```
首先安装mochawesome必须！但是第二步可以通过package.json来设置，由于node_modules/.bin/目录会在运行时加入系统的PATH变量，因此在运行npm时，就可以不带路径，直接通过命令来调用这些脚本。

 1. 根目录创建test文件(mocha.opts配置项加一下)
 2. 放入测试的脚本
 3. package.json配置scripts

```
"scripts": {
    "test": "mocha --reporter mochawesome"
  },
```
将会在同级目录生成mochawesome-reports，访问html即可。
* 异步测试


----------


```
var fetch = require ('node-fetch');
var expect = require('chai').expect;

it('异步请求应该返回一个对象', function (done) {
    return fetch("https://api.github.com")
        .then(function (res) {
          return res.json()
        }).then(function (json) {
          expect(json).to.be.an('object');
          done();
        })
    })
```

* 测试用例管理


----------


it.only :如果测试代码中有only，那么只有带有only方法的测试用例会运行。

it.skip :与only相反

  [1]: http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html
