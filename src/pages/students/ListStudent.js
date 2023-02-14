/* eslint-disable array-callback-return */
import { useEffect, useState } from "react"
// import { useLocation } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListStudent() {
    let [list, setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/students').then(res => {
            setList(res.data);
        })
    }, []);
    return (
        <div class="container">
            <h1>List Student</h1>
            <table class="table table-striped">
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Action</th>
                    <th></th>
                    <th></th>
                </tr>
                {list.map((item, key) => {
                    return (
                        <tr key={key}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.action}</td>
                            <td><Link to={'/edit-student/'+item.id}><button class="btn btn-primary">Edit</button></Link></td>
                            <td><Link to={'/delete-student/'+item.id}><button class="btn btn-danger">Delete</button></Link></td>
                        </tr>
                    )
                })}
            </table>
            <br/>
        </div>
    )
}
