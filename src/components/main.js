import React from "react";
import './main.css';
import {ReactComponent as Location} from "../svg/location.svg";
import {ReactComponent as Person} from "../svg/person.svg";
import {ReactComponent as Clock} from "../svg/clock.svg";
import {ReactComponent as Calendar} from "../svg/calendar.svg";

export function Main(){
    return(
        <main>
            <div className="infoTable">
                <img  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5h8h4snN1-2PHI4ZNysOkC4-AWOAKwkmNg&usqp=CAU"} alt={"pool"}/>

                <div className="flexCon">
                    <h2>
                        asfsaffassfsfassfaaf
                    </h2>
                    <title>
                        grand spa
                    </title>

                    <h3>
                        <Location/>
                        Druskininkai
                    </h3>
                </div>
                <div className="smallGrid">
                    <div className="price">
                        Price 69
                    </div>
                    <div className="sideBulk">
                        <div><Person/>kiek zmoniu</div>
                        <div><Clock/> nakvynes skaicius</div>
                        <div><Calendar/> iki kada galioja </div>
                    </div>
                </div>

            </div>
        </main>
    )
}