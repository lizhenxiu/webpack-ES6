// Array Destructuring 分析一个东西的解构

function breakdast() {
  // return ['🍎', '🍌', '🍍']
  return { t1: '🍎', t2: '🍌', t3: '🍍' }
}

// ES5
// var tmp = breakdast()
// var t1 = tmp[0], t2 = tmp[1], t3 = tmp[2]

// ES6 
// let [t1, t2, t3] = breakdast() //解构对象

// return { t1: '🍎', t2: '🍌', t3: '🍍' } //解构数组
let { t1: t1, t2: t2, t3: t3 } = breakdast()
console.log(t1, t2, t3)
