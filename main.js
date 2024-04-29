/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/game/Game.js
class Game {
  getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  gridGenerator() {
    document.querySelector("body").insertAdjacentHTML("beforeEnd", '<div class="container"></div>');
    for (let i = 0; i < 16; i++) {
      document.querySelector(".container").insertAdjacentHTML("beforeEnd", '<div class="cell"></div>');
    }
  }
  start() {
    this.gridGenerator();
    setInterval(() => {
      const cells = document.querySelectorAll(".cell");
      let indexRandom = this.getRandomNumber(0, cells.length - 1);
      while (cells[indexRandom].classList.contains("goblin")) {
        indexRandom = this.getRandomNumber(0, cells.length - 1);
      }
      for (const cell of cells) {
        cell.classList.remove("goblin");
      }
      cells[indexRandom].classList.add("goblin");
    }, 1000);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  game.start();
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;