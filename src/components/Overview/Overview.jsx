import React from 'react';
import { motion } from 'framer-motion';
import styles from './Overview.module.css';

const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "8+", label: "Team Members" },
    { number: "25+", label: "Happy Clients" },
    { number: "5M+", label: "Impressions" },
];

const Overview = () => {
    return (
        <section className={styles.overview} id="about">
            <div className="container">
                <div className={styles.grid}>
                    <motion.div
                        className={styles.contentCard}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className={styles.title}>Overview</h2>
                        <p className={styles.description}>
                            We are a team of passionate creators, developers, and strategists.
                            Our mission is to help brands find their voice in a noisy digital landscape.
                            We believe in the power of design to transform businesses.
                        </p>
                    </motion.div>

                    <div className={styles.statsGrid}>
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className={styles.statCard}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className={styles.statNumber}>{stat.number}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
