import SlotGame from "./scenes/SlotGame.js";
import { GAME_WIDTH, GAME_HEIGHT } from "./config/constants.js";

const config = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  parent: "game",
  backgroundColor: "#070006",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
  },
  render: {
    antialias: true,
    pixelArt: false,
    roundPixels: false,
  },
  scene: SlotGame,
};

new Phaser.Game(config);

window.addEventListener("resize", () => {
  setTimeout(() => {
    const canvas = document.querySelector("#game canvas");

    if (!canvas) return;

    canvas.style.width = "100%";
    canvas.style.height = "100%";
  }, 50);
});
