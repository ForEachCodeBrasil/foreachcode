<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { trackEvent } from '../lib/analytics'
import { useLocaleContent } from '../composables/useLocaleContent'

type ContactStatus = 'idle' | 'success' | 'validation-error' | 'error'

type ContactPayload = {
  name: string
  email: string
  company: string
  service: string
  budget: string
  message: string
}

const { locale, content } = useLocaleContent()
const contactPage = computed(() => content.value.contactPage)
const detailLabels = computed(() => {
  if (locale.value === 'pt') {
    return {
      email: 'Email',
      location: 'Localizacao',
      responseTime: 'Tempo de resposta',
    }
  }

  return {
    email: 'Email',
    location: 'Location',
    responseTime: 'Response time',
  }
})

const isSubmitting = ref(false)
const status = ref<ContactStatus>('idle')
const hasTrackedFormStart = ref(false)
const fieldErrors = ref<Record<string, string[]>>({})

const form = reactive<ContactPayload>({
  name: '',
  email: '',
  company: '',
  service: '',
  budget: '',
  message: '',
})

function firstError(field: keyof ContactPayload): string {
  return fieldErrors.value[field]?.[0] ?? ''
}

function markFormStart(): void {
  if (hasTrackedFormStart.value) {
    return
  }

  hasTrackedFormStart.value = true
  trackEvent('start_contact_form', {
    locale: locale.value,
  })
}

function resetForm(): void {
  form.name = ''
  form.email = ''
  form.company = ''
  form.service = ''
  form.budget = ''
  form.message = ''
}

