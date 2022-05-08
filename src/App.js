
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/User/Login'
import Register from './Components/User/Register';
import { ToastContainer } from 'react-toastify';
import useUser from './Hook/useUser';
import Inventory from './Components/Inventory/Inventory';
import RequireAuth from './Components/RequireAuth'
import ManageInventory from './Components/Inventory/ManageInventory';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
function App() {
  const user = useUser()
  console.log(user)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/inventory' element={<RequireAuth>
          <Inventory />
        </RequireAuth>
        } />
        <Route path='/inventory/:id' element={<RequireAuth>
          <ManageInventory />
        </RequireAuth>
        } />
      <Route path='/about' element={<div className='page-about'>
        <About />
      </div>}/>
      <Route path='/blogs' element={<Blogs />}/>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
