import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Sorry for the dust—our site is under construction!</h3>
      <p className="read-the-docs">
        <a href="https://sumitsute.cargo.site/">Wondering what came before? See the older site version here!</a>
      </p>
    </>
  )
}

export default App
