<script setup lang="ts">
import { computed } from 'vue'
import { useLocaleContent } from '../composables/useLocaleContent'

const { content } = useLocaleContent()
const philosophyPage = computed(() => content.value.philosophyPage)
</script>

<template>
  <section class="px-4 py-14 sm:px-6 sm:py-16">
    <div class="mx-auto w-full max-w-6xl">
      <p class="text-xs uppercase tracking-[0.18em] text-dim">{{ philosophyPage.tag }}</p>
      <h1 class="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{{ philosophyPage.title }}</h1>
      <p class="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
        {{ philosophyPage.intro }}
      </p>

      <div class="mt-10 space-y-5">
        <article v-for="(principle, index) in philosophyPage.principles" :key="principle.title" class="panel-card">
          <p class="badge">0{{ index + 1 }}</p>
          <h2 class="mt-3 text-lg font-semibold text-neon">{{ principle.title }}</h2>
          <p class="mt-3 text-sm leading-7 text-muted">{{ principle.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
