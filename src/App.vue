<script setup lang="ts">
import { TheNavigation, TheHeader } from '@/components/layout'
import { CustomCursor } from '@/components/ui'
</script>

<template>
  <div class="px-10 lg:px-40 h-header flex items-center">
    <TheHeader class="w-full z-10" />
  </div>
  <div class="container mx-auto">
    <RouterView />
  </div>
  <!-- <TheNavigation /> -->
  <CustomCursor />
</template>
