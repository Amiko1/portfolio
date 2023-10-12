<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { HamburgerButton } from '@/components/ui'
</script>

<template>
  <header class="flex justify-between px-4 sm:px-0">
    <router-link
      to="/"
      class="font-abryl font-xl text-3xl font-semibold underline tracking-wide active-cursor"
      >amyko</router-link
    >
    <HamburgerButton />
  </header>
</template>
