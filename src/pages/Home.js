
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return (
        <>

            <Header></Header>
            <Navbar></Navbar>
            <Link to={'/'}>List Student</Link> |
            <Link to={'/create-student'}>Create Student</Link> |
            
            <hr/>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
