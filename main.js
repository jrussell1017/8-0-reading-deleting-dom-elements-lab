// let element = document.querySelector("body a") 
// element.remove()

//removes first link in list
document.querySelector("header nav ul li").remove()
// removes first span in featured section
document.querySelector(".featured span").remove()

// removes last article
let allArticles = document.querySelectorAll("main .posts article")
allArticles[allArticles.length -1].remove()

// removes all post titles
let elementTitles = document.querySelectorAll("main .posts h3")
for(let title of elementTitles) {
    title.remove()
}





