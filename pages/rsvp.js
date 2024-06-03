import Form from '../components/Form'
import FlowerSVG from '../components/Images/FlowerSVG';
import styled from '../styles/Rsvp.module.css'
import PasswordProtection from '../components/PasswordProtection';

export default function Rsvp() {


  
    return (
      <PasswordProtection>
            <div className={styled.formContainer}>
      <div className={styled.flowerImage}><FlowerSVG /></div>

      <div>
        {/* Header */}
        <h1 className={styled.title}>Chris x Julie are getting married, and you are invited to celebrate!</h1>

       <h2 className={styled.subtitle}>Kjørbo gård, 21. September at 19:00. Please respond by 31. July. More info to come!</h2>

        <Form></Form>
      </div>
    </div>
      </PasswordProtection>
  
    );
  }
  