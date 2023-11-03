import React, { useState } from 'react';
import styles from './Enquiry.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Enquiry() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        alert('Form submitted successfully');
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        alert('Error submitting the form');
      }
    } catch (error) {
      console.error(error);
      alert('Error submitting the form');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <Header />
      <div className={styles.enquiryContainer}>
        <h1>Enquiry Form</h1>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <div className={styles.formElement}>
            <div className={styles.inputWithSymbol}>
              <span role="img" aria-label="Person Icon">👤</span>
              <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            </div>
          </div>

          <div className={styles.formElement}>
            <div className={styles.inputWithSymbol}>
              <span role="img" aria-label="Phone Icon">☎</span>
              <input type="tel" id="phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            </div>
          </div>

          <div className={styles.formElement}>
            <div className={styles.inputWithSymbol}>
              <span role="img" aria-label="Email Icon">✉</span>
              <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            </div>
          </div>

          <div className={styles.formElement}>
            <div className={styles.inputWithSymbol}>
              <span role="img" aria-label="Message Icon">📝</span>
              <textarea id="message" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
      <div className={styles.new}>
        <Footer />
      </div>
    </div>
  );
}

export default Enquiry;
