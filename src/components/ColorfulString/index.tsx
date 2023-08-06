/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const ColorfulString: React.FC = ({}) => {
    return (
        <div className={styles.heading}>
            <motion.h5
                className={styles.const}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {
                        x: "-100px",
                        opacity: 0,
                    },
                    visible: {
                        x: 0,
                        opacity: 1,
                        transition: {
                            delay: 0.4,
                            duration: 0.4,
                        },
                    },
                }}
            >
                const&nbsp;
            </motion.h5>
            <motion.h5
                className={styles.name}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {
                        x: "-100px",
                        opacity: 0,
                    },
                    visible: {
                        x: 0,
                        opacity: 1,
                        transition: {
                            delay: 0.4,
                            duration: 0.4,
                        },
                    },
                }}
            >
                githubLink
            </motion.h5>

            <motion.h5
                className={styles.equal}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {
                        scale: 0.8,
                        opacity: 0,
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 0.4,
                            duration: 0.4,
                        },
                    },
                }}
            >
                &nbsp;=&nbsp;
            </motion.h5>
            <Link href="https://github.com/NDBaoFE">
                <motion.h5
                    className={styles.link}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {
                            x: "100px",
                            opacity: 0,
                        },
                        visible: {
                            x: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.4,
                                duration: 0.4,
                            },
                        },
                    }}
                >
                    "https://github.com/NDBaoFE"
                </motion.h5>
            </Link>
        </div>
    );
};

export default ColorfulString;
