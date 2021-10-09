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
  strings: ["Happy visiting."],
});

  },[])

  return (
    <div className="intro" id="intro">
      <div className="wrapper">
        
        <h1>About Me.</h1>
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
        <h2>Hi, I'm Dookdik.</h2>
        <h3> 
          I love to read & write about many things. 
          I'm practicing web design and css as well :) 
          
          <p>
          <span ref={textRef}></span>
          </p>
         
        </h3>

      </div>

          {/* <h3> I do <span ref={textRef}></span> and make sure they're delicious.
          </h3> */}
{/* 
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a> */}

</div>/* /. end intro */

  );
}
