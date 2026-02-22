import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer} data-theme="dark">
            <div className="container">
                <div className={styles.ctaSection}>
                    <h2 className={styles.ctaTitle}>Fly with us</h2>
                    <button className={styles.emailBtn} onClick={() => window.location.href = 'mailto:nilyanproductions@gmail.com'}>
                        Email Us
                        <ArrowUpRight size={20} />
                    </button>
                </div>

                <div className={styles.linksSection}>
                    <div className={styles.brandColumn}>
                        <div className={styles.logo}>Nilyan</div>
                        <p className={styles.copyright}>© 2024 Nilyan Agency. All rights reserved.</p>
                    </div>

                    <div className={styles.linkColumn}>
                        <h3>Sitemap</h3>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#work">Work</a>
                    </div>

                    <div className={styles.linkColumn}>
                        <h3>Socials</h3>
                        <a href="#" className={styles.socialLink}>
                            <Instagram size={18} /> Instagram
                        </a>
                        <a href="#" className={styles.socialLink}>
                            <Twitter size={18} /> Twitter
                        </a>
                        <a href="#" className={styles.socialLink}>
                            <Linkedin size={18} /> LinkedIn
                        </a>
                    </div>

                    <div className={styles.linkColumn}>
                        <h3>Contact</h3>
                        <a href="mailto:nilyanproductions@gmail.com">
                            <Mail size={18} /> nilyanproductions@gmail.com
                        </a>
                        <a href="tel:+919996636969">
                            <Phone size={18} /> +91 99966 36969
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
