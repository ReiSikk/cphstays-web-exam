import React from 'react'
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'

function FaqLayout({ children }) {
    return (
        <>
    <NavigationBar />
    <main>
    {children}
    </main>
    <Footer />
</>
  )
}

export default FaqLayout