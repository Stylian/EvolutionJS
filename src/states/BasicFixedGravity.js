import Phaser from 'phaser'
import World from '../sprites/World'
import Moon from '../sprites/moon'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#EDEEC9'
  }

  preload () {
    this.load.image('world', 'assets/images/world.png')
    this.load.image('moon', 'assets/images/moon.png')
  }

  create () {
    this.world = new World({
      game: this.game,
      x: 200,
      y: 200,
      asset: 'world'
    })

    this.moon = new Moon({
      game: this.game,
      x: 150,
      y: 200,
      vx: 0,
      vy: 1.7,
      asset: 'moon'
    })

    this.moon2 = new Moon({
      game: this.game,
      x: 100,
      y: 200,
      vx: 0,
      vy: 1.5,
      asset: 'moon'
    })

    this.moon3 = new Moon({
      game: this.game,
      x: 50,
      y: 200,
      vx: 0,
      vy: 1.1,
      asset: 'moon'
    })

    this.game.add.existing(this.world)
    this.game.add.existing(this.moon)
    this.game.add.existing(this.moon2)
    this.game.add.existing(this.moon3)
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
    this.calculateMovements(this.world, this.moon)
    this.calculateMovements(this.world, this.moon2)
    this.calculateMovements(this.world, this.moon3)
  }
}
