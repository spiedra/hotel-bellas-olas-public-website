import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import AboutUs from './pages/AboutUs'
import Book from './pages/Book'
import Contact from './pages/Contact'
import Features from './pages/Features'
import Home from './pages/Home'
import Location from './pages/Location'
import NotFound from './pages/NotFound'
import Rates from './pages/Rates'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="features" element={<Features />} />
          <Route path="location" element={<Location />} />
          <Route path="rates" element={<Rates />} />
          <Route path="book" element={<Book />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
