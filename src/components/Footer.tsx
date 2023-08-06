import React from "react";
import Link from "next/link";
import style from "../styles/Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer: React.FC = () => {
    const data: Array<{
        path: string;
        name: string;
        icon_status: boolean;
        icon?: any;
    }> = [
        {
            path: "/",
            name: "find me in: ",
            icon_status: false,
        },
        {
            path: "https://www.facebook.com/ducbao1803/",
            name: " _facebook",
            icon_status: true,
            icon: <FacebookIcon />,
        },
        {
            path: "https://www.linkedin.com/in/b%E1%BA%A3o-nguy%E1%BB%85n-%C4%91%E1%BB%A9c-06776922b/",
            name: "_linkedin",
            icon_status: true,
            icon: <LinkedInIcon />,
        },
        {
            path: "https://github.com/NDBaoFE",
            name: " _contact-me",
            icon_status: true,
            icon: <GitHubIcon />,
        },
    ];
    return (
        <div className={style.footer}>
            <ul>
                {data.map((item) => {
                    return (
                        <Link href={item.path} passHref key={item.name}>
                            <li>{item.icon_status ? item.icon : item.name}</li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export default Footer;
