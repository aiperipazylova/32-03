console.log('Hello world');
// строчный
/*
блочный
*/

// переменные
var name = 'Aiperi';
console.log(name)
// camelcase
var nameAndSurname = 'Aiperi Pazylova';
console.log(' Мое ФИО-' + nameAndSurname) //конкатенация

//Типы данных
//1) String - текст
var course = 'Geeks'
var count = 23.7;
console.log(typeof count)
console.log(course.toUpperCase())
console.log(course.length)
console.log(course.repeat(3))


//2) Number 
var number1 = 23
var number2 = 4
console.log(number1 / number2)
console.log(number1 * number2)
console.log(number1 ** number2)
console.log(number1 % number2)
console.log(typeof number1.toString())
console.log('Средний возвраст группы 32-03 ->', (18 + 16 + 18 + 16 + 17 + 17 + 14 + 14 + 17 + 17 + 16 + 16 + 18 + 25 + 17 + 19) / 16)

//3) boolean - true, false
// операторы сравнения >, <, >=, <=, ===, ==, !==, !=
var num1 = 4
var num2 = '4'
console.log(num1 > num2)
console.log(num1 < num2)
console.log(num1 >= num2)
console.log(num1 == num2) //нестрогое равенство
console.log(num1 === num2) //строгое равенство
console.log(num1 !== num2)

// условные конструкции if, else..if, else
var value1 = prompt('value 1')  //3
var value2 = prompt('value 2')  //5

if(value1 > value2){
    alert('значение 1 больше, чем значение 2')
}else if(value1 < value2){
    alert('значение 2 больше, чем значение 1')
}else{
    alert('недоступное сравнение')
}



// лоогические операторы &&(и), ||(или)


