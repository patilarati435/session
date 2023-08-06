import Home from "./components/Home"
import { Route,Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Forgot from "./components/Forgot";

const App = () => {
  return (
    <div>
  
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/forgot" element={<Forgot />} />
    
      
    </Routes>
    {/* <Components/> */}
    <ToastContainer position="top-center" limit={1}/>
  
    </div>
  )
}
export default App