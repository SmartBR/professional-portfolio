"use client";

import { rgba } from "polished";
import styled from "styled-components";

const BORDER_RADIUS = "10px";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    gap: 1rem;

    @media screen and (max-width: 1200px) {
        flex-direction: column;
        width: 100%;
    }
`

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 370px;
    height: 35px;
    border: 1px solid ${({ theme }) => rgba(theme.colors.primary, 0.7)};
    border-radius: ${BORDER_RADIUS};

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const InfoName = styled.span`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;

    color: black;
    background-color: ${({ theme }) => rgba(theme.colors.primary, 0.7)};
    border-top-left-radius: ${BORDER_RADIUS};
    border-bottom-left-radius: ${BORDER_RADIUS};
    width: 50%;
    height: 100%;

    font-weight: 500;
`

export const InfoValue = styled.span`
    padding: 0 10px;
`