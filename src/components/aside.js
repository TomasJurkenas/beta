import React from "react";
import './aside.css'
import {ReactComponent as City} from "../svg/city.svg";
import {ReactComponent as Family} from "../svg/family.svg";
import {ReactComponent as Clock} from "../svg/clock.svg";
import {ReactComponent as Price} from "../svg/price.svg";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export function Aside(){
   
    // constructor(props){
    //     super(props);
    //     this.headers=[
    //         {key:'id', label:'Id'},
    //         {key:'city', label: 'City'}
    //     ]
    // }

    return(
        <>
            <aside>
                <div className="dropdown">
                    <div className="line">
                        <City/>
                        <h3>Miestas</h3>
                    </div>
                    <div className="dropdown-content">
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Visi pasirinkimai" />
                            <FormControlLabel control={<Checkbox />} label="Vilnius" />
                        </FormGroup>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="line">
                        <Clock/>
                        <h3>Nakvynes trukmė</h3>
                    </div>
                    <div className="dropdown-content">
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Visi pasirinkimai" />
                            <FormControlLabel control={<Checkbox />} label="1 Naktis" />
                        </FormGroup>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="line">
                        <Family/>
                        <h3>Asmenų skaičius</h3>
                    </div>

                    <div className="dropdown-content">
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Visi pasirinkimai" />
                            <FormControlLabel control={<Checkbox />} label="1 asmuo" />
                        </FormGroup>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="line">
                        <Price/>
                        <h3>Kaina</h3>
                    </div>
                    <div className="dropdown-content">
                        <Box width={300}>
                            <label>price</label>
                            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"  min={10} max={500}/>
                        </Box>

                    </div>
                </div>
            </aside>
        </>
    )
}