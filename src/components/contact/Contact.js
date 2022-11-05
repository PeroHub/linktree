import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import Footer from '../footer/Footer'
import './contact.css'


export function AlertDialog({open, handleClose}) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/")
  }
  
 
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{color: "green"}} >
          Success
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your message has been delivered successfully
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNavigate}>Go to home</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


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
  // const [ isSubmit, setIsSubmit ] = useState(false)
  const [open, setOpen] = useState(false);

 

  const handleClose = () => {
    setOpen(false);
  };


  

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: values => {
      setOpen(true);
      formik.values = {}
    },
  });

 

  return (
    <div className='contact-main'>
      <AlertDialog open={open} handleClose={handleClose} result={formik.values} />
      <div className='contact-sub-con'>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <div>
        <form onSubmit={formik.handleSubmit}>
          <div className='form-container'>
            <div className='form-input-con'>
              <label htmlFor="first_name">First Name</label>
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
              <label htmlFor="last_name">Last Name</label>
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
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder='yourname@email.com'
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
          </div>
          <div className='input-con'>
            <label for="message">Message</label>
            <textarea 
              placeholder="Send me a message and I'll reply you as soon as possible..."
              id="message" 
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
