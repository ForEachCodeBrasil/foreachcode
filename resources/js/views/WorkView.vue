<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { buildLocalizedPath } from '../content/site-content'
import { useLocaleContent } from '../composables/useLocaleContent'

const { locale, content } = useLocaleContent()
const workPage = computed(() => content.value.workPage)
const labels = computed(() => workPage.value.labels)
const firstOwn = computed(() => workPage.value.caseStudies.findIndex((item) => item.own === true))
</script>

<template>
  <section class="px-4 py-14 sm:px-6 sm:py-16">
    <div class="mx-auto w-full max-w-6xl">
      <h1 class="text-3xl font-semibold text-ink sm:text-4xl">{{ workPage.title }}</h1>
      <p class="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
        {{ workPage.intro }}
      </p>

      <div class="mt-12 space-y-20">
        <template v-for="(item, index) in workPage.caseStudies" :key="item.title">
        <h2 v-if="index === firstOwn" v-reveal class="label pt-6 text-accent">{{ workPage.ownTitle }}</h2>
        <article class="border-t border-edge-highlight pt-8">
          <header v-reveal>
            <h2 class="max-w-4xl text-2xl font-semibold leading-snug text-ink sm:text-3xl">{{ item.title }}</h2>
            <p class="mt-3 text-sm text-muted">{{ item.kind }}</p>
            <p class="mt-2 font-mono text-xs text-accent">{{ item.status }}</p>
            <ul class="mt-4 flex flex-wrap gap-2" :aria-label="labels.stack">
              <li v-for="tech in item.stack" :key="tech" class="badge">{{ tech }}</li>
            </ul>
          </header>

          <figure v-if="item.image" v-reveal="1" class="mt-8">
            <div v-tilt class="tilt spotlight tilt-frame border border-edge-highlight bg-panel">
              <img
                :src="item.image.src"
                :alt="item.image.alt"
                :width="item.image.width ?? 1280"
                :height="item.image.height ?? 800"
                loading="lazy"
                decoding="async"
                class="tilt-media block h-auto w-full"
              >
            </div>
            <figcaption class="mt-3 font-mono text-xs text-dim">{{ item.image.caption }}</figcaption>
          </figure>

          <figure v-for="shot in item.gallery ?? []" :key="shot.src" v-reveal="1" class="mt-8">
            <div v-tilt class="tilt spotlight tilt-frame border border-edge-highlight bg-panel">
              <img
                :src="shot.src"
                :alt="shot.alt"
                :width="shot.width ?? 1280"
                :height="shot.height ?? 800"
                loading="lazy"
                decoding="async"
                class="tilt-media block h-auto w-full"
              >
            </div>
            <figcaption class="mt-3 font-mono text-xs text-dim">{{ shot.caption }}</figcaption>
          </figure>

          <p v-if="item.metrics.length > 0" class="label mt-8">{{ labels.metrics }}</p>
          <dl v-if="item.metrics.length > 0" class="mt-3 grid gap-x-10 sm:grid-cols-3">
            <div v-for="(metric, metricIndex) in item.metrics" :key="metric.label" v-reveal="metricIndex" class="flex flex-col border-t border-edge-subtle py-5">
              <dt class="order-2 mt-3 text-sm leading-6 text-muted">{{ metric.label }}</dt>
              <dd class="figure text-4xl sm:text-5xl">{{ metric.value }}</dd>
            </div>
          </dl>

          <div v-reveal class="mt-8 max-w-3xl space-y-6">
            <div class="grid gap-1 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6">
              <h3 class="label pt-1">{{ labels.problem }}</h3>
              <p class="text-base leading-7 text-muted">{{ item.problem }}</p>
            </div>
            <div class="grid gap-1 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6">
              <h3 class="label pt-1">{{ labels.solution }}</h3>
              <p class="text-base leading-7 text-muted">{{ item.solution }}</p>
            </div>
            <div class="grid gap-1 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6">
              <h3 class="label pt-1 text-accent">{{ labels.result }}</h3>
              <p class="text-base leading-7 text-ink">{{ item.result }}</p>
            </div>
          </div>
        </article>
        </template>
      </div>

      <RouterLink :to="buildLocalizedPath(locale, 'contact')" class="btn-primary mt-14">{{ workPage.cta }} <span class="btn-arrow" aria-hidden="true">→</span></RouterLink>
    </div>
  </section>
</template>
