"use client";

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;

    & a {
        color: ${({ theme }) => theme.colors.lightGrey};
        font-weight: 500;
        transition: color 0.4s ease;
        font-size: 1.1rem;
        cursor: pointer;

        &:hover {
            color: ${({ theme }) => theme.colors.primary};
        }

        &.active {
            color: ${({ theme }) => theme.colors.primary};
            font-weight: 700;
        }
    }
`