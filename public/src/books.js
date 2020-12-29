function findAuthorById(authors, id) {
  const result = authors.find(author => {
    if(author.id === id) {
      return author
    }
  })
  return result
  // for(let i = 0; i < authors.length; i++) {
  //   if(authors[i].id === id) {
  //     return authors[i]
  //   }
  // }
}

function findBookById(books, id) {
  const result = books.find(book => {
    if(book.id === id) {
      return book
    }
  })
  return result
  // for(let i = 0; i < books.length; i++) {
  //   if(books[i].id === id){
  //     return books[i];
  //   };
  // };
}

function partitionBooksByBorrowedStatus(books) {

  let result = []
  const falseArr = []
  const trueArr = []

  books.forEach(item => {
    if(item.borrows[0].returned) {
      trueArr.push(item)} else {
        falseArr.push(item)
      }
  })

  // for(let i = 0; i < books.length; i++) {
  //  if(books[i].borrows[0].returned){
  //   trueArr.push(books[i])
  //   }
  //   else{
  //       falseArr.push(books[i])
  //   }
  // }

  result.push(falseArr)
  result.push(trueArr)

  return result
}

function getBorrowersForBook(book, accounts) {
  const filteredBooks = []

  for (let i=0; i < book.borrows.length; i++){
    for(let j=0; j < accounts.length; j++){
      if (book.borrows[i].id === accounts[j].id && i < 10){
        accounts[j].returned = book.borrows[i].returned
        filteredBooks.push(accounts[j])
      }
    }
  }

  return filteredBooks
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
}