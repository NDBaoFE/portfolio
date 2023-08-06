import React, { useState, useEffect } from "react";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";
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
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
        getItem("Tom", "3"),
        getItem("Bill", "4"),
        getItem("Alex", "5"),
    ]),
    getItem("Team", "sub2", <TeamOutlined />, [
        getItem("Team 1", "6"),
        getItem("Team 2", "8"),
    ]),
    getItem("Files", "9", <FileOutlined />),
];

const MemoizedSider = React.memo(StyledSider);
const MemoizedMenu = React.memo(StyledMenu);
interface Props {
    // define your props here
    setSelectedNode: any;
}
const AboutSideBar: React.FC<Props> = ({ setSelectedNode }) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const variants = {
        visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
        hidden: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
    };
    return (
        <div className={styles.sidebar}>
            {isMounted && (
                <motion.div
                    key="sidebar"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                >
                    <MemoizedSider collapsible={false} collapsed={true}>
                        <MemoizedMenu
                            theme="dark"
                            defaultSelectedKeys={["1"]}
                            mode="inline"
                            items={items}
                        />
                    </MemoizedSider>
                </motion.div>
            )}
            <TreeView setSelectedNode={setSelectedNode} />
        </div>
    );
};

export default AboutSideBar;
