"use client";

import { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { defaultTheme } from "./default";

export const ThemeProvider = ({ children }: {
    children: ReactNode
}) => {
    return (
        <StyledThemeProvider theme={defaultTheme}>
            {children}
        </StyledThemeProvider>
    )
}