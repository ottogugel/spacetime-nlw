// Métodos HTTPS - PUT, GET, POST, DELETE

import { api } from '@/lib/lib'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url) // Código de autenticação
  const code = searchParams.get('code') // Código do GITHUB

  const redirectTo = request.cookies.get('redirectTo')?.value

  const registerResponse = await api.post('/register', {
    code,
  })

  const { token } = registerResponse.data

  const redirectURL = redirectTo ?? new URL('/', request.url) // Se existir a informação redirectTo eu mando o usuário para essa página caso contrário mando para o home.

  const cookieExpiresInSeconds = 60 * 60 * 24 * 30 // 60 segundos, 1 hora, 1 dia, 30 dias.

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/;max-age=${cookieExpiresInSeconds};`, // Para expirar apenas com 1 mês use max-age=2592000;
    },
  })
}
