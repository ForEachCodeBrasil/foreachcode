<script setup lang="ts">
import { services } from '../content/site-content'
</script>

<template>
  <section class="px-4 py-14 sm:px-6 sm:py-16">
    <div class="mx-auto w-full max-w-6xl">
      <p class="text-xs uppercase tracking-[0.18em] text-dim">Services</p>
      <h1 class="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Delivery services tailored to product stage and team capacity.</h1>
      <p class="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
        We operate across product lifecycle phases with execution ownership and measurable technical outcomes.
      </p>
      <p class="mt-3 text-xs uppercase tracking-[0.13em] text-dim">From discovery to production support, each engagement is scoped for clear business impact.</p>

      <div class="mt-10 grid gap-5 sm:grid-cols-2">
        <article v-for="service in services" :key="service.title" class="panel-card">
          <h2 class="text-lg font-semibold text-neon">{{ service.title }}</h2>
          <p class="mt-3 text-sm leading-7 text-muted">{{ service.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
