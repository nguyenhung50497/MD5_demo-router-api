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
                        <Formik 
                            onSubmit={() => {
                                axios.delete('http://localhost:3001/students/' + id).then(() => {
                                    alert('Delete student successfully');
                                    navigate('/');
                                });
                            }}
                            enableReinitialize={true}
                        >
                            <Form>
                                <button class="btn btn-danger">Yes</button>
                            </Form>
                        </Formik>
                    </td>
                    <td>
                        <Link to={'/'}><button class="btn btn-primary">No</button></Link>
                    </td>
                </tr>
            </table>
        </>
    )
}
