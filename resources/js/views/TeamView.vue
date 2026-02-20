<script setup lang="ts">
import { computed } from 'vue'
import { useLocaleContent } from '../composables/useLocaleContent'

const { content } = useLocaleContent()
const teamPage = computed(() => content.value.teamPage)
</script>

<template>
  <section class="px-4 py-14 sm:px-6 sm:py-16">
    <div class="mx-auto w-full max-w-6xl">
      <p class="text-xs uppercase tracking-[0.18em] text-dim">{{ teamPage.tag }}</p>
      <h1 class="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{{ teamPage.title }}</h1>
      <p class="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
        {{ teamPage.intro }}
      </p>

      <div class="mt-10 space-y-5">
        <article v-for="member in teamPage.members" :key="member.name" class="panel-card">
          <div class="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div class="flex items-start gap-4">
              <img
                v-if="member.avatar"
                :src="member.avatar"
                :alt="member.name"
                class="h-24 w-24 shrink-0 rounded-sm border border-edge-subtle object-cover"
              >
              <div>
                <h2 class="text-xl font-semibold text-ink">{{ member.name }}</h2>
                <p class="mt-1 text-sm uppercase tracking-[0.12em] text-neon">{{ member.role }}</p>
                <p v-if="member.credentials" class="mt-1 text-sm text-dim">{{ member.credentials }}</p>
                <p class="mt-3 max-w-3xl text-sm leading-7 text-muted">{{ member.bio }}</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-3">
              <a :href="member.linkedin" class="btn-secondary" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a :href="member.github" class="btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
