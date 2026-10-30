<script setup lang="ts">
import { computed, ref } from 'vue'
import { whatsappMessageHref } from '../content/site-content'
import { trackEvent } from '../lib/analytics'
import { useLocaleContent } from '../composables/useLocaleContent'

// Montador de escopo: sem preço. O resultado é um resumo pronto para mandar no WhatsApp.
const { locale, content } = useLocaleContent()
const simulator = computed(() => content.value.servicesPage.simulator)

const typeIndex = ref(2)
const deadlineIndex = ref(1)
const extras = ref<number[]>([])

const summaryLines = computed(() => [
  `${simulator.value.typeLabel}: ${simulator.value.types[typeIndex.value]}`,
  `${simulator.value.deadlineLabel}: ${simulator.value.deadlines[deadlineIndex.value]}`,
  ...(extras.value.length
    ? [`${simulator.value.extrasLabel}: ${[...extras.value].sort((a, b) => a - b).map((i) => simulator.value.extras[i]).join(', ')}`]
    : []),
])

const href = computed(() => whatsappMessageHref([simulator.value.summaryIntro, ...summaryLines.value.map((line) => `• ${line}`)].join('\n')))

const option = (active: boolean) => active
  ? 'border-accent text-ink bg-accent/5'
  : 'border-edge-subtle text-muted hover:border-edge-highlight'
</script>

<template>
  <div class="panel-card">
    <h2 class="text-xl font-semibold text-ink">{{ simulator.title }}</h2>
    <p class="mt-2 text-sm leading-7 text-muted">{{ simulator.intro }}</p>

    <div class="mt-6 grid gap-6 md:grid-cols-2">
      <fieldset>
        <legend class="label">{{ simulator.typeLabel }}</legend>
        <label
          v-for="(type, index) in simulator.types"
          :key="type"
          class="scope-option mt-2 flex cursor-pointer items-center gap-3 border px-3 py-2 text-sm"
          :class="option(typeIndex === index)"
        >
          <input v-model="typeIndex" type="radio" name="sim-type" :value="index" class="accent-(--color-accent)">
          {{ type }}
        </label>
      </fieldset>

      <fieldset>
        <legend class="label">{{ simulator.deadlineLabel }}</legend>
        <label
          v-for="(deadline, index) in simulator.deadlines"
          :key="deadline"
          class="scope-option mt-2 flex cursor-pointer items-center gap-3 border px-3 py-2 text-sm"
          :class="option(deadlineIndex === index)"
        >
          <input v-model="deadlineIndex" type="radio" name="sim-deadline" :value="index" class="accent-(--color-accent)">
          {{ deadline }}
        </label>
      </fieldset>
    </div>

    <fieldset class="mt-6">
      <legend class="label">{{ simulator.extrasLabel }}</legend>
      <div class="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <label
          v-for="(extra, index) in simulator.extras"
          :key="extra"
          class="scope-option flex cursor-pointer items-center gap-3 border px-3 py-2 text-sm"
          :class="option(extras.includes(index))"
        >
          <input v-model="extras" type="checkbox" :value="index" class="accent-(--color-accent)">
          {{ extra }}
        </label>
      </div>
    </fieldset>

    <div class="mt-6 grid gap-5 border-t border-edge-subtle pt-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
      <div aria-live="polite">
        <p class="label">{{ simulator.resultLabel }}</p>
        <ul class="mt-3 space-y-1 font-mono text-xs leading-6 text-ink">
          <li v-for="line in summaryLines" :key="line" class="scope-line">
            <span class="text-accent" aria-hidden="true">›</span> {{ line }}
          </li>
        </ul>
      </div>
      <a
        :href="href"
        target="_blank"
        rel="noopener"
        class="btn-primary inline-flex items-center gap-2"
        @click="trackEvent('click_channel', { channel: 'whatsapp_scope', locale })"
      >
        {{ simulator.cta }} <span aria-hidden="true" class="btn-arrow">→</span>
      </a>
    </div>
    <p class="mt-4 text-xs leading-6 text-dim">{{ simulator.note }}</p>
  </div>
</template>
