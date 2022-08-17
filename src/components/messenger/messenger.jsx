import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' ;
import styles from './messenger.module.css';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { io } from "socket.io-client";
import {format} from "timeago.js" ;
const api = axios.create({
    baseURL: `http://localhost:8800/api`
});



function Messenger() {
    const { user } = useContext(AuthContext);
    const [check, setCheck] = useState(1);
    const [messages, setMessages] = useState([]);
    const [curmessage, setCurmessage] = useState("");
    const socket = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", () => {
            setCheck(1);
        })
    }, []);



    useEffect(() => {
        const getConversations = async () => {
            try {
                await api.get("/messages")
                    .then((res) => {
                        setMessages(res.data);
                        console.log(messages);
                        if (check < 4) {
                            setCheck(check + 1);
                        }
                    })
            }
            catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [check]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const messagebox = {
            messagerid: user._id , 
            place: user.city,
            text: curmessage,
            sender: user.username,
        };

        // const receiverId = currentChat.members.find(
        //     (member) => member !== user._id
        // );

        socket.current.emit("sendMessage", {});

        try {
            const res = await axios.post("/messages", messagebox);
            setMessages([...messages, res.data]);
            setCurmessage("");
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="container my-5" >
            <div className={`row ${styles.clearfix}`}>
                <div className={`col-lg-4`}></div>
                <div className="col-lg-5">
                    {/* <div className="card chat-app"> */}
                    {/* <div id="plist" className="people-list"> */}
                    { /*
                             <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-search"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Search..." />
                            </div> 
                            <ul className="list-unstyled chat-list mt-2 mb-0">
                                <li className="clearfix">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
                                    <div className="about">
                                        <div className="name">Vincent Porter</div>
                                        <div className="status"> <i className="fa fa-circle offline"></i> left 7 mins ago </div>
                                    </div>
                                </li>
                                <li className="clearfix active">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                                    <div className="about">
                                        <div className="name">Aiden Chavez</div>
                                        <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                                    <div className="about">
                                        <div className="name">Mike Thomas</div>
                                        <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                                    <div className="about">
                                        <div className="name">Christian Kelly</div>
                                        <div className="status"> <i className="fa fa-circle offline"></i> left 10 hours ago </div>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar" />
                                    <div className="about">
                                        <div className="name">Monica Ward</div>
                                        <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                                    <div className="about">
                                        <div className="name">Dean Henry</div>
                                        <div className="status"> <i className="fa fa-circle offline"></i> offline since Oct 28 </div>
                                    </div>
                                </li>
                            </ul>*/}
                    {/* </div> */}
                    <div className={styles.chat}>
                        <div className={`${styles.chat_header} ${styles.clearfix}`}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                                    </a>
                                    <div className={styles.chat_about}>
                                        <h6 className="m-b-0">World chat</h6>
                                        <small>Let's talk about weather...</small>
                                    </div>
                                </div>
                                {/* <div className="col-lg-6 hidden-sm text-right"> */}
                                {/* <a href="javascript:void(0);" className="btn btn-outline-secondary"><i className="fa fa-camera"></i></a>
                                        <a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-image"></i></a>
                                        <a href="javascript:void(0);" className="btn btn-outline-info"><i className="fa fa-cogs"></i></a>
                                        <a href="javascript:void(0);" className="btn btn-outline-warning"><i className="fa fa-question"></i></a>
                                    </div> */}
                            </div>
                        </div>
                        <div className={styles.chat_history} style={{height : "calc(100vh - 300px)" , overflow : "auto"}}>
                            <ul className="m-b-0">
                                {messages.map((c) => {
                                    if(c.messagerid == user._id)
                                    {
                                    return (
                                        <><li className={styles.clearfix}>
                                            {/* <div className={`${styles.message_data} text-right`}>
                                                <span className={styles.message_data_time}>{c.place}</span>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                                            </div> */}
                                            <div className={`${styles.message} ${styles.my_message} ${styles.float_right}`}> {c.text} <br/> -
                                            <span className={styles.message_data_time}>{format(c.createdAt)}</span></div>
                                        </li></>) 
                                    }
                                    else
                                    {
                                    return (
                                        <><li className={styles.clearfix}>
                                            <div className={`${styles.message_data} text-right`}>
                                                <span className={styles.message_data_place}>{c.place}</span>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                                            </div>
                                            <div className={`${styles.message} ${styles.other_message} `}> {c.text} <br/> -
                                            <span className={styles.message_data_time}>{format(c.createdAt)}</span>
                                            </div>
                                        </li></>) 
                                    }
                                })
                                }

                                {/* <li className="clearfix">
                            <div className="message-data">
                                <span className="message-data-time">10:12 AM, Today</span>
                            </div>
                            <div className="message my-message">Are we meeting today?</div>                                    
                        </li>                               
                        <li className="clearfix">
                            <div className="message-data">
                                <span className="message-data-time">10:15 AM, Today</span>
                            </div>
                            <div className="message my-message">Project has been already finished and I have results to show you.</div>
                        </li> */}
                            </ul>
                        </div>
                        <div className={`${styles.chat_message}  ${styles.clearfix}`}>
                            <div className={`input-group mb-0`}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <button onClick={handleSubmit}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                            </svg></button>
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Enter text here..." value={curmessage} onChange={(e) => setCurmessage(e.target.value)} />
                            </div>
                            {/* <input type="button" onClick={handleSubmit} value="submit"></input>  */}
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Messenger
