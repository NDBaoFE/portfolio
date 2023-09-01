import React, { useState, useRef } from "react";
import styles from "@/styles/Card.module.css";
import Me from "@/assests/images/me.png";
import Image from "next/image";
const GlowEffect: React.FC = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const [nameText, setNameText] = useState<string>("DUCBAO");
    const intervalRef = useRef<number | null>(null);

    const handleMouseEnter = () => {
        let iteration = 0;
        const intervalId = intervalRef.current;

        if (intervalId !== null) {
            clearInterval(intervalId);
        }

        intervalRef.current = window.setInterval(() => {
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
                clearInterval(intervalRef.current as number);
            }

            iteration += 1 / 3;
        }, 30);
    };

    const handleMouseLeave = () => {
        clearInterval(intervalRef.current as number);
        setNameText("DUCBAO");
    };

    return (
        <>
            <div className={styles.container}>
                <div
                    className={styles.screen}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className={styles.screen_image}></div>
                    <div className={styles.screen_overlay}></div>
                    <div className={styles.personal}>
                        <div className={`${styles.shadowOnly}`}>
                            <Image src={Me} alt="personal" />
                        </div>
                    </div>
                    <div className={styles.screen_content}>
                        <div className={styles.screen_user}>
                            <span className={styles.name} data-value={nameText}>
                                {nameText}
                            </span>
                            <a
                                className="link"
                                href="https://www.facebook.com/ducbao1803/"
                                target="_blank"
                            >
                                @DucBao1803
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GlowEffect;
