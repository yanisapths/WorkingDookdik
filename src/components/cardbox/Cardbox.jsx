import { useEffect,useState } from "react";
//import PortfolioList from "../portfolioList/PortfolioList";
import "./cardbox.scss";
import {
 projectsPortfolio
} from "../../data";

export default function Cardbox() {
  const [selected, setSelected] = useState("projects");
  const [data, setData] = useState([]);
  // const list = [
  //   {
  //     id: "projects",
  //     title: "Projects"
  //   },
  //   {
  //     id: "resume",
  //     title: "CV/Resume"
  //   }
  // ];

  useEffect(() => {
    switch (selected) {
      case "projects":
        setData(projectsPortfolio);
        break;

      default:
        setData(projectsPortfolio);
    }
  }, [selected]);

  return (
    <div className="cardbox" id="cardbox">
     
      <h1>REFLECTIONS</h1>
      <p></p>
      {/* <ul>
        {list.map((item) => (
          <PortfolioList title={item.title}
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul> */}
      <div className="container">
        {data.map( (d) => (
          <div className="item">
            {/* <img src={d.img}
             alt="" 
             />
             <h3>{d.title}</h3> */}
            <p>{d.title}</p>
            <br /> 
            <span>{d.sub}</span>
            <h5>{d.desc}</h5>
            <p>{d.bottom}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
