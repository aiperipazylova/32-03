console.log('Регистрация/Авторизация')

alert('Регистрация')
var value1 = prompt('Логин')
var value2 = prompt('Пароль')
alert('Успешно')

alert('Авторизация')
var login = prompt('Логин')
var password = prompt('Пароль')

if(value1 === login && value2 === password){
    alert('Успешный вход')
}else{
    alert('Ввели неправильный логин или пароль, повторите попытку')
}
        

var word1 = prompt('слово 1')  
var word2 = prompt('слово 2')  

if(word1.length > word2.length){
    alert('в значении word1 больше символов, чем в значении word2')
}else if(word1.length < word2.length){
    alert('в значении word2 больше символов, чем в значении word1')
}else if(word1.length === word2.length){
    alert('в значениях word1 и word2 одинаковое количество символов')
}else{
    alert('недоступное сравнение')
}

