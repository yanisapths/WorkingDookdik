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
     <h1>What I've learned</h1>
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
            <h3>{d.title}</h3>
              <p>{d.sub}</p>
              <br />
              <h5>{d.desc}</h5>
              <p>{d.bottom}</p>
              <a href="https://www.udemy.com/certificate/UC-621cd0cd-c42c-4dc6-b635-272fec4aac97/">{d.link}</a>
              <br />
            </div>
          ))}
          </div>
       </div>
      </main>
   
    </div>
  );
}