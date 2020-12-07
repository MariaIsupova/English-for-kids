const wordList = cards.filter(category => category.name == localStorage.getItem('category'))[0];
const audioList = wordList.words.map(item => item.audio);
var chbox = document.querySelector('.mode')


var mode = localStorage.getItem('mode')
// console.log(mode)

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
            if (sound && localStorage.getItem('mode') != 'play') {
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
    condition();

}

wordCard();

function condition() {
    var nav = document.querySelector('.navbar');
    var cardBorder = document.querySelectorAll('.card');
    if (chbox.checked) {
        localStorage.setItem("mode", 'train');
        cardBorder.forEach(el => {
            el.classList.add('border-warning')
            el.classList.remove('border-info')
        })
        nav.classList.add('bg-warning')
        nav.classList.remove('bg-info')

        var cardInfo = document.querySelectorAll('.card-title');
        cardInfo.forEach(card => {
            card.classList.remove('myhide')
        })
        var buttons = document.querySelectorAll('.btn-turn');
        buttons.forEach(element => {
            element.classList.remove('myhide')
        })

        var node = document.querySelector('.mybtn');
        if (node) node.parentNode.removeChild(node);


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

        var cardInfo = document.querySelectorAll('.card-title');
        cardInfo.forEach(card => {
            card.classList.add('myhide')
        })
        var buttons = document.querySelectorAll('.btn-turn');
        buttons.forEach(element => {
            element.classList.add('myhide')
        })

        sound = false

        startBtn.addEventListener('click', function () {
            startBtn.parentNode.removeChild(startBtn);
            var repeatBtn = document.createElement('a');
            repeatBtn.className = 'btn btn-lg blue mybtn';
            repeatBtn.innerText = "Repeat";
            document.querySelector('.container').appendChild(repeatBtn);
            

            var gameAudioList = audioList.sort(function () {
                return Math.random() - 0.5;
            });
            console.log(gameAudioList)
            audio = new Audio;
            audio.src = gameAudioList[0];
            audio.currentTime = 0;
            audio.play()

        })

    }
};

chbox.onchange = function () {
    condition();
}