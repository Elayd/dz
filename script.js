'use strict';

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = ["count", "movies", "actors","genres", "privat"];

personalMovieDB[0] = numberOfFilms;
personalMovieDB[1] = {};
personalMovieDB[2] ={};
personalMovieDB[3] =[];
personalMovieDB[4] = false;

console.log(personalMovieDB[0]);
console.log(personalMovieDB[1]);
console.log(personalMovieDB[2]);
console.log(personalMovieDB[3]);
console.log(personalMovieDB[4]);