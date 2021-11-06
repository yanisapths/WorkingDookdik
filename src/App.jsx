import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Resume from "./components/resume/Resume";
import Letter from "./components/letter/Letter";
import Contact from "./components/contact/Contact";
import CardApp from "./components/card/CardApp";
import Menu from "./components/menu/Menu";

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
       <Resume/>
       <Letter />
       <CardApp />
       <Contact />
     </div>
    </div>
  );
}

export default App;