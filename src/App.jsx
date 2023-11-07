import { useState } from 'react'
import '/src/index.scss'
import '/src/App.scss'
import Header from "./components/Header/Header";



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header/>
    </div>
  )
}

export default App
