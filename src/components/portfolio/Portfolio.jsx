import { useEffect,useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
 projectsPortfolio,
 resumePortfolio
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
      id: "resume",
      title: "CV/Resume"
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "projects":
        setData(projectsPortfolio);
        break;
      case "resume":
        setData(resumePortfolio);
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
