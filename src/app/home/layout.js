import Footer from '@/component/home/layout/Footer'
import Header from '@/component/home/layout/Header'
import React from 'react'

export default function layout({ children }) {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <body>
                {children}
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
