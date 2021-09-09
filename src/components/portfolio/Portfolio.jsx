import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
        <ul>
          <li className="active">Projects</li>
          <li>Leisure Works</li>
        </ul>
     <div className="container">
       <div className="item">
         <img src="assets/art1.png" alt=""/>
         <h3>Art</h3>
       </div>

       <div className="item">
         <img src="assets/art1.png" alt=""/>
         <h3>Art</h3>
       </div>
       <div className="item">
         <img src="assets/art1.png" alt=""/>
         <h3>Art</h3>
       </div>
       <div className="item">
         <img src="assets/art1.png" alt=""/>
         <h3>Art</h3>
       </div>
       <div className="item">
         <img src="assets/art1.png" alt=""/>
         <h3>Art</h3>
       </div>
       <div className="item">
         <img src="assets/art1.png" alt=""/>
         <h3>Art</h3>
       </div>

     </div>
     
    
    </div>
  );
}
