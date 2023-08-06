import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";
import { Form, Input } from "antd";
import { StyledForm, StyledInput, StyledTextArea, StyleIDE } from "../styled";
import { motion } from "framer-motion";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
interface Props {
    // define your props here
}

const onFinish = (values: any) => {
    console.log("Success:", values);
};
const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
};
const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
};
const ContactForm: React.FC<Props> = (props) => {
    const placeholder = ["Your name", "Your email", "Duc Bao, You are great"];
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const date = new Date();
    const codeString = `const button = document.querySelector('#sendBtn'); 
const message = { 
 name: "${name || placeholder[0]}",
 email: "${email || placeholder[1]}",
 message: "${message || placeholder[2]}",
 date: "${date}"
 } 
button.addEventListener('click', () => { 
    form.send(message); 
})  `;
    const handleNameChange = (e: any) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    };
    const handleMessageChange = (e: any) => {
        setMessage(e.target.value);
    };
    const StyleAnimationIDE = motion(StyleIDE);
    return (
        <div className={styles.formContainer}>
            <div className={styles.form}>
                <div className={styles.wrapper}>
                    <StyledForm
                        name="basic"
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Let me know your name please :(",
                                },
                            ]}
                        >
                            <h5>__name:</h5>
                            <StyledInput
                                value={name}
                                onChange={handleNameChange}
                            />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Email info so i can write back to you",
                                },
                            ]}
                        >
                            <h5>__email:</h5>
                            <StyledInput
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </Form.Item>
                        <Form.Item
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: "At least tell me something =)))",
                                },
                            ]}
                        >
                            <h5>__message:</h5>
                            <StyledTextArea
                                placeholder="I want to hired you !!"
                                autoSize={{
                                    minRows: 3,
                                    maxRows: 9,
                                }}
                                value={message}
                                onChange={handleMessageChange}
                            />
                        </Form.Item>
                    </StyledForm>
                </div>
            </div>
            <div className={styles.output}>
                {" "}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    className="tab-content"
                    style={{ backgroundColor: "transparent !important" }}
                >
                    <StyleAnimationIDE
                        language="javascript"
                        showLineNumbers
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        style={tomorrow}
                    >
                        {codeString}
                    </StyleAnimationIDE>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactForm;
