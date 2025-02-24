import { ChatList } from "react-chat-elements";
import { Link } from "react-router-dom";

export default function Chat(){
    return(
        <>
                 <div
      className="breadcrumbs d-flex align-items-center"
      style={{ backgroundImage: 'url("assets/img/hero-bg.jpg")', marginTop:"100px", height:"400px" }} >
                <div className="container position-relative d-flex flex-column align-items-center">
                    <h2 style={{color:"white"}}>Chat</h2>
                    <ol>
                    <li>
                    <Link className="nav-link" to={"/home"}>
                Home/
              </Link>
                    </li>
                    <Link className="nav-link" to={" "}>
                Contact
              </Link>
                    </ol>
                </div>
                </div> 
                <div className="container my-5">

                    <div className="row">
                       
                        <div className="col-md-8 offset-md-2">
                     
                        <ChatList
                        className='chat-list'
                        dataSource={[
                            {
                            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                            alt: 'kursat_avatar',
                            title: <Link to={"/chatData"}>Bhupinder</Link>,
                            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                            date: new Date(),
                            unread: 3,
                            }
                        ]} />
                            
                        <ChatList
                        className='chat-list'
                        dataSource={[
                            {
                            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                            alt: 'kursat_avatar',
                            title: <Link to={"/chatData"}>Bhupinder</Link>,
                            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                            date: new Date(),
                            unread: 3,
                            }
                        ]} />
                        <ChatList
                        className='chat-list'
                        dataSource={[
                            {
                            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                            alt: 'kursat_avatar',
                            title: <Link to={"/chatData"}>Bhupinder</Link>,
                            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                            date: new Date(),
                            unread: 3,
                            }
                        ]} />
                        </div>
                   
                    </div>
                </div>
              
        </>
    )
}