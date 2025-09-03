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
import UserContext from './components/useContext/UserContext'
import UsereducerHook from './components/UseReducer/UsereducerHook'
import UseReducerComplex from './components/UseReducer/UseReducerComplex'
import CustomHook from './components/CustomHooks/CustomHook'
import AxiosGet from './components/Axios/AxiosGet'
import PostExample from './components/Axios/AxiosPost'
import AxiosPut from './components/Axios/AxiosPut'
import AxiosDelete from './components/Axios/AxiosDelete'
import TanStackQuery from './components/TanStack/TanStackQuery'

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
        <Route path="/context" element={<UserContext />} />
        <Route path="/reduce" element={<UsereducerHook />} />
        <Route path="/complex" element={<UseReducerComplex />} />
        <Route path="/custom" element={<CustomHook />} />
        <Route path="/get" element={<AxiosGet />} />
        <Route path="/post" element={<PostExample />} />
        <Route path="/delete" element={<AxiosDelete />} />
        <Route path="/put" element={<AxiosPut />} />
        <Route path="/tanstack" element={<TanStackQuery />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
