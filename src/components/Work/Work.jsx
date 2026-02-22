import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Work.module.css';

// 2 Horizontal, 8 Vertical
const videos = [
    { id: '1', type: 'horizontal', src: 'https://www.youtube.com/embed/aqz-KE-bpKQ' },
    { id: '2', type: 'horizontal', src: 'https://www.youtube.com/embed/ScMzIvxBSi4' },
    { id: '3', type: 'vertical', src: 'https://www.youtube.com/embed/S7xTBa93TX8' },
    { id: '4', type: 'vertical', src: 'https://www.youtube.com/embed/LXb3EKWsInQ' },
    { id: '5', type: 'vertical', src: 'https://www.youtube.com/embed/tgbNymZ7vqY' },
    { id: '6', type: 'vertical', src: 'https://www.youtube.com/embed/Bey4XXJAqS8' },
    { id: '7', type: 'vertical', src: 'https://www.youtube.com/embed/PeMvMnjrB6o' },
    { id: '8', type: 'vertical', src: 'https://www.youtube.com/embed/y881t8ilMyc' },
    { id: '9', type: 'vertical', src: 'https://www.youtube.com/embed/gJ6VMs3c21k' },
    { id: '10', type: 'vertical', src: 'https://www.youtube.com/embed/F1B9Fk_SgI0' },
];

const Work = () => {
    return (
        <section className={styles.workSection} id="work">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h2 className={styles.title}>Our Work</h2>
                    <p className={styles.subtitle}>
                        From organic content for Instagram & YouTube to Distribution.
                    </p>
                </motion.div>

                <div className={styles.collageGrid}>
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            className={`${styles.card} ${video.type === 'horizontal' ? styles.horizontal : styles.vertical}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                        >
                            <iframe
                                src={`${video.src}?controls=1&rel=0&playsinline=1&modestbranding=1`}
                                title={`Video ${video.id}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className={styles.iframe}
                                loading="lazy"
                            ></iframe>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
