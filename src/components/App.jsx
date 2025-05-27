import { useState } from 'react'
import '../App.css'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Note />
      <Footer />
    </>
  )
}

export default App
