import React, { useState, useEffect } from 'react';
import { Link,  useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode" ;
import axios from 'axios';


function Display() {
  
  const navigate=useNavigate(); 
  const [user ,setUser]=useState({})
  const [updatedData, setUpdatedData] = useState({});
  const [userdata,setUserdata]=useState({})


  useEffect(() => {
    const token = sessionStorage.getItem("data");
    if (token) {
      const user = JSON.stringify(jwt_decode(token));
      if (!user) {
        sessionStorage.removeItem('data');
        navigate('/login');
      } else {
        const decoded = jwt_decode(token);
        setUser(decoded.id);
        console.log(user._id);
      }
    }
  }, []);
  
  // Add this useEffect to listen for changes in the token
  useEffect(() => {
    const token = sessionStorage.getItem("data");
    if (token) {
      const user = JSON.stringify(jwt_decode(token));
      if (!user) {
        sessionStorage.removeItem('data');
        navigate('/login');
      } else {
        const decoded = jwt_decode(token);
        setUser(decoded.id);
        console.log(user._id);
      }
    }
  }, [sessionStorage.getItem("data")]); // Add the token as a dependency




 
 



  return (
<div>
{/* <center className='lg:mt-[200px]'> */}

<div className="card card1 ms-96 mt-28" style={{width:"700px"}}>
                        <div className="card-header text-center">
                            <h1 className='text-xl font-bold '> View Details</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                               
                                <div className="col-lg-6">
                                
                                 <div className="form-group">
                                      <label>Full Name <span className="errmsg">*</span></label>
                                     <br /> <h1 className='card-header border border-red-100 p-2 mt-2 mb-2 hover:cursor-not-allowed'> {user.firstName}</h1>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>LastName <span className="errmsg">*</span></label>
                                        <br />   <h1 className=' card-header border border-red-100 p-2 mt-2 mb-2 hover:cursor-not-allowed'> {user.lastName}</h1>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone</label><span className="errmsg">*</span>
                                        <br /> <h1 className=' card-header border border-red-100 p-2 mt-2 mb-2 hover:cursor-not-allowed'> {user.phone}</h1> 
    
                                    </div>
                                    </div>
                            
                                    <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email</label><span className="errmsg">*</span>
                                        <br /> <h1 className=' card-header border border-red-100 p-2 mt-2 mb-2 hover:cursor-not-allowed'> {user.email}</h1> 
    
                                    </div>
                                    </div>
                                    <div className="col-lg-6 ">
                                    <div className="form-group">
                                        <video src={user.video} controls controlsList='nodownload'></video>
                                    </div>
                                    </div>

                                    <div className="col-lg-6 ">
                                    <div className="form-group">
                                        <object type='application/pdf' data={user.pdf} ></object>
                                    </div>
                                    </div>
                               
                                {/* </div> */}
                            
                                </div>

                            </div>

                        </div>
                        <div className="card-footer text-center">
                            
                        </div>
                    

                {/* </center> */}


{/* <center className='lg:mt-[200px]'>
<div className="card shadow-xl" style={{width: "18rem"}}>
  <div className="card-header fw-bolder">
    View details
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"> <span className='fw-bolder '>
     Name:
    </span> {user.name} </li>
    <li className="list-group-item"> <span className='fw-bolder '>
    phone no:
    </span><input type="text" /> {user.phone} </li>

    <li className="list-group-item"> <span className='fw-bolder '>
    Email:
    </span> <input type="text" />  {user.email}</li>
    <li className="list-group-item"> <span className='fw-bolder '>
    country:
    </span><input type="text" />  {user.country}</li>
  </ul>
</div>
</center> */}
</div> 
  );
}

export default Display;