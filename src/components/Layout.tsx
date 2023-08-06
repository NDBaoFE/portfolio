import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
interface LayoutProps {
    children: React.ReactNode;
}
import { useRouter } from "next/router";
import styles from "../styles/Layout.module.css";
import BlurImg from "../assests/images/Background Blurs.png";

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter();
    console.log(router.pathname);
    return (
        <div className={styles.layout}>
            <Navbar />
            {router.pathname === "/" ||
            router.pathname === "/home" ||
            router.pathname === "" ? (
                <img className={styles.blur} src={BlurImg.src} />
            ) : (
                <div></div>
            )}

            {children}
            <Footer />
        </div>
    );
};

export default Layout;
