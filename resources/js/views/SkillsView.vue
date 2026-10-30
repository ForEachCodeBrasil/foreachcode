<script setup lang="ts">
import { computed } from 'vue'
import { useLocaleContent } from '../composables/useLocaleContent'

const { content } = useLocaleContent()
const skillsPage = computed(() => content.value.skillsPage)
</script>

<template>
  <section class="px-4 py-14 sm:px-6 sm:py-16">
    <div class="mx-auto w-full max-w-6xl">
      <h1 class="text-3xl font-semibold text-ink sm:text-4xl">{{ skillsPage.title }}</h1>
      <p class="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
        {{ skillsPage.intro }}
      </p>

      <div class="mt-12 border-b border-edge-subtle">
        <article
          v-for="group in skillsPage.groups"
          :key="group.title"
          class="grid gap-3 border-t border-edge-highlight py-6 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:gap-8"
        >
          <h2 class="text-base font-semibold text-ink">{{ group.title }}</h2>
          <ul class="space-y-2 text-sm leading-7 text-muted">
            <li v-for="point in group.points" :key="point" class="border-l border-edge-highlight pl-3">{{ point }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
