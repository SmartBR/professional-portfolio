"use client";

import { createContext, useContext, ReactNode, useState, useEffect } from "react";

type Props = {
    isDesktopView: boolean;
}

const DesktopViewContext = createContext<Props>({
    isDesktopView: false
});

export function useDesktopView() {
    const context = useContext(DesktopViewContext);

    if (!context) {
        throw new Error("context must be DesktopViewContext");
    }

    return context;
}

export const DesktopViewProvider = ({ children }: {
    children: ReactNode
}) => {
    const [isDesktopView, setIsDesktopView] = useState(true);

    useEffect(() => {
        setIsDesktopView(window.innerWidth > 1200);

        const updateView = (event: UIEvent) => {
            const width = (event.currentTarget as Window).innerWidth
            setIsDesktopView(width > 1200)
        }

        window.addEventListener("resize", updateView);

        return () => window.removeEventListener("resize", updateView);
    }, []);

    return (
        <DesktopViewContext.Provider value={{ isDesktopView: isDesktopView }}>
            {children}
        </DesktopViewContext.Provider>
    )
}
