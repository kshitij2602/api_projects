const book=[
    {
        ISBN:"12345Book",
        title: "tesla",
        pubdate:"2023-05-08",
        language:"en",
        numpage:250,
        author:[1,2],
        publications: [1],
        category: ["tech","space","education"]
    }
];
const author = [{
    id:1,
    name:"kshitij",
    books:["12345Book","secretBook"]
},
{
    id:2,
    name:"Elon Musk",
    books:["12345Book"]
}];

const publication=[
    {id:1,
    name:"writex",
    books:["12345Book"]
}
];
module.exports={author, book,publication};