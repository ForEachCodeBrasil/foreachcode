<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { buildLocalizedPath, switchLocalePath } from '../content/site-content'
import { useLocaleContent } from '../composables/useLocaleContent'

const isMenuOpen = ref(false)
const route = useRoute()
const { locale, content } = useLocaleContent()

const ptPath = computed(() => switchLocalePath(route.path, 'pt'))
const enPath = computed(() => switchLocalePath(route.path, 'en'))

function closeMenu(): void {
  isMenuOpen.value = false
}

function localizedPath(slug: string): string {
  return buildLocalizedPath(locale.value, slug)
}

function isActive(slug: string): boolean {
  return route.path === localizedPath(slug)
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-edge-subtle/90 bg-panel/90 backdrop-blur-md">
    <div class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
      <RouterLink :to="localizedPath('')" class="inline-flex items-center gap-3 text-sm tracking-[0.18em] text-ink" @click="closeMenu">
        <span class="inline-block h-2.5 w-2.5 bg-neon shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
        <span class="font-semibold uppercase">{{ content.company.shortName }}</span>
      </RouterLink>

      <nav class="hidden items-center gap-5 md:flex">
        <RouterLink
          v-for="item in content.navLinks"
          :key="item.slug"
          :to="localizedPath(item.slug)"
          class="text-xs uppercase tracking-[0.15em] text-muted transition-colors duration-150 hover:text-ink"
          :class="isActive(item.slug) ? 'text-neon' : ''"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="hidden items-center gap-2 md:flex">
        <span class="text-[10px] uppercase tracking-[0.14em] text-dim">{{ content.languageSwitcher.label }}</span>
        <RouterLink
          :to="ptPath"
          class="border border-edge-subtle px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]"
          :class="locale === 'pt' ? 'border-neon text-neon' : 'text-muted hover:text-ink'"
          @click="closeMenu"
        >
          {{ content.languageSwitcher.pt }}
        </RouterLink>
        <RouterLink
          :to="enPath"
          class="border border-edge-subtle px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]"
          :class="locale === 'en' ? 'border-neon text-neon' : 'text-muted hover:text-ink'"
          @click="closeMenu"
        >
          {{ content.languageSwitcher.en }}
        </RouterLink>
      </div>

      <button
        type="button"
        class="inline-flex h-9 w-9 items-center justify-center border border-edge-subtle text-muted transition-colors duration-150 hover:text-ink md:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-nav"
        aria-label="Toggle navigation"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
          <path v-if="!isMenuOpen" d="M4 7h16M4 12h16M4 17h16" />
          <path v-else d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>

    <div id="mobile-nav" class="border-t border-edge-subtle bg-panel-strong md:hidden" :class="isMenuOpen ? 'block' : 'hidden'">
      <div class="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
        <RouterLink
          v-for="item in content.navLinks"
          :key="item.slug"
          :to="localizedPath(item.slug)"
          class="border-b border-edge-subtle/50 py-3 text-xs uppercase tracking-[0.15em] text-muted transition-colors duration-150 hover:text-ink"
          :class="isActive(item.slug) ? 'text-neon' : ''"
          @click="closeMenu"
        >
          {{ item.label }}
        </RouterLink>

        <div class="mt-4 flex items-center gap-3">
          <span class="text-[10px] uppercase tracking-[0.14em] text-dim">{{ content.languageSwitcher.label }}</span>
          <RouterLink
            :to="ptPath"
            class="border border-edge-subtle px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]"
            :class="locale === 'pt' ? 'border-neon text-neon' : 'text-muted hover:text-ink'"
            @click="closeMenu"
          >
            {{ content.languageSwitcher.pt }}
          </RouterLink>
          <RouterLink
            :to="enPath"
            class="border border-edge-subtle px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]"
            :class="locale === 'en' ? 'border-neon text-neon' : 'text-muted hover:text-ink'"
            @click="closeMenu"
          >
            {{ content.languageSwitcher.en }}
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>
