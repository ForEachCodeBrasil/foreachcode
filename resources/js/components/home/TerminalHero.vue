<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { prefersMotion } from '../../composables/useMotion'

type TerminalLine = {
  kind: 'cmd' | 'out' | 'ok'
  text: string
}

const props = defineProps<{
  title: string
  lines: TerminalLine[]
}>()

// Servidor e reduced-motion: tudo visível, parado. No cliente: digita o comando, gira o spinner
// enquanto "roda", a saída chega e a sessão recomeça. Todas as linhas ocupam lugar desde o início
// (só ficam invisíveis), então a altura do terminal nunca muda.
const shown = ref(props.lines.length)
const typedChars = ref(Number.POSITIVE_INFINITY)
const running = ref(-1)
const spinnerFrame = ref(0)
const elapsed = ref('0.0s')
const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
const timers: number[] = []
let alive = true

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => timers.push(window.setTimeout(resolve, ms)))
}

async function spin(index: number, ms: number): Promise<void> {
  running.value = index
  for (let t = 0; t < ms && alive; t += 80) {
    spinnerFrame.value = (spinnerFrame.value + 1) % spinner.length
    await wait(80)
  }
  running.value = -1
}

async function play(): Promise<void> {
  while (alive) {
    shown.value = 0
    const start = performance.now()

    for (const [index, line] of props.lines.entries()) {
      if (!alive) {
        return
      }
      typedChars.value = line.kind === 'cmd' ? 0 : Number.POSITIVE_INFINITY
      shown.value = index + 1

      if (line.kind === 'cmd') {
        for (let i = 1; i <= line.text.length; i += 1) {
          await wait(26 + Math.random() * 30)
          typedChars.value = i
        }
        await wait(180)
        await spin(index, 520 + Math.random() * 500)
      } else {
        await wait(line.kind === 'ok' ? 360 : 240)
      }
      elapsed.value = `${((performance.now() - start) / 1000).toFixed(1)}s`
    }

    typedChars.value = Number.POSITIVE_INFINITY
    await wait(4200)
  }
}

function visibleText(index: number, line: TerminalLine): string {
  return index === shown.value - 1 ? line.text.slice(0, typedChars.value) : line.text
}

const prompt: Record<TerminalLine['kind'], string> = { cmd: '$', out: '→', ok: '✓' }

onMounted(() => {
  if (prefersMotion()) {
    play()
  }
})

onBeforeUnmount(() => {
  alive = false
  timers.forEach((id) => window.clearTimeout(id))
})
</script>

<template>
  <div class="terminal terminal-live" role="img" :aria-label="lines.map((line) => line.text).join('. ')">
    <div class="flex items-center justify-between border-b border-edge-highlight px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-dim">
      <span class="flex items-center gap-3">
        <span class="flex gap-1.5" aria-hidden="true">
          <span class="h-2 w-2 rounded-full bg-edge-highlight" />
          <span class="h-2 w-2 rounded-full bg-edge-highlight" />
          <span class="h-2 w-2 rounded-full bg-accent/70" />
        </span>
        {{ title }}
      </span>
      <span class="tabular-nums">zsh · {{ elapsed }}</span>
    </div>
    <ol class="px-4 py-4" aria-hidden="true">
      <li
        v-for="(line, index) in lines"
        :key="index"
        class="terminal-line flex gap-3"
        :class="[index < shown ? 'is-on' : 'invisible', line.kind === 'cmd' && index > 0 ? 'mt-2' : '']"
      >
        <span class="w-3 shrink-0" :class="line.kind === 'ok' ? 'text-accent' : line.kind === 'cmd' ? 'text-accent-strong' : 'text-dim'">{{ prompt[line.kind] }}</span>
        <span class="min-w-0" :class="line.kind === 'cmd' ? 'text-ink' : line.kind === 'ok' ? 'text-accent-strong' : 'text-muted'">
          {{ visibleText(index, line) }}<span
            v-if="index === shown - 1 && line.kind === 'cmd' && running !== index"
            class="caret ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[0.18em] bg-muted"
          /><span v-if="running === index" class="ml-2 text-accent">{{ spinner[spinnerFrame] }}</span>
        </span>
      </li>
    </ol>
  </div>
</template>
