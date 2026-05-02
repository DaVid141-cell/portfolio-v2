import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './pages/main-page'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/about'
import ProjectPage from './pages/projects'
import ContactPage from './pages/contacts'
import { Analytics } from "@vercel/analytics/react"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Analytics/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/projects" element={<ProjectPage/>}/>
        <Route path="/contacts" element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
