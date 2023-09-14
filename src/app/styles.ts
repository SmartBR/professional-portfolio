"use client";

import styled from "styled-components";

export const Page = styled.div`
    position: absolute;
    top: ${({ theme }) => theme.variables.headerHeight};
    left: 0;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 1200px) {
        top: 0;
    }

    
`

export const Scrollable = styled.div`
    overflow-y: auto;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 6rem;
    padding: 0 ${({ theme }) => theme.variables.horizontalSpacing};
    padding-bottom: 5vw;
    background-color: ${({ theme }) => theme.colors.background};

    @media screen and (max-width: 1200px) {
        padding: 5vw 0.5rem;
    }
`