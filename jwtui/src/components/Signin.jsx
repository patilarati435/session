import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const proceedLogin = async (e) => {
    e.preventDefault()
    if(!email || !password){
      toast.error("please enter username and password")
      return false
    }
    try {
        const response = await axios.post('http://localhost:5000/users/login', { email, password });
    
        if (response.status === 200) {
            toast.success("you are in now")
          const { token, data } = response.data;
          // Store the token in local storage or a secure cookie for subsequent requests
          sessionStorage.setItem('data', JSON.stringify(token))
          navigate('/home')
    
          // Redirect to the authenticated user's dashboard or any other desired page
        }
      } catch (error) {
       toast.error("user or password didnt match")
      }
    }


  return (
    <div className="row w-full h-full">
      <section className="gradient-form h-full bg-neutral-200 ">
        <div className="container h-full p-10">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  {/* <!-- Left column container--> */}
                  <div className="px-4 md:px-0 lg:w-6/12">
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

                      <form onSubmit={proceedLogin}>
                        <p className="mb-4 text-neutral-700">Please login to your account</p>
                        {/* <!--Username input--> */}
                        <div
                          className="relative mb-4"
                          data-te-input-wrapper-init
                        >
                         <label
                        className="text-neutral-700"
                          >
                            Email
                          </label>
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            className="peer block min-h-[auto] text-neutral-700 w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput1"
                            // placeholder="Email"
                          />
                         
                        </div>

                        {/* <!--Password input--> */}
                        <div
                          className="relative mb-4"
                          data-te-input-wrapper-init
                        >

                        <label
                        className="text-neutral-700"
                            // htmlFor="exampleFormControlInput11"
                          >
                            Password
                          </label>
                          <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="peer block min-h-[auto] w-full text-neutral-700 rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-0 transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput11"
                            // placeholder="Password"
                          />
                        
                        </div>

                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="submit"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Log in
                          </button>

                          <Link to={"/forgot"} className="text-neutral-700">Forgot password?</Link>
                        </div>

                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2 text-neutral-700">
                            Don't have an account?
                          </p>
                          <Link
                            to={"/"}
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Register
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                  >
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-3xl font-semibold">
                        Session Programing
                      </h4>
                      <p className="text-sm">
                      Thinking of a reliable, efficient and cost effective offshore support and service provider for software development and maintenance? Think Axiom TechGuru Pvt. Ltd.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </section>
      </div>
      
    );
  };
  
  export default Signin;