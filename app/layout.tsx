import './globals.css'

export const metadata = {
  title: 'Priya Dharshini H | Data Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}