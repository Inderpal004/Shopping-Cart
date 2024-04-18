import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import { useEffect, useState } from 'react'
import Cart from './Components/Cart'
import { Toaster } from 'react-hot-toast';

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='w-full h-screen'>
      <BrowserRouter>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <Navbar />
        <Routes>
          <Route path='/' element={<Cards data={data} loading={loading} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
