import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Hamburger.css"; // Import your CSS styles
import { NavItems } from "@/constant";
import { usePathname } from "next/navigation";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const [isScrolled, setIsScrolled] = useState(false);
    const location = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setIsScrolled(window.scrollY > 10);
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    const handleActiveLocation = (itemHref: string) => {
        return location === itemHref
            ? "text-black font-extrabold"
            : "text-white font-medium";
    };

    const menuVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.2,
                ease: "easeIn",
                type: "spring",
                damping: 10,
                stiffness: 50,
            },
        },
        exit: {
            opacity: 0,
            x: 100,
            transition: {
                duration: 0.2,
                ease: "easeIn",
                type: "spring",
                damping: 10,
                stiffness: 50,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
    };

    return (
        <div>
            {/* Hamburger Icon */}
            <div
                className="hamburger-container relative"
                onClick={toggleMenu}
            >
                <svg
                    className={`hamburger ${isOpen ? "open" : ""}`}
                    width="55"
                    height="50"
                    viewBox="0 0 100 100"
                >
                    <line
                        className="line top"
                        x1="20"
                        y1="30"
                        x2="80"
                        y2="30"
                    />
                    <line
                        className="line middle"
                        x1="20"
                        y1="50"
                        x2="80"
                        y2="50"
                    />
                    <line
                        className="line bottom"
                        x1="20"
                        y1="70"
                        x2="80"
                        y2="70"
                    />
                </svg>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className={`fixed z-50 h-[40vh] w-screen top-20 left-0 px-10 py-5  bg-black   shadow-md text-white  z-50 transition-all backdrop-blur-lg`}
                    >
                        <motion.ul>
                            {NavItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="list-none mt-5 p-2"
                                >
                                    <a
                                        href={item.href}
                                        className={`${handleActiveLocation(
                                            item.href
                                        )} block`}
                                    >
                                        {item.title.toUpperCase()}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HamburgerMenu;
