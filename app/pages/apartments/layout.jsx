import React from 'react'
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'

function ApartmentsLayout({ children }) {
    return (
        <>
        <header>
    <NavigationBar />
        </header>
    <main>
    {children}
    </main>
    <Footer />
</>
  )
}

export default ApartmentsLayout