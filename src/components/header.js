import React from "react";
import './header.css';

export function Header(){
    return(
      <>
          <div className="container">
            <img id="mainImg" src={"https://sanatorijos.eu/wp-content/uploads/2020/09/2384.jpg"} alt={"poilsis"}/>
            <div className="textContainer">
                <h1>poilsis</h1>
                <p>   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at eius eligendi facilis fugiat ipsam, nihil officia omnis perspiciatis porro. Ea inventore libero molestias mollitia nihil numquam quas qui temporibus.</p>
            </div>
          </div>
      </>

    )
}