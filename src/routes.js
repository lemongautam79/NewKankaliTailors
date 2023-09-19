import React from 'react'
import TopBar from './components/TopBar'
import NavBar from './components/NavBar'
import Components from './components/Components'
import Trendy from './components/Trendy'
import Vendors from './components/Vendors'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

const routes = () => {
    return (
        <>
            <TopBar />
            <NavBar />
            <Components />
            <Trendy/>
            <Vendors/>
            <Footer/>
            <BackToTop/>
        </>
    )
}

export default routes