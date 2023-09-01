import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
interface LayoutProps {
    children: React.ReactNode;
}
import { useRouter } from "next/router";
import styles from "../styles/Layout.module.css";
import BlurImg from "../assests/images/Background Blurs.png";
import cardStyle from "@/styles/Card.module.css";
import { useState } from "react";
const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [position, setPosition] = useState<{ left: number; top: number }>({
        left: 0,
        top: 0,
    });

    const router = useRouter();
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = event;
        setPosition({ left: clientX + 1200, top: clientY });
    };
    return (
        <div className={styles.layout} onMouseMove={handleMouseMove}>
            <Navbar />

            {router.pathname === "/" ||
            router.pathname === "/home" ||
            router.pathname === "" ? (
                <>
                    <div
                        id="blob"
                        className={cardStyle.blob}
                        style={{
                            left: position.left - 1200,
                            top: position.top,
                        }}
                    ></div>
                    <div id="blur" className={cardStyle.blur}></div>
                    <img className={styles.blur} src={BlurImg.src} />
                </>
            ) : (
                <div></div>
            )}

            {children}
            <Footer />
        </div>
    );
};

export default Layout;
