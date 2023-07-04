// TypeScript + JSX = JSX
// JSX = Javascript + XML (Incluir HTML dentro do JavaScript)
// XML = Sintaxe do HTML

import { EmptyMemories } from '@/components/EmptyMemories'

// grid serve para definir as colunas e como nesse projeto será utilizado 2, grid grid-cols-2, min-h-screen para definir 100% da altura.
// serve para não remover o espaço = {' '}
// centralizado na tela na position absolute top-1/2 -translate-y-1/2

export default function Home() {
  return <EmptyMemories />
}
