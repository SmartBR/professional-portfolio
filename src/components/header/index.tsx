"use client";

import { Navigation } from "./navigation";
import { ContactButton, Container, Content, Logo } from "./styles";
import { scroller } from "react-scroll";
import Image from "next/image";
import LogoImage from "@/../public/images/logo.png";
import Link from "next/link";

export const Header = () => {
    return (
        <Container>
            <Content>
                <Logo>
                    <Link href="/">
                        <Image
                            src={LogoImage}
                            alt="logo"
                            width={150}
                            height={50}
                        />
                    </Link>
                </Logo>
                <Navigation />
                <ContactButton onClick={() => scroller.scrollTo("contact", {
                    duration: 900,
                    smooth: true,
                    offset: -100,
                })}>Contact</ContactButton>
            </Content>
        </Container>
    )
}