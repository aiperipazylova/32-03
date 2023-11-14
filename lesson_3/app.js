// object

var human = {
    name: 'Aiperi',
    surname: 'Pazylova',
    id: '2',
    isMarried: true,
    address: {
            city: 'Warsaw',
            street: 'Solec',
            number: 'null'
    }
}

console.log(human.name, human.surname)
console.log(human.address.street)

//методы object

human.course = 'Geeks'  //добавление
delete human.id         //удаление
human ['number'] = 103  //редактирование
console.log(human)

console.log(Object.keys(human))          // только ключи
console.log(Object.values(human))        // только значение
console.log(Object.entries(human))       // и ключи и значение
console.log(human.hasOwnProperty('id'))

//циклы - повторяющиеся действия
//while  - не так часто используется в fronte   
var i = 0
while(i <= 10){
    console.log(i)
    i++                //влючатель
}

//переменная короткого обновлеия

// i = i + 1
// i = + 1
// i++

// var fruits = ['banana', 'orange', 'pineapple', 'raspberry']
// var fruitsForFound = 'pineapple'
// var i = 0
// while(i < fruits.length){
//     if(fruits[i] === fruitsForFound){
//         console.log(`Fruits found on index ${i}`)
//     }else{
//         console.error('error')
//     }
//     i++
// }


// //for
// for(var i = 0; i <= 10; i++){
//   console.log(i)
// }

var names = ['Anna', 'Jack', 'alice', 'Tim']
var arrayNames = []
for(var i = 0; i < names.length; i++){
  if(names[i][0] === 'a' || names[i][0] === 'A'){
    console.log(arrayNames[i])
  }
}

var nums = [12, 32, 33, 34, 1, 5, 7, 9, 8, 67, 78, 90, 10]
for(var i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0){
      console.log(nums[i])
    }
}

// var nums = [12, 32, 33, 34, 1, 5, 7, 9, 8, 67, 78, 90, 10]
// for(var i = 0; i < nums.length; i++){
//     if(nums[i] % 2 !== 0){
//       console.log(nums[i])
//     }
// }

// //for..of - array
// var numbers = [1,2,3]
// for(var num of numbers){
//     console.log(num)
// }

// //for..in - object

// for(var key in human){
//     console.log(key)
// }

// function
// 1 function - declaration
function sayHello(){
    console.log('hello')
}
sayHello()

function printDelimiter(){
    console.log('-'.repeat(70))
}
printDelimiter()

// 2 function - expression


var getMaxNum = function (num1, num2){
    if(num1 > num2){
        console.log(num1)
    }else{
        console.log(num2)
    }
      console.log(num1 > num2 ? num1 : num2)  //тернарный синтаксис
}
getMaxNum(8, 6)

//тернарный оператор=switch..case=условные конструкции if..else if