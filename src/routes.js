import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ContactPage from './pages/ContactPage';

const routes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/contactus" element={<ContactPage />} />
            </Routes>
        </>
    )
}

export default routes