/**
 * This program is meant to parse a JSON file and return the title of books
 * @param {findTitle} - Array that will be parsed
 * @return {bookTitle} - book.title for each element in the array
 */
const getTheTitles = function(findTitle) {
    const bookTitle = [];
    
    for (book of findTitle) {
        bookTitle.push(book.title);
    }
    return bookTitle;
    
};

// Do not edit below this line
module.exports = getTheTitles;
