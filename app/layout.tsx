import type { Metadata } from 'next'
import { GeistSans } from 'geist/font'
import './globals.css'
import RentoformProvider from '@/components/rentoform/provider'

export const metadata: Metadata = {
  title: 'Rentoform Demo',
  description: 'Written by Valerius Mattfeld, @valerius_mat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <RentoformProvider>
          {children}
        </RentoformProvider>
      </body>
    </html>
  )
}
