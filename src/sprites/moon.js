import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, vx, vy, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)

    this.vx = vx
    this.vy = vy
  }

  update () {
  }
}
