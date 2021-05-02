export class LinearBall {
  constructor(text, w, h, cas) {
    this.cas = cas
    this.w = w
    this.h = h
    this.x = random(1410)+60 //防止小球出生时半径卡在圈外
    this.y = random(594)+60
    this.r = random(50)+10  //[10, 60]
    // this.color = `#${parseInt(Math.random()*0xffffff).toString(16)}`
    this.color = `rgb(${Math.random()*255 >> 0}, ${Math.random()*255 >> 0}, ${Math.random()*255 >> 0})`
    this.xSpeed = random(10)-5
    this.ySpeed = random(10)-5
    // 外部传入参数
    this.text = text
  }


  run() {
    if (this.x-this.r <= 0 || this.x+this.r >= this.w) {
      this.xSpeed = -this.xSpeed
    }
    this.x += this.xSpeed
    if (this.y-this.r <= 0 || this.y+this.r >= this.h) {
      this.ySpeed = -this.ySpeed
    }
    this.y += this.ySpeed
  }

  show() {
    this.run()
    drawCircle(this.x, this.y, this.r, this.color, this.cas)
    drawText(this.text, this.x+this.r, this.y, this.cas)
  }

}

export class ColorfulBall {
  constructor(x, y, w, h, cas) {
    this.cas = cas
    this.w = w
    this.h = h
    this.x = x  //传入鼠标坐标
    this.y = y
    this.r = 20
    // this.color = `#${parseInt(Math.random()*0xffffff).toString(16)}`
    this.color = `rgb(${parseInt(Math.random()*255)}, ${parseInt(Math.random()*255)}, ${parseInt(Math.random()*255)})`
    this.xSpeed = random(10)-5
    this.ySpeed = random(10)-5
  }

  show() {
    this.run()
    this.r -= 0.1   //半斤递减
    drawCircle(this.x, this.y, this.r, this.color, this.cas)
  }

  run() {
    if (this.x-this.r <= 0 || this.x+this.r >= this.w) {
      this.xSpeed = -this.xSpeed
    }
    this.x += this.xSpeed
    if (this.y-this.r <= 0 || this.y+this.r >= this.h) {
      this.ySpeed = -this.ySpeed
    }
    this.y += this.ySpeed
  }
}


//随机数
function random(num) {
  return Math.random()*num
}

function drawText(text, x, y, cas) {
  cas.font = '20px 微软雅黑'
  cas.textAlign = 'top'        //设置文字水平位置 可取值start(默认)/end/center/left/right
  cas.textBaseline = 'middle'      //设置文字垂直位置
  cas.fillText(text, x, y)
}

function drawCircle(x, y, r, color = '#000', cas) {
  if(r>0) {         //这里很关键，不限制条件浏览器疯狂报错，会奔溃；原因是r递减到负值无法被画出
    cas.beginPath()
    cas.arc(x, y, r, 0, Math.PI*2)
    cas.fillStyle = color
    cas.fill()
  }
}
