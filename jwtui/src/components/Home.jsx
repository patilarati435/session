import { useEffect, useState,Fragment, useRef } from "react"
import {useNavigate}from "react-router-dom"
import jwt_decode from "jwt-decode" 
import Dropdown from 'react-bootstrap/Dropdown';
import { toast } from "react-toastify";
import Display from "./Display";
import Upload from "./Upload";
import axios from "axios";

  
const Home = () => {
    const [users ,setUser]=useState({})
    const nevigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [view,setview]=useState(false)
    const [img ,setImg]=useState("")
    const [data,setData]=useState({})
    const [updatedToken, setUpdatedToken] = useState(null);
  const [updatedData, setUpdatedData] = useState(null);



    const navigate = useNavigate()
    const token = sessionStorage.getItem("data")
    


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
    
          // Fetch the updated data after setting the user ID
          
        }
      }
    }, [sessionStorage.getItem("data")]);
    
  
    
    
    
    // Add the token as a dependency

        // const fetchData = async () => {
        //   try {
        //     const response = await fetch(`http://localhost:5000/users/${users._id}`);
        //     if (response.ok) {
        //       const data = await response.json();
        //       console.log(data);
        //       setData(data)
        //     } else {
        //       console.error('Request failed with status:', response.status);
        //     }
        //   } catch (error) {
        //     console.error('Request failed with error:', error);
        //   }
        // };

        // fetchData()
      
      





  
    const handleClick=()=>{
        sessionStorage.removeItem('data')
        nevigate("/login")
    }
    function handleEdit(){
      setOpen(true)
      setview(false)
    }
    function handleView(){
    setOpen(false)
    setview(true)
    }
    function handleTokenDataUpdate(updatedToken, updatedData) {
      setUpdatedToken(updatedToken);
      setUpdatedData(updatedData);
      console.log(updatedData)
      // Perform any other necessary actions with the updated token and data
    }
  


  return (
 <div className=" content-between  ">


<nav className=" border-gray-200 dark:bg-gray-900 h-20"  style={{
                        background:
                          "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"
                      }}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <span href="https://flowbite.com/" className="flex items-center">
  
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white	">Dashboard</span>
  </span>
  <div className="flex items-center md:order-2">
    
  <div className="relative flex justify-center">
  <div className="flex flex-nowrap"> <span><img className="rounded-full h-10 w-10" src={users.img}  alt="" /></span> &nbsp; &nbsp;&nbsp;<span className=" text-white font-semibold">{users.firstName}&nbsp;{users.lastName}</span> </div>
  <Dropdown>
    <Dropdown.Toggle id="dropdown-basic" className="flex flex-nowrap mt-1 border-0 bg-transparent">
      
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item onClick={handleEdit} to="/edit.js">Edit Profile</Dropdown.Item>
      <Dropdown.Item onClick={handleView} href="#/action-3">View</Dropdown.Item>
      <Dropdown.Item onClick={handleClick} to="/signin.js">Logout</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</div>


  
  </div> 
  </div>
</nav>     

{
      open?(
<Upload   setUpdatedToken={setUpdatedToken}
        setUpdatedData={setUpdatedData}
        onUpdateTokenData={handleTokenDataUpdate}  userId={users._id} userEmail={users.email} userfirstName={users.firstName} userLastname={users.lastName} userImg={users.img} userPhone={users.phone} userVideo={users.video}/>
      ):(
        <div></div>
      )
    }


    {

      view?(
        <Display/>
      
      ):(
        <div></div>
      )
    }
 </div>
 
  )
}
export default Home