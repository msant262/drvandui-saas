import { Fragment } from "react"

type JsonLdPayload = Record<string, unknown> | Array<Record<string, unknown>>

type JsonLdScriptProps = {
  id?: string
  data: JsonLdPayload
}

export function JsonLdScript({ id, data }: JsonLdScriptProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      suppressHydrationWarning
      // biome-ignore lint: JSON-LD blocks are rendered as-is for crawler readability.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

type JsonLdSetProps = {
  scripts: JsonLdScriptProps[]
}

export function JsonLdSet({ scripts }: JsonLdSetProps) {
  return (
    <Fragment>
      {scripts.map((script) => (
        <JsonLdScript key={script.id ?? JSON.stringify(script.data)} {...script} />
      ))}
    </Fragment>
  )
}
