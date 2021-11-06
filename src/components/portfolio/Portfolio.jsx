import { useEffect,useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
 projectsPortfolio,
 leisurePortfolio
} from "../../portdata";

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
     
      <h1>PORTFOLIO</h1>
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