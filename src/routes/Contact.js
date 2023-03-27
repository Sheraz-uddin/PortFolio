import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg2 from '../components/Heroimg2'
import Footer from '../components/Footer'
import Form from '../components/Form'
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="Contact." text="Lets have a chat" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact