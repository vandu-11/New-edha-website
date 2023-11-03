import React from 'react';
import Header from '../components/Header'
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import styles from './Database.module.css';
 
 
 
function Database(){
    const router = useRouter();
 
 
 
  return (
 
    <div>
        <Header/>
        <div className={styles.new}>
        
        <h1>Database Administration Course</h1>
 
      <h3>Database Administration</h3>
 
      <p>Our comprehensive Database Administration course, led by a team of highly experienced training faculty with 20 plus years of industry expertise, covers a wide range of topics including database design, DBMS platforms, backup and recovery, performance tuning, security, data migration, troubleshooting, and more, ensuring that students receive expert guidance and practical skills in all aspects of data management and administration.</p>
 
      <h5>Benefits for students:</h5>
 
      <p>In-depth knowledge of database administration<br></br>Hands-on experience with real-world scenarios<br></br>Guidance from experience trainers</p>
 
   </div>      
 <Footer/>
     
    </div>

 
  );
 
};
 
 
 
export default Database;