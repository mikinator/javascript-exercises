const getTheTitles = function(books) {
    const arr = [];
    let i = 0;
    for (let book of books) {
      arr[i] = book.title;
      i++;
    }
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
