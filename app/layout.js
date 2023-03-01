import '../styles/globals.css'
import {font} from './font'
import Navigation from '../components/Navigation'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Next test</title>
      <body className={font.className}>
        
        <Navigation />
        {children}

      </body>
    </html>
  )
}
