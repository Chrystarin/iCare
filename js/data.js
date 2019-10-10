var title = [];
var author = [];
var date = [];
var content = [];
var BG = []
// Insert the value to the array
function insert(Title, Author, Date, Content,Backgound){
    title[title.length] = Title;
    author[author.length] = Author;
    date[date.length] = Date;
    content[content.length] = Content;
    BG[BG.length] = Backgound;
}

// Example of data insertion
var Blog1 = {
    "Title": "How I love my wife",
    "Author": "Harold James Castillo",
    "Date": "06/01/19",
    "Content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, alias?",
    "BG" : "red"
};
insert(Blog1["Title"],Blog1["Author"],Blog1["Date"],Blog1["Content"],Blog1["BG"]);

var Blog2 = {
    "Title": "You are my princess ",
    "Author": "Harold James Castillo",
    "Date": "06/02/19",
    "Content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolor sunt? Dolore odio quisquam eligendi repellat illo? Culpa aspernatur reprehenderit iusto tempore beatae unde nihil, quia autem ea corrupti ex, voluptatum accusantium corporis a. Quas veritatis ex sit, inventore, recusandae soluta accusantium vitae exercitationem quisquam, magni minima nemo quod dolore?",
    "BG" : "blue"
};
insert(Blog2["Title"],Blog2["Author"],Blog2["Date"],Blog2["Content"],Blog2["BG"]);

var Blog3 = {
    "Title": "Marry me Moshiee ",
    "Author": "Harold James Castillo",
    "Date": "06/03/19",
    "Content": "Lr sit amet consectetur adipisicing elit. Nam, dolor sunt? Dolore odio quisquam eligendi repellat illo? Culpa aspernatur reprehenderit iusto tempore beatae unde nihil, quia autem ea corrupti ex, voluptatum accusantium corporis a. Quas veritatis ex sit, inventore, recusandae soluta accusantium vitae exercitationem quisquam, magni minima nemo quod dolore?",
    "BG" : "green"
};
insert(Blog3["Title"],Blog3["Author"],Blog3["Date"],Blog3["Content"],Blog3["BG"]);


// function and array for the Facts Section
var facts = [];
var img = [];
function insertFacts(Facts,Image){
    facts[facts.length] = Facts;
    img[img.length] = Image;
}
// Insertion of data
var Fact1 = {
    "Fact" : "Will",
    "image" : ""
}

insertFacts(Fact1["Fact"],Fact1["image"]);
var Fact2 = {
    "Fact" : "You",
    "image" : ""
}
insertFacts(Fact2["Fact"],Fact2["image"]);

var Fact3 = {
    "Fact" : "Marry",
    "image" : ""
}
insertFacts(Fact3["Fact"],Fact3["image"]);

var Fact4 = {
    "Fact" : "Me?",
    "image" : ""
}
insertFacts(Fact4["Fact"],Fact4["image"]);






