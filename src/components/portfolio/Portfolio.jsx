import { useEffect,useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
 projectsPortfolio,
 leisurePortfolio
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("projects");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "projects",
      title: "Projects"
    },
    {
      id: "leisure",
      title: "Leisure"
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "projects":
        setData(projectsPortfolio);
        break;
      case "leisure":
        setData(leisurePortfolio);
        break;

      default:
        setData(projectsPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
     
      <h1>RECENT PROJECTS</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title}
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map( (d) => (
          <div className="item">
            <img src={d.img}
             alt="" 
             />
             <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
