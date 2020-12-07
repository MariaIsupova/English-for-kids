var src_img = "../assets/img/card_picture/"
var src_audio = "../assets/audio/card_audio/"

const categories = [{
        name: "Animals (set A)",
        img: src_img + "animals/A/main_.png"
    },
    {
        name: "Animals (set B)",
        img: src_img + "animals/B/main.jpg"
    },
    {
        name: "Colors",
        img: src_img + "color/main.jpg"
    },
    {
        name: "Food",
        img: src_img + "food/main.jpg"
    },
    {
        name: "Fruits",
        img: src_img + "fruit/main.jpg"
    },
    {
        name: "Vegetables",
        img: src_img + "vegetable/main.jpg"
    },
    {
        name: "Space",
        img: src_img + "space/0bacd2ca5dec9d5f85a639af334a1100.jpg"
    },
    {
        name: "Professions",
        img: src_img + "professions/main.jpg"
    }
];


const cards = [{
        name: "Animals (set A)",
        words: [{
                word: "Bear",
                translation: "Медведь",
                img: src_img+"animals/A/bear.jpeg",
                audio: src_audio+"animals/A/pronunciation_en_bear.mp3"
            },

            {
                word: "Fox",
                translation: "Лиса",
                img: src_img+"animals/A/fox.jpeg",
                audio: src_audio+"animals/A/pronunciation_en_fox.mp3"
            },
            {
                word: "Frog",
                translation: "Лягушка",
                img: src_img+"animals/A/frog.jpg",
                audio: src_audio+"animals/A/pronunciation_en_frog.mp3"
            },
            {
                word: "Hedgehog",
                translation: "Ёж",
                img: src_img+"animals/A/hedgehog.jpeg",
                audio: src_audio+"animals/A/pronunciation_en_hedgehog.mp3"
            },
            {
                word: "Lion",
                translation: "Лев",
                img: src_img+"animals/A/lion.jpg",
                audio: src_audio+"animals/A/pronunciation_en_lion.mp3"
            },
            {
                word: "Owl",
                translation: "Сова",
                img: src_img+"animals/A/owl.jpeg",
                audio: src_audio+"animals/A/pronunciation_en_owl.mp3"
            },
            {
                word: "Snake",
                translation: "Змея",
                img: src_img+"animals/A/snake.jpeg",
                audio: src_audio+"animals/A/pronunciation_en_snake.mp3"
            },
            {
                word: "Whale",
                translation: "Кит",
                img: src_img+"animals/A/whale.jpg",
                audio: src_audio+"animals/A/pronunciation_en_whale.mp3"
            }
        ]
    },

    {
        name: "Animals (set B)",
        words: [{
                word: "Cat",
                translation: "Кошка",
                img: src_img+"animals/B/cat.jpg",
                audio: src_audio+"animals/B/pronunciation_en_cat.mp3"
            },
            {
                word: "Chicken",
                translation: "Курица",
                img: src_img+"animals/B/chicken.jpeg",
                audio: src_audio+"animals/B/pronunciation_en_chicken.mp3"
            },
            {
                word: "Cow",
                translation: "Корова",
                img: src_img+"animals/B/cow.jpeg",
                audio: src_audio+"animals/B/pronunciation_en_cow.mp3"
            },
            {
                word: "Dog",
                translation: "Собака",
                img: src_img+"animals/B/dog.jpg",
                audio: src_audio+"animals/B/pronunciation_en_dog.mp3"
            },
            {
                word: "Duck",
                translation: "Утка",
                img: src_img+"animals/B/duck.jpeg",
                audio: src_audio+"animals/B/pronunciation_en_duck.mp3"
            },
            {
                word: "Pig",
                translation: "Свинья",
                img: src_img+"animals/B/pig.jpg",
                audio: src_audio+"animals/B/pronunciation_en_pig.mp3"
            },
            {
                word: "Rabbit",
                translation: "Кролик",
                img: src_img+"animals/B/rabbit.jpg",
                audio: src_audio+"animals/B/pronunciation_en_rabbit.mp3"
            },
            {
                word: "Sheep",
                translation: "Овца",
                img: src_img+"animals/B/sheep.jpeg",
                audio: src_audio+"animals/B/pronunciation_en_sheep.mp3"
            }
        ]
    },

    {
        name: "Colors",
        words: [{
                word: "Blue",
                translation: "Синий",
                img: src_img+"color/blue.png",
                audio: src_audio+"color/pronunciation_en_blue.mp3"
            },
            {
                word: "Brow",
                translation: "Коричневый",
                img: src_img+"color/brow.png",
                audio: src_audio+"color/pronunciation_en_brow.mp3"
            },
            {
                word: "Gray",
                translation: "Серый",
                img: src_img+"color/gray.png",
                audio: src_audio+"color/"
            },
            {
                word: "Green",
                translation: "Зелёный",
                img: src_img+"color/green.png",
                audio: src_audio+"color/pronunciation_en_green.mp3"
            },
            {
                word: "Orange",
                translation: "Оранжевый",
                img: src_img+"color/orange.png",
                audio: src_audio+"color/pronunciation_en_orange.mp3"
            },
            {
                word: "Pink",
                translation: "Розовый",
                img: src_img+"color/pink.png",
                audio: src_audio+"color/pronunciation_en_pink.mp3"
            },
            {
                word: "Red",
                translation: "Красный",
                img: src_img+"color/red.png",
                audio: src_audio+"color/pronunciation_en_red.mp3"
            },
            {
                word: "Yellow",
                translation: "Жёлтый",
                img: src_img+"color/yellow.png",
                audio: "../assets/audio/card_audio"
            }
        ]
    },

    {
        name: "Food",
        words: [{
                word: "Bread",
                translation: "Хлеб",
                img: src_img+"food/bread.jpg",
                audio: src_audio+"food/pronunciation_en_bread.mp3"
            },
            {
                word: "Burger",
                translation: "Бургер",
                img: src_img+"food/burger.jpg",
                audio: src_audio+"food/pronunciation_en_burger.mp3"
            },
            {
                word: "Cheese",
                translation: "Сыр",
                img: src_img+"food/cheese.jpeg",
                audio: src_audio+"food/pronunciation_en_cheese.mp3"
            },
            {
                word: "Cookie",
                translation: "Печенье",
                img: src_img+"food/cookie.jpg",
                audio: src_audio+"food/pronunciation_en_cookie.mp3"
            },
            {
                word: "Donut",
                translation: "Пончик",
                img: src_img+"food/donut.jpg",
                audio: src_audio+"food/pronunciation_en_donut.mp3"
            },
            {
                word: "Soup",
                translation: "Суп",
                img: src_img+"food/soup.jpg",
                audio: src_audio+"food/pronunciation_en_soup.mp3"
            },
            {
                word: "Sushi",
                translation: "Суши",
                img: src_img+"food/sushi.jpeg",
                audio: src_audio+"food/pronunciation_en_sushi.mp3"
            },
            {
                word: "Taco",
                translation: "Тако",
                img: src_img+"food/taco.jpeg",
                audio: src_audio+"food/pronunciation_en_taco.mp3"
            }
        ]
    },

    {
        name: "Fruits",
        words: [{
                word: "Apple",
                translation: "Яблоко",
                img: src_img+"fruit/apple.jpeg",
                audio: src_audio+"fruit/pronunciation_en_apple.mp3"
            },
            {
                word: "Banana",
                translation: "Банан",
                img: src_img+"fruit/banana.jpeg",
                audio: src_audio+"fruit/pronunciation_en_banana.mp3"
            },
            {
                word: "Cherry",
                translation: "Вишня",
                img: src_img+"fruit/cherry.jpeg",
                audio: src_audio+"fruit/pronunciation_en_cherry.mp3"
            },
            {
                word: "Kiwi",
                translation: "Киви",
                img: src_img+"fruit/kiwi.jpg",
                audio: src_audio+"fruit/pronunciation_en_kiwi.mp3"
            },
            {
                word: "Orange",
                translation: "Апельсин",
                img: src_img+"fruit/orange.jpeg",
                audio: src_audio+"fruit/pronunciation_en_orange.mp3"
            },
            {
                word: "Peach",
                translation: "Персик",
                img: src_img+"fruit/peach.jpg",
                audio: src_audio+"fruit/pronunciation_en_peach.mp3"
            },
            {
                word: "Pineapple",
                translation: "Ананас",
                img: src_img+"fruit/pineapple.jpg",
                audio: src_audio+"fruit/pronunciation_en_pineapple.mp3"
            },
            {
                word: "Strawberry",
                translation: "Клубника",
                img: src_img+"fruit/strawberry.jpeg",
                audio: src_audio+"fruit/pronunciation_en_strawberry.mp3"
            }
        ]
    },


    {
        name: "Vegetables",
        words: [{
                word: "Avocado",
                translation: "Авокадо",
                img: src_img+"vegetable/avocado.jpeg",
                audio: src_audio+"vegetables/pronunciation_en_avocado.mp3"
            },
            {
                word: "Carrot",
                translation: "Морковь",
                img: src_img+"vegetable/carrot.jpeg",
                audio: src_audio+"vegetables/pronunciation_en_carrot.mp3"
            },
            {
                word: "Corn",
                translation: "Кукуруза",
                img: src_img+"vegetable/corn.jpg",
                audio: src_audio+"vegetables/pronunciation_en_corn.mp3"
            },
            {
                word: "Onion",
                translation: "Лук",
                img: src_img+"vegetable/onion.jpg",
                audio: src_audio+"vegetables/pronunciation_en_onion.mp3"
            },
            {
                word: "Pepper",
                translation: "Перец",
                img: src_img+"vegetable/pepper.jpeg",
                audio: src_audio+"vegetables/pronunciation_en_pepper.mp3"
            },
            {
                word: "Potato",
                translation: "Картофель",
                img: src_img+"vegetable/potato.jpeg",
                audio: src_audio+"vegetables/pronunciation_en_potato.mp3"
            },
            {
                word: "Pumpkin",
                translation: "Тыква",
                img: src_img+"vegetable/pumpkin.jpeg",
                audio: src_audio+"vegetables/pronunciation_en_pumpkin.mp3"
            },
            {
                word: "Tomato",
                translation: "Помидор",
                img: src_img+"vegetable/tomato.jpg",
                audio: src_audio+"vegetables/pronunciation_en_tomato.mp3"
            }
        ]
    },

    {
        name: "Space",
        words: [{
                word: "Earth",
                translation: "Земля",
                img: src_img+"space/earth.jpg",
                audio: src_audio+"space/pronunciation_en_earth.mp3"
            },
            {
                word: "Moon",
                translation: "Луна",
                img: src_img+"space/moon.jpg",
                audio: src_audio+"space/pronunciation_en_moon.mp3"
            },
            {
                word: "Rocket",
                translation: "Ракета",
                img: src_img+"space/rocket_.jpg",
                audio: src_audio+"space/pronunciation_en_rocket.mp3"
            },
            {
                word: "Satellite",
                translation: "Спутник",
                img: src_img+"space/satellite.jpg",
                audio: src_audio+"space/pronunciation_en_satellite.mp3"
            },
            {
                word: "Spaceship",
                translation: "Космический корабль",
                img: src_img+"space/spaceship.jpg",
                audio: src_audio+"space/pronunciation_en_spaceship.mp3"
            },
            {
                word: "Star",
                translation: "Звезда",
                img: src_img+"space/star.jpg",
                audio: src_audio+"space/pronunciation_en_star.mp3"
            },
            {
                word: "Sun",
                translation: "Солнце",
                img: src_img+"space/sun.jpg",
                audio: src_audio+"space/pronunciation_en_sun.mp3"
            },
            {
                word: "Telescope",
                translation: "Телескоп",
                img: src_img+"space/telescope_.jpg",
                audio: src_audio+"space/pronunciation_en_telescope.mp3"
            }
        ]
    },

    {
        name: "Professions",
        words: [{
                word: "Archeologist",
                translation: "Археолог",
                img: src_img+"professions/archeologist.jpeg",
                audio: src_audio+"professions/pronunciation_en_archeologist.mp3"
            },
            {
                word: "Artist",
                translation: "Художник",
                img: src_img+"professions/artist.jpeg",
                audio: src_audio+"professions/pronunciation_en_artist.mp3"
            },
            {
                word: "Chef",
                translation: "Шеф",
                img: src_img+"professions/chef.jpeg",
                audio: src_audio+"professions/pronunciation_en_chef.mp3"
            },
            {
                word: "Cleaner",
                translation: "Уборщик",
                img: src_img+"professions/cleaner.jpeg",
                audio: src_audio+"professions/pronunciation_en_cleaner.mp3"
            },
            {
                word: "Doctor",
                translation: "Доктор",
                img: src_img+"professions/doctor.jpeg",
                audio: src_audio+"professions/pronunciation_en_doctor.mp3"
            },
            {
                word: "Farmer",
                translation: "Фермер",
                img: src_img+"professions/farmer.jpeg",
                audio: src_audio+"professions/pronunciation_en_farmer.mp3"
            },
            {
                word: "Firefighter",
                translation: "Пожарный",
                img: src_img+"professions/firefighter.jpeg",
                audio: src_audio+"professions/pronunciation_en_firefighter.mp3"
            },
            {
                word: "Florist",
                translation: "Флорист",
                img: src_img+"professions/florist.jpeg",
                audio: src_audio+"professions/pronunciation_en_florist.mp3"
            }
        ]
    }

]