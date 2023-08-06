import React from "react";
import Link from "next/link";
import style from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
const Navbar: React.FC = () => {
    const router = useRouter();
    const data: Array<{ path: string; name: string }> = [
        {
            path: "/a",
            name: "Nguyen Duc Bao",
        },
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
        <div className={style.navbar}>
            <ul>
                {data.map((item) => {
                    return (
                        <Link href={item.path} passHref key={item.name}>
                            <li
                                className={
                                    router.pathname === item.path
                                        ? `${style.active}`
                                        : ""
                                }
                            >
                                <span
                                    className={
                                        router.pathname === item.path
                                            ? `${style.underline}`
                                            : ""
                                    }
                                ></span>
                                {item.name}
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export default Navbar;
