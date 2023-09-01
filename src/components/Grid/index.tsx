import styles from "@/styles/grid.module.css";
import Image from "next/image";
import React, { useState } from "react";
interface Props {
    // define your props here
    className: any;
}
export default function BasicGrid<Props>() {
    const IMAGES = [
        `/assets/1.jpg`,
        `/assets/midtop.jpg`,
        `/assets/5.jpg`,
        `/assets/blue.jpg`,
        `/assets/3.jpg`,
        `/assets/6.jpg`,
        `/assets/2.jpg`,
        `/assets/midbottom.jpg`,
        `/assets/4.jpg`,
    ];
    const CLIPS = [
        ["ellipse(0 0 at 0 0)", "ellipse(150% 150% at 0 0)"],
        ["inset(100% 0 0 0)", "inset(0 0 0 0)"],
        ["ellipse(0 0 at 100% 0)", "ellipse(150% 150% at 100% 0)"],
        [
            "polygon(50% 50%,  50% 50%,  50% 50%, 50% 50%)",
            "polygon(-50% 50%, 50% -50%, 150% 50%, 50% 150%)",
        ],
        ["circle(0)", "circle(125%)"],
        ["inset(100% 100% 100% 100%)", "inset(0 0 0 0)"],
        ["ellipse(0 0 at 0 100%)", "ellipse(150% 150% at 0 100%)"],
        ["inset(0 0 100% 0)", "inset(0 0 0 0)"],
        ["ellipse(0 0 at 100% 100%)", "ellipse(150% 150% at 100% 100%)"],
    ];
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isHover, setHover] = useState(false);
    const handleHovered = (index: any) => {
        setHoveredIndex(index);
    };
    return (
        <>
            <div
                className={
                    isHover
                        ? styles["image-container-hover"]
                        : styles["image-container"]
                }
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {IMAGES.map((img, index) => {
                    const imageStyle = {
                        "--clip-start": CLIPS[index][0],
                        "--clip-end": CLIPS[index][1],
                    } as React.CSSProperties;
                    const imageClassName = `${styles.image} ${
                        hoveredIndex === index ? styles.hovered : styles.not
                    }`;
                    return (
                        <div
                            className={imageClassName}
                            key={index}
                            style={imageStyle}
                            onMouseEnter={() => handleHovered(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img src={img} alt="img" />
                            <img src={img} alt="img" />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
