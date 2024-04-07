import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Join() {

  const navigate = useNavigate()
  const [userName,setUserName] = useState("")



  const goToChat = () =>{
    if(userName){
      navigate('/chat',{state:userName})
    }
    else{
      toast.warning("Enter Your Username")
    }
  }

  return (
    <>
        <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
            <div className='d-flex flex-column justify-content-center align-items-center'>

              <div className='row'>
                <div className='col lg 6'>
                <img width={'80%'} className='img-fluid' src="https://www.tawk.to/wp-content/uploads/2020/08/chat-pages-link.png" alt="" />
                </div>
                <div className='col lg 6'>
                <h1  className='hh1 text-center'>CHAT APP</h1>
                <div style={{width:'500px'}} className='container'>
                    <input type="text" onChange={(e)=>setUserName(e.target.value)} className='form-control' placeholder='Enter your Username'/>
                    <button onClick={goToChat} className="btn btn-info mt-2 w-100">Start Chat</button>
                </div>
                </div>
              </div>
            </div>
        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Join