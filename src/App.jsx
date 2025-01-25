import AboutMe from "./components/AboutMe"
import Header from "./components/Header"
import Offer from "./components/Offer"

function App() {
  

  return (
    <div className="flex flex-col gap-[150px] items-center font-main">
      <Header/>
      <AboutMe/>
      <Offer/>
    </div>
  )
}

export default App
