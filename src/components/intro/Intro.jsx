import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
 
  const textRef = useRef();

  useEffect(()=>{
//console.log(textRef);
init(textRef.current,{
  showCursor:true,
  backDelay:1500,
  backSpeed:60,
  strings: ["Creative Works","Random Stuff"],
});

  },[])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/art1-removebg.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Collective & Works</h2>
          <h1>Dookdik's</h1>
          <h3> I do <span ref={textRef}></span> and make sure they're delicious.
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
