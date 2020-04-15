import { Game, WEBGL } from 'phaser'
import BootScene from './scenes/BootScene'
import PreloadScene from './scenes/PreloadScene'
import ClickStart from './scenes/ClickStart'
// import GameScene from './fishing/GameScene'

const config = {
  type: WEBGL,
  parent: 'content',
  width: 320,
  height: 180,
  pixelArt: true,
  roundPixels: true,
  physics: {
    default: 'arcade',
    arcade: {
      // debug: true, // switched off
      gravity: { y: 800 }
    }
  },
  scene: [
    BootScene,
    PreloadScene,
    ClickStart,
    // GameScene
  ]
}

const game = new Game(config)
