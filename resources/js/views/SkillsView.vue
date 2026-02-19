<script setup lang="ts">
import { skillGroups } from '../content/site-content'
</script>

<template>
  <section class="px-4 py-14 sm:px-6 sm:py-16">
    <div class="mx-auto w-full max-w-6xl">
      <p class="text-xs uppercase tracking-[0.18em] text-dim">Skills</p>
      <h1 class="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Technology stack and execution capabilities.</h1>
      <p class="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
        We prioritize the right solution for business constraints over attachment to a specific tool.
      </p>

      <div class="mt-10 grid gap-5 sm:grid-cols-2">
        <article v-for="group in skillGroups" :key="group.title" class="panel-card">
          <h2 class="text-lg font-semibold text-neon">{{ group.title }}</h2>
          <ul class="mt-3 space-y-2 text-sm leading-7 text-muted">
            <li v-for="point in group.points" :key="point">{{ point }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
