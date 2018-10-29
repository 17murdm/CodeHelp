



/**
 * Movie Kiosk:
 * Write the code to run a kiosk at a movie theater.
 * Program should loop infinitely to allow users to either see average rating of previous user entries,
 * or enter their own review.
 * ------------------------------------------------------------------------------------------------------------------
 * Objectives:
 * Should store movie title, current user rating, total rating, and number of ratings.
 * Should display a list of movies for user to review or option to review a new one.
 * Should allow user to select a movie to see average rating.
 * Should allow sorting of highest to lowest rated movies
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let numRatings;
let movies = [];

function main() {
    if (continueResponse !== 0 && continueResponse !== 1) {
        setContinueResponse();
        setNumRatings();
        populateMovies();
    }
    while (continueResponse === 1) {
        setContinueResponse();
    }
}

main();

function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

function setNumRatings() {
    const MIN_RATING = 1, MAX_RATING = 5;
    while   (! numRatings || numRatings < MIN_RATING || numRatings > MAX_RATING) {
        numRatings = Number(PROMPT.question(`What would you like to rate this film? `));
        if (isNaN(parseInt(numRatings)) || numRatings < MIN_RATING || numRatings > MAX_RATING) {
            console.log(`${numRatings} is an incorrect value. Please try again. `);
        }
    }
}

function populateMovies() {
    for (let i = 0; i < numRatings; i++) {
        movies[i] = [];
        console.log(typeof movies[i][0]);
        console.log(`\nMovie ${i = 1}:`);
        while (movies[i][0] === "undefined" || !/^[a-zA-Z -]{1,30}$/.test(movies[i][0])) {
            movies[i][0] = PROMPT.question(`Please enter the movie you wish to rate: `);
            if (! /^[a-zA-Z -]{1,30}$/.test(movies[i][0])) {
                console.log(`${movies[i][0]} is invalid. Please try again.`);
            }
        }
        while (! movies[i][1] || !/^[a-zA-Z -]{1,30}$/.test(movies[i][1])) {
            movies[i][1] = PROMPT.question(`Please enter your first name: `);
            if (! /^[a-zA-Z -]{1,30}$/.test(movies[i][1])) {
                console.log(`${movies[i][1]} is invalid. Please try again.`);
            }
        }
        while (! movies[i][2] || !/^[a-zA-Z -]{1,30}$/.test(movies[i][2])) {
            movies[i][2] = PROMPT.question(`Please enter your last name: `);
            if (! /^[a-zA-Z -]{1,30}$/.test(movies[i][2])) {
                console.log(`${Movie[i][2]} is invalid. Please try again.`);
            }
        }
        while (! movies[i][3] || !/^\d{2}\/\d{2}\/\d{4}$/.test(movies[i][3])) {
            movies[i][3] = PROMPT.question(`Please enter the current date (xx-xx-xxxx): `);
            if (! /^\d{2}\/\d{2}\/\d{4}$/.test(movies[i][3])) {
                console.log(`${Movie[i][3]} is invalid. Please try again.`);
            }
        }
    }
}
