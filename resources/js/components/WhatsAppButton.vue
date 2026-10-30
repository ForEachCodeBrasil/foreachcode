<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { whatsappHref } from '../content/site-content'
import { trackEvent } from '../lib/analytics'
import { useLocaleContent } from '../composables/useLocaleContent'

// Botão fixo de WhatsApp. Some quando o rodapé entra na tela (o rodapé já tem o link),
// para não cobrir o email no celular.
const { locale, content } = useLocaleContent()
const href = computed(() => whatsappHref(locale.value))
const hidden = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  const footer = document.querySelector('footer')
  if (!footer || !('IntersectionObserver' in window)) {
    return
  }
  observer = new IntersectionObserver(([entry]) => {
    hidden.value = entry.isIntersecting
  })
  observer.observe(footer)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <a
    v-if="href"
    :href="href"
    target="_blank"
    rel="noopener"
    class="wa-float fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 border border-edge-highlight bg-panel px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink hover:border-accent hover:text-accent"
    :class="{ 'is-hidden': hidden }"
    :aria-label="content.channels.whatsappLabel"
    :tabindex="hidden ? -1 : undefined"
    @click="trackEvent('click_channel', { channel: 'whatsapp_float', locale })"
  >
    <span class="wa-dot" aria-hidden="true" />
    <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg>
    WhatsApp
  </a>
</template>
