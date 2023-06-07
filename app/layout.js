import './globals.css'
import {Inter} from 'next/font/google'
import {Archivo} from 'next/font/google';
import {Poppins} from 'next/font/google';



const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  subsets: ['latin'],
  weight:'400'
 })
const archivo = Archivo({ 
  subsets: ['latin'],
  weights: ['400', '500', '600', '700']
});

export const metadata = {
  title: 'Cph stays',
  description: 'Cph stays is a platform for finding and booking short to long term rentals in Copenhagen for corporate and private clients.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
