import React from "react";
import './aside.css'
import {ReactComponent as City} from "../svg/city.svg";
import {ReactComponent as Family} from "../svg/family.svg";
import {ReactComponent as Clock} from "../svg/clock.svg";
import {ReactComponent as Price} from "../svg/price.svg";


export function Aside(){
    return(
        <>
            <aside>
                <div className="dropdown">
                    <div className="line">
                        <City/>
                        <h3>Miestas</h3>
                    </div>
                    <div className="dropdown-content">
                        <p>Vilnius</p>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="line">
                        <Clock/>
                        <h3>Nakvynes trukmė</h3>
                    </div>
                    <div className="dropdown-content">
                        <p>Laikas</p>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="line">
                        <Family/>
                        <h3>Asmenų skaičius</h3>
                    </div>

                    <div className="dropdown-content">
                        {/*padarytti checkbox*/}
                        <p>5533zmoniu</p>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="line">
                        <Price/>
                        <h3>Kaina</h3>
                    </div>
                    <div className="dropdown-content">
                        <p>1000000</p>
                    </div>
                </div>
            </aside>
        </>
    )
}