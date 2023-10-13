<script setup lang="ts">
import { LinkedinIcon, MediumIcon, CodepenIcon } from '@/components/icons'
</script>
<template>
  <article class="h-screen fixed left-0 w-12">
    <ul class="flex flex-col gap-4 h-full justify-center">
      <li>
        <a
          class="cursor-pointer w-60 h-10 bg-sky-300 flex justify-between items-center rounded-r-full transform -translate-x-44 transition duration-500 hover:translate-x-0 pointer"
        >
          <p class="font-bold ml-2 text-sky-700 uppercase">check Linkedin</p>
          <LinkedinIcon width="40px"
        /></a>
      </li>
      <li>
        <a
          class="cursor-pointer w-60 h-10 bg-sky-300 flex justify-between items-center rounded-r-full transform -translate-x-44 transition duration-500 hover:translate-x-0 pointer"
        >
          <p class="font-bold ml-2 text-sky-700 uppercase">Check Medium</p>
          <MediumIcon width="40px"
        /></a>
      </li>
      <li>
        <a
          class="cursor-pointer w-60 h-10 bg-sky-300 flex justify-between items-center rounded-r-full transform -translate-x-44 transition duration-500 hover:translate-x-0 pointer"
        >
          <p class="font-bold ml-2 text-sky-700 uppercase">Check Codepen</p>
          <CodepenIcon width="40px"
        /></a>
      </li>
    </ul>
  </article>
</template>
