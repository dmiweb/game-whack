import Game from "./game/Game";
document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();

  setInterval(() => {
    game.start();
  }, 1000);
});
