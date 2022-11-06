import React from 'react'
import jiraya from './Jiraya.jpg'
import twitter from './twitter-sign.png'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import github from './github.png'
import facebook from './facebook.png'
import email from './email.png'
import './App.css'
const Image = () => {
  return(
    <img src={jiraya} className='card-image'></img>
  )
}

const MainCard = () => {
  return(<div className='mainCard'>
    <h1 className='Name'>PervySage106</h1>
    <h3 className='designation'>Frontend Developer</h3>
    <h4 className='Topic'>PervySage's Portfolio</h4>

    {/* <btn>Email</btn> */}
    <button className='Email-btn'><img src={email} width='20px'></img><h4>Email</h4></button>

    <h2>About</h2>
    <p>I'm a frontend developer with a keen interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

    <h2>Interests</h2>
    <p>Blockchain development, Frontend Development, NFTs, Travel, Rap, Anime.</p>
  </div>)
}

const Footer = () => {
  return (<footer className='Foot'>
    <button> <img src={twitter} width="40px"></img> </button>
    <button><img src={instagram} width="40px"></img></button>
    <button><img src={linkedin} width="40px"></img></button>
    <button><img src={github} width="40px"></img></button>
    <button><img src={facebook} width="40px"></img></button>
  </footer>)
}


const App = () => {
  return (
    <div className='card'>
      <Image />
      <MainCard />
      <Footer />
    </div>
  )
}

export default App