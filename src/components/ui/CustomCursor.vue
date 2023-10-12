<script setup lang="ts">
import { ref } from 'vue'

const x = ref(0)
const y = ref(0)
const isCursorActive = ref(false)
const isBtnCursorActive = ref(false)

document.addEventListener('mousemove', cursor)
document.addEventListener('mouseover', activeCursor)

function cursor(event: MouseEvent) {
  x.value = event.clientX
  y.value = event.clientY
}

function activeCursor(event: MouseEvent) {
  const target = event.target

  if (!(target instanceof HTMLElement)) {
    return
  }
  console.log(target)

  if (target.classList.contains('active-cursor')) {
    isCursorActive.value = true
  } else if (target.classList.contains('active-cursor-btn')) {
    isBtnCursorActive.value = true
  } else {
    isCursorActive.value = false
    isBtnCursorActive.value = false
  }
}
</script>

<template>
  <div
    class="cursor hidden lg:block"
    :class="{ actived: isCursorActive, 'btn-atctived': isBtnCursorActive }"
    :style="{ left: x + 'px', top: y + 'px' }"
  ></div>
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
  transition: all 0.5s ease-in-out;
  transition-property: background, transform;
  transform-origin: 75% 75%;
}

.cursor.actived {
  transform: scale(3);
  background: rgb(86, 124, 228);
  z-index: -1;
}

.cursor.btn-atctived {
  transform: scale(3);
  background: rgb(96, 107, 138);
}

.cursor.cursor.btn-atctived::after {
  content: 'Tap';
  font-size: 5px;
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
}
</style>
