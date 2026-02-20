<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { buildLocalizedPath } from '../content/site-content'
import { useLocaleContent } from '../composables/useLocaleContent'

const { locale, content } = useLocaleContent()
const servicesPage = computed(() => content.value.servicesPage)
</script>

<template>
  <section class="px-4 py-14 sm:px-6 sm:py-16">
    <div class="mx-auto w-full max-w-6xl">
      <p class="text-xs uppercase tracking-[0.18em] text-dim">{{ servicesPage.tag }}</p>
      <h1 class="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{{ servicesPage.title }}</h1>
      <p class="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
        {{ servicesPage.intro }}
      </p>

      <div class="mt-10 grid gap-5 lg:grid-cols-3">
        <article v-for="service in servicesPage.packages" :key="service.title" class="panel-card">
          <h2 class="text-lg font-semibold text-neon">{{ service.title }}</h2>
          <p class="mt-3 text-sm leading-7 text-muted">{{ service.idealFor }}</p>
          <p class="mt-3 text-xs uppercase tracking-[0.12em] text-dim">{{ service.timeline }}</p>
          <ul class="mt-4 space-y-2 text-sm leading-7 text-muted">
            <li v-for="item in service.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>

      <RouterLink :to="buildLocalizedPath(locale, 'contact')" class="btn-primary mt-8 inline-flex">{{ servicesPage.cta }}</RouterLink>
    </div>
  </section>
</template>
