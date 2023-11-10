/* var day = prompt('enter day -')
var month = prompt('enter month -').toLowerCase()

if(day >= 21 && month === 'март' && day <= 30 || day <= 20 && month === 'апрель' && day >= 1){
    alert('Ваш знак зодиака - Овен')
}else{
  alert('Введите корректные данные')
} */

var num1 = Number(prompt('num1'))
var num2 = Number(prompt('num2'))
console.log(typeof num1 + num2)

//4) underfined - неопределенный
let name 
console.log(typeof name)

//5) null
var name2 = null
console.log(typeof name2)

//NaN -not a number
var d='text' / 5
console.log(typeof d)


//switch..case
var color = prompt('enter color').toLowerCase()
switch(color){
    case 'red':
        console.log('stop')
        break
    case 'green':
        console.log('go')
        break
    case 'yellow':
        console.log('ready')
        break
    default:
        console.log('Доступны только три цвета: красный, желтый и зеленый')
}

// array - массивы
var array = [1, 2, 3, 4, 44, 5, 6, 'text', null, undefined, NaN, [1, 2, 2]]
console.log(array)

//индекс (персональный номер каждого элемента)
console.log(array[3])
console.log(array.length - 1)
console.log(array[7][1])
console.log(array[11][1])



//методы массива
var fruits = ['apple', 'banana', 'cherry']
//1 - push
fruits.push('melon', 'pineapple')
console.log(fruits)
//2 - concat
var concatFruits = ['pineapple']
console.log(fruits.concat(concatFruits))
console.log(fruits)
//3 - unshift
var unshiftFruits = fruits.unshift('orange')
console.log(fruits)
//4 - pop
var popArray = fruits.pop()
console.log(fruits)
console.log(popArray)
//5 - shift
var shiftArray = fruits.shift()
console.log(fruits)
console.log(shiftArray)
