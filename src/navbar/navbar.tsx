// src/components/Navbar.tsx
import React from 'react';

interface NavbarProps {
  // You can define props here if needed
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <a href="/" style={styles.navLink}>Home</a>
        </li>
        <li style={styles.navItem}>
          <a href="/about" style={styles.navLink}>About</a>
        </li>
        <li style={styles.navItem}>
          <a href="/services" style={styles.navLink}>Services</a>
        </li>
        <li style={styles.navItem}>
          <a href="/contact" style={styles.navLink}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '20px 40px',
    position: 'sticky' as "sticky"
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Navbar;