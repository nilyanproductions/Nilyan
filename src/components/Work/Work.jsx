import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Work.module.css';

// 2 Horizontal, 8 Vertical
const videos = [
    { id: '1', type: 'horizontal', src: 'https://www.youtube.com/embed/A4-Heqg7k_w' },
    { id: '2', type: 'horizontal', src: 'https://www.youtube.com/embed/Pk_fJtL2lwk' },
    { id: '3', type: 'vertical', src: 'https://www.youtube.com/embed/xWSFSLm0MSQ' },
    { id: '4', type: 'vertical', src: 'https://www.youtube.com/embed/7nmA6hcaWDQ' },
    { id: '5', type: 'vertical', src: 'https://www.youtube.com/embed/H92uXJ_xvPU' },
    { id: '6', type: 'vertical', src: 'https://www.youtube.com/embed/9w5w3bjpBi8' },
    { id: '7', type: 'vertical', src: 'https://www.youtube.com/embed/VwWtK1efLBY' },
    { id: '8', type: 'vertical', src: 'https://www.youtube.com/embed/9MvPeFHVAx8' },
    { id: '9', type: 'vertical', src: 'https://www.youtube.com/embed/8zFGuKP32lA' },
    { id: '10', type: 'vertical', src: 'https://www.youtube.com/embed/jLqaffhvzDA' },
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
