class Foo {
  hello() {
    console.log('babel-node test')
  }

  classAllowFunc = () => {
    console.log('babel-node class allow func test')
  }
}

const f = new Foo()
f.hello()
f.classAllowFunc()