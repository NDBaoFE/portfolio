/* eslint-disable react/jsx-no-undef */
import { Button, Drawer } from "antd";
import { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import { MenuOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { MobileNav, MyDrawer } from "./styled";
import Link from "next/link";
import { useRouter } from "next/router";

const StyledDrawer = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [selectedKey, setSelectedKey] = useState(`${router.pathname}`);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        router.push(selectedKey);
    }, [selectedKey]);
    const data: Array<{ path: string; name: string }> = [
        {
            path: "/",
            name: " _hello",
        },
        {
            path: "/about",
            name: "_about me",
        },
        {
            path: "/project",
            name: " _projects",
        },
        {
            path: "/contact",
            name: " _contact-me",
        },
    ];

    return (
        <div className={styles.mobileNav}>
            <ul className={styles.horizontal}>
                <li>
                    <Link href="/" passHref>
                        Nguyen Duc Bao
                    </Link>
                </li>
                <Button
                    type="primary"
                    onClick={showDrawer}
                    icon={<MenuOutlined />}
                    className={styles.hamburger}
                />
                <MyDrawer
                    title="_nguyen_duc_bao"
                    placement="left"
                    onClose={onClose}
                    open={open}
                    className={styles.drawer}
                    size="default"
                >
                    <ul>
                        {data.map((item) => {
                            return (
                                <li
                                    key={item.path}
                                    className={
                                        router.pathname === item.path
                                            ? `${styles.active}`
                                            : ""
                                    }
                                >
                                    <Link href={item.path}> {item.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </MyDrawer>
            </ul>
        </div>
    );
};
export default StyledDrawer;
