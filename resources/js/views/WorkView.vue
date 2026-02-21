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

      <div class="mt-10 space-y-12">
        <article v-for="item in workPage.caseStudies" :key="item.title" class="panel-card flex flex-col md:flex-row gap-8 items-start">
          <div v-if="item.image" class="w-full md:w-[45%] lg:w-[40%] overflow-hidden rounded-md border border-[#2a2a2a] shrink-0">
            <img :src="item.image" :alt="item.title" class="w-full h-auto object-cover opacity-90 transition-opacity hover:opacity-100" />
          </div>
          <div class="w-full flex-1">
            <h2 class="text-xl font-semibold text-neon">{{ item.title }}</h2>
            <div class="mt-5 space-y-3">
              <p class="text-sm leading-7 text-muted"><span class="text-ink font-medium">{{ labels.context }}:</span> {{ item.context }}</p>
              <p class="text-sm leading-7 text-muted"><span class="text-ink font-medium">{{ labels.challenge }}:</span> {{ item.challenge }}</p>
              <p class="text-sm leading-7 text-muted"><span class="text-ink font-medium">{{ labels.solution }}:</span> {{ item.solution }}</p>
              <p class="text-sm leading-7 text-muted"><span class="text-ink font-medium">{{ labels.result }}:</span> {{ item.result }}</p>
            </div>
          </div>
        </article>
      </div>

      <RouterLink :to="buildLocalizedPath(locale, 'contact')" class="btn-primary mt-12 inline-flex">{{ workPage.cta }}</RouterLink>
    </div>
  </section>
</template>
