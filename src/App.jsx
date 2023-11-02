import './App.css'
import Footer from './Footer/Footer'
import Intro from './Intro/Intro'
import About from './about/About'
import Expertise from './expertise/Expertise'
import Navbar from './navbar/Navbar'
import Templates from './templates/Templates'
import Works from './works/Works'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
      <Intro></Intro>
      <Works></Works>
      <Templates></Templates>
      <Expertise></Expertise>
      <About></About>
      <Footer></Footer>
    </>
  )
}

export default App
