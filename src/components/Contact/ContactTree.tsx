import React, { useState, useEffect } from "react";

import { StyledContactTree } from "../styled";
import { data } from "@/utils/data";

import styles from "@/styles/Contact.module.css";
import MotionBox from "../MotionBox";
import ContactForm from "./ContactForm";
interface Props {}
const ContactTree: React.FC<Props> = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onSelect = (selectedKeys: React.Key[], info: any) => {
        console.log(selectedKeys);
    };

    return (
        <>
            {isMounted && (
                <>
                    <MotionBox
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={styles.contactContainer}
                    >
                        <StyledContactTree
                            showLine={false}
                            defaultExpandedKeys={["0-0-0"]}
                            onSelect={onSelect}
                            showIcon={true}
                        >
                            <StyledContactTree.TreeNode
                                key={9}
                                title={<div>Contact</div>}
                                style={{
                                    width: "100%",
                                    borderTop: "1px solid #1E2D3D",
                                    borderBottom: "1px solid #1E2D3D",
                                    padding: "8px 0",
                                }}
                            >
                                {data.contacts.map((contact: any) => {
                                    const IconComponent = contact.icon; // Get the icon component from data
                                    return (
                                        <StyledContactTree.TreeNode
                                            style={{ margin: "5px 0" }}
                                            key={contact.id}
                                            title={
                                                <MotionBox className="hi">
                                                    <IconComponent
                                                        style={{
                                                            marginRight: "8px",
                                                        }}
                                                    />{" "}
                                                    {contact.value}
                                                </MotionBox>
                                            }
                                        ></StyledContactTree.TreeNode>
                                    );
                                })}
                            </StyledContactTree.TreeNode>
                            <StyledContactTree.TreeNode
                                key="10"
                                title={
                                    <MotionBox className="hi">
                                        find-me-also-at
                                    </MotionBox>
                                }
                                style={{
                                    width: "100%",
                                    borderTop: "1px solid #1E2D3D",
                                    borderBottom: "1px solid #1E2D3D",
                                    padding: "8px 0",
                                }}
                            >
                                {data.others.map((contact: any) => {
                                    const IconComponent = contact.icon; // Get the icon component from data
                                    return (
                                        <StyledContactTree.TreeNode
                                            key={contact.id}
                                            style={{ margin: "5px 0" }}
                                            title={
                                                <MotionBox className="hi">
                                                    <IconComponent
                                                        style={{
                                                            marginRight: "8px",
                                                        }}
                                                    />{" "}
                                                    {contact.value}
                                                </MotionBox>
                                            }
                                        ></StyledContactTree.TreeNode>
                                    );
                                })}
                            </StyledContactTree.TreeNode>
                        </StyledContactTree>
                    </MotionBox>
                </>
            )}
            <ContactForm formName="mobile" className={styles.mobileForm} />
        </>
    );
};

export default ContactTree;
