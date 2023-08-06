import React from "react";
import styles from "../styles/Contact.module.css";
import ContactTree from "@/components/Contact/ContactTree";
import ContactForm from "@/components/Contact/ContactForm";
interface Props {
    // define your props here
}

const contact: React.FC<Props> = (props) => {
    return (
        <div className={styles.container}>
            <ContactTree />
            <ContactForm />
        </div>
    );
};

export default contact;
