"use client";

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10rem;

    @media screen and (max-width: 1200px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 350px;

    & p {
        color: ${({ theme }) => theme.colors.lightGrey};
    }
`

export const ContactComponent = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 40px;

    & > div {
        display: flex;
        flex-direction: column;
        height: 100%;

        & span:first-child {
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.lightGrey};
        }

        & span:last-child {
            font-weight: 500;
        }
    }

    & svg {
        fill: ${({ theme }) => theme.colors.primary};
        width: auto;
        height: 100%;
    }
`

export const SocialNetworks = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    & a {
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${({ theme }) => theme.colors.backgroundThree};
        padding: 10px;
        border-radius: 50%;

        & svg {
            transition: fill 0.4s ease;
            font-size: 1.3rem;
        }

        &:hover > svg {
            fill: ${({ theme }) => theme.colors.primary};
        }
    }
`