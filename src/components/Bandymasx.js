import React from 'react';
import'../PHP/getData.php';


class Bandymasx extends React.Component{
    constructor(props) {
        super(props);
        this.state={activityInfo:[]};
        this.headers=[
            {key: 'id', label:'id'},
            {key: 'price', label: 'price'}
        ];
    }
    componentDidMount() {
        fetch('../PHP/getData.php').then(response =>{
            console.log(response);
            return response.json();
        }).then(result => {
            // Work with JSON data here
            console.log(result);
            this.setState({
                activityInfo_rs:result
            });
        }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
        });
    }
    render() {
        const activityInfoFound = this.state.activityInfo_rs && this.state.activityInfo_rs.length;
        if(activityInfoFound) {
            return (
                <div><h1>ReactJS Fetch Data from Database with PHP Mysql</h1>
                    <div ></div>

                    <table >
                        <thead>
                        <tr>
                            {
                                this.headers.map(function(h) {
                                    return (
                                        <th key={h.key}>{h.label}</th>
                                    )
                                })
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            // this.state.activityInfo.map()
                            this.state.activityInfo_rs.map(function(item, index) {
                                return (
                                    <tr key={index}>
                                        <td>/>
                                            {item.id}
                                        </td>
                                        <td>{item.city}</td>

                                    </tr>
                                )}.bind(this))
                        }
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <div>
                    Null
                </div>
            )
        }
    }
}

export default Bandymasx;