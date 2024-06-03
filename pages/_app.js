import '../styles/global.css'
import {  Open_Sans, Nanum_Pen_Script, Alice } from 'next/font/google'

const serif = Alice({
    variable: '--font-serif',
    style: ['normal'],
    subsets: ['latin'],
    weight: ['400'],
  })
  const sans = Open_Sans({
    variable: '--font-sans',
    subsets: ['latin'],
    // @todo: understand why extrabold (800) isn't being respected when explicitly specified in this weight array
    // weight: ['500', '700', '800'],
  })
  const mono = Nanum_Pen_Script({
    variable: '--font-mono',
    subsets: ['latin'],
    weight: ['400'],
  })

export default function App({ Component, pageProps }) {
    return <main className={`${mono.variable} ${sans.variable} ${serif.variable}`}><Component {...pageProps} /></main>;
  }

