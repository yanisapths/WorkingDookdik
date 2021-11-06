import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Resume from "./components/resume/Resume";
import Letter from "./components/letter/Letter";
import Contact from "./components/contact/Contact";
import Dir from "./components/dir/Dir";

import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

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
       <Dir />
       <Contact />
     </div>
    </div>
  );
}

export default App;