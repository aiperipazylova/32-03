// Задание-1

let arrayNum = [23, 23, 34, 4, 5, 45, 56, 67, 55, 55, 44, 34, 33, 67, 66, 6, 6, 8, 7, 9]

function removeDuplicates(arrayNum) {
  let result = []
  
  for (let i = 0; i < arrayNum.length; i++) {
    if (!result.includes(arrayNum[i])) {
      result.push(arrayNum[i])
    }
  }
  
  return result
}

let uniqueArray = removeDuplicates(arrayNum)
console.log(uniqueArray)


// Задание-2

const books = ['Кукла', 'Буратино', 'Пальма']

const booksForFilter = (bookArray) => {
  
  const booksWithU = bookArray.filter(book => book.includes('у'))
  console.log(booksWithU)

  const booksWithoutU = bookArray.filter(book => !book.includes('у'))
  console.log(booksWithoutU)

  const textBooksWithU = booksWithU.map(book => `${book} - книга с буквой 'у'`)
  console.log(textBooksWithU)

  const textBooksWithoutU = booksWithoutU.map(book => book)
  console.log(textBooksWithoutU)
  
}

booksForFilter(books)


//Задание-3

let users = [
  { name: 'Aiperi', age: 26 },
  { name: 'Ularbek', age: 27 },
  { name: 'Nurayim', age: 21 },
  { name: 'Dastan', age: 25 },
  { name: 'Askar', age: 28 },
  { name: 'Zhanat', age: 22 },
  { name: 'Diana', age: 32 },
  { name: 'Daut', age: 29 }
]

let youngestUser = users[0]
let oldestUser = users[0]

for (let i = 1; i < users.length; i++) {
  if (users[i].age < youngestUser.age) {
    youngestUser = users[i]
  }

  if (users[i].age > oldestUser.age) {
    oldestUser = users[i]
  }
}

let ageDifference = oldestUser.age - youngestUser.age

console.log(`Пользователь ${oldestUser.name} старше ${youngestUser.name} на ${ageDifference} лет.`)