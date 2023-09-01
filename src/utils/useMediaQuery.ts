import { useState, useEffect } from "react";

export function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = () => {
            setMatches(media.matches);
        };

        if (typeof media.addEventListener === "function") {
            media.addEventListener("change", listener);
        } else {
            media.addListener(listener);
        }

        return () => {
            if (typeof media.removeEventListener === "function") {
                media.removeEventListener("change", listener);
            } else {
                media.removeListener(listener);
            }
        };
    }, [matches, query]);

    return matches;
}

export const useIsSmall = () => useMediaQuery("(max-width: 480px)");
export const useIsMedium = () => useMediaQuery("(max-width: 768px)");
export const useIsResponsive = () => useMediaQuery("(max-width: 890px)");
