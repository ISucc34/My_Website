import reactLogo from './assets/react.svg'
import TfLogo from './assets/TensorFlow.svg'
import pyCharmLogo from './assets/PyCharm.svg'
import gitLogo from './assets/Git.svg'
import githubLogo from './assets/GitHub.svg'
import vsCodeLogo from './assets/Visual Studio Code (VS Code).svg'
import './App.css'

function App() {

  //Maybe implement a on click to give a list of projects that use it. 
  // For example clicking on Node.js could do a drop down list of projects or open a new window
  const Frameworks = [
    { name: 'TensorFlow', src: TfLogo },
    { name: 'PyCharm', src: pyCharmLogo },
    { name: 'Git', src: gitLogo },
    { name: 'VS Code', src: vsCodeLogo},
  ]

  // Ex: Fusion 360, KiCAD, etc.
  const techLogos =[

  ]
  

  const Socials = [
    { name: 'GitHub', src: githubLogo },
  ]


  return (
    <>
      <div>
        <h1>Isaac's Portfolio</h1>

        <h2>Libraries & Frameworks</h2>
        <div className="logos-container">
          {Frameworks.map((logo) => (
            <div key={logo.name}>
              <img src={logo.src} className='logo' alt={`${logo.name} logo`} />
            </div>
          ))}
        </div>


        <h2>Technologies</h2>
        
        {//Add cards, with links to the github repo 
        }
        <h2>Projects</h2>
        
        <div className='projects'>
          <div >
            <img src="Unkown.png"/> 
          </div>
          <h3>Linear Algebra Library</h3>
        </div>
        
        


        <h3>Contact</h3>
        <div className="logos-container">
          {Socials.map((social) => 
          <div key={social.name}>
            <img src={social.src} className="logo" alt={`${social.name} logo`}/>
          </div>)}
        </div>
         
      </div>
      
    </>
  )
}

export default App
