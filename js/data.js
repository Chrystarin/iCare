var title = [];
var author = [];
var date = [];
var content = [];
var BG = [];
var id = [];
// Insert the value to the array
function insert(Title, Author, Date, Content,Backgound,ID){
    title[title.length] = Title;
    author[author.length] = Author;
    date[date.length] = Date;
    content[content.length] = Content;
    BG[BG.length] = Backgound;
    id[id.length] = ID;
}

// Example of data insertion
var Blog1 = {
    "Title": "The Hourglass of Extinction ",
    "Author": "Dianne Chrystalin M. Brandez",
    "Date": "10/05/19",
    "Content": "For thousands of years all kinds of species have walked the face of this earth. Out of all the species that has lived and strived on earth since life began, around 99% has already gone extinct. As of today, earth has gone through five major extinctions, and based on studies and research, we are currently living through the sixth. What makes it worse is that our current rate of extinction is brought about by our own human hands. Based on research, this current extinction that we are facing is much worse than all previous ones due to the much faster rate of species decline.",
    "BG" : "url(\"image/forest.jpg\")",
    "ID" : "Article1"
};
insert(Blog1["Title"],Blog1["Author"],Blog1["Date"],Blog1["Content"],Blog1["BG"],Blog1["ID"]);

var Blog2 = {
    "Title": "You are my princess ",
    "Author": "Harold James Castillo",
    "Date": "06/02/19",
    "Content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolor sunt? Dolore odio quisquam eligendi repellat illo? Culpa aspernatur reprehenderit iusto tempore beatae unde nihil, quia autem ea corrupti ex, voluptatum accusantium corporis a. Quas veritatis ex sit, inventore, recusandae soluta accusantium vitae exercitationem quisquam, magni minima nemo quod dolore?",
    "BG" : "blue",
    "ID" : "Article2"
};
insert(Blog2["Title"],Blog2["Author"],Blog2["Date"],Blog2["Content"],Blog2["BG"],Blog2["ID"]);

var Blog3 = {
    "Title": "Marry me Moshiee ",
    "Author": "Harold James Castillo",
    "Date": "06/03/19",
    "Content": "Lr sit amet consectetur adipisicing elit. Nam, dolor sunt? Dolore odio quisquam eligendi repellat illo? Culpa aspernatur reprehenderit iusto tempore beatae unde nihil, quia autem ea corrupti ex, voluptatum accusantium corporis a. Quas veritatis ex sit, inventore, recusandae soluta accusantium vitae exercitationem quisquam, magni minima nemo quod dolore?",
    "BG" : "green",
    "ID" : "Article3"
};
insert(Blog3["Title"],Blog3["Author"],Blog3["Date"],Blog3["Content"],Blog3["BG"],Blog3["ID"]);


// function and array for the Facts Section
var facts = [];
var img = [];
function insertFacts(Facts,Image){
    facts[facts.length] = Facts;
    img[img.length] = Image;
}
// Insertion of data
var Fact1 = {
    "Fact" : "40% of animals living on land has fallen by 40% since 1970.",
    "image" : ""
}

insertFacts(Fact1["Fact"],Fact1["image"]);
var Fact2 = {
    "Fact" : "More than 650,000 marine mammals are caught or seriously injured by fishing gear annually.",
    "image" : ""
}
insertFacts(Fact2["Fact"],Fact2["image"]);

var Fact3 = {
    "Fact" : "Close to 60% of the world’s 504 primate species are threatened with extinction.",
    "image" : ""
}
insertFacts(Fact3["Fact"],Fact3["image"]);

var Fact4 = {
    "Fact" : "75% of all dolphins have been affected through by catch in global fishing.",
    "image" : ""
}
insertFacts(Fact4["Fact"],Fact4["image"]);

var Fact5 = {
    "Fact" : "65% of whale species have been affected through bycatch in global fishing ",
    "image" : ""
}
insertFacts(Fact5["Fact"],Fact5["image"]);

var Fact6 = {
    "Fact" : "40% of the world’s bird species are in decline.",
    "image" : ""
}
insertFacts(Fact6["Fact"],Fact6["image"]);

var Fact7 = {
    "Fact" : "25% of the world’s coral reefs have already been damaged beyond repair.",
    "image" : ""
}
insertFacts(Fact7["Fact"],Fact7["image"]);

var Fact8 = {
    "Fact" : "Insect population have declined by 75% in some places in the world. ",
    "image" : ""
}
insertFacts(Fact8["Fact"],Fact8["image"]);




