import './App.css'
import { WaitlistProvider } from './context/waitlist'
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import UserRegistrationForm from './pages/UserRegistrationForm'
import WaitlistStatus from './pages/WaitlistStatus'

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
