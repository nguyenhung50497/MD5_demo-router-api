import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import axios from "axios";

export default function DeleteStudent() {
    const navigate = useNavigate();
    const {id} = useParams();
    return (
        <>
            <h1>Delete Student</h1>
            <table>
                <tr>
                    <td colSpan={2}>Are you sure???</td>
                </tr>
                <tr>
                    <td>
                        <button class="btn btn-danger" onClick={() => {
                            axios.delete('http://localhost:3001/students/' + id).then(() => {
                                alert('Delete student successfully');
                                navigate('/');
                            });
                        }}>Yes</button>
                    </td>
                    <td>
                        <Link to={'/'}><button class="btn btn-primary">No</button></Link>
                    </td>
                </tr>
            </table>
        </>
    )
}
