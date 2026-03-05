import { useState } from 'react'
import reactLogo from './assets/react.svg'
import TfLogo from './assets/TensorFlow.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const logos = {
    Tf: {logo:'./assets/TensorFlow.svg', link:"https://www.tensorflow.org"},
    PyCharm:"src/assets/PyCharm.svg",
    Git: "src/assets/Git.svg",
    github : "src/assets/GitHub.svg",
    vsCode : "src/assets/Visual Studio Code (VS Code).svg"
  };


  return (
    <>
      <div>
        <h1>Isaac's Portfolio</h1>

        <h2>Technologies</h2>
        <div >
          <img src={TfLogo} className="logoContainer" alt="Tensorflow logo" />
        </div>

        <h2>Libraries/Frameworks</h2>
        <h2> Projects</h2>
        <a href="https://vite.dev" target="_blank">
          <img src={TfLogo} className="logo" alt="Tensorflow logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
