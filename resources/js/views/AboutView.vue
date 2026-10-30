<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { buildLocalizedPath } from '../content/site-content'
import { useLocaleContent } from '../composables/useLocaleContent'

const { locale, content } = useLocaleContent()
const aboutPage = computed(() => content.value.aboutPage)
</script>

<template>
  <section class="px-4 py-14 sm:px-6 sm:py-16">
    <div class="mx-auto w-full max-w-6xl">
      <h1 class="max-w-4xl text-3xl font-semibold text-ink sm:text-4xl">{{ aboutPage.title }}</h1>
      <p class="mt-4 max-w-4xl text-sm leading-7 text-muted sm:text-base">
        {{ aboutPage.intro }}
      </p>

      <div class="mt-8 space-y-3">
        <p v-for="paragraph in aboutPage.story" :key="paragraph" class="max-w-3xl text-base leading-7 text-muted">
          {{ paragraph }}
        </p>
      </div>

      <dl class="mt-12 max-w-4xl border-b border-edge-subtle">
        <div
          v-for="pillar in aboutPage.pillars"
          :key="pillar.title"
          class="grid gap-2 border-t border-edge-highlight py-6 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8"
        >
          <dt class="font-display text-base font-semibold text-ink">{{ pillar.title }}</dt>
          <dd class="text-sm leading-7 text-muted">{{ pillar.body }}</dd>
        </div>
      </dl>

      <RouterLink :to="buildLocalizedPath(locale, 'contact')" class="btn-primary mt-8 inline-flex">{{ aboutPage.cta }}</RouterLink>
    </div>
  </section>
</template>
