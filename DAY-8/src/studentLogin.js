import React,{useState} from 'react'
import './styles/studentLogin.css'
import { useNavigate } from 'react-router-dom'
const StudentLogin = ()=>{
    const navigate = useNavigate()
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[hasAgreed,setHasAggreed] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate('/')
    }
    const navigateTo = ()=>{
        navigate('/admin')
    }
    return (
        <div className='loginBg'>
           <div className="formCenter">
            <div className='loginHead'>
                <button className='loginBtn' style={{color:'white',backgroundColor:'white',color:'black'}}>Student</button>
                <button className='loginBtn'
                onClick={()=>{navigateTo()}}
                style={{color:'white'}}>Admin</button>
            </div>
        <form onSubmit={(e)=>handleSubmit(e)} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

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
              onChange={(e)=>setEmail(e.target.value)}
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
            
            onClick={()=>[
              navigate('/profile')
            ]}
            >SUBMIT</button>{" "}
          </div>
        </form>
      </div>
        </div>
    )
}
export default StudentLogin