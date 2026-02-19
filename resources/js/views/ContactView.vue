<script setup lang="ts">
import { company } from '../content/site-content'
</script>

<template>
  <section class="px-4 py-14 sm:px-6 sm:py-16">
    <div class="mx-auto grid w-full max-w-5xl gap-5 md:grid-cols-2">
      <article class="panel-card">
        <p class="text-xs uppercase tracking-[0.18em] text-dim">Contact</p>
        <h1 class="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Let us know what you need to build.</h1>
        <p class="mt-4 text-sm leading-7 text-muted">
          Share your project context, constraints, and expected outcomes. We will respond with the next practical step.
        </p>
        <a :href="`mailto:${company.email}`" class="btn-primary mt-8 inline-flex">Send an email</a>
      </article>

      <article class="panel-card">
        <h2 class="text-lg font-semibold text-neon">Contact details</h2>
        <ul class="mt-4 space-y-3 text-sm text-muted">
          <li>
            <span class="text-ink">Email:</span>
            <a :href="`mailto:${company.email}`" class="ml-2 text-neon hover:text-neon-soft">{{ company.email }}</a>
          </li>
          <li><span class="text-ink">Location:</span> <span class="ml-2">{{ company.location }}</span></li>
          <li><span class="text-ink">Response time:</span> <span class="ml-2">{{ company.responseWindow }}</span></li>
        </ul>
        <p class="mt-8 text-xs uppercase tracking-[0.13em] text-dim">Projects start with a short discovery email and a structured next-step proposal.</p>
      </article>
    </div>
  </section>
</template>
