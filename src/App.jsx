import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Offer from "./components/Offer"
import Footer from "./components/Footer"
import ArrowUp from "./components/ArrowUp"
function App() {
  

  return (
    <div className="flex flex-col gap-[150px] items-center font-main">
      <Header/>
      <AboutMe/>
      <Offer/>
      <Contact/>
      <Footer/>
      <ArrowUp />
    </div>
  )
}

export default App
