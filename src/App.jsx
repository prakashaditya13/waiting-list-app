import './App.css'
import { WaitlistProvider } from './context/waitlist'
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import { UserRegistrationForm, WaitlistStatus } from "./pages"

function App() {
  return (
    <WaitlistProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<UserRegistrationForm/>} />
            <Route path='/waitlist' element={<WaitlistStatus/>} />
          </Routes>
        </BrowserRouter>
    </WaitlistProvider>
  )
}

export default App
