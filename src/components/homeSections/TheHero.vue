<script setup lang="ts">
import { TheHeroDescription } from '@/components/homeSections'
</script>

<template>
  <section class="flex lg:justify-center lg:items-center">
    <article class="flex flex-col lg:flex-row gap-14">
      <div class="basis-3/6">
        <img class="h-full w-full md:w-fit md:m-auto" src="../../assets/img/forest.png" />
      </div>
      <div class="basis-3/6">
        <TheHeroDescription />
      </div>
    </article>
  </section>
</template>
