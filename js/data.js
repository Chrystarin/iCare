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
    "BG" : "url(\"image/Blog/article1.jpg\")",
    "ID" : "Article1"
};
insert(Blog1["Title"],Blog1["Author"],Blog1["Date"],Blog1["Content"],Blog1["BG"],Blog1["ID"]);

var Blog2 = {
    "Title": "The Little Things Count, Be a Biodiversity Hero! ",
    "Author": "Harold James Castillo",
    "Date": "10/03/19",
    "Content": "When we talk about saving the earth’s biodiversity, we imagine plans of grandeur like worldwide rallies to stop poachers from hunting animals and going on secret missions to shut down toxic factories that are harming the environment. We are here to tell you that you do not have to create worldwide-spanning organizations, or even be a top-class secret agent to save the world. As a matter of fact, you do not have to be anybody else. Just by being the ordinary you, can help us on the mission to finally save our biodiversity. There is a saying that the little things are what matters the most, yet it takes a single person to achieve big things, and to prove this saying, we follow these simple practices. ",
    "BG" : "url(\"image/Blog/article2.jpg\")",
    "ID" : "Article2"
};
insert(Blog2["Title"],Blog2["Author"],Blog2["Date"],Blog2["Content"],Blog2["BG"],Blog2["ID"]);

var Blog3 = {
    "Title": "The Disease Worse than the Dark Plague ",
    "Author": "Dianne Chrystalin Brandez",
    "Date": "09/28/19",
    "Content": "The Dark Plague was known to be the deadliest and darkest times when people were struck by an incurable disease that led to the death of thousands. Little did we know, there is a plague much worse than the dark plague, and that is the greed and selfishness living deep within the human heart. This disease did not only affect humans, but it has led to the destruction of many. Humans continue to feed, consume, destroy, more than what they need. We have become like a disease to our home called mother earth. ",
    "BG" : "url(\"image/Blog/article3.jpeg\")",
    "ID" : "Article3"
};
insert(Blog3["Title"],Blog3["Author"],Blog3["Date"],Blog3["Content"],Blog3["BG"],Blog3["ID"]);

var Blog4 = {
    "Title": "A City of Green, A Dream or Reality? ",
    "Author": "Dianne Chrystalin Brandez",
    "Date": "9/22/19",
    "Content": "How nice would it be if humans and nature can co-exist peacefully, won't that be just a bliss? Unfortunately, due to the overpopulation of the human species, a lot of lands and forests are taken down to build homes for thousands of people. Because of this, animals have lost their own homes and either wandered off to the city and get captured by humans or die out of starvation. It's sad to think that for humans to have homes we must steal the homes of other species and animals. This is one of the major threats and causes why most animals are endangered and extinct.  ",
    "BG" : "url(\"image/Blog/article4.jpeg\")",
    "ID" : "Article4"
};
insert(Blog4["Title"],Blog4["Author"],Blog4["Date"],Blog4["Content"],Blog4["BG"],Blog4["ID"]);

var Blog5 = {
    "Title": "4 iCare Ways to Contribute ",
    "Author": "Dianne Chrystalin Brandez",
    "Date": "9/21/19",
    "Content": "Have you ever got the feeling that you have this longing urge to help save our biodiversity but just don’t know how and what to do? Don’t worry! Here at iCare, we have created 4 different ways how you can help contribute based on what you can offer.",
    "BG" : "url(\"image/Blog/article5.jpeg\")",
    "ID" : "Article5"
};
insert(Blog5["Title"],Blog5["Author"],Blog5["Date"],Blog5["Content"],Blog5["BG"],Blog5["ID"]);


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




