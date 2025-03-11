// src/components/Contact.jsx
import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you can add form validation and send the form data to your backend
    setFormStatus('Thank you for reaching out. We will get back to you soon.')
    // Reset the form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div style={styles.contactSection}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleInputChange}
            required
            style={styles.textarea}
          />
        </div>
        <button type='submit' style={styles.submitButton}>
          Send Message
        </button>
      </form>
      {formStatus && <p style={styles.formStatus}>{formStatus}</p>}
    </div>
  )
}

const styles = {
  contactSection: {
    padding: '50px 20px',
    textAlign: 'center',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    minHeight: '150px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  formStatus: {
    marginTop: '20px',
    color: 'green',
    fontSize: '1.2rem',
  },
}

export default Contact
