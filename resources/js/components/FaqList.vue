<script setup lang="ts">
defineProps<{
  title: string
  items: { q: string, a: string }[]
}>()
</script>

<template>
  <div>
    <h2 class="text-xl font-semibold text-ink">{{ title }}</h2>
    <div class="mt-5 border-t border-edge-subtle">
      <details v-for="item in items" :key="item.q" class="group border-b border-edge-subtle">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-medium text-ink hover:text-accent">
          {{ item.q }}
          <span class="text-dim transition-transform duration-150 group-open:rotate-45" aria-hidden="true">+</span>
        </summary>
        <p class="pb-5 text-sm leading-7 text-muted">{{ item.a }}</p>
      </details>
    </div>
  </div>
</template>
