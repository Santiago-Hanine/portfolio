import { useEffect } from 'react'
import { Home } from '../Home'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

	useEffect(() => {
      AOS.init({
        duration: 1000, 
      });
    }, []);

  return (
    <>
      <div className='bg-black-bg '>
        <Home />
      </div>
    </>
  )
}

export default App
