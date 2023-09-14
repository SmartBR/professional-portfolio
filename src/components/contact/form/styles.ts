"use client";

import styled from "styled-components";

const BUTTON_HEIGHT = "45px";
const BUTTON_BORDER_RADIUS = "30px";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 720px;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const InputGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    gap: 1rem;

    @media screen and (max-width: 1200px) {
        flex-direction: column;

        & input {
            width: 100%;
        }
    }
`

export const Input = styled.input`
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.backgroundTwo};
    border-radius: 20px;
    padding: 17px 20px;
    font-size: 1rem;
    color: white;

    &::placeholder {
        color: ${({ theme }) => theme.colors.lightGrey};
    }
`

export const TextArea = styled.textarea`
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.backgroundTwo};
    border-radius: 20px;
    padding: 17px 20px;
    font-size: 1rem;
    color: white;

    &::placeholder {
        color: ${({ theme }) => theme.colors.lightGrey};
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