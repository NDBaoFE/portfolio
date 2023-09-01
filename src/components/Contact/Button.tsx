import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faRefresh } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

interface Props {
    onClick?: () => void;
    form: any;
}

const SendButton: React.FC<Props> = ({ onClick, form }) => {
    const [active, setActive] = useState<boolean>(false);
    const [finished, setFinished] = useState<boolean>(false);

    const handleButtonClick = () => {
        setActive(true);
        setTimeout(() => {
            setActive(false);
            setFinished(true);
            form.submit();
        }, 2000); // Simulate a 2-second delay before setting finished to true
        setTimeout(() => {
            setFinished(false);
        }, 4000); // Simulate a 2-second delay before setting finished to true
    };

    return (
        <>
            <button
                className={classNames("button", {
                    active: active,
                    finished: finished,
                })}
                onClick={handleButtonClick}
                disabled={active}
            >
                <span className="submit">Send</span>
                <span className="loading">
                    <FontAwesomeIcon icon={faRefresh} />
                </span>
                <span className="check">
                    <FontAwesomeIcon icon={faCheck} />
                </span>
            </button>
        </>
    );
};

export default SendButton;
