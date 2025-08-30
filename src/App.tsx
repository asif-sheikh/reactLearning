import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UsestateHook from './components/UsestateHook'
import UsingObject from './components/UsingObject'
import UsingArray from './components/UsingArray'
import UseEffectHook from './components/useEffectHook/UseEffectHook'
import FetchApi from './components/useEffectHook/FetchApi'
import Debounce from './components/useEffectHook/Debounce'
import UseRefHook from './components/useRefHook/UseRefHook'
import UseMemoHook from './components/UseMemoHook/UseMemoHook'
import UseCallback from './components/UseCallback/UseCallback'
import UseContext from './components/useContext/UseContext'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsestateHook />} />
        <Route path="/object" element={<UsingObject />} />
        <Route path="/array" element={<UsingArray />} />
        <Route path="/effect" element={<UseEffectHook />} />
        <Route path="/api" element={<FetchApi />} />
        <Route path="/debounce" element={<Debounce />} />
        <Route path="/ref" element={<UseRefHook />} />
        <Route path="/memo" element={<UseMemoHook />} />
        <Route path="/callback" element={<UseCallback />} />
        <Route path="/context" element={<UseContext children={undefined} />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
