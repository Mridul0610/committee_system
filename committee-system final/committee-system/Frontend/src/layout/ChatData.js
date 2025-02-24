import { MessageBox } from "react-chat-elements";
import { Link } from "react-router-dom";
export default function ChatData(){
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
                Home
              </Link>
                    </li>
                    <Link className="nav-link" to={"/chatData"}>
               ChatData
              </Link>
                    </ol>
                </div>
                </div> 
          <div className="container my-5">
                    <div className="row">
                        <div className="col-md-12">
                        <MessageBox
                        position={"left"}
                        type={"text"}
                        title={"Message Box Title"}
                        text="Here is a text type message box"
                        />
                        </div>
                        <div className="col-md-12">
                        <MessageBox
                        position={"left"}
                        type={"text"}
                        title={"Message Box Title"}
                        text="Here is a text type message box"
                        />
                        </div>
                        <div className="col-md-12">
                        <MessageBox
                        position={"left"}
                        type={"text"}
                        title={"Message Box Title"}
                        text="Here is a text type message box"
                        />
                        </div>
                        <div className="col-md-12">
                        <MessageBox
                        position={"right"}
                        type={"text"}
                        title={"ME"}
                        text="Here is a text type message box"
                        />
                        </div>
                    </div>
                </div>
        </>
    )
}