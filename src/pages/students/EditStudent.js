/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useEffect, useState } from "react";
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

export default function EditStudent() {
    const navigate = useNavigate();
    const {id} = useParams();
    let [student, setStudent] = useState({name:'', description:  '',action:''});
    useEffect(() => {
        axios.get('http://localhost:3001/students/'+ id).then(res => {
            setStudent(res.data);
        })
    }, []);
    console.log(student);
    return (
        <center>
            <h1>Edit Student</h1>
            <Formik 
                initialValues={{
                    name: student.name,
                    description:  student.description,
                    action: student.action
                }}
                validationSchema={validateSchema}
                onSubmit={(value) => {
                    axios.put('http://localhost:3001/students/'+ id, value).then(() => {
                        alert('Student updated successfully');
                        navigate('/');
                    });
                }}
                enableReinitialize={true}
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
