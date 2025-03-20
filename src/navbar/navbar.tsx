// src/components/Navbar.tsx
import React from 'react';

interface NavbarProps {
  // You can define props here if needed
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav style={styles.navbar}>
      {/* Logo or Site Name on the left */}
      <div style={styles.logo}>MarketX</div>

      {/* Navigation Links on the right */}
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
    backgroundColor: 'transparent', // Transparent background
    padding: '20px 40px',
    position: 'sticky' as "sticky", // Sticky position
    top: 0, // Stick to the top
    display: 'flex',
    justifyContent: 'space-between', // Space between logo and nav links
    alignItems: 'center', // Vertically center items
    zIndex: 1000, // Ensure navbar stays on top of other content
  },
  logo: {
    color: '#fff', // White color for the logo
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
    color: '#fff', // White color for the links
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'color 0.3s ease', // Smooth color transition on hover
  },
};

export default Navbar;