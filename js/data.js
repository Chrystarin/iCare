var title = [];
var author = [];
var date = [];
var content = [];
// Insert the value to the array
function insert(Title, Author, Date, Content){
    title[title.length] = Title;
    author[author.length] = Author;
    date[date.length] = Date;
    content[content.length] = Content;
}

// Example of data insertion
var Blog1 = {
    "Title": "How I love my wife",
    "Author": "Harold James Castillo",
    "Date": "06/01/19",
    "Content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, alias?"
};
insert(Blog1["Title"],Blog1["Author"],Blog1["Date"],Blog1["Content"]);


