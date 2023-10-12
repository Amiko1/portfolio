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
  <button class="text-gray-500 w-10 h-10 relative focus:outline-none" @click="toggleButton">
    <span class="sr-only">Open main menu</span>
    <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <span
        aria-hidden="true"
        class="block absolute h-0.5 w-12 rounded bg-white transform transition duration-500 ease-in-out"
        :class="{ 'rotate-45': isOpen, ' -translate-y-1.5': !isOpen }"
      ></span>

      <span
        aria-hidden="true"
        class="block absolute h-0.5 w-8 bg-white rounded transform transition duration-500 ease-in-out"
        :class="{ '-rotate-45': isOpen, ' translate-y-1.5': !isOpen }"
      ></span>
    </div>
  </button>
</template>
