
'use strict'
// Rest操作符一般用在函数参数的声明中，而Spread用在函数的调用中。


// function func(...args) {
//   console.log(args)
//   console.log(Object.prototype.toString.call(args))
// }
// func(1, 2, 3, 4)


function func(x, ...y) {
  console.log(x)
  console.log(y)
}
func('a', 'b', 'c')
func('a')
func()
