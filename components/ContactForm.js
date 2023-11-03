import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (formData.name && formData.phone && formData.email && formData.message) {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setSuccessMessage('Form submitted successfully');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setSuccessMessage('Error submitting the form');
      }
    } else {
      setSuccessMessage('Please fill in all fields');
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
        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
        <form className={styles.form} onSubmit={handleSubmit}>
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
