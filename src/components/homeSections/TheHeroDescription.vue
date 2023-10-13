<script setup lang="ts">
import { ExploreButton } from '@/components/ui'
import { ref } from 'vue'

const isExpBtnHovered = ref(false)

function toggleIsExpBtnHovered() {
  console.log(isExpBtnHovered.value)
  isExpBtnHovered.value = !isExpBtnHovered.value
}
</script>

<template>
  <div class="flex flex-col items-center lg:items-start h-full gap-10">
    <div class="relative overflow-hidden">
      <h2
        class="text-center lg:text-start font-abryl font-bold text-2xl lg:text-5xl xl:text-7xl leadin-10 xl:leading-20"
      >
        middle front end
        <span class="transition duration-1000" :class="{ 'text-white': isExpBtnHovered }"
          >developer.
        </span>
      </h2>
      <div
        class="hidden lg:block bg-sky-500 w-full h-full mix-blend-darken absolute transform -left-10 translate-y-[-50%] transition duration-1000 ease-in-out"
        :class="{ 'translate-y-[-150%]': isExpBtnHovered }"
      ></div>
    </div>
    <p class="text-center lg:text-start font-normal text-lg text-gray-300 lg:text-2xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam asperiores ad laboriosam iure
      rem. Voluptates pariatur quo iusto non deleniti.
    </p>
    <ExploreButton
      @mouseover="toggleIsExpBtnHovered"
      @mouseleave="toggleIsExpBtnHovered"
      class="w-1/2 lg:w-fit"
    />
  </div>
</template>

<style scope></style>
