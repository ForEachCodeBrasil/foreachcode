<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { buildLocalizedPath } from '../content/site-content'
import { useLocaleContent } from '../composables/useLocaleContent'
import ReactiveGrid from '../components/ReactiveGrid.vue'
import ChannelLinks from '../components/ChannelLinks.vue'
import TerminalHero from '../components/home/TerminalHero.vue'
import ProcessTimeline from '../components/home/ProcessTimeline.vue'
import CountUp from '../components/home/CountUp.vue'
import StackMarquee from '../components/home/StackMarquee.vue'

const { locale, content } = useLocaleContent()
const home = computed(() => content.value.home)
const founder = computed(() => content.value.teamPage.members[0])
const featuredCases = computed(() => content.value.workPage.caseStudies.slice(0, 3))

// Ferramentas que aparecem nos repositórios dos cases (nomes próprios, iguais nos dois idiomas)
const stack = [
  'Laravel', 'PHP', 'Vue 3', 'TypeScript', 'Inertia', 'Livewire', 'Filament', 'Octane', 'Reverb', 'Horizon',
  'Postgres', 'PostGIS', 'Stripe', 'Square', 'AWS', 'Laravel Cloud', 'Rust', 'Tauri', 'Gemini', 'Firebase',
]
</script>

<template>
  <div>
    <ReactiveGrid class="border-b border-edge-subtle px-4 py-16 sm:px-6 sm:py-24">
      <div class="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div>
          <h1 class="text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            {{ home.title }}
          </h1>
          <p class="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
            {{ home.subtitle }}
          </p>
          <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <RouterLink :to="buildLocalizedPath(locale, 'contact')" class="btn-primary">{{ home.primaryCta }} <span class="btn-arrow" aria-hidden="true">→</span></RouterLink>
            <RouterLink :to="buildLocalizedPath(locale, 'work')" class="link-action">{{ home.secondaryCta }}</RouterLink>
          </div>
          <p class="label mt-10">{{ home.badge }}</p>
        </div>
        <TerminalHero :title="home.terminalTitle" :lines="home.terminal" />
      </div>
    </ReactiveGrid>

    <section class="border-b border-edge-subtle px-4 py-14 sm:px-6 sm:py-16">
      <div class="mx-auto w-full max-w-6xl">
        <h2 v-reveal class="text-2xl font-semibold text-ink">{{ home.statsTitle }}</h2>
        <dl class="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="(stat, index) in home.stats" :key="stat.label" v-reveal="index" class="stat-cell flex flex-col border-t border-edge-highlight py-6">
            <dt class="order-2 mt-3 max-w-[16rem] text-sm leading-6 text-muted">{{ stat.label }}</dt>
            <dd class="figure text-5xl sm:text-6xl">
              <CountUp :value="stat.value" :prefix="stat.prefix" :suffix="stat.suffix" />
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="border-b border-edge-subtle px-4 py-14 sm:px-6 sm:py-16">
      <div class="mx-auto w-full max-w-6xl">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div v-reveal>
            <h2 class="text-2xl font-semibold text-ink sm:text-3xl">{{ home.casesTitle }}</h2>
            <p class="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">{{ home.casesBody }}</p>
          </div>
          <RouterLink :to="buildLocalizedPath(locale, 'work')" class="link-action">{{ home.casesCta }} <span class="btn-arrow" aria-hidden="true">→</span></RouterLink>
        </div>
        <ul class="mt-10 grid gap-6 md:grid-cols-3">
          <li v-for="(item, index) in featuredCases" :key="item.title" v-reveal="index">
            <RouterLink
              v-tilt
              :to="buildLocalizedPath(locale, 'work')"
              class="tilt spotlight group block border border-edge-subtle bg-panel hover:border-edge-highlight"
            >
              <div class="tilt-frame aspect-[16/10] border-b border-edge-subtle">
                <img
                  v-if="item.image"
                  :src="item.image.cardSrc ?? item.image.src"
                  :alt="item.image.alt"
                  :width="item.image.width ?? 1280"
                  :height="item.image.height ?? 800"
                  loading="lazy"
                  decoding="async"
                  class="tilt-media h-full w-full object-cover object-top"
                >
                <div v-else class="tilt-media case-stack flex h-full w-full flex-col justify-end gap-3 p-5" aria-hidden="true">
                  <p class="font-mono text-xs text-dim">stack</p>
                  <ul class="flex flex-wrap gap-1.5">
                    <li v-for="tech in item.stack" :key="tech" class="border border-edge-subtle bg-canvas px-2 py-1 font-mono text-xs text-muted">{{ tech }}</li>
                  </ul>
                </div>
              </div>
              <div class="p-5">
                <h3 class="text-lg font-semibold text-ink">{{ item.title }}</h3>
                <p class="mt-1 text-sm leading-6 text-muted">{{ item.kind }}</p>
                <p class="mt-3 font-mono text-xs text-accent">{{ item.status }}</p>
                <ul v-if="item.image && !item.own" class="mt-4 flex flex-wrap gap-1.5" :aria-label="content.workPage.labels.stack">
                  <li v-for="tech in item.stack" :key="tech" class="border border-edge-subtle bg-canvas px-2 py-1 font-mono text-xs text-muted">{{ tech }}</li>
                </ul>
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>

    <section class="border-b border-edge-subtle py-12">
      <div class="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <h2 v-reveal class="label">{{ home.stackTitle }}</h2>
      </div>
      <div class="mx-auto mt-5 w-full max-w-6xl">
        <StackMarquee :items="stack" />
      </div>
    </section>

    <section class="px-4 py-14 sm:px-6 sm:py-16">
      <div class="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <h2 v-reveal class="text-2xl font-semibold leading-snug text-ink sm:text-3xl">{{ home.highlightsTitle }}</h2>
        <dl>
          <div
            v-for="(item, index) in home.highlights"
            :key="item.title"
            v-reveal="index"
            class="grid gap-2 border-t border-edge-subtle py-6 first:border-edge-highlight sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-8"
          >
            <dt class="font-display text-base font-semibold text-ink">{{ item.title }}</dt>
            <dd class="text-sm leading-7 text-muted">{{ item.body }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="border-t border-edge-subtle px-4 py-14 sm:px-6 sm:py-16">
      <div class="mx-auto w-full max-w-6xl">
        <h2 v-reveal class="text-2xl font-semibold text-ink sm:text-3xl">{{ home.processTitle }}</h2>
        <p v-reveal="1" class="mt-4 max-w-3xl text-base leading-7 text-muted">
          {{ home.processBody }}
        </p>
        <ProcessTimeline :steps="home.processSteps" :deliverable-label="home.processDeliverable" />
      </div>
    </section>

    <section class="border-t border-edge-subtle bg-panel-strong px-4 py-14 sm:px-6 sm:py-16">
      <div v-reveal class="mx-auto grid w-full max-w-6xl items-start gap-8 md:grid-cols-[auto_minmax(0,1fr)]">
        <img
          :src="founder.avatar"
          :alt="founder.name"
          width="176"
          height="176"
          loading="lazy"
          class="h-36 w-36 border border-edge-highlight object-cover sm:h-44 sm:w-44"
        >
        <div>
          <h2 class="text-2xl font-semibold text-ink">{{ home.founder.title }}</h2>
          <p class="mt-1 text-sm text-dim">{{ home.founder.tag }}</p>
          <p class="mt-4 max-w-3xl text-sm leading-7 text-muted">{{ founder.bio }}</p>
          <ul class="mt-5 flex flex-wrap gap-2">
            <li v-for="point in home.founder.points" :key="point" class="badge">{{ point }}</li>
          </ul>
          <RouterLink :to="buildLocalizedPath(locale, 'team')" class="link-action mt-6 inline-flex">{{ home.founder.cta }}</RouterLink>
        </div>
      </div>
    </section>

    <section class="border-t border-edge-subtle px-4 py-14 sm:px-6 sm:py-16">
      <div class="mx-auto w-full max-w-6xl">
        <h2 v-reveal class="max-w-3xl text-2xl font-semibold text-ink sm:text-3xl">{{ home.closing.title }}</h2>
        <p v-reveal="1" class="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">{{ home.closing.body }}</p>
        <div v-reveal="2" class="mt-8">
          <ChannelLinks />
        </div>
      </div>
    </section>
  </div>
</template>
