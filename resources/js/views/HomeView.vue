<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { buildLocalizedPath } from '../content/site-content'
import { useLocaleContent } from '../composables/useLocaleContent'

const { locale, content } = useLocaleContent()
const home = computed(() => content.value.home)
</script>

<template>
  <div>
    <section class="border-b border-edge-subtle bg-grid px-4 py-20 sm:px-6 sm:py-24">
      <div class="mx-auto w-full max-w-6xl">
        <p class="text-xs uppercase tracking-[0.2em] text-neon">{{ home.badge }}</p>
        <h1 class="mt-4 max-w-5xl text-3xl font-semibold leading-tight text-ink sm:text-5xl">
          {{ home.title }}
        </h1>
        <p class="mt-5 max-w-4xl text-sm leading-7 text-muted sm:text-base">
          {{ home.subtitle }}
        </p>
        <p class="mt-4 max-w-4xl text-sm leading-7 text-muted sm:text-base">
          {{ home.supporting }}
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <RouterLink :to="buildLocalizedPath(locale, 'contact')" class="btn-primary">{{ home.primaryCta }}</RouterLink>
          <RouterLink :to="buildLocalizedPath(locale, 'work')" class="btn-secondary">{{ home.secondaryCta }}</RouterLink>
        </div>
      </div>
    </section>

    <section class="px-4 py-14 sm:px-6 sm:py-16">
      <div class="mx-auto grid w-full max-w-6xl gap-5 md:grid-cols-3">
        <article v-for="item in home.highlights" :key="item.title" class="panel-card">
          <h2 class="text-lg font-semibold text-neon">{{ item.title }}</h2>
          <p class="mt-3 text-sm leading-7 text-muted">{{ item.body }}</p>
        </article>
      </div>
    </section>

    <section class="border-t border-edge-subtle px-4 py-14 sm:px-6 sm:py-16">
      <div class="mx-auto w-full max-w-6xl">
        <p class="text-xs uppercase tracking-[0.18em] text-dim">{{ home.processTitle }}</p>
        <p class="mt-4 max-w-4xl text-base leading-7 text-muted sm:text-lg">
          {{ home.processBody }}
        </p>

        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article v-for="step in home.processSteps" :key="step" class="panel-card">
            <p class="text-sm font-semibold text-neon">{{ step }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
