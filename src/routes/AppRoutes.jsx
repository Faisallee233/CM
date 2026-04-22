import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Admin from '../pages/Admin'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainLayout from '../layouts/MainLayout'
import Payment from '../pages/Payment' 
import Upload from '../pages/Upload' 
import Orders from '../pages/Orders'
import Profile from '../pages/Profile'
import Dashboard from '../pages/Dashboard'
import Services from '../pages/services'  


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
        <Route path="/admin" element={<MainLayout><Admin /></MainLayout>} />
        <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
        <Route path="/register" element={<MainLayout><Register /></MainLayout>} />
        <Route path='/payment' element={<MainLayout><Payment /></MainLayout>} />
        <Route path='/upload' element={<MainLayout><Upload/></MainLayout>}/>
        <Route path='/orders' element={<MainLayout><Orders/></MainLayout>} />
        <Route path='/profile' element={<MainLayout><Profile/></MainLayout>} />
        <Route path='/dashboard' element={<MainLayout><Dashboard setPage={()=>{}}/></MainLayout>} />
        <Route path='/services' element={<MainLayout><Services/></MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes