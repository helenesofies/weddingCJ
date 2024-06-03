import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/About.module.css';
import FlowerBranchOne from '../components/Images/FlowerBranchOne';
import FlowerBranchTwo from '../components/Images/FlowerBranchTwo';
import JulieChris from '../components/Images/JulieChris.png'
import map from '../components/Images/map.png'
import adventure from '../components/Images/adventure.png'
import garden from '../components/Images/garden.png'
import gardentwo from '../components/Images/gardentwo.png'
import Car from '../components/Images/car';
import { useState } from 'react';
import Plus from '../components/Images/Plus'
import HotelSVG from '../components/Images/HotelSVG'
import GiftSVG from '../components/Images/GiftSVG'
import SuitSVG from '../components/Images/SuitSVG';
import PhoneSVG from '../components/Images/PhoneSVG';
import ContactSVG from '../components/Images/ContactSVG';
import PasswordProtection from '../components/PasswordProtection';
import Minus from '../components/Images/Minus'


export default function Home() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isAccomodationOpen, setAccomodationOpen] = useState(false);
  const [isGiftsOpen, setGiftsOpen] = useState(false);
  const [isDresscodeOpen, setDresscodeOpen] = useState(false);
  const [isSOMEOpen, setSOMEOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);


  return (
    <PasswordProtection>
      <div className={styles.container}>

        <div className={styles.header}>
          <FlowerBranchOne />Chris x Julie are getting married<FlowerBranchTwo />
        </div>

        <div className={styles.general}>
          <Image
            alt="Beautiful Julie and Handsome Chris"
            src={JulieChris}
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <div className={styles.generalText}><p>Arrival 13:00</p><p>Ceremony 13:30</p><p>Early dinner 15:30</p><p>Party 19:00</p></div>
        </div>


        {/*FAQ One*/}
        <div className={styles.faqList}>
          <div className={styles.faq}>
            <div className={styles.faqItem} onClick={() => setIsLocationOpen(!isLocationOpen)}>
              <div className={styles.faqHeader}>
                <Car />
                <div className={styles.faqHeaderText}>
                  <p className={styles.faqTitle}>Location</p>
                  <p className={styles.faqSubtitle}>How do I get to the wedding?</p>
                </div>
              </div>
              {isLocationOpen ? <Minus /> : <Plus />}
            </div>

            {isLocationOpen && (
              <div className={styles.faqAnswer}>
                <p>
                  Our day will take place at Kjørbo Gård in Sandvika. Kjørbo Gård is around 20 minutes by car or 30 minutes by public transport from Oslo Central Station. <br /><br />

                  For public transport, the easiest option is by train or bus to Sandvika Stasjon. From there, it is around a 15-minute walk towards the fjord to get to Kjørbo Gård. <br /><br />

                  If driving, there is a car park located on Kjørboveien, around 200m from the venue, in front of Sandvika Politistasjon.<br /><br />

                  For taxi services, we recommend using Oslo Taxi (+47 02323) or Asker og Bærum Taxi (+47 06710), which can pick you up from Kjørboveien.<br /><br />

                  <b>21st of September is the day of the Oslo Marathon so there will be road closures in and around the city center. We would therefore recommend getting to the venue using public transport if you are traveling from Oslo, but all roads should be open again by the evening.</b>
                 <br></br>
                 <br></br>
                  Address:<br />
                  Kjørbo Gård<br />
                  Kjørboveien 32<br />
                  1337 Sandvika<br />
                  Norway<br />
                  <br></br>
                </p>
                <Image
                  alt="Map"
                  src={map}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            )}
          </div>

          {/*FAQ Two*/}
          <div className={styles.faq}>
            <div className={styles.faqItem} onClick={() => setAccomodationOpen(!isAccomodationOpen)}>
              <div className={styles.faqHeader}>
                <HotelSVG />
                <div className={styles.faqHeaderText}>
                  <p className={styles.faqTitle}>Accomodation</p>
                  <p className={styles.faqSubtitle}>Where should I stay?</p>
                </div>
              </div>
              {isAccomodationOpen ? <Minus /> : <Plus />}
            </div>

            {isAccomodationOpen && (
              <div className={styles.faqAnswer}>
                <p>
                  There are plenty of areas in Oslo with easy connections to Sandvika. From Karl Johans Gate, Solli Plass or Uranienborg it is a short walk to Nationaltheatret train station. Alternatively, Tøyen or Bjørvika are nice areas that are walking distance to Oslo Central Station (Oslo S).
                  <br /><br />
                  There are plenty of good Airbnbs in these areas. Alternatively, Scandic or Thon hotels can be found all over the city and are all a good standard and reasonably priced

                </p>
              </div>
            )}
          </div>


          {/*FAQ Three*/}
          <div className={styles.faq}>
            <div className={styles.faqItem} onClick={() => setGiftsOpen(!isGiftsOpen)}>
              <div className={styles.faqHeader}>
                <GiftSVG />
                <div className={styles.faqHeaderText}>
                  <p className={styles.faqTitle}>Gifts</p>
                  <p className={styles.faqSubtitle}>What can you get us?</p>
                </div>
              </div>
              {isGiftsOpen ? <Minus /> : <Plus />}
            </div>

            {isGiftsOpen && (
              <div className={styles.faqAnswer}>
                <p>
                  That you can join us for our wedding day is the greatest gift of all, but if you would like to give, we would really appreciate something for our future adventures. As we are still planning our honeymoon, we would be very grateful for a contribution towards funding hikes in the mountains (if Chris gets his way) or relaxing on a tropical beach (if Julie gets her way).
                  <br /><br />
                  <b>Bank transfer details</b>
                  <br /><br />
                  <b>Vipps:</b> 46884030 (Chris) 47388655 (Julie)
                  <br /><br />
                  <b>UK bank transfer</b> 77-27-23 // 20576168 (Chris)
                  <br /><br />
                </p>
                <Image
                  alt="Chris and Julie on vacation"
                  src={adventure}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />

              </div>
            )}
          </div>


          {/*FAQ Four*/}
          <div className={styles.faq}>
            <div className={styles.faqItem} onClick={() => setDresscodeOpen(!isDresscodeOpen)}>
              <div className={styles.faqHeader}>
                <SuitSVG />
                <div className={styles.faqHeaderText}>
                  <p className={styles.faqTitle}>Dresscode</p>
                  <p className={styles.faqSubtitle}>What should I wear?</p>
                </div>
              </div>
              {isDresscodeOpen ? <Minus /> : <Plus />}
            </div>

            {isDresscodeOpen && (
              <div className={styles.faqAnswer}>
                <p>
                The dress code is Garden Party (if you need help, see the below photos for examples of what we would wear). The most important thing for us is that you feel comfortable and relaxed! You are welcome to wear a tie but not required if you don’t want to.
                  <br /> Temperatures in Oslo during September are usually around 15-20oC.
                  <br /><br />
                  Part of the day might be outside on grass (weather dependent), so please bring appropriate footwear!
                  <br /><br />
                </p>
                <div className={styles.twoImages}>
                    <img className={styles.imageOne} src='garden.png'></img>
                    <img className={styles.imageTwo} src='gardentwo.png'></img>
                </div>

              </div>
            )}
          </div>


          {/*FAQ Five*/}
          <div className={styles.faq}>
            <div className={styles.faqItem} onClick={() => setSOMEOpen(!isSOMEOpen)}>
              <div className={styles.faqHeader}>
                <PhoneSVG />
                <div className={styles.faqHeaderText}>
                  <p className={styles.faqTitle}>Social Media</p>
                  <p className={styles.faqSubtitle}>Can I take pictures?</p>
                </div>
              </div>
              {isSOMEOpen ? <Minus /> : <Plus />}
            </div>

            {isSOMEOpen && (
              <div className={styles.faqAnswer}>
                <p>
                  We would love to have an unplugged ceremony, and ask you to keep phones away and not take pictures, to enjoy the special moments with us.
                  <br /><br />
                  We have hired a professional photographer to take pictures throughout the day, so they will capture all of the important moments!
                  <br /><br />
                </p>

              </div>
            )}
          </div>

          {/*FAQ Six*/}
          <div className={styles.faq}>
            <div className={styles.faqItem} onClick={() => setContactOpen(!isContactOpen)}>
              <div className={styles.faqHeader}>
                <ContactSVG />
                <div className={styles.faqHeaderText}>
                  <p className={styles.faqTitle}>Contact</p>
                  <p className={styles.faqSubtitle}>Do you want to give a speech?</p>
                </div>
              </div>
              {isContactOpen ? <Minus /> : <Plus />}
            </div>

            {isContactOpen && (
              <div className={styles.faqAnswer}>
                <p>
                After lunch and throughout the evening we will provide an open bar supplied with beer, wine and soft drinks for you to enjoy 😊
                  <br /><br />
                  Helene Stenstadvold (helenesofies@gmail.com) will be the Toastmaster for the evening so any requests for toasts etc. can be organized with her. 
                  <br /><br />
                  We look forward to celebrating with you and hope you enjoy the day with us!
                  <br /><br />
                </p>

              </div>
            )}
          </div>


        </div>
       
      </div>

 </PasswordProtection>
  );
}
