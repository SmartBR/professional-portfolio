"use client";

import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${({ theme }) => theme.variables.headerHeight};
    background-color: ${({ theme }) => theme.colors.background};
    z-index: 99;

    @media screen and (max-width: 1200px) {
        display: none;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 ${({ theme }) => theme.variables.horizontalSpacing};
`

export const Logo = styled.div`
    & img {
        width: auto;
        height: 45px;
    }
`

export const ContactButton = styled.button`
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    padding: 8px 15px;
    transition: opacity 0.4s ease;
    
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;

    &:active {
        position: relative;
        top: 1px;
    }

    &:hover {
        opacity: 0.85;
    }
`