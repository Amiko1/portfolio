<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { TheHeroDescription, HeroIlustration } from '@/components/homeSections'
import { PaperAirplaneIcon } from '@/components/icons'

import { gsap, Power1 } from 'gsap'

const ilustration = ref<HTMLElement | null>(null)
const description = ref<HTMLElement | null>(null)
const paperAirplane = ref<HTMLElement | null>(null)

onMounted(() => {
  var tlimeline = gsap.timeline({ repeat: 0 })

  if (ilustration.value instanceof HTMLElement) {
    tlimeline
      .to(paperAirplane.value, {
        x: 130,
        y: -20,
        duration: 1,
        rotateZ: 25,
        rotateX: 25,
        ease: Power1.easeIn
      })
      .to(paperAirplane.value, {
        rotateZ: 45,
        rotateX: 45,
        x: 200,
        duration: 1,
        ease: Power1.easeIn
      })
      .to(paperAirplane.value, {
        rotateZ: -45,
        rotateX: -45,
        y: -100,
        x: 300,
        duration: 1,
        ease: Power1.easeIn
      })
      .to(paperAirplane.value, {
        rotateZ: 45,
        rotateX: 45,
        y: -50,
        x: 450,
        duration: 1,
        ease: Power1.easeIn
      })
      .to(paperAirplane.value, {
        bottom: 0,
        right: 0,
        rotateZ: -45,
        rotateX: -45,
        duration: 1,
        ease: Power1.easeIn
      })
  }
})
</script>
<template>
  <section class="flex lg:justify-center lg:items-center relative">
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
    <div ref="paperAirplane" class="fixed bottom-0">
      <PaperAirplaneIcon class="w-40" />
    </div>
  </section>
</template>
