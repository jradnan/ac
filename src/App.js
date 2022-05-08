
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
function App() {
  const user =useUser()
  console.log(user)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/inventory' element={<RequireAuth>
          <Inventory />
        </RequireAuth>
      }/>
        
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
