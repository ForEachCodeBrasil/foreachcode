<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { buildLocalizedPath } from '../content/site-content'
import { useLocaleContent } from '../composables/useLocaleContent'

const { locale, content } = useLocaleContent()
const quickLinks = computed(() => content.value.navLinks.filter((item) => ['services', 'work', 'contact'].includes(item.slug)))
</script>

<template>
  <footer class="border-t border-edge-subtle bg-panel">
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 sm:py-10">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-sm text-ink">{{ content.company.legalName }}</p>
        <a :href="`mailto:${content.company.email}`" class="text-sm text-muted transition-colors duration-150 hover:text-neon">
          {{ content.company.email }}
        </a>
      </div>
      <p class="text-xs uppercase tracking-[0.14em] text-dim">
        {{ content.footer.tagline }}
      </p>
      <div class="flex flex-wrap gap-3 text-xs uppercase tracking-[0.12em] text-muted">
        <RouterLink v-for="item in quickLinks" :key="item.slug" :to="buildLocalizedPath(locale, item.slug)" class="hover:text-neon">
          {{ item.label }}
        </RouterLink>
      </div>
    </div>
  </footer>
</template>
