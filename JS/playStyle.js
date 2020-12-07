var chbox = document.querySelector('.mode')

var nav = document.querySelector('.navbar');

var cardBorder = document.querySelectorAll('.card');

chbox.onchange = function() { 
    if (this.checked) {
        // console.log("Train");
        localStorage.setItem("mode",'train');
        cardBorder.forEach(el => {
            el.classList.add('border-warning')
            el.classList.remove('border-info')
        })
        nav.classList.add('bg-warning')
        nav.classList.remove('bg-info')

    } else {
        // console.log("Play");
        localStorage.setItem("mode",'play');
        cardBorder.forEach(el => {
            el.classList.add('border-info')
            el.classList.remove('border-warning')
        })
        nav.classList.remove('bg-warning')
        nav.classList.add('bg-info')
        
    }
};

