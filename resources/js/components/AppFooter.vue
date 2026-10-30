<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { buildLocalizedPath, contactChannels, whatsappHref } from '../content/site-content'
import { useLocaleContent } from '../composables/useLocaleContent'

const { locale, content } = useLocaleContent()
const whatsapp = computed(() => whatsappHref(locale.value))
const quickLinks = computed(() => content.value.navLinks.filter((item) => ['services', 'work', 'contact'].includes(item.slug)))
const elsewhere = [
  { label: 'GitHub', href: contactChannels.companyGithub },
  { label: 'LinkedIn', href: contactChannels.founderLinkedin },
]
</script>

<template>
  <footer class="border-t border-edge-subtle bg-panel">
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 sm:py-10">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-sm text-ink">{{ content.company.legalName }}</p>
        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <a v-if="whatsapp" :href="whatsapp" target="_blank" rel="noopener" class="link-line text-sm text-muted hover:text-accent">
            WhatsApp {{ contactChannels.whatsappDisplay }}
          </a>
          <a :href="`mailto:${content.company.email}`" class="link-line text-sm text-muted hover:text-accent">
            {{ content.company.email }}
          </a>
        </div>
      </div>
      <p class="text-sm text-dim">
        {{ content.footer.tagline }}
      </p>
      <div class="flex flex-col gap-3 sm:flex-row sm:justify-between">
        <nav class="flex flex-wrap gap-3 text-xs uppercase tracking-[0.12em] text-muted">
          <RouterLink v-for="item in quickLinks" :key="item.slug" :to="buildLocalizedPath(locale, item.slug)" class="hover:text-accent">
            {{ item.label }}
          </RouterLink>
        </nav>
        <div class="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.12em] text-muted">
          <span class="text-dim">{{ content.footer.elsewhere }}:</span>
          <a v-for="link in elsewhere" :key="link.label" :href="link.href" target="_blank" rel="noopener noreferrer" class="hover:text-accent">
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
