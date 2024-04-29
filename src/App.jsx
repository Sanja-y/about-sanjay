import { useEffect } from "react"
import Header from "./components/layout/header"
import {mergeClasses, scrollOnMount, setDefaultTheme } from "./lib/utils"
import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import SpaWrapper from "./components/layout/spa-wrapper"
import { Analytics } from '@vercel/analytics/react'
import Blogs from "./pages/Blogs"
import 'react-loading-skeleton/dist/skeleton.css'
import useWindowSize from "./hooks/useWindowSize"
const App = () => {
  const {width} = useWindowSize()
  useEffect(() => {
      setDefaultTheme()
      setTimeout(() => {
        scrollOnMount(width)
      }, 1000)
  }, [])
  const theme = useSelector((state) => state.theme.theme)
  return (
    <div className={mergeClasses("bg-gray", theme)}>
      <Analytics />
      <Header />
      <Routes>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<SpaWrapper />} />
      </Routes>
    </div>
  )
}

export default App