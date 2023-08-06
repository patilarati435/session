import { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Forgot = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [otp, setOtp] = useState()
  const [write, setWrite] = useState(true)
  const [isSending, setIsSending] = useState(false);
  const [hasSentOnce, setHasSentOnce] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  const otpSend = () => {

    if (!isSending) {
      setIsSending(true);

      axios
        .post("http://localhost:5000/sendotp", {
          email: email,
        })
        .then((response) => {
          if (response.data.message === "OTP sent") {
            toast.success("OTP sent successfully");
            setWrite(false)
            setIsSending(false);
            setHasSentOnce(true);
            // Handle success case (e.g., display success message)
          } else {
            // Handle user not found case (e.g., display error message)
          }
          setIsSending(false);
        })
        .catch((error) => {
          toast.error("User not found");
          console.log("An error occurred while sending the OTP:", error);
          // Handle error case (e.g., display error message)
          setIsSending(false);
        });
    }

  }

  const handlePassChange = (e) => {
    setIsLoading(true);

    axios
      .post("http://localhost:5000/submitotp", {
        otp: otp,
        password: password,
      })
      .then((response) => {
        if (response.data.code === 200) {
          toast.success("Password updated successfully");
          navigate("/login")
          // Handle success case (e.g., display success message)
        } else {
          toast.error("Invalid OTP");
          // Handle invalid OTP case (e.g., display error message)
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("An error occurred while submitting OTP:", error);
        setError("An error occurred while submitting OTP");
        // Handle error case (e.g., display error message)
        setIsLoading(false);
      });
  }



  return (
    <div>

      <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-100">
        <div className="container h-full p-10 " style={{ width: "600px" }}>
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 ">
                  {/* <!-- Left column container--> */}
                  <Link className="p-3 text-black " to={"/login"}>Back</Link>
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


                      {/* <p className="mb-4">Please login to your account</p> */}
                      {/* <!--Username input--> */}
                      <div
                        className="relative mb-4 "
                        data-te-input-wrapper-init
                      >

                        <label
                          className="text-neutral-700"

                        // className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Email
                        </label>
                        <div className="d-flex">
                          <input
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            className=" text-neutral-700 peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"

                            placeholder="Email"
                          />
                          &nbsp;&nbsp;&nbsp;
                          <Link
                            onClick={otpSend}

                            className={`inline-block rounded border-2 ${isSending ? "opacity-50 cursor-not-allowed" : "border-danger"
                              } px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10`}                          >
                            {isSending ? "Sending..." : hasSentOnce ? "Send Again" : "Send"}
                          </Link>
                        </div>

                        {/* <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">
                            Don't have an account?
                          </p>
                          <Link
                            to={"/signup"}
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Register
                          </Link>
                        </div> */}
                      </div>

                      {/* <!--Password input--> */}
                      <div
                        className="relative mb-4"
                        data-te-input-wrapper-init
                      >
                        <label
                          // htmlFor="exampleFormControlInput11"

                          className="text-neutral-700"
                        >
                          OTP
                        </label>
                        <input
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          readOnly={write}
                          type="number"
                          className={` ${write === true ? ("hover:cursor-not-allowed ") : ("hover:cursor-text")}  peer text-neutral-700 block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] 
                            outline-0 transition-all duration-200 ease-linear focus:placeholder:opacity-100 
                            data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none 
                            dark:placeholder:text-neutral-200 
                            [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}

                        // placeholder="Password"
                        />
                      </div>
                      <div
                        className="relative mb-4"
                        data-te-input-wrapper-init
                      >
                        <label
                          // htmlFor="exampleFormControlInput11"
                          className="text-neutral-700"

                        >
                          New Password
                        </label>
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          className="peer text-neutral-700 block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-0 transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"

                        // placeholder="Password"
                        />
                      </div>

                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          onClick={handlePassChange}
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          disabled={isLoading}
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        > {isLoading ? "Loading..." : "Submit"}
                        </button>

                        {/* <Link to={"./password.js"}>Forgot password?</Link> */}
                      </div>

                      {/* <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">
                            Don't have an account?
                          </p>
                          <Link
                            to={"/signup"}
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Register
                          </Link>
                        </div> */}

                    </div>
                  </div>

                  {/* <div
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Forgot