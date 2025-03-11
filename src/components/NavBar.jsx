// src/components/NavBar.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to='/'>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to='/about'>About</Link>
        </li>
        <li style={styles.navItem}>
          <Link to='/services'>Services</Link>
        </li>
        <li style={styles.navItem}>
          <Link to='/contact'>Contact</Link>
        </li>{' '}
        {/* Add the Contact link */}
      </ul>
    </nav>
  )
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 20px',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
  },
  navItem: {
    padding: '10px',
  },
}

export default NavBar
