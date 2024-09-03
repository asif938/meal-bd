import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Meals from './Meals'
import Slider from './Slider'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-10 mt-10">Meal bd</h1>
      <Meals></Meals>
      <Slider></Slider>
    </>
  )
}

export default App
