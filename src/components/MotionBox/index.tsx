import { motion, MotionProps } from "framer-motion";

interface MotionBoxProps extends MotionProps {
    children: React.ReactNode;
}

const MotionBox: React.FC<MotionBoxProps> = ({ children, ...rest }) => {
    if (children)
        return (
            <motion.div
                initial="hidden"
                animate="visible"
                exit="go"
                variants={{
                    hidden: {
                        y: "-20px",
                        opacity: 0,
                    },
                    visible: {
                        y: "0",
                        opacity: 1,
                        transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                        },
                    },
                    go: {
                        y: "-20px",
                        opacity: 0,
                        transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                        },
                    },
                }}
            >
                {children}
            </motion.div>
        );
    else {
        return (
            <motion.div
                initial="hidden"
                animate="visible"
                exit="go"
                variants={{
                    hidden: {
                        y: "-20px",
                        opacity: 0,
                    },
                    visible: {
                        y: "0",
                        opacity: 1,
                        transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                        },
                    },
                    go: {
                        y: "-20px",
                        opacity: 0,
                        transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                        },
                    },
                }}
            ></motion.div>
        );
    }
};
export default MotionBox;
