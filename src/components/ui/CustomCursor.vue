<script setup lang="ts">
import { ref } from 'vue'

const x = ref(0)
const y = ref(0)

document.addEventListener('mousemove', (event) => {
  x.value = event.clientX
  y.value = event.clientY
})
</script>

<template>
  <div class="cursor" :style="{ left: x + 'px', top: y + 'px' }"></div>
</template>

<style scoped>
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 3rem;
  height: 3rem;
  border: 2px solid white;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}
</style>
