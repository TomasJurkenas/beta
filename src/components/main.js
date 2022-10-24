import React,{useState, useEffect} from "react";
import {bPagination} from './Pagination'
import './main.css';
import {ReactComponent as Location} from "../svg/location.svg";
import {ReactComponent as Person} from "../svg/person.svg";
import {ReactComponent as Clock} from "../svg/clock.svg";
import {ReactComponent as Calendar} from "../svg/calendar.svg";
import'../PHP/getData.php';
import Records from "../MOCK_DATA.json"


export function Main(){
    const [record, setRecord] = useState(Records);
    const [loading, setLoading] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);

    // Get current records
    
    const indexOfLastrecord = currentPage * recordsPerPage;
    const indexOfFirstrecord = indexOfLastrecord - recordsPerPage;
    const currentRecords = record.slice(indexOfFirstrecord, indexOfLastrecord);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    return(

        <main className="maybe">

            {
                Records.map(record => {
                    return(

                        <div className="infoTable" key={record.id}>
                            <img  src={record.img}  alt={"pool"}/>
                            <div className="flexCon">
                                <div className="placeName">
                                    {record.about}
                                </div>

                                <div  className={"location"}>
                                    <div>
                                        {record.location}
                                    </div>
                                    <div>
                                        <Location/>
                                        {record.city}
                                    </div>

                                </div>
                            </div>

                            <div className="price">
                                {record.price}
                            </div>
                            <div className="sideBulk">
                                <div><Person/>{record.peopleAmount}</div>
                                <div><Clock/> {record.stayNight}</div>
                                <div><Calendar/>{record.validFor}</div>
                            </div>
                        </div>

                    )
                })
            }

        </main>
    )
}

