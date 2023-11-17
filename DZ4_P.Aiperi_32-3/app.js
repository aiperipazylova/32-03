// 1)

var array = ["name", "John", "lastname", "Black", "age", "23"]
var resultObject = {}

for (var i = 0; i < array.length; i += 2) {
    var key = array[i]
    var value = array[i + 1]
    resultObject[key] = value
}

console.log(resultObject)


// 2)

var average = (array) => {
    var sum = 0
    var count = array.length
    for(var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    var average = sum / count
    return console.log(average)
  }
  average([1,2,3,4,5,6,7,8,9,10,11])


// 3)

function getDataType(value) {
    var type = typeof value
    console.log(type)
}


// 4)

document.addEventListener('DOMContentLoaded', () => {
    var counterInput = document.getElementById('counterInput') 
    var plusButton = document.getElementById('plusButton')
    var minusButton = document.getElementById('minusButton')

    plusButton.addEventListener('click', () => {
        var currentValue = parseInt(counterInput.value, 10)
        counterInput.value = currentValue + 1
    })

    minusButton.addEventListener('click', () => {
        var currentValue = parseInt(counterInput.value, 10)
        counterInput.value = currentValue - 1
    })
})