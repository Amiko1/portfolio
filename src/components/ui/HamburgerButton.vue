<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['onToggle'])

const isOpen = ref(false)

function toggleButton() {
  isOpen.value = !isOpen.value
  emit('onToggle', isOpen)
}
</script>

<template>
  <button class="text-gray-500 w-12 h-12 focus:outline-none active-cursor" @click="toggleButton">
    <span class="sr-only">Open main menu</span>
    <div
      aria-hidden="true"
      class="h-0.5 w-12 rounded bg-white transform transition duration-500 ease-in-out active-cursor"
      :class="{ 'rotate-45': isOpen, ' -translate-y-1.5': !isOpen }"
    ></div>

    <div
      aria-hidden="true"
      class="h-0.5 w-8 bg-white rounded transform transition duration-500 ease-in-out active-cursor"
      :class="{ '-rotate-45': isOpen, ' translate-y-1.5': !isOpen }"
    ></div>
  </button>
</template>
