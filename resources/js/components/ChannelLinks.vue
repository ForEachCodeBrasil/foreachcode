<script setup lang="ts">
import { computed } from 'vue'
import { contactChannels, whatsappHref } from '../content/site-content'
import { trackEvent } from '../lib/analytics'
import { useLocaleContent } from '../composables/useLocaleContent'

// Canal direto: WhatsApp. (Sem agenda de 30 min por enquanto.)
const { locale, content } = useLocaleContent()
const whatsapp = computed(() => whatsappHref(locale.value))
</script>

<template>
  <div class="flex flex-wrap items-center gap-x-6 gap-y-3">
    <a
      v-if="whatsapp"
      :href="whatsapp"
      target="_blank"
      rel="noopener"
      class="btn-primary inline-flex items-center gap-2"
      @click="trackEvent('click_channel', { channel: 'whatsapp', locale })"
    >
      {{ content.channels.whatsappLabel }}
      <span aria-hidden="true" class="btn-arrow">→</span>
    </a>
    <span class="font-mono text-xs text-dim">{{ contactChannels.whatsappDisplay }}</span>
  </div>
</template>
