import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Share2, Search } from 'lucide-react';
import styles from './Services.module.css';

const services = [
    {
        icon: <Palette size={32} />,
        title: "Visual Identity",
        description: "We craft memorable brand identities that resonate with your audience and stand the test of time."
    },
    {
        icon: <Share2 size={32} />,
        title: "Social Media",
        description: "Strategic social media management that builds community and drives engagement for your brand."
    },
    {
        icon: <Search size={32} />,
        title: "SEO Optimization",
        description: "Data-driven SEO strategies to improve visibility and drive organic traffic to your website."
    }
];

const Services = () => {
    return (
        <section className={styles.services} id="services">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>Our Services</h2>
                    <p className={styles.sectionSubtitle}>Comprehensive digital solutions for modern brands.</p>
                </motion.div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
