"use client";

import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 60px 160px;
    grid-template-columns: repeat(auto-fit, minmax(115px, 1fr));
    place-items: center;

    @media screen and (max-width: 1200px) {
        grid-gap: 70px;
    }
`

export const Skill = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    width: 115px;
`

export const SkillProgress = styled.div<{ $percent: number }>`
    
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 115px;
    padding: 20px;
    border-radius: 50%;
    background: ${({ theme, $percent}) => `conic-gradient(
        ${theme.colors.primary} ${$percent / 100 * 360}deg, 
        ${theme.colors.backgroundThree} 0deg
    )`};

    &:before {
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.background};
    }
`

export const SkillProgressText = styled.span`
    font-size: 1.2rem;
    font-weight: 500;
    z-index: 1;
`

export const SkillName = styled.span`
    font-size: 1rem;
    text-transform: uppercase;
`