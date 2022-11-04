import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NotFound404 from '../components/NotFound404'

export default function PageNotFound() {
    return (
        <div className="pagenotfound_comp">
            <Header />
            <NotFound404 />
            <Footer />
        </div>
    )
}
