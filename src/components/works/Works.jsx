import { useState } from "react";
import "./works.scss";

export default function Works() { 
    const [currentSlide,setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      icon:"./assets/art1-removebg.png",
      title: "S1",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img:
        "https://images.unsplash.com/photo-1631096207334-5a250b246a0c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNDh8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      icon:"./assets/art1-removebg.png",
      title: "S2",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img:
        "https://images.unsplash.com/photo-1630797160655-35e602b644c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      id: 3,
      icon:"./assets/art1-removebg.png",
      title: "S3",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img:
        "https://images.unsplash.com/photo-1630797160655-35e602b644c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    }

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
                <div className="imgContainer">
                  <img src="{d.icon}" alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Projects</span>
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
