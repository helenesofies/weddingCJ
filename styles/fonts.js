import { IBM_Plex_Mono, Inter, Nanum_Pen_Script, Alice } from 'next/font/google'
 
export const serif = Alice({
  variable: '--font-serif',
  style: ['normal'],
  subsets: ['latin'],
  weight: ['400'],
})
export const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  // @todo: understand why extrabold (800) isn't being respected when explicitly specified in this weight array
  // weight: ['500', '700', '800'],
})
export const mono = Nanum_Pen_Script({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['200'],
})