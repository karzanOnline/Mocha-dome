
var add = require('./add.js')
var expect = require('chai').expect  // 断言

describe('加法函数的测试', function () {
  it('1 加 1 应该等于 2', function () {
    expect(add(1, 1)).to.be.equal(2)
  })
})

describe('相等', function () {
  it('5+4', function () {
    expect(4+5).to.be.equal(9)
  })
});

describe('not equal', function () {
  it('add not equal', function () {
    expect(4+5).to.not.be.equal(10)
  })
});
var foo = {a:'123'};
describe('object equal', function () {
  it('object', function () {
    expect(foo).to.be.deep.equal({a:'123'})
  })
});

describe('test boolean', function () {
  it('boolean', function () {
    expect('everthing').to.be.ok;
  })
});

describe('test false', function () {
  it('false test', function () {
    expect(0).to.not.be.ok
  })
});

describe('empty', function () {
  it('test empty', function () {
    expect([]).to.be.empty;
  });
});

describe('contain', function () {
  it('test contain', function () {
    expect('caozheng').to.contain('cao')
  })
});

describe('include', function () {
  it('test include' , function () {
    expect([1,2,3,4]).to.include(2)
  })
});

describe('include key', function () {
  it('test include key', function () {
    expect({ foo: 'bar', hello: 'universe' }).to.include.key('foo')
  })
});

describe('String', function () {
  it('test typeof string', function () {
    expect('caozheng').to.be.a('string')
  })
});

describe('Object', function () {
  it('test object', function () {
    expect({bar : 123}).to.be.an('Object')
  })
});


