class Article {
  constructor(funkyArticle){
  this.funkyArticle = funkyArticle;
  this.expand = this.funkyArticle.querySelector(".expandButton");
  console.log(this.expand);
  this.expand.textContent = "Expand";
  this.expand.addEventListener("click", this.showStuff.bind(this));
  }
  showStuff () {
    this.funkyArticle.classList.toggle("article-open");
  }
}




const allClassesNamedArticles = document.querySelectorAll(".article");

allClassesNamedArticles.forEach(function(article){
  return new Article(article);
});