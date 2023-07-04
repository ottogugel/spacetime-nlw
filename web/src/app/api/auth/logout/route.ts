// Métodos HTTPS - PUT, GET, POST, DELETE

import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectURL = new URL('/', request.url)

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=; Path=/;max-age=0;`, // Para expirar apenas com 1 mês use max-age=2592000;
    },
  })
}
