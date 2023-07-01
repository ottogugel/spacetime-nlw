// TypeScript + JSX = JSX
// JSX = Javascript + XML (Incluir HTML dentro do JavaScript)
// XML = Sintaxe do HTML

import { cookies } from 'next/headers'
import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { SignIn } from '@/components/SignIn'
import { Profile } from '@/components/Profile'

// grid serve para definir as colunas e como nesse projeto será utilizado 2, grid grid-cols-2, min-h-screen para definir 100% da altura.
// serve para não remover o espaço = {' '}
// centralizado na tela na position absolute top-1/2 -translate-y-1/2

export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left section */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {/* Sign in */}
        {isAuthenticated ? <Profile /> : <SignIn />}

        {/* Hero */}
        <Hero />
        {/* Copyright */}
        <Copyright />
      </div>

      {/* Right section */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <EmptyMemories />
        </div>
      </div>
    </main>
  )
}
