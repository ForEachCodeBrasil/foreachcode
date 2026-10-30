import type { App, Directive } from 'vue'
import { prefersMotion } from './useMotion'

const finePointer = () => window.matchMedia('(pointer: fine)').matches

// v-reveal="n": sobe e aparece ao entrar na tela, com atraso de n × 70 ms (cascata).
// Só esconde o que ainda está abaixo da dobra: o que já está visível (h1, LCP) nunca pisca.
const reveal: Directive<HTMLElement, number | undefined> = {
  getSSRProps: () => ({}),
  mounted(el, binding) {
    if (!prefersMotion() || el.getBoundingClientRect().top < window.innerHeight) {
      return
    }

    el.classList.add('reveal')
    el.style.setProperty('--reveal-delay', `${(binding.value ?? 0) * 70}ms`)
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('is-in')
        observer.disconnect()
      }
    }, { rootMargin: '0px 0px -8% 0px' })
    observer.observe(el)
  },
}

type Cleanup = { cleanup?: () => void }

// v-tilt: o card inclina na direção do ponteiro e a imagem dentro (.tilt-media) desliza (parallax).
// v-spotlight: só acende o brilho que segue o ponteiro. Ambos desligados em toque e reduced-motion.
function pointerDirective(tilt: boolean): Directive<HTMLElement & Cleanup> {
  return {
    getSSRProps: () => ({}),
    mounted(el) {
      if (!prefersMotion() || !finePointer()) {
        return
      }

      let frame = 0
      const move = (event: PointerEvent) => {
        cancelAnimationFrame(frame)
        frame = requestAnimationFrame(() => {
          const box = el.getBoundingClientRect()
          const x = (event.clientX - box.left) / box.width
          const y = (event.clientY - box.top) / box.height
          el.style.setProperty('--mx', `${x * 100}%`)
          el.style.setProperty('--my', `${y * 100}%`)
          el.style.setProperty('--spot', '1')
          if (tilt) {
            el.style.setProperty('--rx', `${(0.5 - y) * 7}deg`)
            el.style.setProperty('--ry', `${(x - 0.5) * 9}deg`)
            el.style.setProperty('--px', `${(0.5 - x) * 14}px`)
            el.style.setProperty('--py', `${(0.5 - y) * 10}px`)
          }
        })
      }
      const leave = () => {
        cancelAnimationFrame(frame)
        for (const name of ['--rx', '--ry', '--px', '--py']) {
          el.style.removeProperty(name)
        }
        el.style.setProperty('--spot', '0')
      }

      el.addEventListener('pointermove', move)
      el.addEventListener('pointerleave', leave)
      el.cleanup = () => {
        el.removeEventListener('pointermove', move)
        el.removeEventListener('pointerleave', leave)
        cancelAnimationFrame(frame)
      }
    },
    unmounted(el) {
      el.cleanup?.()
    },
  }
}

const tiltDirective = pointerDirective(true)
const spotlightDirective = pointerDirective(false)

declare module 'vue' {
  interface GlobalDirectives {
    vReveal: typeof reveal
    vTilt: typeof tiltDirective
    vSpotlight: typeof spotlightDirective
  }
}

export function registerMotionDirectives(app: App): void {
  app.directive('reveal', reveal)
  app.directive('tilt', tiltDirective)
  app.directive('spotlight', spotlightDirective)
}
