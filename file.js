"use strict";
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "10");
console.log(numberOfFilms);


let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let firstQuestion = prompt("Один из последних просмотренных фильмов?", "");
let secondQuestion = prompt("На сколько вы его оцените?", "");
let firstQuestion2 = prompt("Один из последних просмотренных фильмов?", "");
let secondQuestion2 = prompt("На сколько вы его оцените?", "");

personalMoviesDB.movies[firstQuestion] = secondQuestion;
personalMoviesDB.movies[firstQuestion2] = secondQuestion2;
console.log(personalMoviesDB);