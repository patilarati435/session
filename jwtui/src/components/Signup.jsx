import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {


    const[data ,setData]=useState({})
const navigate=useNavigate()

const handleChange=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
}
const handleClick= async(e)=>{
    e.preventDefault()
    console.log("jhvfjhv")
    //   navigate("/Login")
    
    const res = await fetch("http://localhost:5000/users",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        },
    })
    if(res.ok){

        const result= await res.json()
        console.log(result)
         navigate("/Login")
    toast.success("Sign Up Successfully!")
    }
    else{
      toast.error("User already Exist")
    }
}

return (
    

<div className="">
             
<section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
  <div className="container h-full p-10">
    <div
      className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div className="w-full">
        <div
          className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div className="g-0 ">
            {/* <!-- Left column container--> */}
            <div className="px-4 md:px-0 ">
              <div className="md:mx-6 md:p-12">
                {/* <!--Logo--> */}
                <div className="text-center">
                <img
                          className="mx-auto w-[100px]"
                          src="./logo.png"
                          alt="logo"
                        />
                  <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold text-neutral-900">
                    We are Axiom Team
                  </h4>
                </div>

                  <p className="mb-4 text-neutral-700">Register Here </p>
                <form  onSubmit={handleClick}>
                  {/* <!--Username input--> */}

                  <div className="grid grid-cols-2 gap-2">
            <div className="..."><div className="relative mb-4" data-te-input-wrapper-init>
                    <label 
                      className='text-neutral-700'
                      >First Name
                    </label>
                    <input
                     onChange={handleChange}
                      type="text"
                      name='firstName'
                      required
                      className="peer block min-h-[auto] text-neutral-700
                       w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput1"
                      placeholder="Full Name" />
                  </div>

  </div>
  <div className="..."><div className="relative mb-4" data-te-input-wrapper-init>
                    <label
                     
                      className='text-neutral-700'
                      >lastName 
                    </label>
                    <input
                     onChange={handleChange}
                      type="text"
                      name='lastName'
                      className="peer block min-h-[auto] text-neutral-700 w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput1"
                      placeholder="Full Name" />
                  </div>

  </div>
  
  <div className="...">
  <div className="relative mb-4" data-te-input-wrapper-init>
                    <label
                     
                      className='text-neutral-700'
                      >Email
                    </label>
                    <input
                      onChange={handleChange}
                      type="email"
                      name="email"
                      className="peer block min-h-[auto] w-full text-neutral-700 rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput1"
                      placeholder="Email" />
                  </div>
</div>
  <div className="...">
  <div className="relative mb-4" data-te-input-wrapper-init>
                    <label
                     
                      className='text-neutral-700'
                      >Password
                    </label>
                    <input
                    
                    name="password"
                     onChange={handleChange} 
                      type="password"
                      className="peer block min-h-[auto] text-neutral-700 w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput1"
                      placeholder="Password" />
                  </div>
</div>
  <div className="">
  <div className="relative mb-4" data-te-input-wrapper-init>
                    <label
                     
                      className='text-neutral-700'>Phone No
                    </label>
                    <input
                      name="phone"
                      onChange={handleChange}
                      type="number"
                      className="peer block min-h-[auto] text-neutral-700 w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput1"
                      placeholder="Phone No" />
                  </div>
</div>


  
</div>

                  {/* <!--Submit button--> */}
                  <div className="mb-12 pb-1 pt-1 text-center">
                    <button
                      className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      
                     
                      onSubmit={handleClick}
                      style={{
                        background:
                          "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"
                      }}>
                      Register
                    </button>

                    {/* <!--Forgot password link--> */}
                    {/* <a href="#!">Forgot password?</a> */}
                  </div>

                  {/* <!--Register button--> */}
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2 text-neutral-700">Already have an account?</p>
                    <Link
                    to={"./login"}
                      
                      className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
export default Signup