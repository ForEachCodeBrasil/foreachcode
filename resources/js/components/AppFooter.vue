<script setup lang="ts">
import { company } from '../content/site-content'
</script>

<template>
  <footer class="border-t border-edge-subtle bg-panel">
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 sm:py-10">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-sm text-ink">{{ company.legalName }}</p>
        <a :href="`mailto:${company.email}`" class="text-sm text-muted transition-colors duration-150 hover:text-neon">
          {{ company.email }}
        </a>
      </div>
      <p class="text-xs uppercase tracking-[0.14em] text-dim">
        Built for teams that value clarity, quality, and consistent delivery.
      </p>
    </div>
  </footer>
</template>
