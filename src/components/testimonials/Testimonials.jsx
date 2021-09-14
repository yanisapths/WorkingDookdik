import "./testimonials.scss";

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Lauren",
      title: "donut",
      img:"https://images.unsplash.com/photo-1631397833256-34809ae27872?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      icon:"assets/linkedin3.png",
      desc:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      name: "Jeff",
      title: "mister",
      img:"https://images.unsplash.com/photo-1631397833256-34809ae27872?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      icon:"assets/linkedin3.png",
      desc:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      featured:true
    
    },
    {
      i:3,
      name: "Max",
      title: "dunkins",
      img:"https://images.unsplash.com/photo-1631397833256-34809ae27872?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      icon:"assets/linkedin3.png",
      desc:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ];
    return(
      <div className="testimonials" id="testimonials">
          <h1>Testimonials</h1>
          <div className="container">
            {data.map((d) => (

           
            <div className={d.featured ? "card featured" : "card"}>

              <div className="top">
                <img className="left" src="assets/down_right.png"  alt="" />
                <img className="user" src={d.img} alt="" />
                <img className="right"  src={d.icon} alt="" />
              </div>
           
             <div className="center">
             {d.desc}
             </div>
             
             <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
             </div>
            
            </div>

          ))}
          </div>
    </div>  
    );
}
