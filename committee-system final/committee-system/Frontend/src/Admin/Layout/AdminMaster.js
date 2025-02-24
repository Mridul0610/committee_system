import {Outlet, Navigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";


export default function AdminMaster(){
    const storedToken = sessionStorage.getItem("token");
    if(!storedToken){
      toast.error("user not authenticated! Login first");
      return <Navigate to='/login'/>
   
    }
    return(
        <>
        <AdminHeader/>
        <div style={{minHeight:'70vh'}}>
        <Outlet/>  {/*it calls the slave component/child components */}
        </div>
        <AdminFooter/>
        </>
    )
}