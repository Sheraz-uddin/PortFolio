import React, { useState } from 'react'
import "./Formstyle.css"
const Form = () => {
    const [name ,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message ,setMessage] = useState("")
  const handleChange = (e) => {
    e.preventDefault();
    console.log(name)
    console.log(email)
    console.log(message)

  }
  return (
   <div className="form" onClick={handleChange}>
    <form>
        <label >Enter Your Name</label>
        <input type="text"  required onChange={(e) => setName(e.target.value)}/>
        <label>Enter Your Email</label>
        <input type="text" required   onChange={(e) => setEmail(e.target.value)}/>
        <label >Enter Your Subject</label>
        <input type="text" required/>
        <label >Enter Your Phone #</label>
        <input type="number" required/>
        <label >Message</label>
        <textarea  cols="30" rows="10" placeholder='Type your message here'  onChange={(e) => setMessage(e.target.value)}></textarea>
        <button className='btn'>Submit</button>
    </form>
   </div>
  )
}

export default Form
