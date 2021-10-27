
import "./menu.scss";
import {Mail,GitHub} from "@material-ui/icons";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">HOME</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#resume">PORTFOLIO</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#letter">WORK</a>
        </li>
      </ul>
      <div className="itemContainer">
                    <ul><a href="https://github.com/yanisapths" ><GitHub className="icon"/></a></ul>
                     <span>yanisapths</span> 
                    </div>
                    <div className="itemContainer">
                      {/* <ul><Mail className="icon"/></ul>  */}
                       <span>yanisa21@live.com</span>
                       <span> <logo>D!k. </logo>| 2021</span>
                    </div>
    </div>
  );
}