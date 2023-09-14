"use client";

import styled from "styled-components";
import { rgba } from "polished";

const BORDER_RADIUS = "15px";

export const Container = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    justify-content: space-between;

    background-color: ${({ theme }) => theme.colors.backgroundTwo};
    border-radius: ${BORDER_RADIUS};

    padding: 40px;

    &:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 7px;
        border-bottom-left-radius: ${BORDER_RADIUS};
        border-bottom-right-radius: ${BORDER_RADIUS};
        border-bottom: 7px solid ${({ theme }) => rgba(theme.colors.primary, 0.4)};
    }
`

export const Statistic = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
`

export const StatisticNumber = styled.h1`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
`

export const StatisticName = styled.span`
    text-transform: capitalize;
    font-size: 1.1rem;
`