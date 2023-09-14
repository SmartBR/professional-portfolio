"use client";

import { ReactNode } from "react";
import { StyledComponentsProvider } from "./styled-components";
import { ThemeProvider } from "./theme";
import { DesktopViewProvider } from "./desktop-view";

export const Contexts = ({ children }: {
    children: ReactNode
}) => {
    return (
        <StyledComponentsProvider>
            <ThemeProvider>
                <DesktopViewProvider>
                    {children}
                </DesktopViewProvider>
            </ThemeProvider>
        </StyledComponentsProvider>
    )
}