var nav = document.querySelector('ul')
const navItem = ["Main page", "Animals (set A)", "Animals (set B)", "Colors", "Food", "Fruits", "Vegetables", "Space", "Professions"]

navItem.forEach(item => {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.innerText = item;
    if (item == 'Main page') li.classList = 'sidebar-brand';
    nav.appendChild(li);
    li.appendChild(a);

    li.addEventListener('click', function () {
        if (a.textContent == "Main page") {
            window.location.href = '../pages/main.html';
        } else {
            localStorage.setItem("category", a.textContent);
            window.location.href = '../pages/categories.html';
        }
    })
})


var trigger = document.querySelector('.hamburger'),
    isClosed = false;

trigger.onclick = function () {
    if (isClosed == true) {
        trigger.classList.remove('is-open');
        trigger.classList.add('is-closed');
        isClosed = false;
    } else {
        trigger.classList.remove('is-closed');
        trigger.classList.add('is-open');
        isClosed = true;
    }
    document.querySelector('#wrapper').classList.toggle('toggled');
};