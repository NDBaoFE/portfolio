import React from "react";
import styles from "../styles/Projects.module.css";
import CheckBoxes from "@/components/CheckBox";
import GithubProjectCard from "@/components/Projects";
import { githubProjects } from "@/data/projects";
import { useState } from "react";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { motion } from "framer-motion";
interface Props {}

const Project: React.FC<Props> = (props) => {
    const [projects, setProjects] = useState(githubProjects);
    const [checkedValue, setCheckedValue] = useState<string[]>([]);
    const FilterProduct = projects.filter((item) => {
        if (checkedValue.length === 0) {
            return item;
        }
        return item.techStack.some((tech) => checkedValue.includes(tech));
    });
    console.log(checkedValue);
    const fadeInUp = {
        initial: { opacity: 0, y: 0 },
        animate: { opacity: 1, y: 0 },
    };
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.header}>
                    <h5>Project</h5>
                </div>

                <CheckBoxes
                    setCheckedValue={
                        setCheckedValue as React.Dispatch<
                            React.SetStateAction<CheckboxValueType[]>
                        >
                    }
                />
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    className={styles.mobileContent}
                >
                    <GithubProjectCard projects={FilterProduct} />
                </motion.div>
            </div>
            <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                className={styles.content}
            >
                <GithubProjectCard projects={FilterProduct} />
            </motion.div>
        </div>
    );
};

export default Project;
