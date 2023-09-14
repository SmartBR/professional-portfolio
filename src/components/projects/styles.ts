"use client";

import styled from "styled-components";

const BORDER_RADIUS = "15px";

export const Container = styled.div`
    display: grid;
    grid-gap: 2rem 0;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
`

export const Project = styled.div`
    position: relative;
    cursor: pointer;
    width: 380px;
    height: 200px;
    overflow: hidden;
    border-radius: ${BORDER_RADIUS};

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
    }

    &:hover img {
        object-fit: cover;
        transform: scale(1.1);
    }

    & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        aspect-ratio: 16/9;
        border-radius: ${BORDER_RADIUS};
        transition: transform 0.5s ease;
    }

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const ProjectName = styled.span`
    position: absolute;
    left: 20px;
    bottom: 20px;

    font-size: 1.1rem;
    font-weight: 500;
`

export const ProjectHover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    display: flex;
    opacity: 0;
    align-items: center;
    justify-content: center;
    
    transition: opacity 0.4s ease-in-out;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: ${BORDER_RADIUS};

    ${Project}:hover && {
        opacity: 1;
    }

    & svg {
        font-size: 2.2rem;
        fill: ${({ theme }) => theme.colors.lightGrey};
    }
`