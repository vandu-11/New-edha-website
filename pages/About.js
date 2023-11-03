import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles  from './About.module.css'

function About() {
  return (
    <div>
      <Header />
      <div className={styles.header}>
        <h1>EDHA DIGITAL SERVICES</h1>
        <p>Empower The Future</p>
      
      
        <h1>About Edha Digital Services</h1>
        <p>
          EDHA DIGITAL SERVICES PRIVATE LTD is a leading IT/Digital service provider dedicated
          to empowering individuals and businesses with the latest technologies and trends. We offer a
          comprehensive range of services to our clients, delivering tailored solutions that drive growth
          and success. Through our advanced training programs, we prepare students for the ever-changing
          IT landscape, providing hands-on training, personalized attention, and placement assistance.
          With a vision to make the present generation well-prepared and future-ready, we strive to foster
          innovation and empower individuals with the knowledge and skills they need to thrive in the
          digital era. Partner with EDHA DIGITAL SERVICES and unlock the power of digital
          transformation for your business or career.
        </p>
        <p>
          EDHA DIGITAL SERVICES PRIVATE LTD specializes in providing IT/Digital services and
          comprehensive training with placement assistance for final year students and graduates seeking
          employment.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
