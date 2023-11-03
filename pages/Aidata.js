import React from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import styles from './Aidata.module.css';
 
function Aidata() {
    const router = useRouter();
  return (
    <div>
      <Header />
      <div className={styles.new}>
      <h1>AI/Data Science and Full Stack Development Course</h1>
      <p>
        Discover the world of AI and Full Stack Development through our comprehensive course. Dive into the realms of artificial intelligence, data science, and full stack web development. Gain hands-on experience with Python programming, machine learning, deep learning, natural language processing (NLP), big data, databases, and more. Our expert trainers, hailing from top MNCs with 16+ years of experience, provide real-time examples, personalized attention, and individual progress monitoring. Prepare yourself for a career in the cutting-edge domains of AI, Data Science, and Full Stack Development while receiving placement assistance at the end of the program. Choose a training format that combines online convenience with physical presence for top-quality learning.
      </p>
      <p>Delivery format: Training will be a combination of online and physical prepare to ensure quality training</p>
      <div>
        <h5>Benefits for students</h5>
        <p>
          Real-time examples and projects<br />
          Individual attention and progress monitoring<br />
          Trainers with 16+ years of experience from top MNCs
        </p>
        </div>
      </div>
      
      
      <Footer/>
    </div>
  );
}
 
export default Aidata;