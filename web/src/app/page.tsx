// TypeScript + JSX = JSX
// JSX = Javascript + XML (Incluir HTML dentro do JavaScript)
// XML = Sintaxe do HTML

// grid serve para definir as colunas e como nesse projeto será utilizado 2, grid grid-cols-2, min-h-screen para definir 100% da altura.
// serve para não remover o espaço = {' '}
// centralizado na tela na position absolute top-1/2 -translate-y-1/2

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left section */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-0 top-0 w-2 bg-stripes" />
      </div>

      {/* Right section */}
      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}