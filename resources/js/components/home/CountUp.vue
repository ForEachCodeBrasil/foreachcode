<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { prefersMotion } from '../../composables/useMotion'

const props = defineProps<{
  value: number
  prefix?: string
  suffix?: string
}>()

// O HTML do servidor já traz o valor final (SEO, sem JS, reduced-motion e prints de página inteira).
// No cliente, zera só um pouco antes de o número entrar na tela e conta até o valor.
const root = ref<HTMLElement | null>(null)
const display = ref(props.value)
let observer: IntersectionObserver | null = null
let frame = 0

function animate(): void {
  const start = performance.now()
  const duration = 1400

  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1)
    display.value = Math.round(props.value * (1 - (1 - t) ** 4))

    if (t < 1) {
      frame = requestAnimationFrame(tick)
    }
  }

  frame = requestAnimationFrame(tick)
}

onMounted(() => {
  const element = root.value

  if (!prefersMotion() || element === null || element.getBoundingClientRect().top < window.innerHeight) {
    return
  }

  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      observer?.disconnect()
      display.value = 0
      animate()
    }
  }, { rootMargin: '0px 0px 10% 0px' })
  observer.observe(element)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  cancelAnimationFrame(frame)
})
</script>

<template>
  <span ref="root" class="tabular-nums">{{ prefix }}{{ display }}{{ suffix }}</span>
</template>
