import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UsestateHook from './components/UsestateHook'
import UsingObject from './components/UsingObject'
import UsingArray from './components/UsingArray'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsestateHook />} />
        <Route path="/object" element={<UsingObject />} />
        <Route path="/array" element={<UsingArray />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
