import './styles.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/navigation/Navbar'
import { Michroma } from 'next/font/google'
import Footer from '@/components/navigation/Footer'

const modak = Michroma({
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${modak.className} bg-white dark:bg-[#2e0057]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
