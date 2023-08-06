import React from "react";
import styles from "@/styles/Projects.module.css";
import { IconType } from "react-icons";
import { data } from "./data";

interface Props {
    projectTechStack: string[];
}

const getIconComponent = (icon: string): IconType | null => {
    const matchingData = data.find((item: any) => item.value === icon);
    return matchingData ? matchingData.icon : null;
};

const Lang: React.FC<Props> = (props) => {
    const iconShow = data.filter(
        (item: any) => item.value === props.projectTechStack[0]
    );

    const langStyle = {
        backgroundColor: iconShow[0].value === "react" ? "#86e1f9" : "#81D5AF", // Customize the background color based on the iconColor prop
    };
    const IconComponent = getIconComponent(iconShow[0].value);

    return (
        <div className={styles.lang} style={langStyle}>
            {IconComponent && (
                <IconComponent size={22} style={{ color: "black" }} />
            )}
        </div>
    );
};

export default Lang;
