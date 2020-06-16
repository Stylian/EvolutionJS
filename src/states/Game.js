import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Moon from '../sprites/moon'

export default class extends Phaser.State {
  init () {
  }

  preload () {
  }

  create () {
    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })

    this.moon = new Moon({
      game: this.game,
      x: 200,
      y: 200,
      vx: 0,
      vy: 0.7,
      asset: 'moon'
    })

    this.moon2 = new Moon({
      game: this.game,
      x: 300,
      y: 200,
      vx: 0,
      vy: 1.5,
      asset: 'moon'
    })

    this.moon3 = new Moon({
      game: this.game,
      x: 250,
      y: 100,
      vx: 0,
      vy: 0.6,
      asset: 'moon'
    })

    this.moon4 = new Moon({
      game: this.game,
      x: 250,
      y: 300,
      vx: 0.7,
      vy: 0.6,
      asset: 'moon'
    })

    this.moon5 = new Moon({
      game: this.game,
      x: 550,
      y: 300,
      vx: 0,
      vy: -0.6,
      asset: 'moon'
    })

    this.game.add.existing(this.mushroom)
    this.game.add.existing(this.moon)
    this.game.add.existing(this.moon2)
    this.game.add.existing(this.moon3)
    this.game.add.existing(this.moon4)
    this.game.add.existing(this.moon5)
  }

  calculateMovements (core, satel) {
    let distX = core.x - satel.x
    let distY = core.y - satel.y
    let dist = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2))
    dist = dist < 10 ? 10 : dist

    let G = 200

    let ang = Math.atan2(distY, distX)
    let acc = 1 / Math.pow(dist, 2) * G

    let accX = acc * Math.cos(ang)
    let accY = acc * Math.sin(ang)

    satel.vx += accX
    satel.vy += accY

    satel.x += satel.vx
    satel.y += satel.vy
  }

  render () {
    this.calculateMovements(this.mushroom, this.moon)
    this.calculateMovements(this.mushroom, this.moon2)
    this.calculateMovements(this.mushroom, this.moon3)
    this.calculateMovements(this.mushroom, this.moon4)
    this.calculateMovements(this.mushroom, this.moon5)
  }
}
