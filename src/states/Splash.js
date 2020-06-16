import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.load.image('mushroom', 'assets/images/mushroom2.png')
    this.load.image('moon', 'assets/images/moon.png')
  }

  create () {
    this.state.start('Game')
  }
}
