import React, { useState, useEffect } from "react";

import { AiTwotoneCode } from "react-icons/ai";

import { BsFillPersonFill } from "react-icons/bs";

import { MdVideogameAsset } from "react-icons/md";
import type { MenuProps } from "antd";
import { StyledSider, StyledMenu } from "../styled";
import { motion } from "framer-motion";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}
import styles from "../../styles/About.module.css";
import TreeView from "./Tree";
import { PropsOf } from "@emotion/react";

const items: MenuItem[] = [
    getItem("Option 1", "1", <AiTwotoneCode />),
    getItem("Option 2", "2", <BsFillPersonFill />),
    getItem("User", "sub1", <MdVideogameAsset />, []),
];

const MemoizedSider = React.memo(StyledSider);
const MemoizedMenu = React.memo(StyledMenu);
interface Props {
    // define your props here
    setSelectedNode: any;
    selectedNode: any;
}
const AboutSideBar: React.FC<Props> = ({ setSelectedNode, selectedNode }) => {
    return (
        <div className={styles.sidebar}>
            <TreeView
                setSelectedNode={setSelectedNode}
                selectedNode={selectedNode}
            />
        </div>
    );
};

export default AboutSideBar;
