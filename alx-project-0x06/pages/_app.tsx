import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import '@/styles/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.variable}>
      <Component {...pageProps} />
    </main>
  )
}
