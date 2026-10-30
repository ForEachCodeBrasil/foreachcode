<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { prefersMotion } from '../composables/useMotion'

// Seção com grade e brilho verde que seguem o mouse. Desligada em toque e em reduced-motion
// (aí fica só o brilho parado do canto, sem animação).
const root = ref<HTMLElement | null>(null)
let frame = 0

function move(event: PointerEvent): void {
  const element = root.value

  if (element === null) {
    return
  }

  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    const box = element.getBoundingClientRect()
    element.style.setProperty('--mx', `${event.clientX - box.left}px`)
    element.style.setProperty('--my', `${event.clientY - box.top}px`)
    element.style.setProperty('--grid-on', '1')
  })
}

function leave(): void {
  root.value?.style.setProperty('--grid-on', '0')
}

onMounted(() => {
  if (!prefersMotion() || !window.matchMedia('(pointer: fine)').matches) {
    return
  }

  root.value?.addEventListener('pointermove', move)
  root.value?.addEventListener('pointerleave', leave)
})

onBeforeUnmount(() => {
  root.value?.removeEventListener('pointermove', move)
  root.value?.removeEventListener('pointerleave', leave)
  cancelAnimationFrame(frame)
})
</script>

<template>
  <section ref="root" class="reactive-grid">
    <span class="reactive-glow" aria-hidden="true" />
    <slot />
  </section>
</template>
