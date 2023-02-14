import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
const validateSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
    description: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
    action: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
})

export default function CreateStudent() {
    const navigate = useNavigate();
    return (
        <center>
            <h1>Create Student</h1>
            <Formik 
                initialValues={{
                    name: '',
                    description: '',
                    action: ''
                }}
                validationSchema={validateSchema}
                onSubmit={(value) => {
                    axios.post('http://localhost:3001/students', value).then(() => {
                        alert('Student created successfully');
                        navigate('/')
                    });
                }}
            >
                <Form>
                    <table>
                        <tr>
                            <td>
                                Name: 
                            </td>
                            <td>
                                <Field name= {'name'}></Field><br/>
                            </td>
                            <td>
                                <ErrorMessage name={'name'}></ErrorMessage><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Description: 
                            </td>
                            <td>
                                <Field name= {'description'}></Field><br/>
                            </td>
                            <td>
                                <ErrorMessage name={'description'}></ErrorMessage><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Action: 
                            </td>
                            <td>
                                <Field name= {'action'}></Field><br/>
                            </td>
                            <td>
                                <ErrorMessage name={'action'}></ErrorMessage><br/>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button class="btn btn-primary">Save</button><br/>
                            </td>
                            <td></td>
                        </tr>
                    </table>
                </Form>
            </Formik>
        </center>
    )
}
