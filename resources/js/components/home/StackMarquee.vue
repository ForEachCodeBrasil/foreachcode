<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>

<template>
  <div class="marquee">
    <div class="marquee-track">
      <ul class="marquee-list">
        <li v-for="item in items" :key="item" class="marquee-item">{{ item }}</li>
      </ul>
      <ul class="marquee-list marquee-copy" aria-hidden="true">
        <li v-for="item in items" :key="`copy-${item}`" class="marquee-item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
