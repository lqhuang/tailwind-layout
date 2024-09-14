import * as React from 'react'

export const metadata = {
  title: 'Tailwind layout playground',
  description: 'A playground of tailwind layout components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
