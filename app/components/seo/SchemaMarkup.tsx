import { type ReactNode } from 'react'

type SchemaMarkupProps = {
  schema: Record<string, unknown>
  children?: never
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2),
      }}
    />
  )
}
