import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ApiServices from '../Api/ApiServices';
import { ToastContainer, toast } from 'react-toastify';
import Moment from 'react-moment';
import Select from "react-select"
import 'react-toastify/dist/ReactToastify.css';
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

const ChatBox = () => {
    const [chatSingle, setchatSingle] = useState({});
    const [messages, setmessages] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [selecteduserId, setSelectedUserId] = useState("");
    const [option,setOption]=useState([])
    const [chatData, setChatData] = useState([]);
    const [userId, setuserId] = useState(sessionStorage.getItem("_id"));
    const [chatId, setchatId] = useState("");
    const [newMessage, setnewMessage] = useState("");
    const [openChat, setopenChat] = useState(false);
    const params = useParams()
    const div = useRef(null);
    const nav = useNavigate()
    let [color, setColor] = useState("#3F2305");
    const [isLoading, setIsLoading] = useState(true);
    
    let authenticate = sessionStorage.getItem('token')


    useEffect(() => {
        ApiServices.usersAll().then((res) => {
            if (res.data.success) {
                const users = res.data.data;
                setAllUsers(users);
    
                const options = users.filter(user=>user._id !== sessionStorage.getItem('_id')).map((user) => ({
                    
                    value: user._id,
                    // <Link to={`/chat/${el.userId?._id}`}>  
                    label: user.name
                }));
                setOption(options);
            }
        });
        setTimeout(() => {
            setIsLoading(false);
          }, 1500);
    }, []);

    // const startChat = (selecteduserId) => {
    //     // Call a function to start the chat with the selected user
    //     console.log("Starting chat with user ID:", selecteduserId);
    //     // Implement your chat initiation logic here
    // };

    useEffect(()=>{
        if (!authenticate) {
            nav("/login")
        }
        else{
            ApiServices.chatAll({ userId: userId }, { headers: { Authorization: sessionStorage.getItem('token') } })
                .then((res) => {
                    setChatData(res.data.data);
                    console.log('chats',res.data.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },[])

    useEffect(() => {
        console.log("Starting chat with user ID:", selecteduserId);
        if (!authenticate) {
            nav("/login")
        }
        else {

            if (!!selecteduserId) {
                ApiServices.chatSingle({ fromId: userId, toId: selecteduserId}, { headers: { Authorization: sessionStorage.getItem('token') } })
                    .then((res) => {
                        // console.log("check chat exist", res);
                        if (res.data.success) {
                            getSingleChat(res.data.data._id)
                        }
                        else {
                            let data = {
                                firstUserId: userId,
                                // secondUserId: selecteduserId

                            }
                            if(!!selecteduserId){
                                data.secondUserId=selecteduserId
                            }
                            ApiServices.chatAddEmpty(data, { headers: { Authorization: sessionStorage.getItem('token') } })
                                .then((res) => {
                                    if (res.data.success) {
                                        // toast.success(res.data.message)
                                        getSingleChat(res.data.data._id);
                                        setChatData(chatData => [...chatData, res.data.data]);
                                        // console.log('chatttt', chatData)
                                    }
                                    else {
                                        toast.error(res.data.message)
                                    }
                                })
                                .catch((err) => {
                                    console.log(err);
                                    toast.error("Something went wrong");
                                })
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        }

    },[selecteduserId])


    const getSingleChat = (id) => {
        if (!!id) {
            // console.log("1 id",id);
            setchatId(id)
            // console.log("2 chatId", chatId);
            ApiServices.chatSingleById({ _id: id }, { headers: { Authorization: sessionStorage.getItem('token') } })
                .then((res) => {
                    if (res.data.success) {
                        setopenChat(true)
                        setchatSingle(res.data.data)
                        setmessages(res.data.data?.messages);
                        setTimeout(() => {
                            // div.current.scrollIntoView({ behavior: "smooth", block: "end" })
                            div.current.scrollIntoView({ block: "end" });
                        }, 500)
                        // console.log("before clear", sessionStorage.getItem('intervalId'));

                        if (!!sessionStorage.getItem('intervalId')) {

                            clearInterval(sessionStorage.getItem('intervalId'))
                            //   console.log("after clear", sessionStorage.getItem('intervalId'));
                        }

                        let x = setInterval(() => {
                            updateMessages(id)
                        }, 3000)

                        sessionStorage.setItem("intervalId", x)
                        // console.log("new clear", sessionStorage.getItem('intervalId'));
                    }
                    else {
                        toast.error("Chat Not Found")
                    }

                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    const updateMessages = (id) => {
        // console.log("update message id", id);
        ApiServices.chatSingleById({ _id: id }, { headers: { Authorization: sessionStorage.getItem('token') } })
            .then((res) => {

                if (res.data.success) {
                    setmessages(res.data.data?.messages);
                }

                // setTimeout(() => {
                //   div.current.scrollIntoView({ block: "end" })
                // }, 500)
            })
            .catch((err) => {
                console.log(err);
            })
    }



    const handleSubmit = (e) => {
        e.preventDefault();

        if (!!newMessage) {
            let data = {
                firstUserId: chatSingle?.firstUserId?._id,
                secondUserId: chatSingle?.secondUserId?._id,
                fromId: userId,
                message: newMessage,
            }
            ApiServices.chatAdd(data, { headers: { Authorization: sessionStorage.getItem('token') } })
                .then((res) => {
                    // console.log(res);
                    if (res.data.success) {
                        // toast.success(res.data.message)
                        setnewMessage('');

                        setTimeout(() => {
                            div.current.scrollIntoView({ block: "end" })

                        }, 500)
                    }
                    else {
                        toast.error(res.data.message)
                    }
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("Something went wrong");
                })
        }
        else {
            toast.error("Message box is empty!!")
        }
    }
    const deleteMessage = (messageId) => {

        let data = {
          chatId: chatId,
          messageId: messageId
        }
        ApiServices.chatdelete(data, { headers: { Authorization: sessionStorage.getItem('token') } })
          .then((res) => {
            console.log(res);
            if (res.data.success) {
              updateMessages(chatId)
    
            }
            else {
              toast.error(res.data.message)
            }
          })
          .catch((err) => {
            console.log(err);
            toast.error("Something went wrong");
          })
    
      }

    

    return (
        <>
    {isLoading &&(
    <ClipLoader
    color={color}
    loading={isLoading}
    cssOverride={override}
    size={100}
    aria-label="Loading Spinner"
    data-testid="loader"
    />
    )}
    {!isLoading &&(
        <>
            <section class="intro-single" style={{marginBottom:'-80px', marginTop:'170px'}}>
                <div class="container">
                    <div class="row mt-3">
                        <div class="col-md-12 col-lg-8">
                            <div class="title-single-box">
                                <h1 class="title-single ps-3" style={{borderLeft:'5px solid #3F2305'}}>My Messages</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="" className="property-grid grid">
                <div className="container" data-aos="fade-up">
                    {/* <div className="section-header">
            <h2>My Inbox</h2>

          </div> */}
                    <div className='row'>
                        <div className='col-md-4' style={{ overflowY: "auto", height: "200px", marginTop:'20px'}}>
                            {chatData?.map((el, index) => (
                                // <Link to={}>
                                <div className='px-2 bg-light shadow-lg border-bottom border-3 border-secondary-subtle' style={{ cursor: "pointer" }} onClick={() => { getSingleChat(el?._id) }}>
                                    <div className="d-flex align-items-center">

                                        <div>
                                            {el?.firstUserId?._id != userId ?
                                                <>
                                                    <h4>{el?.firstUserId?.name}</h4>
                                                    {/* <h4>{el?.firstUserId?.email}</h4> */}
                                                </>
                                                :
                                                <>
                                                    <h4>{el?.secondUserId?.name}</h4>
                                                    {/* <h4>{el?.secondUserId?.email}</h4> */}
                                                </>
                                            }

                                        </div>

                                    </div>
                                    <p style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", fontSize: "15px", textAlign: "left" }}>
                                        <i className="bi bi-quote quote-icon-left" />
                                        {el?.messages[el?.messages.length - 1]?.message}
                                        <i className="bi bi-quote quote-icon-right" />
                                    </p>
                                </div>
                                // </Link>
                            ))}

                        </div>
                        <div className='col-md-8'>
                            {openChat ?
                                <>
                                    <div style={{ height: "40px" }} className='border border-secondary-subtle border-5 shadow-lg py-2'>
                                        <h5 style={{ textAlign: "left" }}> {chatSingle?.firstUserId?._id != userId ? <>{chatSingle?.firstUserId?.name}  </> : <>{chatSingle?.secondUserId?.name}  </>}</h5>
                                        {/* <p style={{ textAlign: "left", fontSize: "15px" }}> {chatSingle?.firstUserId?._id != userId ? <>{chatSingle?.firstUserId?.email}  </> : <>{chatSingle?.secondUserId?.email}  </>}</p> */}
                                    </div>

                                    <div style={{ height: "300px", overflowY: "auto" }} className='px-2 pt-2 border border-secondary-subtle border-5 bg-secondary-subtle' >
                                        <div ref={div}>


                                            {messages.map((ele, i) => (
                                                <div className='my-2' style={{ textAlign: ele?.fromId == userId ? "right" : "left" }} >
                                                    <span className='shadow p-2 bg-light rounded' style={{ maxWidth: "70%", display: "inline-block" }}>
                                                        {ele?.message} <br />
                                                    </span>
                                                    <p style={{ fontSize: "10px" }}>
                                                        <Moment format="MM-DD, HH:mm">{ele?.createdAt}</Moment>
                                                        {
                                                            ele?.fromId == userId ? <span className='text-danger' style={{ cursor: "pointer" }} onClick={() => { deleteMessage(ele?._id) }}>Move To Trash</span> :
                                                                <></>
                                                        }


                                                    </p>

                                                </div>
                                            ))

                                            }
                                        </div>
                                    </div>
                                    <div style={{ height: "60px" }} className='p-2 border border-secondary-subtle border-5 bg-secondary-subtle'>
                                        <form onSubmit={handleSubmit}>
                                            <div className='row'>
                                                <div className='col-11 pe-0'>
                                                    <input type="text" className='form-control' placeholder="Type here..." value={newMessage} onChange={(e) => { setnewMessage(e.target.value) }} />
                                                </div>
                                                <div className='col-1 px-0'>
                                                    <button className='btn btn-primary px-3' type="submit">
                                                        <i className='bi bi-send-fill'></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </>
                                :
                                <>
                                 <h1>Start a new chat</h1>
                                 {/* <Link to={`/chat/${el.userId?._id}`}>  */}
                                 <Select options={option} isMulti={false} isClearable={true} isSearchable={true} onChange={(e)=>setSelectedUserId(e.value)} />
                                {/* <center><button className='btn' onClick={showAllusers}>+ Add New Chat</button></center> */}
                                {/* <br></br> */}

                                </>}
                        </div>
                    </div>

                </div>
            </section>

        </>
    )}
    </>
    );
};

export default ChatBox;
