import React from 'react';

class bandymasx extends React.Component{
    constructor(props) {
        super(props);
        this.state={activityInfo:[]};
        this.headers=[
            {key: 'id', label:'id'},
            {key: 'city', label: 'city'}
        ];
    }
    componentDidMount() {
        fetch('http://localhost:3000/getData.php').then(response =>{
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
        const employeeFound = this.state.employee_rs && this.state.employee_rs.length;
        if(employeeFound) {
            return (
                <div className="container"><h1>ReactJS Fetch Data from Database with PHP Mysql</h1>
                    <div id="msg"></div>

                    <table className="table table-bordered table-striped">
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
                            this.state.activityInfo_rs.map(function(item, index) {
                                return (
                                    <tr key={index}>
                                        <td><input type="checkbox" className="selectsingle" value="{item.id}" checked={this.state.checkedBoxes.find((p) => p.id === item.id)} onChange={(e) => this.toggleCheckbox(e, item)}/>
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
                <div id="container">
                    No product found
                </div>
            )
        }
    }
}
export default bandymasx;