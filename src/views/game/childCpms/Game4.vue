<template>
  <div class="container">
    <!-- 工具箱 -->
    <div class="column_wra">
      <h5 class="head">工具箱</h5>
      <div class="body" v-for="item in arr1">
        <p>{{ item.keys }}</p>
        <p>{{ item.name }}</p>
      </div>
    </div>
    <!-- 文件操作 -->
    <div class="column_wra">
      <h5 class="head">文件操作</h5>
      <div class="body" v-for="item in arr2">
        <p>{{ item.keys }}</p>
        <p>{{ item.name }}</p>
      </div>
    </div>
    <!-- 图层混合 -->
    <div class="column_wra">
      <h5 class="head">图层混合</h5>
      <div class="body" v-for="item in arr3">
        <p>{{ item.keys }}</p>
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'

const arr1 = [
  {
    keys: 'M',
    name: '矩形、椭圆选框工具'
  },
  {
    keys: 'V',
    name: '移动工具'
  },
  {
    keys: 'L',
    name: '套索、多边形套索、磁性套索'
  },
  {
    keys: 'W',
    name: '魔棒工具'
  },
  {
    keys: 'C',
    name: '裁剪工具'
  },
  {
    keys: 'K',
    name: '切片工具、切片选择工具'
  },
  {
    keys: 'J',
    name: '喷枪工具'
  },
  {
    keys: 'B',
    name: '画笔工具、铅笔工具'
  },
  {
    keys: 'S',
    name: '橡皮图章、图案图章'
  },
  {
    keys: 'Y',
    name: '历史画笔工具、艺术历史画笔'
  },
  {
    keys: 'E',
    name: '橡皮擦、背景擦除、魔术橡皮擦'
  },
  {
    keys: 'G',
    name: '渐变工具、油漆桶工具'
  },
  {
    keys: 'R',
    name: '模糊、锐化、涂抹工具'
  },
  {
    keys: 'O',
    name: '减淡、加深、海绵工具'
  },
  {
    keys: 'A',
    name: '路径选择工具、直接选取工具'
  },
  {
    keys: 'T',
    name: '文字工具'
  },
  {
    keys: 'P',
    name: '钢笔、自由钢笔'
  },
  {
    keys: 'U',
    name: '矩形、圆形工具'
  },
  {
    keys: 'N',
    name: '写字板、声音注释'
  },
  {
    keys: 'I',
    name: '习惯、颜色取样器、度量工具'
  },
  {
    keys: 'H',
    name: '抓手工具'
  },
  {
    keys: 'Z',
    name: '缩放工具'
  },
  {
    keys: 'D',
    name: '默认前景色和背景色'
  },
  {
    keys: 'X',
    name: '切换前景色和背景色'
  },
  {
    keys: 'Q',
    name: '切换标准模式和快速蒙版模式'
  },
  {
    keys: 'F',
    name: '标准屏幕模式、全屏模式'
  },
  {
    keys: 'Ctrl',
    name: '临时使用移动工具'
  },
  {
    keys: 'Alt',
    name: '临时使用吸色工具'
  },
  {
    keys: '空格',
    name: '临时使用抓手工具'
  },
  {
    keys: '[或]',
    name: '循环选择画笔'
  }
]
const arr2 = [
  {
    keys: 'Ctrl+N',
    name: '新建图形文件'
  },
  {
    keys: 'Ctrl+Shift+N',
    name: '新建图层'
  },
  {
    keys: 'Ctrl+Alt+N',
    name: '用默认设置创建新文件'
  },
  {
    keys: 'Ctrl+O',
    name: '打开已有的图像'
  },
  {
    keys: 'Ctrl+Alt+O',
    name: '打开为...'
  },
  {
    keys: 'Ctrl+W',
    name: '关闭当前图像'
  },
  {
    keys: 'Ctrl+S',
    name: '保存当前图像'
  },
  {
    keys: 'Ctrl+Shift+S',
    name: '另存为...'
  },
  {
    keys: 'Ctrl+Alt+S',
    name: '存储副本'
  },
  {
    keys: 'Ctrl+Shift+P',
    name: '页面设置'
  },
  {
    keys: '打印',
    name: 'Ctrl+P'
  }
]
const arr3 = [
  {
    keys: 'Alt+加或减',
    name: '循环选择混合模式'
  },
  {
    keys: 'Shift+Alt+N',
    name: '正常'
  },
  {
    keys: 'Shift+Alt+L',
    name: '阈值（位图模式）'
  },
  {
    keys: 'Shift+Alt+I',
    name: '溶解'
  },
  {
    keys: 'Shift+Alt+Q',
    name: '背后'
  },
  {
    keys: 'Shift+Alt+R',
    name: '清除'
  },
  {
    keys: 'Shift+Alt+M',
    name: '正片叠底'
  },
  {
    keys: 'Shift+Alt+S',
    name: '屏幕'
  },
  {
    keys: 'Shift+Alt+O',
    name: '叠加'
  },
  {
    keys: 'Shift+Alt+F',
    name: '柔光'
  },
  {
    keys: 'Shift+Alt+H',
    name: '强光'
  },
  {
    keys: 'Shift+Alt+S',
    name: '滤色'
  },
  {
    keys: 'Shift+Alt+D',
    name: '颜色减淡'
  },
  {
    keys: 'Shift+Alt+B',
    name: '颜色加深'
  },
  {
    keys: 'Shift+Alt+K',
    name: '变暗'
  },
  {
    keys: 'Shift+Alt+G',
    name: '变亮'
  },
  {
    keys: 'Shift+Alt+E',
    name: '差值'
  },
  {
    keys: 'Shift+Alt+X',
    name: '排除'
  },
  {
    keys: 'Shift+Alt+U',
    name: '色相'
  },
  {
    keys: 'Shift+Alt+T',
    name: '饱和度'
  },
  {
    keys: 'Shift+Alt+C',
    name: '颜色'
  },
  {
    keys: 'Shift+Alt+Y',
    name: '光度'
  },
  {
    keys: 'Shift+Alt+J',
    name: '去色海棉工具'
  },
  {
    keys: 'Shift+Alt+A',
    name: '加色海棉工具'
  },
  {
    keys: 'Shift+Alt+W',
    name: '暗调减淡/加深工具'
  },
  {
    keys: 'Shift+Alt+V',
    name: '中间调减淡/加深工具'
  },
  {
    keys: 'Shift+Alt+Z',
    name: '高光减淡/加深工具'
  }
]
</script>
<style scoped lang="scss">
.container {
  display: flex;
  padding-left: 100px;
  width: calc(100% - 17px);
  height: 100%;
  overflow-x: hidden;
}
.column_wra {
  margin-right: 50px;
  width: 500px;
  .head {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2rem;
    background-color: aquamarine;
    font-size: 22px;
  }
  .body {
    display: flex;
    justify-content: center;
    p {
      display: block;
      width: 50%;
      height: 2rem;
      line-height: 2rem;
      color: aquamarine;
      background-color: #000;
    }
  }
}
</style>
