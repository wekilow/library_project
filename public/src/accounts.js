function findAccountById(accounts, id) {
  const accountsFilter = accounts.filter(account => {
    if(id === account.id) {
      return account
    }
  });
  return accountsFilter[0]
};

function sortAccountsByLastName(accounts) {
  for(keys in accounts){
    let result = accounts.sort((accntA, accntB) => accntA.name.last > accntB.name.last ? 1 : -1)
  }
  return accounts
}

function numberOfBorrows(account, books) {
  let result = books.reduce((acc, book) => {
    for(let i = 0; i < book.borrows.length; i++) {
      if(book.borrows[i].id === account.id) {
      acc++
    }}
    return acc
  },0)
  return result

  // let counter = 0
  // let accountId = account.id //5f446f2e2f35653fa80bf490

  // for(let i = 0; i <  books.length; i++) {  //This goes through every book
  //   for(let j = 0; j < books[i].borrows.length; j++) {
  //     if(accountId===books[i].borrows[j].id){
  //       counter+=1
  //     }
  //   }
  // }
  // return counter
}

function getAuthorByBook(authors, filteredBooksArr) {
  filteredBooksArr.forEach(item => {
    const author = authors.find(author => {
      if(author.id === item.authorId) {
        return author
      }
    })
    item.author = author
  })
}  

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id
  const filteredBooks = []
  
  for(let i = 0; i < books.length; i++) {
    for(let j = 0; j < books[i].borrows.length; j++) {
      if(accountId === books[i].borrows[j].id && books[i].borrows[j].returned === false) {
        filteredBooks.push(books[i])
      }
    }
  }

  getAuthorByBook(authors, filteredBooks)

  return filteredBooks
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
}