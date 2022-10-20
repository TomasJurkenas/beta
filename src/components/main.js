import React from "react";
import ReactDOM from "react-dom/client";
import './main.css';
import {ReactComponent as Location} from "../svg/location.svg";
import {ReactComponent as Person} from "../svg/person.svg";
import {ReactComponent as Clock} from "../svg/clock.svg";
import {ReactComponent as Calendar} from "../svg/calendar.svg";
import'../PHP/getData.php';
import Bandymasx from "../components/Bandymasx";


export function Main(){

    return(

        <main>
            <div className="test"> <Bandymasx/> </div>
            <div className="infoTable">
                <img  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5h8h4snN1-2PHI4ZNysOkC4-AWOAKwkmNg&usqp=CAU"} alt={"pool"}/>

                <div className="flexCon">
                    <div className="placeName">
                        asfsaffassfsfassfaaf
                    </div>



                    <div className={"location"}>
                        <div>
                            grand spa
                        </div>
                        <div>
                            <Location/>
                            Druskininkai
                        </div>

                    </div>
                </div>

                <div className="price">
                        Price 69
                </div>
                <div className="sideBulk">
                    <div><Person/>kiek zmoniu</div>
                    <div><Clock/> nakvynes skaicius</div>
                    <div><Calendar/> iki kada galioja </div>
                </div>

            </div>
        </main>
    )
}

