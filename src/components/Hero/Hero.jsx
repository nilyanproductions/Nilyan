import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.gridBackground}></div>
            <div className="container">
                <div className={styles.content}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        We help <span className="text-gradient">build</span><br />
                        brands.
                    </motion.h1>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        Nilyan is a digital agency that transforms ideas into
                        exceptional digital experiences. We craft websites that
                        captivate and convert.
                    </motion.p>

                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <button className={styles.primaryBtn} onClick={() => window.open('https://wa.me/919996636969', '_blank')}>
                            Start Today
                            <ArrowRight size={18} />
                        </button>
                        <button className={styles.secondaryBtn} onClick={() => {
                            const element = document.getElementById('work');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>
                            Our Work
                        </button>
                    </motion.div>
                </div>
            </div>

            <div className={styles.glow}></div>
        </section>
    );
};

export default Hero;
