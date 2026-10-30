<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { buildLocalizedPath } from '../content/site-content'
import { useLocaleContent } from '../composables/useLocaleContent'
import BudgetSimulator from '../components/BudgetSimulator.vue'
import FaqList from '../components/FaqList.vue'

const { locale, content } = useLocaleContent()
const servicesPage = computed(() => content.value.servicesPage)

</script>

<template>
  <section class="px-4 py-14 sm:px-6 sm:py-16">
    <div class="mx-auto w-full max-w-6xl">
      <h1 class="text-3xl font-semibold text-ink sm:text-4xl">{{ servicesPage.title }}</h1>
      <p class="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
        {{ servicesPage.intro }}
      </p>

      <div class="mt-12 border-b border-edge-subtle">
        <article
          v-for="service in servicesPage.packages"
          :key="service.title"
          class="grid gap-6 border-t border-edge-highlight py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,0.55fr)] lg:gap-10"
        >
          <div>
            <h2 class="text-xl font-semibold text-ink">{{ service.title }}</h2>
            <p class="mt-3 text-sm leading-7 text-muted">{{ service.idealFor }}</p>
          </div>
          <ul class="space-y-2 text-sm leading-7 text-muted">
            <li v-for="item in service.items" :key="item" class="border-l border-edge-highlight pl-3">{{ item }}</li>
          </ul>
          <div>
            <p class="label">{{ servicesPage.priceLabel }}</p>
            <p class="mt-2 text-2xl font-semibold text-ink">{{ service.priceFrom }}</p>
            <p class="mt-3 text-sm text-dim">{{ service.timeline }}</p>
          </div>
        </article>
      </div>
      <p class="mt-4 text-xs text-dim">{{ servicesPage.priceNote }}</p>

      <div class="mt-14">
        <BudgetSimulator />
      </div>

      <div class="mt-14 max-w-3xl">
        <FaqList :title="servicesPage.faq.title" :items="servicesPage.faq.items" />
      </div>

      <RouterLink :to="buildLocalizedPath(locale, 'contact')" class="btn-primary mt-12 inline-flex">{{ servicesPage.cta }}</RouterLink>
    </div>
  </section>
</template>
