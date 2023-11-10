//1) Сезоны года

var month = prompt('enter month').toLowerCase()
switch(month){
    case 'декабрь': 
    case 'январь': 
    case 'февраль':
        console.log('зима');
        break
    case 'март':
    case 'апрель':
    case 'май':
        console.log('весна');
        break
    case 'июнь':
    case 'июль':
    case 'август':
        console.log('лето');
        break
    case 'сентябрь':
    case 'октябрь':
    case 'ноябрь':
        console.log('осень');
        break
    default:
      console.log('Неверные данные');
}

//2) Массив-2

var array = [[[[[[[[[[[2]]]]]]]]]]]
console.log(array[0][0][0][0][0][0][0][0][0][0][0])


//3) Калькулятор
var num1 = Number(prompt('num1'))
var symbols = prompt('+,-,/,*')
var num2 = Number(prompt('num2'))

switch(symbols){
    case '+':
        console.log(num1 + num2)
        break
    case '-':
        console.log(num1 - num2)
        break
    case '/':
        console.log(num1 / num2)
        break
    case '*':
        console.log(num1 * num2)
        break
    default:
        console.log('Неверные данные')

}