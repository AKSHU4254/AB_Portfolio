import "./FormStyle.css"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'

const Form = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    Name: '',
    Email_Address: '',
    Contact_Number: '',
    Subject: '',
    Description: ''
  });

  console.log(formData)

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_qhkjkjg';
    const templateId = 'template_pey7daa';
    const publicKey = 'cs3G1DDoCdzqjV4V2';

    const templateParams = {
      name: formData.Name,
      email: formData.Email_Address,
      contact: formData.Contact_Number,
      subject: formData.Subject,
      message: formData.Description,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        if (response.status === 200 ) {
          Alert();
        }

      }).catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const Alert = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your Response has been Recorded',
      showConfirmButton: false,
      timer: 2500,
    }).then(() => navigate("/"));
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text"
          name='Name'
          value={formData.Name}
          onChange={handleChange}
          id='Name'
          placeholder='Your Name'
          autoComplete='off'
          required
        />

        <label>Email</label>
        <input type="email"
          name='Email_Address'
          value={formData.Email_Address}
          onChange={handleChange}
          id='Email'
          placeholder='Email Id'
          autoComplete='off'
          required
        />

        <label>Contact No.</label>
        <input type="text"
          name='Contact_Number'
          value={formData.Contact_Number}
          onChange={handleChange}
          id='Contact'
          placeholder='Mobile Number'
          autoComplete='off'
          required
        />

        <label>Subject</label>
        <input type="text"
          name='Subject'
          value={formData.Subject}
          onChange={handleChange}
          id='Subject'
          placeholder='Subject'
          autoComplete='off'
          required />

        <label>Message</label>
        <textarea rows="6"
          placeholder="Type Your message here"
          name='Description'
          value={formData.Description}
          onChange={handleChange}
          id='Description'
          autoComplete='off'
          required
        />

        <button className="btn"
          type="submit"
          disabled={
            !formData.Name ||
            !formData.Email_Address ||
            !formData.Contact_Number ||
            !formData.Subject ||
            !formData.Description
          }>
          Submit
        </button>

      </form>
    </div>
  )
}

export default Form
