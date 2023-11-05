import React,{useState} from 'react';
import logo from '../images/logo.png'
import home from '../images/color_home.png'
import search from '../images/search.png'
import notes from '../images/notes.png'
import taskk from '../images/task_alt.png'
import archive from '../images/archive.png'
import deletee from '../images/delete.png'
import close from '../images/close.png'
import calender from '../images/calender.png'
import grade from '../images/grade.png'
import white_tick from '../images/white_tick.png'
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { newaddUser } from '../Features/User';

const Taskpage = () => {
    const nav=useNavigate()
    const {newList:users} = useSelector((state) => state.users);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const dispatch = useDispatch();

    const add = (e) => {
        e.preventDefault();
        dispatch(newaddUser({ id: users.length + 1, title, desc }))
        setTitle("")
        setDesc("")
    };
    return (
        <div className='d-flex'>
            <div>
                <div className='d-flex fw-semibold fs-5' style={{ padding: "30px" }}>
                    <div><img src={logo}></img></div>
                    <div style={{ paddingLeft: "15px" }}>
                        <div>John Doe</div>
                        <div>johndoe@gmail.com</div>
                    </div>
                </div>
                <div className='d-flex fw-semibold fs-5' style={{ position: "relative", height: "55px", left: '30px', paddingLeft: "14px", paddingTop: "10px", paddingBottom: "30px", width: "300px", borderRadius: "7px" }} onClick={() => nav("/")} >
                    <div><img src={home}></img></div>
                    <div style={{ paddingLeft: "13px", paddingTop: "3px" }}>Home</div>
                </div>
                <div className='d-flex fw-semibold fs-5' style={{ paddingLeft: '45px', paddingTop: "20px", paddingBottom: "20px" }} >
                    <div><img src={search}></img></div>
                    <div style={{ paddingLeft: "10px", paddingTop: "3px" }}>Search</div>
                </div>
                <div className='d-flex fw-semibold fs-5' style={{ position: "relative", height: "55px", left: '30px', paddingLeft: "15px", paddingTop: "10px", paddingBottom: "30px", width: "300px", borderRadius: "7px" }} onClick={() => nav("/notespage")}>
                    <div><img src={notes}></img></div>
                    <div style={{ paddingLeft: "13px", paddingTop: "3px" }}>Notes</div>
                </div>
                <div className='d-flex fw-semibold fs-5' style={{ position: "relative", backgroundColor: "rgb(49, 33, 138)", height: "55px", left: '30px', paddingLeft: "15px", paddingTop: "10px", paddingBottom: "30px", border: "2px solid rgb(49, 33, 138)", width: "300px", borderRadius: "7px" }} onClick={() => nav("/taskpage")} >
                    <div><img src={white_tick}></img></div>
                    <div style={{ paddingLeft: "15px", paddingTop: "3px", color: "white" }}>Tasks</div>
                </div>
                <div className='d-flex fw-semibold fs-5' style={{ paddingLeft: '49px', paddingTop: "10px", paddingBottom: "20px" }} >
                    <div><img src={archive}></img></div>
                    <div style={{ paddingLeft: "15px", paddingTop: "3px" }}>Archive</div>
                </div>
                <div className='d-flex fw-semibold fs-5' style={{ paddingLeft: '50px', paddingTop: "10px", paddingBottom: "20px" }} >
                    <div><img src={deletee}></img></div>
                    <div style={{ paddingLeft: "15px", paddingTop: "3px" }}>Bin</div>
                </div>
            </div>
            <div style={{ backgroundColor: "rgb(174, 210, 255)", width: "100%", height: "1000px" }}>
                <form onSubmit={add}>
                    <div style={{ padding: "25px", position: "relative", left: "20px", top: "30px", backgroundColor: "white", width: "95%", height: "300px", borderRadius: "5px" }}>
                        <div className='d-flex'>
                            <button style={{ backgroundColor: "white", border: "0px" }} className=' fw-semibold fs-5'>Add a Task</button>
                            <div style={{ paddingLeft: "900px" }}><img src={close}></img></div>
                        </div>
                        <div style={{ paddingTop: "30px" }}><input style={{ border: '0px' }} type='text' name="title" value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)} /></div>
                        <div style={{ paddingTop: "30px" }}><input style={{ border: '0px' }} type='text' name="desc" value={desc} placeholder='Add a task...' onChange={(e) => setDesc(e.target.value)} /></div>
                        <div className='d-flex' style={{ paddingTop: "30px" }}>
                            <div><img src={calender}></img></div>
                            <div className=' fw-semibold ' style={{ paddingTop: "2px", paddingLeft: "5px" }}>Date/Time</div>
                        </div>
                    </div>
                </form>

                <div className='d-flex fw-semibold fs-5' style={{ padding: "20px", paddingTop: "50px" }}>
                    <div><img src={taskk}></img></div>
                    <div style={{ paddingLeft: "10px" }}>My Tasks</div>
                </div>
                <div style={{ backgroundColor: "white", position: "relative", left: "20px", width: "95%", height: "500px", borderRadius: '7px' }}>
                    {users.map((a,index)=>(
                        <div key={index} style={{ border: "1px solid black", borderRadius: "7px", width: "1050px", padding: "20px", backgroundColor: "white", position: "relative", left: "20px", top: "20px", height: "100px", marginBottom: "20px" }}>
                        <div className='d-flex'>
                            <div style={{ paddingTop: "10px" }}><img src={taskk}></img></div>
                            <div style={{ paddingLeft: "10px" }}>
                                <div className='fw-semibold fs-5'>{a.title}</div>
                                <div className='fw-semibold'>{a.desc}</div>
                            </div>
                            <div style={{ paddingTop: "10px", paddingLeft: "800px" }}><img src={grade}></img></div>
                        </div>
                    </div>
                    ))}      
                </div>
            </div>
        </div>
    );
};

export default Taskpage;