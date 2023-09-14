"use client";

import styled, { keyframes } from "styled-components";

const BUTTON_HEIGHT = "45px";
const BUTTON_BORDER_RADIUS = "30px";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4rem;
    gap: 1rem;

    @media screen and (max-width: 1200px) {
        flex-direction: column-reverse;
        margin-top: 0;
    }
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const PrimaryText = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    padding-left: 1rem;
    font-size: 1.85rem;
    
    & svg {
        fill: ${({ theme }) => theme.colors.primary};
    }

    &:before {
        content: "";
        position: absolute;
        left: 0;
        width: 5px;
        height: 100%;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.colors.primary};
    }

    @media screen and (max-width: 1200px) {
        font-size: 1.4rem;
    }
`

export const WhiteText = styled.span`
    position: relative;
    font-size: 6rem;
    color: white;
    font-weight: 700;

    &:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;

        width: 100%;
        height: 5px;
        border-radius: 10px;

        background-color: ${({ theme }) => theme.colors.separator};
    }

    @media screen and (max-width: 1200px) {
        font-size: 4rem;
    }
`

export const JobText = styled.span`
    font-size: 2.5rem;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgba(255, 255, 255, 0.9);
    
    font-weight: 700;
    color: transparent;

    @media screen and (max-width: 1200px) {
        font-size: 1.7rem;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: none;
    outline: none;
    border-radius: ${BUTTON_BORDER_RADIUS};

    width: 250px;
    height: ${BUTTON_HEIGHT};
    cursor: pointer;
    transition: background-color 0.5s ease-in-out;
    
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primary};

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
    }

    &:active {
        position: relative;
        top: 1px;
    }
`

export const ButtonText = styled.span`
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 10px 30px;

    @media screen and (max-width: 1200px) {
        font-size: 0.9rem;
    }
`

export const ButtonIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${BUTTON_HEIGHT};
    height: 100%;
    border-radius: ${BUTTON_BORDER_RADIUS};
    background-color: ${({ theme }) => theme.colors.primary};

    & svg {
        transition: fill 0.4s ease;
        font-size: 1.2rem;
        fill: ${({ theme }) => theme.colors.background};

        ${Button}:hover & {
            fill: white;
        }
    }
`

export const ImageContainer = styled.div`
    width: auto;
    height: 550px;

    & img {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 1200px) {
        height: 310px;
    }
`

export const Contacts = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    margin-top: 2rem;
`

export const Contact = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.lightGrey};

    & svg {
        font-size: 1.3rem;
        fill: ${({ theme }) => theme.colors.primary};
    }

    @media screen and (max-width: 1200px) {
        font-size: 1rem;
    }
`