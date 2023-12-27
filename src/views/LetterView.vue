<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Typed from 'typed.js'
const typedElement = ref(null)
const typedElement1 = ref(null)
let typed = null
let typed1 = null
onMounted(() => {
  typed = new Typed(typedElement.value, {
    strings: ['Happy Birthday To You ~'],
    typeSpeed: 100,
    backSpeed: 5, // 设置回退速度为 0
    // backDelay: Infinity, // 设置回退延迟为无限，即不回退
    // smartBackspace: false,
    showCursor: false,
    loop: true
    // 其他配置选项...
  }),
  typed1=new Typed(typedElement1.value, {
    strings: ['见字如面~ <br>小徐同学你好! <br>乍见之欢,愿久处仍心欢喜 <br> 相处虽短，却也言谈甚欢 <br>愿你继续满心欢喜热爱生活<br>或远赴人间惊鸿宴 一睹人间盛世颜<br>或追风赶月莫停留 平芜尽处是春山 <br>都能且喜且乐，且以永日.'],
    typeSpeed: 100,
    backSpeed: 0, // 设置回退速度为 0
    backDelay: Infinity, // 设置回退延迟为无限，即不回退
    smartBackspace: false,
    showCursor: false,
    // 其他配置选项...
  })
})

onBeforeUnmount(() => {
  if (typed) {
    typed.destroy()
  }
})
</script>
<template>
  <div class="container">
    <img class="bg1" src="../assets/img/bg1.png" alt="" />
    <div class="type1" ref="typedElement"></div>
    <div class="type2" ref="typedElement1"></div>

    <video src="../assets/ylsh.mp3" controls></video>
  </div>
</template>
<style scoped>
.container {
  padding-top: 20%;
  background-color: #d3d3d3;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 100vh;
}
.bg1 {
  width: 50%;
  display: block;
  margin: 0 auto;
}
@font-face {
  font-family: 'font2';
  src: url('@/assets/font2.ttf') format('truetype');
}
@font-face {
  font-family: 'font4';
  src: url('@/assets/font4.otf') format('opentype');
}
.type1 {
  font-size: 17px;
  font-weight: 600;
  font-family: font2;
  margin-top: -6px;
  text-align: center;
  background-image: linear-gradient(to right, #ff758c, #ff7eb3, #ff88db, #ff92ff);
  -webkit-background-clip: text;
  color: transparent;
  height: 5%;
}
.type2{
  font-size: 18px;
  letter-spacing: 2px;
  font-family: font4;
  margin-top: 15%;
  text-align: center;
  color:#333 ;
}
video{
  position: fixed;
  bottom: 0;
  width: 100vw;
}
</style>
