import React from "react";
import ReactDOM from "react-dom/client";
import './main.css';
import {ReactComponent as Location} from "../svg/location.svg";
import {ReactComponent as Person} from "../svg/person.svg";
import {ReactComponent as Clock} from "../svg/clock.svg";
import {ReactComponent as Calendar} from "../svg/calendar.svg";
import'../PHP/getData.php';
import Bandymasx from "../components/Bandymasx";
//
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Bandymasx />);
export function Main(){

    return(

        <main>
            <a href={'../PHP/getData.php'}>asdddddddddd</a>
            <div className="test">here siuksles <Bandymasx/> </div>
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


//pazymeti loved pasirinkimus ir tada issaugoti

// import * as React from 'react';
// import Checkbox from '@mui/material/Checkbox';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
//
// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
//
// export default function IconCheckboxes() {
//     return (
//         <div>
//             <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
//             <Checkbox
//                 {...label}
//                 icon={<BookmarkBorderIcon />}
//                 checkedIcon={<BookmarkIcon />}
//             />
//         </div>
//     );
// }