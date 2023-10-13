<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { TheHeroDescription, HeroIlustration } from '@/components/homeSections'
import { gsap } from 'gsap'

const ilustration = ref<HTMLElement | null>(null)
const description = ref<HTMLElement | null>(null)

onMounted(() => {
  var tl = gsap.timeline({ repeat: 1, repeatDelay: 1 })

  if (ilustration.value instanceof HTMLElement) {
    tl.from(description.value, { width: 0, duration: 1 })
    tl.to(description.value, { width: 100, duration: 1 })
  }
})
</script>
<template>
  <section class="flex lg:justify-center lg:items-center">
    <article class="flex flex-col lg:items-start lg:flex-row gap-14">
      <div ref="ilustration" class="basis-3/6">
        <HeroIlustration
          class="h-full w-full xl:w-full md:m-auto max-h-[40vh] xl:max-h-[initial] aspect-square"
        />
      </div>
      <div class="basis-3/6">
        <TheHeroDescription ref="description" />
      </div>
    </article>
  </section>
</template>
