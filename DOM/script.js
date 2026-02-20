// show filter and add article forms
function showFilter() {
    document.getElementById('filterContent').style.display = 'block';
    document.getElementById('newContent').style.display = 'none';
}
function showAddNew() {
    document.getElementById('newContent').style.display = 'flex';
    document.getElementById('filterContent').style.display = 'none';
}

// filter articles
function filterArticles() {
    var showOpinion = document.getElementById('opinionCheckbox').checked;
    var showRecipe = document.getElementById('recipeCheckbox').checked;
    var showUpdate = document.getElementById('updateCheckbox').checked;
    var articles = document.querySelectorAll('#articleList article');
    articles.forEach(function(article) {
        if (article.classList.contains('opinion')) {
            article.style.display = showOpinion ? 'block' : 'none';
        } else if (article.classList.contains('recipe')) {
            article.style.display = showRecipe ? 'block' : 'none';
        } else if (article.classList.contains('update')) {
            article.style.display = showUpdate ? 'block' : 'none';
        }
    });
}

// add new article
function addNewArticle() {
    var title = document.getElementById('inputHeader').value;
    var text = document.getElementById('inputArticle').value;
    var typeClass = '';
    var markerText = '';
    
    if (document.getElementById('opinionRadio').checked) {
        typeClass = 'opinion';
        markerText = 'Opinion';
    } else if (document.getElementById('recipeRadio').checked) {
        typeClass = 'recipe';
        markerText = 'Recipe';
    } else if (document.getElementById('lifeRadio').checked) {
        typeClass = 'update'; 
        markerText = 'Update';
    } else {
        alert("Please select an article type.");
        return;
    }
    if (title.trim() === "" || text.trim() === "") {
        alert("Please enter both a title and text.");
        return;
    }

    var newArticle = document.createElement('article');
    newArticle.className = typeClass; 
    
    newArticle.innerHTML = `
        <span class="marker">${markerText}</span>
        <h2>${title}</h2>
        <p>${text}</p>
        <p><a href="moreDetails.html">Read more...</a></p>
    `;
    document.getElementById('articleList').appendChild(newArticle);
    document.getElementById('inputHeader').value = '';
    document.getElementById('inputArticle').value = '';

    filterArticles();
}