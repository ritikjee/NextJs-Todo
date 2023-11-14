import { Inter } from 'next/font/google'
import './globals.css'
import connectDB from './connectDB'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo App',
  description: 'Created with love by 💀TheHumanError💀',
}

export default function RootLayout({ children }) {
  connectDB()
  return (
    <html lang="en">

      <body className={inter.className}>
      
        {children}
       
      </body>
    </html>
  )
}
