import {Outlet} from "react-router-dom";
import Header from "./Customer/Layout/Header";
import Footer from "./Customer/Layout/Footer";


export default function Master(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}