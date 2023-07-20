import React,{useState} from "react";
import { useNavigate, useNavigation } from "react-router-dom";
const AdminLogin = ()=>{
   
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[hasAgreed,setHasAggreed] = useState('')
    const navigate = useNavigate()
    const handleSubmit=()=>{
      navigate('/')
    }
    const navigateTo = ()=>{
        navigate('/')
    }
    return (
        <div className='loginBg'>
           <div className="formCenter">
            <div className='loginHead'>
                <button className='loginBtn' 
                onClick={navigateTo}
                style={{color:'white'}}>Student</button>
                <button className='loginBtn' style={{backgroundColor:'white',color:'black'}}>Admin</button>
            </div>
        <form onSubmit={()=>handleSubmit()} className="formFields">
        <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>


          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={hasAgreed}
                onChange={()=>{setHasAggreed(!hasAgreed)}}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="formField">
            <button className="formFieldButton"
            
            onClick = {()=>{navigate('/dashboard')}}
            >SUBMIT</button>{" "}
          </div>
        </form>
      </div>
        </div>
    )
}
export default AdminLogin