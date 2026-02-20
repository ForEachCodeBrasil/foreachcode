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
      <p class="text-xs uppercase tracking-[0.18em] text-dim">{{ aboutPage.tag }}</p>
      <h1 class="mt-3 max-w-4xl text-3xl font-semibold text-ink sm:text-4xl">{{ aboutPage.title }}</h1>
      <p class="mt-4 max-w-4xl text-sm leading-7 text-muted sm:text-base">
        {{ aboutPage.intro }}
      </p>

      <div class="mt-8 space-y-3">
        <p v-for="paragraph in aboutPage.story" :key="paragraph" class="text-sm leading-7 text-muted">
          {{ paragraph }}
        </p>
      </div>

      <div class="mt-10 grid gap-5 md:grid-cols-3">
        <article v-for="pillar in aboutPage.pillars" :key="pillar.title" class="panel-card">
          <h2 class="text-lg font-semibold text-neon">{{ pillar.title }}</h2>
          <p class="mt-3 text-sm leading-7 text-muted">{{ pillar.body }}</p>
        </article>
      </div>

      <RouterLink :to="buildLocalizedPath(locale, 'contact')" class="btn-primary mt-8 inline-flex">{{ aboutPage.cta }}</RouterLink>
    </div>
  </section>
</template>
