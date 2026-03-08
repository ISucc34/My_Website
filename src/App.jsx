import reactLogo from './assets/react.svg'
import TfLogo from './assets/TensorFlow.svg'
import pyCharmLogo from './assets/PyCharm.svg'
import gitLogo from './assets/Git.svg'
import githubLogo from './assets/GitHub.svg'
import vsCodeLogo from './assets/Visual Studio Code (VS Code).svg'
import './App.css'

function App() {

  const logos = [
    { name: 'TensorFlow', src: TfLogo },
    { name: 'PyCharm', src: pyCharmLogo },
    { name: 'Git', src: gitLogo },
    { name: 'GitHub', src: githubLogo },
    { name: 'VS Code', src: vsCodeLogo},
  ]


  return (
    <>
      <div>
        <h1>Isaac's Portfolio</h1>

        <h2>Technologies</h2>
        <div className="logos-container">
          {logos.map((logo) => (
            <div key={logo.name}>
              <img src={logo.src} className='logo' alt={`${logo.name} logo`} />
            </div>
          ))}
        </div>



        <h2>Libraries/Frameworks</h2>
        <h2> Projects</h2>

      </div>
      

    </>
  )
}

export default App
