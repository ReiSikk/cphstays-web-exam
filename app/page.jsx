"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Footer from './components/Footer'
import NavigationBar from './components/NavigationBar'
import styles from './page.module.css'
import Link from 'next/link'
import HDIWsection from './components/HDIWsection'
import TestimonialsSection from './components/TestimonialsSection'
import FaqAccordion from './components/FaqAccordion'
import ContactForm from './components/ContactForm'



export default function Home() {

  /* Gets rid of the Hydration error */
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])
  
  if (!mounted) return null; 

  return (
    <>
    <header className={styles.header}>
    <NavigationBar />
    <section className={styles.hero}>
      <div className={styles.hero_inner}>
      <div className={styles.hero_text}>
      <h1 className={styles.hero_title}>Find your ideal nest</h1>
      <p className={styles.hero_paragraph}>Fully furnished and serviced temporary homes for work-travellers and expats in Copenhagen.</p>
      </div>
      <div className={styles.hero_numbers}>
        <div className={styles.hero_numbers_block}>
          <h3>200+</h3>
          <p>Rented homes</p>
        </div>
        <div className={styles.hero_numbers_block}>
          <h3>1000+</h3>
          <p>Happy guests</p>
        </div>
        <div className={styles.hero_numbers_block}>
          <h3>15+</h3>
          <p>Years of experience</p>
        </div>
      </div>
      <Link href="/pages/apartments" className={styles.secondary_btn}>See apartments</Link>
      </div>
    </section>
      </header> 
      <main className={styles.main}>
      <section className='testimonials-wrapper'>
<span className='small-label'>All inclusive service</span>
    <h3>Services we offer</h3>
    <div className="testimonials-section">
    <div className={styles.landingpage_card}>
      <div className={styles.card_link_wrapper}>
        <Image src='/images/star.svg'  width={28} height={28} alt='star' />
        <Link href="/pages/apartments" className={styles.card_link}>
          <span>View apartments</span>
          <span>
            <Image src='/images/arrow-right.svg'  width={28} height={28} alt='right arrow' />
            </span>
        </Link>
      </div>
      <div className={styles.card_content}>
      <h4>Temporary homes</h4>
      <p>Flexible options for your accommodation needs</p>
      </div>
    </div>
    <div className={styles.landingpage_card}>
      <div className={styles.card_link_wrapper}>
        <Image src='/images/star-darkblue.svg'  width={28} height={28} alt='star' />
        <Link href="/pages/about" className={styles.card_link}>
          <span>Read more</span>
          <span>
            <Image src='/images/arrow-right-black.svg'  width={28} height={28} alt='right arrow' />
            </span>
        </Link>
      </div>
      <div className={styles.card_content}>
      <h4>Personalized Service</h4>
      <p>Dedicated support for hassle-free long-term stays</p>
      </div>
    </div>
    <div className={styles.landingpage_card}>
      <div className={styles.card_link_wrapper}>
        <Image src='/images/star-darkblue.svg'  width={28} height={28} alt='star' />
        <Link href="/pages/corphousing" className={styles.card_link}>
          <span>Read more</span>
          <span>
            <Image src='/images/arrow-right-black.svg'  width={28} height={28} alt='right arrow' />
            </span>
        </Link>
      </div>
      <div className={styles.card_content}>
      <h4>Corporate Housing
</h4>
      <p>Tailored apartments for extended business stays</p>
      </div>
    </div>
   
    </div>
    </section>
    <HDIWsection  />
    <TestimonialsSection />
    <section className={styles.faq_and_contact}>
    <FaqAccordion />
    <ContactForm />
    </section>

      </main>
    <Footer />
    
    </>
  )
}

