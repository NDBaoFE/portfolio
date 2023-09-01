import React, { useState, useEffect } from "react";
import styles from "@/styles/Contact.module.css";
import { Form, Input } from "antd";
import { StyledForm, StyledInput, StyledTextArea, StyleIDE } from "../styled";
import { motion } from "framer-motion";
import SendButton from "./Button";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import emailjs from "@emailjs/browser";
import { toastError, toastSuccess } from "../Toast";
interface Props {
    // define your props here
    formName: string;
    className: string;
}

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
    const [form] = Form.useForm();
    useEffect(() => emailjs.init("vYqP_EJyhq3SEuxsE"), []);
    const onFinish = async () => {
        form.validateFields()
            .then(async (values) => {
                try {
                    console.log(values);
                    await emailjs.send("service_ado6niq", "template_8kvblwt", {
                        name: values.name,
                        message: values.description,
                        recipient: "nguyenducbaodh3@gmail.com",
                        email: values.email,
                    });
                    toastSuccess("Send email successfully");
                } catch (error) {
                    toastError(
                        "Eror while sending the email, please try again"
                    );
                } finally {
                    form.resetFields();
                    setName("");
                    setEmail("");
                    setMessage("");
                }
            })
            .catch((errorInfo) => {
                // Validation failed, handle the error
                console.log("Form validation failed:", errorInfo);
            });
    };
    const handleSubmit = () => {};
    const codeString = `const button = document.querySelector('#sendBtn'); 
const message = { 
 name: "${name || placeholder[0]}",
 email: "${email || placeholder[1]}",
 message: "${message || placeholder[2]}",
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

    type FieldType = {
        name?: string;
        email?: string;
        description?: string;
    };
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className={props.className}>
            <div className={styles.formContainer}>
                <div className={styles.form}>
                    {isMounted && (
                        <div className={styles.wrapper}>
                            <StyledForm
                                name={props.formName || "basic"}
                                form={form}
                                style={{
                                    maxWidth: 600,
                                }}
                                initialValues={{
                                    name: "",
                                    email: "",
                                    password: "",
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <h5>__name:</h5>
                                <Form.Item<FieldType>
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Let me know your name please ",
                                        },
                                    ]}
                                >
                                    <StyledInput
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                </Form.Item>

                                <h5>__email:</h5>
                                <Form.Item<FieldType>
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Email info so i can write back to you",
                                        },
                                        {
                                            type: "email", // Add email validation rule
                                            message:
                                                "Please enter a valid email address",
                                        },
                                    ]}
                                >
                                    <StyledInput
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </Form.Item>
                                <h5>__message:</h5>
                                <Form.Item<FieldType>
                                    name="description"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "At least tell me something ",
                                        },
                                    ]}
                                >
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
                                <Form.Item>
                                    <SendButton
                                        onClick={handleSubmit}
                                        form={form}
                                    />
                                </Form.Item>
                            </StyledForm>
                        </div>
                    )}
                </div>
                <div className={styles.output}>
                    {isMounted && (
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            className="tab-content"
                            style={{
                                backgroundColor: "transparent !important",
                            }}
                        >
                            <StyleIDE
                                language="javascript"
                                showLineNumbers
                                style={tomorrow}
                            >
                                {codeString}
                            </StyleIDE>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
