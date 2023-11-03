import styles from './index.module.css';
import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
 
 
function HomePage() {
  const router = useRouter();
 
 
 
 
  return (
   
    <div>
      <Header/>
     
      <div className={styles['header-content']}>
        
          <nav>
            <ul className={styles['nav-list']}>
             
             
            </ul>
          </nav>
         
        
       
        <div style={{ color: 'white' }}>
          <h1>EDHA DIGITAL SERVICES</h1>
         
          <p>Empower The Future</p>
         
        </div>
        <div style={{ color: 'white' }}>
          <h1>About Edha Digital Services</h1>
          <p>
            EDHA DIGITAL SERVICES PRIVATE LTD is a leading IT/Digital service provider dedicated <br></br>to empowering individuals and businesses with the latest technologies and trends. We offer a<br></br> comprehensive range of services to our clients, delivering tailored solutions that drive growth<br></br> and success. Through our advanced training programs, we prepare students for the ever-changing<br></br> IT landscape, providing hands-on training, personalized attention, and placement assistance.<br></br> With a vision to make the present generation well-prepared and future-ready, we strive to foster<br></br> innovation and empower individuals with the knowledge and skills they need to thrive in the<br></br> digital era. Partner with EDHA DIGITAL SERVICES and unlock the power of digital<br></br> transformation for your business or career.
          </p>
          <p>
            EDHA DIGITAL SERVICES PRIVATE LTD specializes in providing IT/Digital services and<br></br> comprehensive training with placement assistance for final year students and graduates seeking<br></br> employment.
          </p>
        </div>

      </div>
      
<Footer/>

    </div>
  );
}
 
export default HomePage;