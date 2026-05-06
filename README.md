# Phaser Slot Game Demo

A responsive HTML5 slot machine game built with Phaser 3 and modern JavaScript.

## Live Demo

https://cristianmarcu.ro/demo-games/phaser-slot-game-demo/

## GitHub Repository

https://github.com/cristianmarcu/phaser-slot-game-demo

---

## Features

- 3 animated slot reels
- Spin and quick stop interaction
- Balance and betting system
- Adjustable spin speed:
  - Slow
  - Normal
  - Fast
  - Turbo
- Auto play mode
- Sound ON / OFF toggle
- Jackpot system
- Last win tracking
- Responsive UI layout
- Responsive canvas scaling
- Pair win logic
- 3-of-a-kind payouts
- Jackpot payouts
- Big win animations
- Coin explosion effects
- Animated paylines
- Smooth reel animations
- Keyboard support (`SPACE` to spin/stop)

---

## Tech Stack

- Phaser 3
- JavaScript (ES6 Modules)
- HTML5
- CSS

---

## Game Logic

- `777` = Jackpot
- 3 matching symbols = bet × symbol multiplier
- Any pair = 2x bet
- No matching symbols = no payout

---

## Project Structure

```text
project-folder/
├── index.html
├── src/
│   ├── audio/
│   │   └── SoundFX.js
│   ├── config/
│   │   ├── constants.js
│   │   └── layout.js
│   ├── scenes/
│   │   └── SlotGame.js
│   ├── utils/
│   │   └── text.js
│   └── main.js
├── README.md
└── .gitignore
