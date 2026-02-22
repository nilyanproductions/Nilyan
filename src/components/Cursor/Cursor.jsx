import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import styles from './Cursor.module.css';

const Cursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDark, setIsDark] = useState(false);

    // Position springs
    const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
    const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

    // Rotation logic
    const angle = useMotionValue(0);
    const smoothAngle = useSpring(angle, { stiffness: 300, damping: 30 });

    const prevPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX, clientY } = e;

            cursorX.set(clientX - 16); // Center the 32px cursor
            cursorY.set(clientY - 16);

            // Theme detection logic
            const target = document.elementFromPoint(clientX, clientY);
            // Check if we are hovering over a dark theme element
            const isDarkHover = !!target?.closest('[data-theme="dark"]');
            setIsDark(isDarkHover);

            // Calculate rotation
            const deltaX = clientX - prevPos.current.x;
            const deltaY = clientY - prevPos.current.y;

            if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
                const newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
                angle.set(newAngle);
            }

            prevPos.current = { x: clientX, y: clientY };

            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', moveCursor);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [cursorX, cursorY, angle, isVisible]);

    const cursorColor = isDark ? '#eff8ff' : '#0ea5e9';
    const fillColor = isDark ? 'rgba(239, 248, 255, 0.1)' : 'rgba(14, 165, 233, 0.1)';

    return (
        <motion.div
            className={styles.cursor}
            style={{
                translateX: cursorX,
                translateY: cursorY,
                rotate: smoothAngle,
                opacity: isVisible ? 1 : 0
            }}
        >
            {/* Sketch Style Paper Plane SVG */}
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: 'rotate(90deg)', transition: 'stroke 0.2s ease, fill 0.2s ease' }}
            >
                <path
                    d="M2 12L22 2L12 22L10 14L2 12Z"
                    stroke={cursorColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill={fillColor}
                />
                {/* Inner sketch line for detail */}
                <path
                    d="M22 2L10 14"
                    stroke={cursorColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </motion.div>
    );
};

export default Cursor;
