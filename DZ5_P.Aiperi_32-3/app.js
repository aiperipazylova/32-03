// Задание-1

var arrayNum = [23, 23, 34, 4, 5, 45, 56, 67, 55, 55, 44, 34, 33, 67, 66, 6, 6, 8, 7, 9]

function removeDuplicates(arrayNum) {
  let result = []
  
  for (var i = 0; i < arrayNum.length; i++) {
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