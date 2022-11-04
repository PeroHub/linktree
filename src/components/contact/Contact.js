import React, { useState } from 'react'
import { useFormik } from 'formik';
import Footer from '../footer/Footer'
import './contact.css'


 const validate = values => {

  //Error object defined
  const errors = {};

  //Checking if a value is inputed
  if (!values.first_name) {
    errors.first_name = 'Please enter a message';
    
    //Checking length of users input
  } else if (values.first_name.length > 15) {
    errors.first_name = 'Must be 15 characters or less';
  }

  //Checking if a value is inputed
  if (!values.last_name) {
    errors.last_name = 'Please enter a message';

     //Checking length of users input
  } else if (values.last_name.length > 20) {
    errors.last_name = 'Must be 20 characters or less';
  }

  //Checking if a value is inputed
  if (!values.message) {
    errors.message = 'Please enter a message';

     //Checking length of users input
  } else if (values.message.length < 20) {
    errors.message = 'Must be 20 characters or more';
  }

   //Checking if a value is inputed
  if (!values.email) {
    errors.email = 'Please enter a message';

    //Checking for correct email
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const authorName = "Peter Ime"




export default function Contact() {
  const [ isSubmit, setIsSubmit ] = useState(false)

  const handleSubmit = values => {
    setIsSubmit(true)
    alert(JSON.stringify(values, null, 2));
      console.log(values)
  }

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: values => {
      handleSubmit(values)
    },
  });

 

  return (
    <div className='contact-main'>
      {isSubmit ? <p>Message submit</p>: null}
      <div className='contact-sub-con'>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <div>
        <form onSubmit={formik.handleSubmit}>
          <div className='form-container'>
            <div className='form-input-con'>
              <p><label htmlFor="first_name">First Name</label></p>
              <input
                id="first_name"
                placeholder='Enter your first name'
                name="first_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.first_name}
              />
              {formik.errors.first_name ? <div className='error'>{formik.errors.first_name}</div> : null}
            </div>
            <div className='form-input-con'>
              <p><label htmlFor="last_name">Last Name</label></p>
              <input
                id="last_name"
                placeholder='Enter your last name'
                name="last_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.last_name}
              />
              {formik.errors.last_name ? <div className='error'>{formik.errors.last_name}</div> : null}
            </div>
          </div>
          <div className='input-con'>
            <p><label htmlFor="email">Email</label></p>
            <input
              id="'email'"
              placeholder='yourname@email.com'
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
          </div>
          <div className='input-con'>
            <p><label for="message">Message</label></p>
            <textarea 
              placeholder="Send me a message and I'll reply you as soon as possible..."
              id="'message'" 
              name="message" 
              onChange={formik.handleChange}
              value={formik.values.message}
              rows="4" 
              cols="50">
              </textarea>
            {formik.errors.message ? <div className='error'>{formik.errors.message}</div> : null}
          </div>
          <div className='check-con'>
            <input type="checkbox" id="checkbox" name="checkbox" value="checkbox" />
            <label for="checkbox">{`You agree to providing your data to ${authorName} who may contact you. `}</label>
          </div>
       <button type="submit" id='btn__submit'>Send message</button>
     </form>
        </div>
      </div>
        <Footer />
    </div>
  )
}
