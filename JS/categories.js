function createCategories(categories_) {
    categories_.forEach(item => {
        var position = document.createElement('div');
        var cardComponent = document.createElement('div');
        var cardImage = document.createElement('img');
        var cardBody = document.createElement('div');
        var cardTitle = document.createElement('h3');

        position.className = 'col-xs-auto col-sm-6  col-md-6 col-lg-4 col-xl-3 my-3';
        cardComponent.className = 'card border-warning';
        cardComponent.id = item.name;
        cardImage.className = 'card-img-top';
        cardImage.src = item.img;
        cardBody.className = 'card-body';
        cardTitle.className = 'card-title';
        cardTitle.innerText = item.name;

        document.querySelector(".row").appendChild(position);
        position.appendChild(cardComponent);
        cardComponent.appendChild(cardImage);
        cardComponent.appendChild(cardBody);
        cardBody.appendChild(cardTitle);

        cardComponent.addEventListener('click', function () {
            console.log(cardComponent.id)
            localStorage.setItem("category",cardComponent.id);
            window.location.href = '../pages/categories.html';
        })
    });
}

createCategories(categories);