import { MessageBox } from "react-chat-elements";
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import ApiServices from "../../Api/ApiServices";
import {ClipLoader} from "react-spinners"

const override= {

    margin: "0 auto",
    marginTop: "250px",
    marginBottom: '200px',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow:"hidden"
  };


export default function CustomerChat(){
    const [message,setMessage]=useState("")
    const [x,setX]=useState(false)
    const [data,setData]=useState([])
    let [color, setColor] = useState("#2c4964;");
    const [isLoading, setIsLoading] = useState(true);
    const param=useParams()
    const id=param.id 
  
    useEffect(() => {
      fetchData();
      const interval = setInterval(fetchData, 2000);
      return () => clearInterval(interval); 
  }, [x]);

   const fetchData=()=>{
        let single={
          fromId:id,
          toId:sessionStorage.getItem('_id'),
        }
        ApiServices.Singlechat(single)
        .then((res)=>{
            console.log(res)
            setData(res.data.data.messages)
            console.log('msg',res.data.data.messages)
        }).catch((err)=>{
            console.log(err);
        })
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
    }

       const Submitted=(e)=>{
        e.preventDefault()
        let data= {
         message:message,
        "fromId": sessionStorage.getItem('_id'),
        "adminId":'662a0bd3fcce0630b2675148',
        "customerId":id
        }
        ApiServices.chat(data).then(
          (res)=>{
            console.log("response is:",res)
       
              toast.success(res.data.message)
              setMessage('')
              setX(true);
            //   setImageName("")
            //   setImage({})
            //   setDescription('')
          }
        ).catch(
          (err)=>{
            console.log(err);
            toast.error(err.data.message)
          }
        )
         setX(false)
      }
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        // Example format: "MM/DD/YYYY HH:MM:SS"
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        return formattedDate;
    };
    const sortedData = data?.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

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
                    <Link className="nav-link" to={"/home"}>
                Home/
              </Link>
                    </li>
                    <Link className="nav-link" to={"/chatData"}>
              Single User Chat
              </Link>
                    </ol>
                </div>
                </div> 
          <div className="container my-5">
          
                    <div className="row">

                    {sortedData?.map((el) => (
                    <div className="col-md-12">
                   <MessageBox
                   position={el.fromId === id ? "left" : "right"}
                   type={"text"}
                   title={formatDate(el.createdAt)}
                   text={el.message}
                    />
                  </div> 
                  ))}
                      
           {/* {data?.filter(el=>el.fromId==id).map((el)=>
                        <div className="col-md-12">
                        <MessageBox
                        position={"left"}
                        type={"text"}
                        title={formatDate(el.createdAt)}
                        text= {el.message}
                        />
                        </div> 
            )} 
                       {data?.filter(el=>el.fromId=='662a0bd3fcce0630b2675148').map((el)=>
                        <div className="col-md-12">
                        <MessageBox
                        position={"right"}
                        type={"text"}
                        title={formatDate(el.createdAt)}
                        text= {el.message}
                        />
                        </div> 
            )}  */}

        <form onSubmit={Submitted}>
        <div class="mb-3 row mt-4">
           {/* <label for="inputPassword" class="col-sm-3 col-form-label" style={{fontSize:"20px",fontWeight:"500"}} >Type A Message</label> */}
           {/* <i class="bi bi-chat-left-text-fill col-sm-4"></i> */}
            <div class="col-sm-9">
           <input type="text" class="form-control" id="inputPassword" placeholder="type a message!"
             value={message} onChange={(e) => { setMessage(e.target.value) }}/>
         </div>
         <div className="col-sm-3">
         <button type="submit" className="btn  btn-style mb-2 text-light" style={{width:"auto",backgroundColor:"#56B8E6"}}>Send</button>
        </div>
         </div></form>
                    </div>
                </div>
        </>
      )}
      </>
    )
}