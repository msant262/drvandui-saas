const ROOT_HOST = "drvandui.com.br"
const CANONICAL_HOST = "www.drvandui.com.br"
const CANONICAL_PATH_REDIRECTS = new Map([
  ["/cardiologista-na-vila-mariana", "/cardiologista-vila-mariana"],
  ["/avaliacao-de-risco-cirurgico", "/risco-cirurgico-cardiologico"],
  ["/avaliacao-risco-cirurgico", "/risco-cirurgico-cardiologico"],
  ["/palpitacoes-arritmia", "/palpitacoes-e-arritmias"],
  ["/dor-no-peito", "/dor-no-peito-quando-procurar-ajuda"],
  ["/dor-no-peito-quando-procurar-cardiologista", "/dor-no-peito-quando-procurar-ajuda"],
  ["/colesterol-alto-cardiologista", "/colesterol-alto"],
  ["/pressao-alta", "/tratamento-hipertensao"],
])

function redirectToCanonical(url, pathname) {
  url.hostname = CANONICAL_HOST
  url.protocol = "https:"
  url.pathname = pathname
  url.search = ""

  return Response.redirect(url.toString(), 301)
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.hostname === ROOT_HOST) {
      return redirectToCanonical(url, url.pathname)
    }

    if (url.pathname === "/eventos" || url.pathname.startsWith("/eventos/")) {
      return redirectToCanonical(url, "/")
    }

    const canonicalPath = CANONICAL_PATH_REDIRECTS.get(url.pathname)
    if (canonicalPath) {
      return redirectToCanonical(url, canonicalPath)
    }

    return env.ASSETS.fetch(request)
  },
}
