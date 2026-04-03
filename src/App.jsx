import reactLogo from './assets/react.svg'
import TfLogo from './assets/TensorFlow.svg'
import pyCharmLogo from './assets/PyCharm.svg'
import gitLogo from './assets/Git.svg'
import githubLogo from './assets/GitHub.svg'
import vsCodeLogo from './assets/Visual Studio Code (VS Code).svg'
import laImage from './assets/LA.jpeg'
import nn from './assets/neuralNetwork.png'
import CAI from './assets/CougarAI.jpeg'
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

  //Add projects that you want to show you dirty little dissapointment
  const projects = [
    {name: "Linear Algbra Library" , src: "https://github.com/ISucc34/LinAlgLibrary", img: laImage,
      desc: "A small library for experimenting with matrix and vector operations."}, 
    {name: "Cougar AI Workshops", src: "https://github.com/ISucc34/CougarAI_Workshops", img:CAI,
      desc: "Educational workshops for begginners to get hands on experience"},
    {name: "Portfolio", src: "https://github.com/ISucc34/My_Website", img: "",
      desc:"The website you see before you"}
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

        
        {
        //Add cards, with links to the github repo 
        }

        <h2>Projects</h2>
        
        <div className='projects'>
          {projects.map((project) =>(
          <div className='project-card'>
            <img className='project-image' src={project.img}/>
            <div className='project-content'>
              <h3>{project.name} </h3>
              <p> {project.desc} </p>
            </div>
          </div>))}
        </div>
        

        <h2>Contact and Socials</h2>
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
