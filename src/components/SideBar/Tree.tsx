import React, { useState, useEffect } from "react";
import { data } from "@/components/tab";
import Image from "next/image";
import { StyledTree } from "../styled";
import styles from "@/styles/About.module.css";
import red from "@/assests/images/red.png";
import blue from "@/assests/images/blue.png";
import green from "@/assests/images/green.png";
import SchoolIcon from "@mui/icons-material/School";
import MotionBox from "../MotionBox";
import BasicGrid from "../Grid";
import { Tabs } from "antd";
interface Props {
    setSelectedNode: any;
    selectedNode: any;
}
const TreeView: React.FC<Props> = ({ setSelectedNode, selectedNode }) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onSelect = (selectedKeys: React.Key[], info: any) => {
        setSelectedNode(selectedKeys);
    };

    const pushedTab =
        selectedNode && selectedNode.length > 0
            ? data.find((item: any) => item.key === selectedNode[0])
            : null;

    return (
        <>
            {isMounted && (
                <>
                    <MotionBox
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <StyledTree
                            showLine={false}
                            defaultExpandedKeys={["0-0-0"]}
                            onSelect={onSelect}
                            showIcon={true}
                        >
                            <StyledTree.TreeNode
                                key="1"
                                title={
                                    <MotionBox>
                                        <Image src={red} alt="folder" /> _bio
                                    </MotionBox>
                                }
                            ></StyledTree.TreeNode>
                            <StyledTree.TreeNode
                                key="2"
                                title={
                                    <MotionBox>
                                        <Image src={green} alt="folder" />{" "}
                                        _interests
                                    </MotionBox>
                                }
                            ></StyledTree.TreeNode>
                            <StyledTree.TreeNode
                                key="edu"
                                title={
                                    <MotionBox>
                                        <Image src={blue} alt="folder" />{" "}
                                        _education
                                    </MotionBox>
                                }
                            >
                                <StyledTree.TreeNode
                                    key="3"
                                    title={
                                        <MotionBox
                                            initial="hidden"
                                            animate="visible"
                                            exit="go"
                                            variants={{
                                                hidden: {
                                                    y: "-20px",
                                                    opacity: 0,
                                                },
                                                visible: {
                                                    y: "0",
                                                    opacity: 1,
                                                    transition: {
                                                        type: "spring",
                                                        delay: 0.2,
                                                        duration: 0.5,
                                                    },
                                                },
                                                go: {
                                                    y: "-20px",
                                                    opacity: 0,
                                                    transition: {
                                                        type: "spring",
                                                        delay: 0.2,
                                                        duration: 0.3,
                                                    },
                                                },
                                            }}
                                        >
                                            <SchoolIcon /> _highschool
                                        </MotionBox>
                                    }
                                />
                                <StyledTree.TreeNode
                                    key="4"
                                    title={
                                        <MotionBox
                                            initial="hidden"
                                            animate="visible"
                                            exit="go"
                                            variants={{
                                                hidden: {
                                                    y: "-20px",
                                                    opacity: 0,
                                                },
                                                visible: {
                                                    y: "0",
                                                    opacity: 1,
                                                    transition: {
                                                        type: "spring",
                                                        delay: 0.2,
                                                        duration: 0.5,
                                                    },
                                                },
                                                go: {
                                                    y: "-20px",
                                                    opacity: 0,
                                                    transition: {
                                                        type: "spring",
                                                        delay: 0.2,
                                                        duration: 0.3,
                                                    },
                                                },
                                            }}
                                        >
                                            <SchoolIcon />
                                            _university
                                        </MotionBox>
                                    }
                                />
                            </StyledTree.TreeNode>
                        </StyledTree>
                    </MotionBox>

                    <div className={`${styles.infoContainer}`}>
                        <h5>{pushedTab?.label || `// nothing`}</h5>
                        <pre className={styles.codeContainer}>
                            {pushedTab?.children.code
                                .split("\n")
                                .map((paragraph: String, index: number) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                        </pre>
                    </div>
                    <div className={styles.mobileGrid}>
                        <BasicGrid />
                    </div>
                </>
            )}
        </>
    );
};

export default TreeView;
