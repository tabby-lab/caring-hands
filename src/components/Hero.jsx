// src/components/Hero.jsx
import React from 'react'

const Hero = () => {
  return (
    <div style={styles.heroSection}>
      <h1 style={styles.heroTitle}>
        Personalized In-Home Care Services in Austin
      </h1>
      <p style={styles.heroText}>
        Our dedicated team enhances your quality of life through tailored
        support, ensuring comfort and assistance with daily activities for you
        and your loved ones.
      </p>
    </div>
  )
}

const styles = {
  heroSection: {
    height: '50vh', // Removed background image and kept height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#f0f0f0', // Light gray background for now
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  heroText: {
    fontSize: '1.5rem',
    maxWidth: '800px',
  },
}

export default Hero
