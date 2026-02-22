import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <div className={styles.logo}>Nilyan</div>

                <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.open : ''}`}>
                    <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                    <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
                    <a href="#work" onClick={() => setMobileMenuOpen(false)}>Our Work</a>
                    <button className={styles.mobileConnectBtn} onClick={() => window.open('https://wa.me/919996636969', '_blank')}>Connect</button>
                </div>

                <button className={styles.connectBtn} onClick={() => window.open('https://wa.me/919996636969', '_blank')}>Connect</button>

                <button className={styles.menuBtn} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
