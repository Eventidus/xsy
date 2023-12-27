<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import router from '../router/index'
import confetti from 'canvas-confetti'
const arr = ref(['Hello~', '见字如面'])
// var scalar = 2;
// var pineapple = confetti.shapeFromText({ text: '🎉', scalar });
const fireConfetti = () => {
  var count = 200
  var defaults = {
    origin: { y: 0.7 }
  }
  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    })
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55
  })
  fire(0.2, {
    spread: 60
  })
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 45
  })
  router.push('/letter')
}
</script>
<template>
  <div class="container">
    <div class="text">
      <VueWriter :array="arr" :eraseSpeed="100" :typeSpeed="200" delay="800"></VueWriter>
      <img class="gif" src="../assets//notification.gif" @click="fireConfetti" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(@/assets/img/index-bg1.webp);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
@font-face {
  font-family: 'font1';
  src: url('@/assets/font1.otf') format('opentype');
}
.text {
  text-align: center;
  font-family: font1;
  font-weight: 500;
  font-size: 28px;
  color: #ffffff; /* 颜色设置为白色或其他在粉红色背景上清晰可见的颜色 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 添加文字阴影以提高可读性 */
}
.gif {
  width: 12%;
  height: 12%;
  cursor: pointer;
}
</style>
