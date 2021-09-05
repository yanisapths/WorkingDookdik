import "./topbar.scss";
import {Mail,GitHub} from "@material-ui/icons";

export default function Topbar( {menuOpen, setMenuOpen} ) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        Working Dookdik
                    </a>
                    <div className="itemContainer">
                    <ul><a href="https://github.com/yanisapths" ><GitHub className="icon"/></a></ul>
                     <span>yanisapths</span> 
                    </div>
                    <div className="itemContainer">
                      <ul><Mail className="icon"/></ul> 
                       <span>yanisa21@live.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
