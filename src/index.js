import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../src/styles/theme'

import App from './App'
import AboutUs from './pages/AboutUs'
import Book from './pages/Book'
import Contact from './pages/Contact'
import Features from './pages/Features'
import Home from './pages/Home'
import Location from './pages/Location'
import NotFound from './pages/NotFound'
import Rates from './pages/Rates'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  </React.StrictMode>
)
