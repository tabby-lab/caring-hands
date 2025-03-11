// src/components/Home.jsx
import React from 'react'
import Hero from './Hero' // Import the Hero component

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Two-column section */}
      <div style={styles.twoColumnSection}>
        <div style={styles.imageContainer}>
          {/* <img
            src='https://via.placeholder.com/400' // Replace with your image URL
            alt='Caregiving'
            style={styles.image}
          /> */}
        </div>
        <div style={styles.textContainer}>
          <h2>About Us</h2>
          <p>
            We provide compassionate and professional in-home care services to
            individuals in Austin, ensuring their comfort and safety. Our team
            is dedicated to helping clients live with dignity and respect while
            receiving the care they need.
          </p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  twoColumnSection: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '50px 20px',
  },
  imageContainer: {
    flex: '1',
    paddingRight: '20px',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
  textContainer: {
    flex: '1',
    paddingLeft: '20px',
    maxWidth: '600px',
  },
}

export default Home
