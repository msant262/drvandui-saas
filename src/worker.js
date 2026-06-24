const ROOT_HOST = "drvandui.com.br"
const CANONICAL_HOST = "www.drvandui.com.br"
const CANONICAL_PATH_REDIRECTS = new Map([
  ["/cardiologista-na-vila-mariana", "/cardiologista-vila-mariana"],
  ["/avaliacao-de-risco-cirurgico", "/risco-cirurgico-cardiologico"],
  ["/avaliacao-risco-cirurgico", "/risco-cirurgico-cardiologico"],
  ["/palpitacoes-arritmia", "/palpitacoes-e-arritmias"],
  ["/dor-no-peito", "/dor-no-peito-quando-procurar-ajuda"],
  ["/dor-no-peito-quando-procurar-cardiologista", "/dor-no-peito-quando-procurar-ajuda"],
  ["/colesterol-alto-cardiologista", "/check-up-cardiologico"],
  ["/pressao-alta", "/tratamento-hipertensao"],
  ["/consulta-com-cardiologista", "/contato"],
  ["/colesterol-alto", "/check-up-cardiologico"],
  ["/prevencao-cardiovascular", "/check-up-cardiologico"],
  ["/clinica-medica", "/especialidades"],
  ["/palpitacoes-quando-se-preocupar", "/palpitacoes-e-arritmias"],
  ["/pressao-alta-quando-procurar-ajuda", "/tratamento-hipertensao"],
  ["/colesterol-alto-e-risco-cardiaco", "/check-up-cardiologico"],
  ["/cardiologista-ou-clinico-geral", "/especialidades"],
])

function redirectToCanonical(url, pathname, shouldDeindex = false) {
  url.hostname = CANONICAL_HOST
  url.protocol = "https:"
  url.pathname = pathname
  url.search = ""

  const canonicalUrl = url.toString()
  const headers = {
    Location: canonicalUrl,
    Link: `<${canonicalUrl}>; rel="canonical"`,
    "Cache-Control": "public, max-age=86400",
  }

  if (shouldDeindex) {
    headers["X-Robots-Tag"] = "noindex, follow"
  }

  return new Response(null, {
    status: 301,
    headers,
  })
}

function getCanonicalPath(pathname) {
  if (pathname === "/eventos" || pathname.startsWith("/eventos/")) {
    return "/"
  }

  return CANONICAL_PATH_REDIRECTS.get(pathname) ?? pathname
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const canonicalPath = getCanonicalPath(url.pathname)

    if (url.hostname === ROOT_HOST || canonicalPath !== url.pathname) {
      return redirectToCanonical(url, canonicalPath, canonicalPath !== url.pathname)
    }

    return env.ASSETS.fetch(request)
  },
}
