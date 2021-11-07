import { useEffect,useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
 eduPortfolio,
 skillsPortfolio, 
 contributedPortfolio,
 languagePortfolio, 
} from "../../portdata";

export default function Portfolio() {
  const [selected, setSelected] = useState("projects");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "edu",
      title: "Education"
    },
    {
      id: "skills",
      title: "Basic Skills"
    },
    {
      id: "contributed",
      title: "Contributed"
    },
    {
      id: "language",
      title: "Languages"
    }
    

  ];

  useEffect(() => {
    switch (selected) {
      case "edu":
        setData(eduPortfolio);
        break;
      case "skills":
        setData(skillsPortfolio);
        break;
      case "contributed":
        setData(contributedPortfolio);
        break;
      case "language":
        setData(languagePortfolio);
         break;

      default:
        setData(eduPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <head>
     <h1>PORTFOLIO</h1>
     </head>
      <main>
        <div className="left">
          <ul>
            {list.map((item) => (
              <PortfolioList title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
              />
            ))}
          </ul>
        </div>
      <div className="right">
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
      </main>
   
    </div>
  );
}