function trackEmailFallback(): void {
  trackEvent('click_email_fallback', {
    locale: locale.value,
  })
}

  async function submitForm(): Promise<void> {
  if (isSubmitting.value) {
    return
  }

  status.value = 'idle'
  fieldErrors.value = {}
  isSubmitting.value = true

  trackEvent('submit_contact_form', {
    locale: locale.value,
    service: form.service || 'not_selected',
  })

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...form,
        locale: locale.value,
      }),
    })

    const payload = (await response.json().catch(() => null)) as { errors?: Record<string, string[]> } | null

    if (response.ok) {
      status.value = 'success'
      resetForm()
      hasTrackedFormStart.value = false

      trackEvent('contact_form_success', {
        locale: locale.value,
      })

      return
    }

    if (response.status === 422 && payload?.errors) {
      fieldErrors.value = payload.errors
      status.value = 'validation-error'
      return
    }

    console.error('[CONTACT FORM] Unexpected error:', response.status, payload)
    status.value = 'error'
  } catch (err) {
    console.error('[CONTACT FORM] Fetch error:', err)
    status.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="px-4 py-14 sm:px-6 sm:py-16">
    <div class="mx-auto grid w-full max-w-6xl gap-5 lg:grid-cols-[1.15fr_0.85fr]">
      <article class="panel-card">
        <p class="text-xs uppercase tracking-[0.18em] text-dim">{{ contactPage.tag }}</p>
        <h1 class="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{{ contactPage.title }}</h1>
        <p class="mt-4 text-sm leading-7 text-muted">
          {{ contactPage.intro }}
        </p>

        <h2 class="mt-8 text-lg font-semibold text-neon">{{ contactPage.formTitle }}</h2>

        <form class="mt-5 space-y-4" @submit.prevent="submitForm">
          <div>
            <label for="name" class="mb-1 block text-xs uppercase tracking-[0.12em] text-dim">{{ contactPage.fields.name }}</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full border border-edge-subtle bg-base px-3 py-2 text-sm text-ink focus:border-neon"
              :placeholder="contactPage.placeholders.name"
              @focus="markFormStart"
            >
            <p v-if="firstError('name')" class="mt-1 text-xs text-red-300">{{ firstError('name') }}</p>
          </div>

          <div>
            <label for="email" class="mb-1 block text-xs uppercase tracking-[0.12em] text-dim">{{ contactPage.fields.email }}</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full border border-edge-subtle bg-base px-3 py-2 text-sm text-ink focus:border-neon"
              :placeholder="contactPage.placeholders.email"
              @focus="markFormStart"
            >
            <p v-if="firstError('email')" class="mt-1 text-xs text-red-300">{{ firstError('email') }}</p>
          </div>

          <div>
            <label for="company" class="mb-1 block text-xs uppercase tracking-[0.12em] text-dim">{{ contactPage.fields.company }}</label>
            <input
              id="company"
              v-model="form.company"
              type="text"
              class="w-full border border-edge-subtle bg-base px-3 py-2 text-sm text-ink focus:border-neon"
              :placeholder="contactPage.placeholders.company"
              @focus="markFormStart"
            >
            <p v-if="firstError('company')" class="mt-1 text-xs text-red-300">{{ firstError('company') }}</p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label for="service" class="mb-1 block text-xs uppercase tracking-[0.12em] text-dim">{{ contactPage.fields.service }}</label>
              <select
                id="service"
                v-model="form.service"
                required
                class="w-full border border-edge-subtle bg-base px-3 py-2 text-sm text-ink focus:border-neon"
                @focus="markFormStart"
              >
                <option value="">-</option>
                <option v-for="service in contactPage.serviceOptions" :key="service" :value="service">{{ service }}</option>
              </select>
              <p v-if="firstError('service')" class="mt-1 text-xs text-red-300">{{ firstError('service') }}</p>
            </div>

            <div>
              <label for="budget" class="mb-1 block text-xs uppercase tracking-[0.12em] text-dim">{{ contactPage.fields.budget }}</label>
              <select
                id="budget"
                v-model="form.budget"
                class="w-full border border-edge-subtle bg-base px-3 py-2 text-sm text-ink focus:border-neon"
                @focus="markFormStart"
              >
                <option value="">-</option>
                <option v-for="budget in contactPage.budgetOptions" :key="budget" :value="budget">{{ budget }}</option>
              </select>
              <p v-if="firstError('budget')" class="mt-1 text-xs text-red-300">{{ firstError('budget') }}</p>
            </div>
          </div>

          <div>
            <label for="message" class="mb-1 block text-xs uppercase tracking-[0.12em] text-dim">{{ contactPage.fields.message }}</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="6"
              class="w-full border border-edge-subtle bg-base px-3 py-2 text-sm text-ink focus:border-neon"
              :placeholder="contactPage.placeholders.message"
              @focus="markFormStart"
            />
            <p v-if="firstError('message')" class="mt-1 text-xs text-red-300">{{ firstError('message') }}</p>
          </div>

          <div class="pt-2">
            <button type="submit" class="btn-primary" :disabled="isSubmitting">
              {{ isSubmitting ? contactPage.sendingLabel : contactPage.submitLabel }}
            </button>
          </div>

          <p v-if="status === 'success'" class="text-sm text-neon">{{ contactPage.successMessage }}</p>
          <p v-else-if="status === 'validation-error'" class="text-sm text-red-300">{{ contactPage.validationMessage }}</p>
          <p v-else-if="status === 'error'" class="text-sm text-red-300">{{ contactPage.errorMessage }}</p>
        </form>
      </article>

      <article class="panel-card">
        <h2 class="text-lg font-semibold text-neon">{{ contactPage.detailsTitle }}</h2>
        <ul class="mt-4 space-y-3 text-sm text-muted">
          <li>
            <span class="text-ink">{{ detailLabels.email }}:</span>
            <a :href="`mailto:${content.company.email}`" class="ml-2 text-neon hover:text-neon-soft" @click="trackEmailFallback">{{ content.company.email }}</a>
          </li>
          <li><span class="text-ink">{{ detailLabels.location }}:</span> <span class="ml-2">{{ content.company.location }}</span></li>
          <li><span class="text-ink">{{ detailLabels.responseTime }}:</span> <span class="ml-2">{{ content.company.responseWindow }}</span></li>
        </ul>

        <p class="mt-8 text-sm leading-7 text-muted">{{ contactPage.nextStep }}</p>

        <p class="mt-8 text-xs uppercase tracking-[0.13em] text-dim">
          {{ contactPage.emailFallback }}
          <a :href="`mailto:${content.company.email}`" class="text-neon hover:text-neon-soft" @click="trackEmailFallback">{{ content.company.email }}</a>
        </p>
      </article>
    </div>
  </section>
</template>
