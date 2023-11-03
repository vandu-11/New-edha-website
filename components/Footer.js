import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.finalhomebody}>
      <div className={styles.body1}>
        <h4><i className="fa fa-graduation-cap" aria-hidden="true"></i><i> EDHA Digital Services</i></h4>
        <p>EDHA DIGITAL SERVICES PRIVATE LTD is a leading <br />
        IT/Digital service provider dedicated
to empowering <br />
individuals and businesses with the latest technologies <br />
and trends. 
          </p>
      </div>
      <div className={styles.body2}>
        <h4>Our Services</h4>
        <p>Mobile Applications Design</p>
        <p>Web Applications Design</p>
        <p>Websites Design</p>
        <p>We User Interface design</p>
        <p>Web Applications Design</p>
        <p>Theame Development Design</p>
      </div>
      <div className={styles.body3}>
        <h4>Head Office</h4>
        <address>#8 1st Main Road<br />
          Vinayaka Nagar,Virgonagar Post<br />
          Medahalli,Bangakore:560049<br />
          Phone:8884440466<br/>
          Email: edhadigitalservices@gmail.com
        </address>
        <h5>Office Time: 10AM-6PM</h5>
      </div>
    </div>
  );
};

export default Footer;
