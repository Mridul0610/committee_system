import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import ApiServices,{BASE_URL} from "../../Api/ApiServices";
import {ClipLoader} from "react-spinners"
import { ChatList } from "react-chat-elements";

const override= {

    margin: "0 auto",
    marginTop: "250px",
    marginBottom: '200px',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow:"hidden"
  };
export default function AllChats(){
  
    
    const [data,setData]=useState([])
    const [message, setMessage]= useState([])
    let [color, setColor] = useState("#2c4964;");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        let data={
            userId:sessionStorage.getItem('_id')
        }

        ApiServices.Allchat(data)
        .then((res)=>{
            console.log(res)
            setData(res.data.data)
            // setMessage(res.data.data.messages)
        }).catch((err)=>{
            console.log(err);
        })
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
    },[])

    return(
        <>
        {isLoading && (
          <ClipLoader
            color={color}
            loading={isLoading}
            cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
        {!isLoading && (
        <>
                 <div
      className="breadcrumbs d-flex align-items-center"
      style={{ backgroundImage: 'url("/assets/img/hero-bg.jpg")', marginTop:"100px", height:"400px" }} >
                <div className="container position-relative d-flex flex-column align-items-center">
                    <h2 style={{color:"white"}}>Chat</h2>
                    <ol>
                    <li>
                    <Link className="nav-link" to={""}>
                Home/
              </Link>
                    </li>
                    <Link className="nav-link" to={" "}>
                All Chats
              </Link>
                    </ol>
                </div>
                </div> 
                <div className="container my-5">

                    <div className="row">
                       
                <div className="col-md-8 offset-md-2">
                  {data?.map((el,index)=>
                 <Link to={'/admin/chat/'+el.customerId?._id}>
                 <ol class="list-group" key={index}>
                 <li class="list-group-item d-flex justify-content-between align-items-start" >
                   <div class="ms-2 me-auto">
                     <div class="fw-bold">{index+1}. {el.customerId.name.toUpperCase()}</div>
                      {el.customerId.email}

                   </div>

                   <span class="badge bg-primary rounded-pill">{el.messages.length}</span>
                 </li>

               </ol>
               </Link>
                        )} 
                </div>
                   
                    </div>
                </div>
              
        </>
        )}
        </>
    )
}