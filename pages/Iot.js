import React from 'react';
import Header from '../components/Header'
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import styles from './Iot.module.css';
 
 
 
 
function Iot(){
    const router = useRouter();
 
 
 
  return (
 
    <div>
        <Header/>
        <div className={styles.new}>
        <h1>IoT with Data Science and AI</h1>
 
      <h3>IoT with Data Science and AI</h3>
 
      <p>Our IoT with Data Science and AI course offers a comprehensive exploration of the integration between IoT, Data Science, and AI. With a focus on practical applications, students will delve into sensor technologies, data acquisition, processing, and storage, as well as machine learning and deep learning algorithms specific to IoT. Emphasizing the significance of this integration in today's technology-driven world, the course enables students to leverage sensor data for valuable insights and develop IoT applications. By acquiring these skills, students will be well-equipped to address real-world challenges and drive innovation across industries, ranging from smart cities to healthcare. Join us and unlock the potential of IoT, Data Science, and AI in transforming the way we live and work.</p>
 
      <h5>Benefits for students</h5>
 
      <p>Practical knowledge of IoT, Data Science, and AI<br></br>Real-time projects and use cases<br></br>Personalized guidance and mentorship</p>
 </div>
 <Footer/>
    </div>
 
  );
 
};
 
 
 
export default Iot;