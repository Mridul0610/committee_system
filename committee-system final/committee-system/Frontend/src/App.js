import './App.css';


import About from './pages/About';

import Login from './Auth/Login';
import Team from './pages/Team';

import Home from './pages/Home';
import Error from './layout/Error';
import Master from './Master';
import Portfolio from './pages/Portfolio';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Profile from './layout/Profile';
import AdminMaster from "./Admin/Layout/AdminMaster";
import Dashboard from './Admin/Dashboard';
import Register from './Auth/Register';
import AddCommittee  from './Admin/Committee/AddCommittee';
import ManageCommittee from './Admin/Committee/ManageCommittee';
import ViewCard from './layout/ViewCard';
import ViewHistory from './layout/ViewHistory';
import Chat from './layout/Chat'
import "react-chat-elements/dist/main.css"
import ChatData from './layout/ChatData';
import Blog from './pages/Blog';
import UpdateCommittee from './Admin/Committee/UpdateCommittee';
import AddDetails from './Admin/Details/AddDetails';
import ManageDetails from './Admin/Details/ManageDetails';
import UpdateDetails from './Admin/Details/UpdateDetails';
import ChangePassword from './Customer/ChangePassword';
import CommitteView from './Customer/CommitteView';
import AllPequests from './Customer/AllRequests';
import ViewPequests from './Admin/ViewRequests';
import AddChat from './Customer/Chat/AddChat';
import CustomerChat from './Admin/Chat/CustomerChat';
import AllChats from './Admin/Chat/AllChats';
import ChatBox from './Admin/AdminChat';
function App() {

 
 return (
   
      <>
      <BrowserRouter>
      <Routes>      
      <Route path="/login" element={<Login/>}/>   
      <Route path ='/register' element={<Register/>}/>

      <Route path="/" element={<Master/>}>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/about" element={<About/>}/> */}
      <Route path="/chnagePassword" element={<ChangePassword/>}/>
       <Route path="/viewCard" element={<ViewCard/>}/>
      <Route path="/committee" element={<CommitteView/>}/>
       <Route path="/viewHistory" element={<AllPequests/>}/>
       <Route path='/profile' element={<Profile/>}/> 
       {/* <Route path='/chat'element={<AddChat/>}/>
       <Route path='/chatData' element={<ChatData/>}/> */}
       <Route path='/blog' element={<Blog/>}/>
       <Route path="/my-chats" element={<ChatBox/>}/>
    <Route path="/chat/:id" element={<ChatBox/>}/>
       </Route>
      <Route path='/*' element={<Error/>}/>
      
      
      
       
       <Route path="/admin" element={<AdminMaster/>}>
       <Route path="/admin" element={<Dashboard/>}/>
      <Route path="/admin/addCommittee" element={<AddCommittee/>}/>
       <Route path="/admin/manageCommittee" element={<ManageCommittee/>}/>
       <Route path="/admin/updateCommittee/:id" element={<UpdateCommittee/>}/>
       <Route path="/admin/addDetails/" element={<AddDetails/>}/>
       <Route path="/admin/manageDetails/" element={<ManageDetails/>}/>
       <Route path="/admin/updateDetails/:id" element={<UpdateDetails/>}/>
       <Route path="/admin/viewHistory" element={<ViewPequests/>}/>
       {/* <Route path="/admin/chat/:id" element={<CustomerChat/>}/>
       <Route path="/admin/Allchats" element={<AllChats/>}/> */}
       <Route path="/admin/my-chats" element={<ChatBox/>}/>
    <Route path="/admin/chat/:id" element={<ChatBox/>}/>









  
     
      </Route>
     </Routes>
     
   </BrowserRouter> 
   <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    
   </>

  
    
  )};


export default App

