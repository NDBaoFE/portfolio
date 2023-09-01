import React, { useRef, useState } from "react";
import styles from "@/styles/About.module.css";
type TargetKey = React.MouseEvent | React.KeyboardEvent | string;
import { motion } from "framer-motion";
import Me from "@/assests/images/me.png";
import { useEffect } from "react";
// import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
interface Tab {
    label: string;
    children: string | { code: string; language: string };
    key: string;
    closable?: boolean;
}

import { StyledTabs, StyleIDE } from "./styled";
import Image from "next/image";
import { data } from "./tab";
import BasicGrid from "./Grid";
const initialItems = [{ ...data[0] }] as {
    label: string;
    children: { code: string; language: string } | string;
    key: string;
    closable?: boolean;
}[];
interface Props {
    selectedNode: any;
    setSelectedNode: any;
}
const AboutTab: React.FC<Props> = ({ selectedNode, setSelectedNode }) => {
    const [activeKey, setActiveKey] = useState(initialItems[0].key);
    const [items, setItems] = useState(initialItems);
    const newTabIndex = useRef(0);
    const StyleAnimationIDE = motion(StyleIDE);

    const onChange = (newActiveKey: string) => {
        setActiveKey(newActiveKey);
        console.log(newActiveKey);
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };
    const Fade = {
        initial: { opacity: 0, y: 0 },
        animate: { opacity: 1, y: 0 },
    };
    useEffect(() => {
        if (selectedNode) {
            const newActiveKey = `${selectedNode[0]}`;
            console.log(newActiveKey);

            // Check if the selectedNode already exists in the tabs
            const existingTab = items.find((item) => item.key === newActiveKey);

            if (existingTab) {
                // If it exists, set the activeKey to the existing tab's key
                setActiveKey(newActiveKey);
            } else {
                // If it doesn't exist, add the tab as before
                const newPanes = [...items];
                const pushedTab = data.find(
                    (item: any) => item.key === selectedNode[0]
                );
                if (pushedTab) {
                    newPanes.push(pushedTab);
                    setItems(newPanes);
                    setActiveKey(newActiveKey);
                }
            }
        }
    }, [selectedNode, items]);

    const add = () => {
        const newActiveKey = `newTab${newTabIndex.current++}`;
        console.log(newActiveKey);
        const newPanes = [...items];
        newPanes.push({
            label: "New Tab",
            children: "Content of new Tab",
            key: newActiveKey,
        });
        setItems(newPanes);
        setActiveKey(newActiveKey);
    };
    const tabObjects = items.map((tab) => {
        if (typeof tab.children === "string") {
            return {
                label: tab.label,
                children: (
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        className="tab-content"
                    >
                        {tab.children}
                    </motion.div>
                ),
                key: tab.key,
            };
        } else {
            return {
                label: tab.label,
                children: (
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        className="tab-content"
                        style={{ backgroundColor: "transparent !important" }}
                    >
                        <StyleAnimationIDE
                            lineProps={{
                                style: {
                                    wordBreak: "break-all",
                                    whiteSpace: "pre-wrap",
                                },
                            }}
                            wrapLines={true}
                            language={tab.children.language}
                            showLineNumbers
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                        >
                            {tab.children.code}
                        </StyleAnimationIDE>
                    </motion.div>
                ),
                key: tab.key,
            };
        }
    });

    const remove = (targetKey: TargetKey) => {
        let newActiveKey = activeKey;
        let lastIndex = -1;
        items.forEach((item, i) => {
            if (item.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const newPanes = items.filter((item) => item.key !== targetKey);
        if (items.length == 0) {
            setSelectedNode(null);
        }
        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key;
            } else {
                newActiveKey = newPanes[0].key;
            }
        }
        setItems(newPanes);
        setActiveKey(newActiveKey);
    };

    const onEdit = (
        targetKey: React.MouseEvent | React.KeyboardEvent | string,
        action: "add" | "remove"
    ) => {
        if (action === "add") {
            add();
        } else {
            remove(targetKey);
        }
    };

    return (
        <div className={styles.tabContainer}>
            <motion.div
                variants={Fade}
                initial="initial"
                animate="animate"
                className={styles.tab}
            >
                <StyledTabs
                    type="editable-card"
                    onChange={onChange}
                    activeKey={activeKey}
                    onEdit={onEdit}
                    items={tabObjects}
                />
            </motion.div>
            <div className={styles.me}>
                <BasicGrid />
            </div>
        </div>
    );
};

export default AboutTab;
