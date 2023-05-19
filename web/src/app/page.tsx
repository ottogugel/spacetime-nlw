// TypeScript + JSX = JSX
// JSX = Javascript + XML (Incluir HTML dentro do JavaScript)
// XML = Sintaxe do HTML

import Image from 'next/image'

import { User } from 'lucide-react'
import nlwspacetimelogo from '../assets/nlw-spacetime-logo.svg'

// grid serve para definir as colunas e como nesse projeto será utilizado 2, grid grid-cols-2, min-h-screen para definir 100% da altura.
// serve para não remover o espaço = {' '}
// centralizado na tela na position absolute top-1/2 -translate-y-1/2

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left section */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {/* Sign in */}
        <a href="" className="flex items-center gap-3 text-left">
          <div className="hover:bg-grey-700 flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 transition-colors hover:bg-white">
            <User className="h-5 w-5 text-gray-500" />
          </div>

          <p className="max-w-[140px] text-sm leading-snug text-gray-100">
            <span className="underline transition-colors hover:text-gray-50">
              Crie sua conta
            </span>{' '}
            e salve suas memórias!
          </p>
        </a>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={nlwspacetimelogo} alt="NLW Spacetime Logo" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>

          <a
            className="inline-block rounded-full border bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
            href=""
          >
            CADASTRAR LEMBRANÇA
          </a>
        </div>
        {/* Copyright */}
        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da{' '}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gray-100"
            href="https://rocketseat.com.br"
          >
            Rocketseat
          </a>
        </div>
      </div>

      {/* Right section */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
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
