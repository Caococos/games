<template>
  <div class="container">
    <!-- 1工具箱 -->
    <div class="column_wra">
      <h5 class="head">工具箱</h5>
      <div class="body" v-for="item in arr1">
        <p>{{ item.keys }}</p>
        <p>{{ item.name }}</p>
      </div>
    </div>
    <!-- 2文件操作 -->
    <div class="column_wra">
      <h5 class="head">文件操作</h5>
      <div class="body" v-for="item in arr2">
        <p>{{ item.keys }}</p>
        <p>{{ item.name }}</p>
      </div>
    </div>
    <!-- 3编辑操作 -->
    <div class="column_wra">
      <h5 class="head">编辑操作</h5>
      <div class="body" v-for="item in arr6">
        <p>{{ item.keys }}</p>
        <p>{{ item.name }}</p>
      </div>
    </div>
    <!-- 4图层混合 -->
    <div class="column_wra">
      <h5 class="head">图层混合</h5>
      <div class="body" v-for="item in arr3">
        <p>{{ item.keys }}</p>
        <p>{{ item.name }}</p>
      </div>
    </div>
    <!-- 5选择功能 -->
    <div class="column_wra">
      <h5 class="head">选择功能</h5>
      <div class="body" v-for="item in arr4">
        <p>{{ item.keys }}</p>
        <p>{{ item.name }}</p>
      </div>
    </div>
    <!-- 6滤镜 -->
    <div class="column_wra">
      <h5 class="head">滤镜</h5>
      <div class="body" v-for="item in arr5">
        <p>{{ item.keys }}</p>
        <p>{{ item.name }}</p>
      </div>
    </div>
    <!--7 图层操作 -->
    <div class="column_wra">
      <h5 class="head">图层操作</h5>
      <div class="body" v-for="item in arr8">
        <p>{{ item.keys }}</p>
        <p>{{ item.name }}</p>
      </div>
    </div>
    <!--8图像调整 -->
    <div class="column_wra">
      <h5 class="head">图像调整</h5>
      <div class="body" v-for="item in arr8">
        <p>{{ item.keys }}</p>
        <p>{{ item.name }}</p>
      </div>
    </div>
    <!-- 9视图操作 -->
    <div class="column_wra">
      <h5 class="head">视图操作</h5>
      <div class="body" v-for="item in arr10">
        <p>{{ item.keys }}</p>
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
// 工具箱
const arr1 = [
  { keys: 'M', name: '矩形、椭圆选框工具' },
  { keys: 'V', name: '移动工具' },
  { keys: 'L', name: '套索、多边形套索、磁性套索' },
  { keys: 'W', name: '魔棒工具' },
  { keys: 'C', name: '裁剪工具' },
  { keys: 'K', name: '切片工具、切片选择工具' },
  { keys: 'J', name: '修复画笔工具' },
  { keys: 'B', name: '画笔工具、铅笔工具' },
  { keys: 'S', name: '橡皮图章、图案图章' },
  { keys: 'Y', name: '历史画笔工具、艺术历史画笔' },
  { keys: 'E', name: '橡皮擦、背景擦除、魔术橡皮擦' },
  { keys: 'G', name: '渐变工具、油漆桶工具' },
  {
    keys: 'R',
    name: '旋转视图工具' //模糊、锐化、涂抹工具
  },
  { keys: 'O', name: '减淡、加深、海绵工具' },
  { keys: 'A', name: '路径选择工具、直接选取工具' },
  { keys: 'T', name: '文字工具' },
  { keys: 'P', name: '钢笔、自由钢笔' },
  { keys: 'U', name: '矩形、圆形工具' },
  { keys: 'N', name: '写字板、声音注释' },
  { keys: 'I', name: '吸管、颜色取样器、度量工具' },
  { keys: 'H', name: '抓手工具' },
  { keys: 'Z', name: '缩放工具' },
  { keys: 'D', name: '默认前景色和背景色' },
  { keys: 'X', name: '切换前景色和背景色' },
  { keys: 'Q', name: '切换标准模式和快速蒙版模式' },
  { keys: 'F', name: '标准屏幕模式、全屏模式' },
  { keys: 'Ctrl', name: '临时使用移动工具' },
  { keys: 'Alt', name: '临时使用吸色工具' },
  { keys: '空格', name: '临时使用抓手工具' },
  { keys: '[或]', name: '循环选择画笔' }
]
// 文件操作
const arr2 = [
  { keys: 'Ctrl+N', name: '新建图形文件' },
  { keys: 'Ctrl+Shift+N', name: '新建图层' },
  { keys: 'Ctrl+Alt+N', name: '用默认设置创建新文件' },
  { keys: 'Ctrl+O', name: '打开已有的图像' },
  { keys: 'Ctrl+Alt+O', name: '打开为...' },
  { keys: 'Ctrl+W', name: '关闭当前图像' },
  { keys: 'Ctrl+S', name: '保存当前图像' },
  { keys: 'Ctrl+Shift+S', name: '另存为...' },
  { keys: 'Ctrl+Alt+S', name: '存储副本' },
  { keys: 'Ctrl+Shift+P', name: '页面设置' },
  { keys: '打印', name: 'Ctrl+P' }
]
// 图层混合
const arr3 = [
  { keys: 'Alt+加或减', name: '循环选择混合模式' },
  { keys: 'Shift+Alt+N', name: '正常' },
  { keys: 'Shift+Alt+L', name: '阈值（位图模式）' },
  { keys: 'Shift+Alt+I', name: '溶解' },
  { keys: 'Shift+Alt+Q', name: '背后' },
  { keys: 'Shift+Alt+R', name: '清除' },
  { keys: 'Shift+Alt+M', name: '正片叠底' },
  { keys: 'Shift+Alt+S', name: '屏幕' },
  { keys: 'Shift+Alt+O', name: '叠加' },
  { keys: 'Shift+Alt+F', name: '柔光' },
  { keys: 'Shift+Alt+H', name: '强光' },
  { keys: 'Shift+Alt+S', name: '滤色' },
  { keys: 'Shift+Alt+D', name: '颜色减淡' },
  { keys: 'Shift+Alt+B', name: '颜色加深' },
  { keys: 'Shift+Alt+K', name: '变暗' },
  { keys: 'Shift+Alt+G', name: '变亮' },
  { keys: 'Shift+Alt+E', name: '差值' },
  { keys: 'Shift+Alt+X', name: '排除' },
  { keys: 'Shift+Alt+U', name: '色相' },
  { keys: 'Shift+Alt+T', name: '饱和度' },
  { keys: 'Shift+Alt+C', name: '颜色' },
  { keys: 'Shift+Alt+Y', name: '光度' },
  { keys: 'Shift+Alt+J', name: '去色海棉工具' },
  { keys: 'Shift+Alt+A', name: '加色海棉工具' },
  { keys: 'Shift+Alt+W', name: '暗调减淡/加深工具' },
  { keys: 'Shift+Alt+V', name: '中间调减淡/加深工具' },
  { keys: 'Shift+Alt+Z', name: '高光减淡/加深工具' }
]
// 选择功能
const arr4 = [
  { keys: 'Ctrl+A', name: '全部选取' },
  { keys: 'Ctrl+D', name: '取消选择' },
  { keys: 'Ctrl+Shift+D', name: '重新选择' },
  { keys: 'Ctrl+Alt+D', name: '羽化选择' },
  { keys: 'Ctrl+Shift+I', name: '反向选择' },
  { keys: 'Ctrl+图层', name: '载入选区' }
]
// 滤镜
const arr5 = [
  { keys: 'Ctrl+F', name: '按上次的参数再做一次上次的滤镜' },
  { keys: 'Ctrl+Shift+F', name: '退去上次所做滤镜的效果' },
  { keys: 'Ctrl+Alt+F', name: '重复上次所做的滤镜(可调参数)' },
  { keys: 'V', name: '选择工具(在“3D变化”滤镜中)' },
  { keys: 'M', name: '立方体工具(在“3D变化”滤镜中)' },
  { keys: 'N', name: '球体工具(在“3D变化”滤镜中)' },
  { keys: 'C', name: '柱体工具(在“3D变化”滤镜中)' },
  { keys: 'R', name: '轨迹球(在“3D变化”滤镜中)' },
  { keys: 'E', name: '全景相机工具(在“3D变化”滤镜中)' },
  { keys: '+', name: '增加锚点工具' },
  { keys: '-', name: '减少锚点工具' },
  { keys: 'H', name: '移动视图(在“3D变化”滤镜中)' },
  { keys: 'Z', name: '缩放视图(在“3D变化”滤镜中)' }
]
// 编辑操作
const arr6 = [
  { keys: 'Ctrl+Z', name: '还原/重做前一步操作' },
  { keys: 'Ctrl+Alt+Z', name: '还原两步以上操作' },
  { keys: 'Ctrl+Shift+Z', name: '重做两步以上操作' },
  { keys: 'Ctrl+X或F2', name: '剪切选取的图像或路径' },
  { keys: 'Ctrl+C', name: '拷贝选取的图像或路径' },
  { keys: 'Ctrl+Shift+C', name: '合并拷贝' },
  { keys: 'Ctrl+V或F4', name: '将剪贴板的内容粘到当前图形中' },
  { keys: 'Ctrl+Shift+V', name: '将剪贴板的内容粘到选框中' },
  { keys: 'Ctrl+T', name: '自由变换' },
  { keys: 'Enter', name: '应用自由变换(在自由变换模式下' },
  { keys: 'Alt', name: '从中心或对称点开始变换 (在自由变换模式下)' },
  { keys: 'Shift', name: '限制(在自由变换模式下)' },
  { keys: 'Ctrl', name: '扭曲(在自由变换模式下)' },
  { keys: 'Esc', name: '取消变形(在自由变换模式下)' },
  { keys: 'Ctrl+Shift+T', name: '自由变换复制的象素数据' },
  { keys: 'Ctrl+Shift+Alt+T', name: '再次变换复制的象素数据并建立一个副本' },
  { keys: 'DEL', name: '删除选框中的图案或选取的路径' },
  { keys: 'Alt+BackSpace或Alt+Del', name: '用前景色填充所选区域或整个图层' },
  { keys: 'Ctrl+BackSpace或Ctrl+Del', name: '用背景色填充所选区域或整个图层' },
  { keys: 'Shift+BackSpace或Shift+F5', name: '弹出“填充”对话框' },
  { keys: 'Alt+Ctrl+Backspace', name: '从历史记录中填充' }
]
// 图层操作
const arr8 = [
  { keys: 'Ctrl+Shift+N', name: '从对话框新建一个图层' },
  { keys: 'Ctrl+Alt+Shift+N', name: '以默认选项建立一个新的图层' },
  { keys: 'Ctrl+J', name: '通过拷贝建立一个图层' },
  { keys: 'Ctrl+Alt+J', name: '从对话框建立一个通过拷贝的图层' },
  { keys: 'Ctrl+Shift+J', name: '通过剪切建立一个图层' },
  { keys: 'Ctrl+Alt+Shift+J', name: '从对话框建立一个通过剪切的图层' },
  { keys: 'Ctrl+G', name: '与前一图层编组' },
  { keys: 'Ctrl+Shift+G', name: '取消编组' },
  { keys: 'Ctrl+E', name: '向下合并或合并联接图层' },
  { keys: 'Ctrl+Shift+E', name: '合并可见图层' },
  { keys: 'Ctrl+Alt+E', name: '盖印或盖印联接图层' },
  { keys: 'Ctrl+Alt+Shift+E', name: '盖印可见图层' },
  { keys: 'Ctrl+[', name: '将当前层下移一层' },
  { keys: 'Ctrl+]', name: '将当前层上移一层' },
  { keys: 'Ctrl+Shift+[', name: '将当前层移到最下面' },
  { keys: 'Ctrl+Shift+]', name: '将当前层移到最上面' },
  { keys: 'Alt+[', name: '激活下一个图层' },
  { keys: 'Alt+]', name: '激活上一个图层' },
  { keys: 'Alt+Shift+[', name: '激活底部图层' },
  { keys: 'Alt+Shift+]', name: '激活顶部图层' },
  { keys: '/', name: '保留当前图层的透明区域(开关)' }
]
// 图像调整
const arr9 = [
  { keys: 'Ctrl+L', name: '调整色阶' },
  { keys: 'Ctrl+Shift+L', name: '自动调整色阶' },
  { keys: 'Ctrl+Shift+Alt+L', name: '自动调整对比度' },
  { keys: 'Ctrl+M', name: '打开曲线调整对话框' },
  { keys: '↑、↓、→、←', name: '移动所选点(‘曲线’对话框中)' },
  { keys: 'Shift+点按', name: '选择多个控制点(‘曲线’对话框中)' },
  { keys: 'Ctrl+Tab', name: '前移控制点(‘曲线’对话框中)' },
  { keys: 'Ctrl+Shift+Tab', name: '后移控制点(‘曲线’对话框中)' },
  { keys: 'Ctrl+点按', name: '除点(‘曲线’对话框中)' },
  { keys: 'Ctrl+D', name: '取消选择所选通道上的所有点(‘曲线’对话框中)' },
  { keys: 'Alt+点按网格', name: '使曲线网格更精细或更粗糙(‘曲线’对话框中)' },
  { keys: 'Ctrl+~', name: '选择彩色通道(‘曲线’对话框中)' },
  { keys: 'Ctrl+数字', name: '选择单色通道(‘曲线’对话框中)' },
  { keys: 'Ctrl+B', name: '打开“色彩平衡”对话框' },
  { keys: 'Ctrl+U', name: '打开“色相/饱和度”对话框' },
  { keys: 'Ctrl+~', name: '全图调整(在色相/饱和度”对话框中)' },
  { keys: 'Ctrl+Shift+U', name: '去色' },
  { keys: 'Ctrl+I', name: '反相' },
  { keys: 'Ctrl+Alt+X', name: '打开“抽取”对话框' },
  { keys: 'B', name: '边缘增量工具(在抽取对话框)' },
  { keys: 'G', name: '填充工具' },
  { keys: 'E', name: '擦除工具(抽取)' },
  { keys: 'C', name: '清除工具(抽取)' },
  { keys: 'T', name: '边缘修饰工具(抽取)' },
  { keys: 'Z', name: '缩放工具(抽取)' },
  { keys: 'H', name: '抓手工具(抽取)' },
  { keys: 'F', name: '改变显示模式(抽取)' },
  { keys: '[', name: '减小画笔大小(抽取)' },
  { keys: ']', name: '加大画笔大小(抽取)' },
  { keys: 'Alt+BackSpace', name: '完全删除增亮线(抽取)' },
  { keys: 'Ctrl+BackSpace', name: '增亮整个抽取对象(抽取)' },
  { keys: 'Ctrl+Shift+X', name: '打开液化对话框' },
  { keys: 'W', name: '扭曲工具(液化)' },
  { keys: 'R', name: '顺时针转动工具(液化)' },
  { keys: 'L', name: '逆时针转动工具(液化)' },
  { keys: 'P', name: '缩拢工具(液化)' },
  { keys: 'B', name: '扩张工具(液化)' },
  { keys: 'M', name: '反射工具(液化)' },
  { keys: 'E', name: '重构工具(液化)' },
  { keys: 'F', name: '冻结工具(液化)' },
  { keys: 'T', name: '解冻工具(液化)' },
  { keys: 'Ctrl+I', name: '显示彩色通道' },
  { keys: 'Ctrl+数字', name: '显示单色通道' }
]
// 视图操作
const arr10 = [
  { keys: 'Ctrl+/', name: '选择快速蒙版' },
  { keys: '~', name: '始终在视窗显示复合通道' },
  { keys: 'Ctrl+Y', name: '以CMYK方式预览(开关)' },
  { keys: 'Ctrl+Shift+Y', name: '打开/关闭色域警告' },
  { keys: 'Ctrl+[+]', name: '放大视图' },
  { keys: 'Ctrl+[-]', name: '缩小视图' },
  { keys: 'Ctrl+O', name: '满画布显示' },
  { keys: 'Ctrl+Alt+O', name: '实际像素显示' },
  { keys: 'PageUp', name: '向上卷动一屏' },
  { keys: 'PageDown', name: '向下卷动一屏' },
  { keys: 'Ctrl+PageUp', name: '向左卷动一屏' },
  { keys: 'Ctrl+PageDown', name: '向右卷动一屏' },
  { keys: 'Shift+PageUp', name: '向上卷动十个单位' },
  { keys: 'Ctrl+/', name: '选择快速蒙版' }
]
</script>
<style scoped lang="scss">
.container {
  display: flex;
  padding-left: 100px;
  width: calc(100% - 17px);
  height: 100%;
  overflow-x: hidden;
  flex-wrap: wrap;
}
.column_wra {
  margin: 0 50px 50px 0;
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
