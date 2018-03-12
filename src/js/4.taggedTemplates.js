// Tagged Templates 带标签的字符串模板
'use strict'
let t1 = '🍎',
  t2 = '🍉'

let breakfast = eat`今天的早餐水果是 ${t1} 午餐水果是 ${t2}`

function eat(string, ...value) {
    // console.log(string)
    // console.log(value)
  let result = ''
  for (let i = 0;i < value.length;i++) {
    result += string[i]
    result += value[i]
  }
  result += string[string.length-1]
  return result
}
console.log(breakfast)

// 判断字符串里是否包含其他字符串 startWith()和 endWith() includes()

console.log(breakfast.startsWith('!'))
console.log(breakfast.endsWith('!'))
console.log(breakfast.includes('!'))
