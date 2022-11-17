'use strict';

let scoreHomeContent = document.getElementById("score-home");
let scoreGuestContent = document.getElementById("score-guest");
let scoreHome = 0;
let scoreGuest = 0;
// home buttons
const plusOneHomeButton = document.getElementById("plus-one-home");
const plusTwoHomeButton = document.getElementById("plus-two-home");
const plusThreeHomeButton = document.getElementById("plus-three-home");
// guest buttons
const plusOneGuestButton = document.getElementById("plus-one-guest");
const plusTwoGuestutton = document.getElementById("plus-two-guest");
const plusThreeGuestButton = document.getElementById("plus-three-guest");

// adding scores based on button clicked
function plusOneHome() {
  scoreHomeContent.textContent = scoreHome++;
}

function plusTwoHome() {
  scoreHomeContent.textContent = scoreHome += 2;
}

function plusThreeHome() {
  scoreHomeContent.textContent = scoreHome += 3;
}

function plusOneGuest() {
  scoreGuestContent.textContent = scoreGuest++;
}

function plusTwoGuest() {
  scoreGuestContent.textContent = scoreGuest += 2;
}

function plusThreeGuest() {
  scoreGuestContent.textContent = scoreGuest += 3;
}

// for home div
plusOneHomeButton.addEventListener("click", plusOneHome);
plusTwoHomeButton.addEventListener("click", plusTwoHome);
plusThreeHomeButton.addEventListener("click", plusThreeHome);

// for guest div
plusOneGuestButton.addEventListener("click", plusOneGuest);
plusTwoGuestButton.addEventListener("click", plusTwoGuest);
plusThreeGuestButton.addEventListener("click", plusThreeGuest);


