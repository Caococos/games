/*
 * @Descripttion: 工具包
 * @version: 
 * @Author: Zhihaot1
 * @Date: 2021-04-29 08:44:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-02 21:00:16
 */

class Ball {
  w: number
  h: number
  cas: CanvasRenderingContext2D
  x: number
  y: number
  r: number
  xSpeed: number
  ySpeed: number
  constructor(w:number, h:number, cas:CanvasRenderingContext2D) {
    this.w = w
    this.h = h
    this.cas = cas
    this.x = 0
    this.y = 0
    this.r = 0
    this.xSpeed = 0
    this.ySpeed = 0
  }

  run() {
    if (this.x - this.r <= 0 || this.x + this.r >= this.w) {
      this.xSpeed = -this.xSpeed
    }
    this.x += this.xSpeed
    if (this.y - this.r <= 0 || this.y + this.r >= this.h) {
      this.ySpeed = -this.ySpeed
    }
    this.y += this.ySpeed
  }

  //随机数
  random(num:number) {
    return Math.random() * num
  }

  // 画文字
  drawText(text:string, x:number, y:number) {
    this.cas.font = '20px 微软雅黑'
    // @ts-ignore
    this.cas.textAlign = 'top'        //设置文字水平位置 可取值start(默认)/end/center/left/right
    this.cas.textBaseline = 'middle'      //设置文字垂直位置
    this.cas.fillText(text, x, y)
  }

  // 画圆
  drawCircle(x:number, y:number, r:number, color = '#000') {
    if (r > 0) {         //这里很关键，不限制条件浏览器疯狂报错，会奔溃；原因是r递减到负值无法被画出
      this.cas.beginPath()
      this.cas.arc(x, y, r, 0, Math.PI * 2)
      this.cas.fillStyle = color
      this.cas.fill()
    }
  }
}

export class LinearBall extends Ball {
  color: string
  text: any
  constructor(text:string, w:number, h:number, cas:CanvasRenderingContext2D) {
    super(w, h, cas);
    this.x = this.random(1410) + 60 //防止小球出生时半径卡在圈外
    this.y = this.random(594) + 60
    this.r = this.random(50) + 10  //[10, 60]
    // this.color = `#${parseInt(Math.random()*0xffffff).toString(16)}`
    this.color = `rgb(${Math.random() * 255 >> 0}, ${Math.random() * 255 >> 0}, ${Math.random() * 255 >> 0})`
    this.xSpeed = this.random(10) - 5
    this.ySpeed = this.random(10) - 5
    // 外部传入参数
    this.text = text
  }

  show() {
    this.run()
    this.drawCircle(this.x, this.y, this.r, this.color)
    this.drawText(this.text, this.x + this.r, this.y)
  }

}

export class ColorfulBall extends Ball {
  color: string
  constructor(x:number, y:number, w:number, h:number, cas:CanvasRenderingContext2D) {
    super(w, h, cas);
    this.x = x  //传入鼠标坐标
    this.y = y
    this.r = 20
    // this.color = `#${parseInt(Math.random()*0xffffff).toString(16)}`
    this.color = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`
    this.xSpeed = this.random(10) - 5
    this.ySpeed = this.random(10) - 5
  }

  show() {
    this.run()
    this.r -= 0.1   //半斤递减
    this.drawCircle(this.x, this.y, this.r, this.color)
  }
}


