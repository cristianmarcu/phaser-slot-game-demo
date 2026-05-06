# Phaser Slot Game Demo

A responsive HTML5 slot-style game built with Phaser 3 and plain JavaScript.

## Features

- 3 animated slot reels
- Spin and stop interaction
- Balance and bet system
- Adjustable spin speed: Slow, Normal, Fast, Turbo
- Auto play mode
- Sound ON/OFF control
- Jackpot system
- Last win display
- Win logic for pairs, 3-of-a-kind, and jackpot
- Big win and jackpot animations
- Coin explosion effects
- Responsive canvas scaling for different screen sizes

## Tech Stack

- Phaser 3
- JavaScript
- HTML5
- CSS

## How to Run

Open `index.html` directly in the browser.

You can also deploy the project to any static hosting platform, such as:

- Cloudflare Pages
- Netlify
- Vercel
- GitHub Pages

## Game Logic

- `777` = Jackpot
- 3 matching symbols = bet multiplied by the symbol multiplier
- Any pair = 2x bet
- No matching symbols = no win

## Project Structure

```text
project-folder/
├── index.html
├── src/
│   └── main.js
└── README.md