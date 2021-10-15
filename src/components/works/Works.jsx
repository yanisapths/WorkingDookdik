import { useState } from "react";
import "./works.scss";

export default function Works() { 
    const [currentSlide,setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      // icon:"./assets/art1-removebg.png",
      title: "WORK",
      // desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      // img:
      //   "./assets/intro-bg-1.png"
    },
    {
      id: 2,
      icon:"./assets/art1-removebg.png",
      title: "S2",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img:
        "./assets/intro-bg-1.png"
    },
    // {
    //   id: 3,
    //   icon:"./assets/art1-removebg.png",
    //   title: "S3",
    //   desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   img:
    //     "./assets/intro-bg-1.png"
    // }

  ];

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : -2) : 
    setCurrentSlide(currentSlide<data.length -1? currentSlide+1 : 0 );
  };


  return (
    <div className="works" id="works">
     <div className="slider" style={{ transform: `translateX(-${currentSlide *100}vw)` }}>
       {data.map((d) => (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                {/* <div className="imgContainer">
                  <img src="{d.icon}" alt="" />
                </div> */}
                <h2>{d.title}</h2>
                {/* <p>{d.desc}</p> */}
                {/* <span>Projects</span> */}
              </div>
            </div>
            <div className="right">
                <img src="{d.img}" alt="" />
            </div>
          </div>
       </div>
        ))}
     </div>
     <img src="assets/arrow1.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
     <img src="assets/arrow1.png" className="arrow right" alt="" onClick={()=>handleClick()} />
    </div>
  );
}
