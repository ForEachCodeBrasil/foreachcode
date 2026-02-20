<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { buildLocalizedPath } from '../content/site-content'
import { useLocaleContent } from '../composables/useLocaleContent'

const { locale, content } = useLocaleContent()
const workPage = computed(() => content.value.workPage)

const labels = computed(() => {
  if (locale.value === 'pt') {
    return {
      context: 'Contexto',
      challenge: 'Desafio',
      solution: 'Solucao',
      result: 'Resultado',
    }
  }

  return {
    context: 'Context',
    challenge: 'Challenge',
    solution: 'Solution',
    result: 'Result',
  }
})
</script>

<template>
  <section class="px-4 py-14 sm:px-6 sm:py-16">
    <div class="mx-auto w-full max-w-6xl">
      <p class="text-xs uppercase tracking-[0.18em] text-dim">{{ workPage.tag }}</p>
      <h1 class="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{{ workPage.title }}</h1>
      <p class="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
        {{ workPage.intro }}
      </p>

      <div class="mt-10 space-y-5">
        <article v-for="item in workPage.caseStudies" :key="item.title" class="panel-card">
          <h2 class="text-xl font-semibold text-neon">{{ item.title }}</h2>
          <p class="mt-4 text-sm leading-7 text-muted"><span class="text-ink">{{ labels.context }}:</span> {{ item.context }}</p>
          <p class="mt-2 text-sm leading-7 text-muted"><span class="text-ink">{{ labels.challenge }}:</span> {{ item.challenge }}</p>
          <p class="mt-2 text-sm leading-7 text-muted"><span class="text-ink">{{ labels.solution }}:</span> {{ item.solution }}</p>
          <p class="mt-2 text-sm leading-7 text-muted"><span class="text-ink">{{ labels.result }}:</span> {{ item.result }}</p>
        </article>
      </div>

      <RouterLink :to="buildLocalizedPath(locale, 'contact')" class="btn-primary mt-8 inline-flex">{{ workPage.cta }}</RouterLink>
    </div>
  </section>
</template>
