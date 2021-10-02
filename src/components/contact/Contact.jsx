
import {useState} from 'react';
import "./contact.scss";

export default function Contact() {

    const [message,setMessage] = useState(false);

    const handleSubmit = (e)=>{
      e.preventDefault();
      setMessage(true);
    }

  return (
    <div className="contact" id="contact">

      <div className="left">
        <img src="https://images.unsplash.com/photo-1499380848949-2960e980ed02?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDY1fHxwbGFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button>Send</button>
            {message && <span>Thank, I'll reply ASAP </span>}
        </form>
      </div>

    </div>
  )
}
