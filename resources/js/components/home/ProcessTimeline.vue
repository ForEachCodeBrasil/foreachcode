<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { prefersMotion } from '../../composables/useMotion'

type ProcessStep = {
  title: string
  duration: string
  deliverable: string
}

const props = defineProps<{
  steps: ProcessStep[]
  deliverableLabel: string
}>()

// A linha desenha conforme a página rola: 0 quando o topo da lista chega a 75% da tela,
// 1 quando o fim passa de 45%. Servidor e reduced-motion: linha cheia e todas as etapas acesas.
const list = ref<HTMLElement | null>(null)
const progress = ref(1)
let frame = 0

function measure(): void {
  frame = 0
  const element = list.value

  if (element === null) {
    return
  }

  const box = element.getBoundingClientRect()
  const start = window.innerHeight * 0.75
  const end = window.innerHeight * 0.45
  const value = (start - box.top) / (box.height + start - end)
  progress.value = Math.min(Math.max(value, 0), 1)
}

function schedule(): void {
  if (frame === 0) {
    frame = requestAnimationFrame(measure)
  }
}

function isActive(index: number): boolean {
  return progress.value >= index / Math.max(props.steps.length - 1, 1) - 0.001
}

onMounted(() => {
  if (!prefersMotion()) {
    return
  }

  measure()
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', schedule)
  cancelAnimationFrame(frame)
})
</script>

<template>
  <ol ref="list" class="relative mt-10">
    <span class="absolute bottom-3 left-[7px] top-3 w-px bg-edge-highlight" aria-hidden="true" />
    <span
      class="timeline-fill absolute bottom-3 left-[7px] top-3 w-px origin-top bg-accent"
      :style="{ transform: `scaleY(${progress})` }"
      aria-hidden="true"
    />
    <li
      v-for="(step, index) in steps"
      :key="step.title"
      class="relative grid gap-1 pb-10 pl-10 last:pb-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] sm:gap-8"
    >
      <span
        class="timeline-dot absolute left-0 top-1.5 h-[15px] w-[15px] border transition-colors duration-500"
        :class="isActive(index) ? 'is-on border-accent bg-accent' : 'border-edge-highlight bg-canvas'"
        aria-hidden="true"
      />
      <div>
        <p class="font-mono text-xs text-dim">0{{ index + 1 }}</p>
        <h3 class="text-lg font-semibold transition-colors duration-500" :class="isActive(index) ? 'text-ink' : 'text-dim'">{{ step.title }}</h3>
        <p class="mt-1 font-mono text-xs text-dim">{{ step.duration }}</p>
      </div>
      <p class="text-sm leading-7 text-muted sm:pt-5">
        <span class="text-dim">{{ deliverableLabel }}:</span> {{ step.deliverable }}
      </p>
    </li>
  </ol>
</template>
