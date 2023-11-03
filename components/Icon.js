import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import styles from './Icon.module.css'; // You may want to create a separate CSS file for the icons

const Icon = () => {
  return (
    <div className={styles.iconContainer}>
      <a href="https://www.facebook.com" className={styles.iconLink}>
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://www.twitter.com" className={styles.iconLink}>
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.instagram.com" className={styles.iconLink}>
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com" className={styles.iconLink}>
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  );
};

export default Icon;
