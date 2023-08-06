import React from "react";
import Image from "next/image";
import styles from "@/styles/Projects.module.css";
import Lang from "./Lang";
import { motion } from "framer-motion";
interface GithubProject {
    placeholder: string;
    name: string;
    description: string;
    url: string;
    techStack: string[];
    imageUrl?: string;
}

interface Props {
    projects: GithubProject[];
}

const GithubProjectCard: React.FC<Props> = ({ projects }) => {
    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };
    const fadeLeftRight = {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
    };
    const Fade = {
        initial: { opacity: 0, y: 0 },
        animate: { opacity: 1, y: 0 },
    };
    return (
        <div className={styles.wrapper}>
            {projects.map((project, index) => (
                <motion.div
                    variants={fadeLeftRight}
                    initial="initial"
                    animate="animate"
                    key={index}
                >
                    <div className={styles.card_container}>
                        <div className={styles.hero}>
                            <div className={styles.placeholder}>
                                {project.placeholder}
                            </div>
                            <div className={styles.title}>{project.name}</div>
                        </div>
                        <div className={styles.card}>
                            <div className="github-project-image-container">
                                {project.imageUrl ? (
                                    <Image
                                        className="github-project-image"
                                        src={project.imageUrl}
                                        alt={project.name}
                                        width={370}
                                        height={135}
                                        style={{
                                            objectFit: "cover",
                                            borderRadius: "15px 15px 0px 0px",
                                        }}
                                    />
                                ) : null}
                                <Lang projectTechStack={project.techStack} />
                            </div>
                            <div className={styles.info}>
                                <p className={styles.description}>
                                    {project.description}
                                </p>
                                <p className={styles.stack}>
                                    <strong>Tech stack:</strong>{" "}
                                    {project.techStack.join(", ")}
                                </p>
                                <div className={styles.button}>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        view-project
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default GithubProjectCard;
