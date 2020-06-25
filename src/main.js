import Phaser from 'phaser'

import GameState from './states/BasicFixedGravity'

class Game extends Phaser.Game {
  constructor (width, height, gameToRun) {
    super(width, height, Phaser.CANVAS, 'content', null)

    this.state.add(gameToRun, GameState, false)
    this.state.start(gameToRun)
  }
}

window.game = new Game(400, 400, 'BasicFixedGravity')
