"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "10");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "10");
    }
}
start();




let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {
        let firstQuestion = prompt("Один из последних просмотренных фильмов?", "");
        let secondQuestion = prompt("На сколько вы его оцените?", "");
        personalMoviesDB.movies[firstQuestion] = secondQuestion;
        console.log(i);

        if (firstQuestion.length == 0 && secondQuestion.length == 0 &&
            firstQuestion.length > 50 && secondQuestion.length > 50) {
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMoviesDB.count <= 10) {
        console.log("Просмотренно довольно мало фильмов ");
    } else if (personalMoviesDB.count > 10 < 30) {
        console.log("Вы классический зритель");
    } else if (personalMoviesDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();


function showMyDB() {
    if (!personalMoviesDB.privat) {
        console.log(personalMoviesDB);
    }
}
showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMoviesDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1} : `, "");
    }
}
writeYourGenres();
console.log(personalMoviesDB);