import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Letter from "./components/letter/Letter";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Cardbox from "./components/cardbox/Cardbox";
import Portfolio from "./components/portfolio/Portfolio";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio />
       <Letter />
       <Cardbox />
       <Contact />
     </div>
    </div>
  );
}

export default App;