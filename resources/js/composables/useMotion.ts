// Animação só no cliente e só se o usuário não pediu menos movimento.
export function prefersMotion(): boolean {
  return typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Chama `onEnter` uma vez quando o elemento entra na tela.
export function onceVisible(element: Element, onEnter: () => void, threshold = 0.35): () => void {
  const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      observer.disconnect()
      onEnter()
    }
  }, { threshold })

  observer.observe(element)

  return () => observer.disconnect()
}
