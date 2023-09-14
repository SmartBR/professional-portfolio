"use client";

import styled from "styled-components";

export const Section = styled.section``

export const SectionTitle = styled.h1`
    position: relative;
    font-size: 3rem;
    padding-left: 1.7rem;
    margin-bottom: 17px;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.primary};
    }

    @media screen and (max-width: 1200px) {
        font-size: 1.8rem;
    }
`

export const SectionParagraph = styled.p`
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: 1.2rem;
`

export const SubSections = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;

    & > div:not(:last-child) {
        padding-bottom: 2rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.separator};
    }
`

export const SubSectionTitle = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 15px;
`