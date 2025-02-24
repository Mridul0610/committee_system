import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


export default function Master(){
    
    return(
        <>
        <Header/>
        <div style={{minHeight:'70vh'}}>
        <Outlet/>  {/*it calls the slave component/child components */}
        </div>
        <Footer/>
        </>
    )
}