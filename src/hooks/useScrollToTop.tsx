import { useState, useEffect } from "react";

export function useScrollToTop () {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return {
        showScrollButton,
        scrollToTop,
    };
}