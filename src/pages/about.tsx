/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

interface Props {
    // define your props here
}
import styles from "@/styles/About.module.css";
import AboutSideBar from "@/components/SideBar/AboutSideBar";
import AboutTab from "@/components/Tabs";
import { useState } from "react";
interface MyTreeNode {
    key: string;
    title: string;
    expanded: boolean;
    selected: boolean;
    checked: boolean;
    // Add other properties based on your node structure
}
const about: React.FC<Props> = (props) => {
    const [selectedNode, setSelectedNode] = useState<MyTreeNode | null>(null);
    return (
        <div className={styles.container}>
            <AboutSideBar
                setSelectedNode={setSelectedNode}
                selectedNode={selectedNode}
            />
            <AboutTab
                selectedNode={selectedNode}
                setSelectedNode={setSelectedNode}
            />
        </div>
    );
};

export default about;
