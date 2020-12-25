function totalBooksCount(books) {
  return books.length;
};

function totalAccountsCount(accounts) {
  return accounts.length;
};

function booksBorrowedCount(books) {
  const arr = [];
  for (book in books) {
    const falseResult = books[book].borrows.filter( ({ returned }) => returned === false );
    if (falseResult.length !== 0){
       arr.push(falseResult);
    }
  }
    
  return arr.length;
};

function getMostCommonGenres(books) {
  let genreCount = {};
  for(let i = 0; i < books.length; i++) {
    if(books[i].genre in genreCount) {
      genreCount[books[i].genre] ++
    }  else {
      genreCount[books[i].genre] = 1
    }
  }

  const genreArr = [];
  for(let key in genreCount) {
    let currGenre = {
      name: key, count: genreCount[key]
    };
    genreArr.push(currGenre)
  }

  const topFive = genreArr.sort((genreA, genreB) => {
    return genreB.count - genreA.count;
  })  


  const result = [];
  if(topFive.length > 5){
    for(let i = 0; i < 5; i++){
    result.push(topFive[i])
    } 
    return result;
  } else {return topFive}
};

function getMostPopularBooks(books) {
  let mostBorrowed = [];
  for(let i = 0; i < books.length; i++) {
    mostBorrowed.push({
      name: books[i].title,
      count: books[i].borrows.length
    })
  };
  const sorted = mostBorrowed.sort((countA, countB) => countB.count - countA.count)

  if(sorted.length > 5){
    const result = [];
    for(let i = 0; i < 5; i++){
      result.push(sorted[i])
      } 
      return result;
    } else {return sorted};
}

function getMostPopularAuthors(books, authors) {
  let mostBorrowed = [];
  
  for(let i = 0; i < books.length; i++) {
    mostBorrowed.push({
      name: books[i].authorId,
      count: books[i].borrows.length
    })
  };
  for(let i = 0; i < mostBorrowed.length; i++) {
    for(let j = 0; j < authors.length; j++) {
      if(mostBorrowed[i].name === authors[j].id) {
        mostBorrowed[i].name = (authors[j].name.first +' '+ authors[j].name.last)
      }
    }
  }
  const sorted = mostBorrowed.sort((countA, countB) => countB.count - countA.count);

  const result = [];
  if(sorted.length > 5){
    for(let i = 0; i < 5; i++){
      result.push(sorted[i])
    } 
    return result;
  } else {return sorted};
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
