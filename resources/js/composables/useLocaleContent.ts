import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getLocalizedContent, resolveLocale } from '../content/site-content'

export function useLocaleContent() {
  const route = useRoute()

  const locale = computed(() => resolveLocale(route.params.locale))
  const content = computed(() => getLocalizedContent(locale.value))

  return {
    locale,
    content,
  }
}
