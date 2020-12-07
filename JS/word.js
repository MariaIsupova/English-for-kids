const wordList = cards.filter(category => category.name == localStorage.getItem('category'))[0];

function wordCard() {
    wordList.words.forEach(item => {
        var sound = true
        var position = document.createElement('div');
        var wordComponent = document.createElement('div');
        var front = document.createElement('div')
        var wordImage = document.createElement('img');
        var wordBody = document.createElement('div');
        var word = document.createElement('h3');
        var turn = document.createElement('a')

        position.className = 'col-xs-auto col-sm-6  col-md-6 col-lg-4 col-xl-3 my-3 ';
        wordComponent.className = 'card border-warning '
        front.className = 'card_front card__face--front'
        wordComponent.id = item.word;
        wordImage.className = 'card-img-top';
        wordImage.src = item.img;
        wordBody.className = 'card-body d-flex justify-content-between';
        word.className = 'card-title';
        word.innerText = item.word;
        turn.className = 'glyphicon glyphicon-refresh btn-turn'

        document.querySelector(".row").appendChild(position);
        position.appendChild(wordComponent);
        wordComponent.appendChild(front)
        front.appendChild(wordImage);
        front.appendChild(wordBody);
        wordBody.appendChild(turn);
        wordBody.appendChild(word);


        wordComponent.addEventListener('click', function () {
            if (sound) {
                audio = new Audio;
                audio.src = item.audio;
                audio.currentTime = 0;
                audio.play()
            }
            sound = true
        })

        var back = document.createElement('div')
        var wordImageB = document.createElement('img');
        var wordBodyB = document.createElement('div');
        var wordB = document.createElement('h3');
        var turnB = document.createElement('a')

        back.className = 'card_back card__face--back'
        wordImageB.className = 'card-img-top';
        wordImageB.src = item.img;
        wordBodyB.className = 'card-body d-flex justify-content-between';
        wordB.className = 'card-title';
        wordB.innerText = item.translation;

        wordComponent.appendChild(back)
        back.appendChild(wordImageB);
        back.appendChild(wordBodyB);
        wordBodyB.appendChild(wordB);

        turn.addEventListener('click', function () {
            sound = false;
            wordComponent.classList.toggle('is-flipped');

            var out = true
            wordComponent.addEventListener("mouseleave", function () {
                if (out) {
                    wordComponent.classList.toggle('is-flipped');
                    out = false;
                }
            })
        })
    });
}

wordCard();


var chbox = document.querySelector('.mode')

if (localStorage.getItem('mode') == 'play') {
    var startBtn = document.createElement('a');
    startBtn.className = 'btn btn-lg info';
    document.querySelector('.container').appendChild(startBtn);
}

chbox.onchange = function () {
    var nav = document.querySelector('.navbar');
    var cardBorder = document.querySelectorAll('.card');
    if (this.checked) {
        localStorage.setItem("mode", 'train');
        cardBorder.forEach(el => {
            el.classList.add('border-warning')
            el.classList.remove('border-info')
        })
        nav.classList.add('bg-warning')
        nav.classList.remove('bg-info')

        var cardInfo = document.querySelectorAll('.card-body');
        cardInfo.forEach(card => {
            card.classList.remove('hide')
        })

        var node = document.querySelector('.mybtn');
        node.parentNode.removeChild(node);


    } else {
        localStorage.setItem("mode", 'play');
        cardBorder.forEach(el => {
            el.classList.add('border-info')
            el.classList.remove('border-warning')
        })
        nav.classList.remove('bg-warning')
        nav.classList.add('bg-info')

        var startBtn = document.createElement('a');
        startBtn.className = 'btn btn-lg red mybtn';
        startBtn.innerText = "Start";
        document.querySelector('.container').appendChild(startBtn);

        var cardInfo = document.querySelectorAll('.card-body');
        cardInfo.forEach(card => {
            card.classList.add('hide')
        })



    }
};