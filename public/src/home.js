function totalBooksCount(books) {
  return books.length
}

function totalAccountsCount(accounts) {
  return accounts.length
}

function booksBorrowedCount(books) {
  const arr = []
  for (book in books) {
    const falseResult = books[book].borrows.filter( ({ returned }) => returned === false );
    if (falseResult.length !== 0){
       arr.push(falseResult)
    }
  }
    
  return arr.length
};

function sortedFn(arr) {
  return arr.slice(0, 5)
}

function getMostCommonGenres(books) {
  let genreCount = {}
  for(let i = 0; i < books.length; i++) {
    if(books[i].genre in genreCount) {
      genreCount[books[i].genre] ++
    }  else {
      genreCount[books[i].genre] = 1
    }
  }

  const genreArr = []
  for(let key in genreCount) {
    let currGenre = {
      name: key, count: genreCount[key]
    }
    genreArr.push(currGenre)
  }

  const sorted = genreArr.sort((genreA, genreB) => {
    return genreB.count - genreA.count
  })  

  return sortedFn(sorted)
  
}

function getMostPopularBooks(books) {
  let mostBorrowed = []

  for(let i = 0; i < books.length; i++) {
    mostBorrowed.push({
      name: books[i].title,
      count: books[i].borrows.length
    })
  }
  const sorted = mostBorrowed.sort((countA, countB) => countB.count - countA.count)

  return sortedFn(sorted)
}

function getMostPopularAuthors(books, authors) {
  let mostBorrowed = books.map(book => ({"name": book.authorId, "count": book.borrows.length}))

  for(let bookIndex = 0; bookIndex < mostBorrowed.length; bookIndex++) {
    for(let authorIndex = 0; authorIndex < authors.length; authorIndex++) {
      if(mostBorrowed[bookIndex].name === authors[authorIndex].id) {
        mostBorrowed[bookIndex].name = (authors[authorIndex].name.first +' '+ authors[authorIndex].name.last) ///try reduce here[didn't work]
      }
    }
  }
  const sorted = mostBorrowed.sort((countA, countB) => countB.count - countA.count)

  return sortedFn(sorted)
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
}