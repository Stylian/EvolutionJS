/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Moon from '../sprites/Moon'
import lang from '../lang'

export default class extends Phaser.State {
  init () {
  }

  preload () {
  }

  create () {
    // const bannerText = lang.text('welcome')
    // let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
    //   font: '40px Bangers',
    //   fill: '#7791bf',
    //   smoothed: false
    // })
    //
    // banner.padding.set(10, 16)
    // banner.anchor.setTo(0.5)

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

    this.game.add.existing(this.mushroom)
    this.game.add.existing(this.moon)
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 8, 8)
      this.game.debug.spriteInfo(this.moon, 8, 8)
    }

    let distX = this.mushroom.x - this.moon.x
    let distY = this.mushroom.y - this.moon.y
    let dist = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2))
    dist = dist < 50 ? 50 : dist

    let G = 200

    let ang = Math.atan2(distY, distX)
    let acc = 1 / Math.pow(dist, 2) * G

    let accX = acc * Math.cos(ang)
    let accY = acc * Math.sin(ang)

    this.moon.vx += accX
    this.moon.vy += accY

    this.moon.x += this.moon.vx
    this.moon.y += this.moon.vy

  }
}
