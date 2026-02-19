<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { company, homeHighlights } from '../content/site-content'
</script>

<template>
  <div>
    <section class="border-b border-edge-subtle bg-grid px-4 py-20 sm:px-6 sm:py-24">
      <div class="mx-auto w-full max-w-6xl">
        <p class="text-xs uppercase tracking-[0.2em] text-neon">Digital engineering studio</p>
        <h1 class="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-ink sm:text-5xl">
          We design and ship software products with execution discipline.
        </h1>
        <p class="mt-5 max-w-3xl text-sm leading-7 text-muted sm:text-base">
          {{ company.heroTagline }}
        </p>
        <p class="mt-4 text-xs uppercase tracking-[0.13em] text-dim">
          Senior engineering for web, mobile, and backend delivery with predictable outcomes.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <RouterLink to="/services" class="btn-primary">Explore services</RouterLink>
          <RouterLink to="/contact" class="btn-secondary">Talk to us</RouterLink>
        </div>
      </div>
    </section>

    <section class="px-4 py-14 sm:px-6 sm:py-16">
      <div class="mx-auto grid w-full max-w-6xl gap-5 md:grid-cols-3">
        <article v-for="item in homeHighlights" :key="item.title" class="panel-card">
          <h2 class="text-lg font-semibold text-neon">{{ item.title }}</h2>
          <p class="mt-3 text-sm leading-7 text-muted">{{ item.body }}</p>
        </article>
      </div>
    </section>

    <section class="border-t border-edge-subtle px-4 py-14 sm:px-6 sm:py-16">
      <div class="mx-auto w-full max-w-5xl text-center">
        <p class="text-xs uppercase tracking-[0.18em] text-dim">Process built for delivery</p>
        <p class="mt-5 text-base leading-7 text-muted sm:text-lg">
          Scoped roadmap, practical milestones, and transparent execution from first sprint to production handoff.
        </p>
        <RouterLink to="/philosophy" class="mt-6 inline-flex text-sm uppercase tracking-[0.12em] text-neon hover:text-neon-soft">
          Read our philosophy
        </RouterLink>
      </div>
    </section>
  </div>
</template>
