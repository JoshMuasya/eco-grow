import './globals.css'

export const metadata = {
  title: 'Eco Grow Gardens',
  description: 'An Eco Farm',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        {children}
      </body>
    </html>
  )
}
