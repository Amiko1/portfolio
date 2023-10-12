<script setup lang="ts">
import { ExploreButton } from '@/components/ui'
</script>

<template>
  <div class="flex flex-col items-center lg:items-start h-full lg:justify-center gap-10">
    <h2
      class="text-center lg:text-start font-abryl font-bold text-2xl lg:text-5xl xl:text-7xl leadin-10 xl:leading-20"
    >
      Freedom at your
      <span class="text-sky-500">fingertips </span>.
    </h2>
    <p class="text-center lg:text-start font-normal text-lg text-gray-400 lg:text-2xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam asperiores ad laboriosam iure
      rem. Voluptates pariatur quo iusto non deleniti.
    </p>
    <ExploreButton class="w-1/2 lg:w-fit" />
  </div>
</template>

<style scope></style>
