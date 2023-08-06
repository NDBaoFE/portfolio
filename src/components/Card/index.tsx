import React, { useState, useEffect } from "react";
import styles from "@/styles/Card.module.css";
const GlowEffect: React.FC = () => {
    const [position, setPosition] = useState<{ left: number; top: number }>({
        left: 0,
        top: 0,
    });
    const [nameText, setNameText] = useState<string>("CODEPEN");
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: NodeJS.Timeout | null = null;

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = event;
        setPosition({ left: clientX, top: clientY });
    };

    const handleMouseEnter = () => {
        let iteration = 0;
        clearInterval(interval as NodeJS.Timeout);

        interval = setInterval(() => {
            setNameText((prevText) =>
                prevText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return nameText[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("")
            );

            if (iteration >= nameText.length) {
                clearInterval(interval as NodeJS.Timeout);
            }

            iteration += 1 / 3;
        }, 30);
    };

    useEffect(() => {
        return () => {
            clearInterval(interval as NodeJS.Timeout);
        };
    }, []);

    return (
        <div>
            <div
                id="blob"
                className={styles.blob}
                style={{ left: position.left, top: position.top }}
                onMouseMove={handleMouseMove}
            ></div>
            <div id="blur" className={styles.blur}></div>
            <div className={styles.screen} onMouseEnter={handleMouseEnter}>
                <div className={styles.screen_image}></div>
                <div className={styles.screen_overlay}></div>
                <div className={styles.screen_content}>
                    <div className={styles.screen_user}>
                        <span className={styles.name} data-value={nameText}>
                            {nameText}
                        </span>
                        <a
                            className="link"
                            href="https://youtube.com/@Hyperplexed"
                            target="_blank"
                        >
                            @Hyperplexed
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlowEffect;
