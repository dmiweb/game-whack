export default class Game {
  getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  start() {
    const cells = document.querySelectorAll(".cell");
    let indexRandom = this.getRandomNumber(0, cells.length - 1);

    while (cells[indexRandom].classList.contains('goblin')) {
      indexRandom = this.getRandomNumber(0, cells.length - 1);
    }

    for (const cell of cells) {
      cell.classList.remove("goblin");
    }

    cells[indexRandom].classList.add("goblin");
  }
}
