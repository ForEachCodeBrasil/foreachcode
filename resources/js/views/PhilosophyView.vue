<script setup lang="ts">
import { computed } from 'vue'
import { useLocaleContent } from '../composables/useLocaleContent'

const { content } = useLocaleContent()
const philosophyPage = computed(() => content.value.philosophyPage)
</script>

<template>
  <section class="px-4 py-14 sm:px-6 sm:py-16">
    <div class="mx-auto w-full max-w-6xl">
      <h1 class="text-3xl font-semibold text-ink sm:text-4xl">{{ philosophyPage.title }}</h1>
      <p class="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
        {{ philosophyPage.intro }}
      </p>

      <div class="mt-12 max-w-4xl border-b border-edge-subtle">
        <article
          v-for="principle in philosophyPage.principles"
          :key="principle.title"
          class="grid gap-2 border-t border-edge-highlight py-6 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8"
        >
          <h2 class="text-base font-semibold text-ink">{{ principle.title }}</h2>
          <p class="text-sm leading-7 text-muted">{{ principle.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
