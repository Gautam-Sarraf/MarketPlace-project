import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>MarketX</div>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>About</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/services" style={styles.navLink}>Services</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.navLink}>Contact</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/login" style={styles.navLink}>login</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'transparent',
    padding: '20px 40px',
    position: 'sticky' as "sticky",
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
  },
  logo: {
    color: 'black', 
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: 'black',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'color 0.3s ease',
  },
};

export default Navbar;
