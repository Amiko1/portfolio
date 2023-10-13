<script setup lang="ts">
import { TheNavigation, TheHeader, NetworkLinks } from '@/components/layout'
import { CustomCursor } from '@/components/ui'
</script>

<template>
  <NetworkLinks />
  <div class="container mx-auto">
    <div class="h-header flex items-center">
      <TheHeader class="w-full z-10" />
    </div>
    <RouterView />
  </div>
  <!-- <TheNavigation /> -->
  <CustomCursor />
</template>
