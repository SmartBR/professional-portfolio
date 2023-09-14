"use client";

import { Button, ButtonIcon, ButtonText, Contact, Contacts, Container, ImageContainer, JobText, Left, PrimaryText, WhiteText } from "./styles"
import { AiFillSmile, AiOutlineArrowDown, AiFillPhone, AiFillMail } from "react-icons/ai";
import { scroller } from "react-scroll";

import MainImage from "@/../public/images/main-image.png";
import Image from "next/image";

export const Main = () => {
    return (
        <Container id="main">
            <Left>
                <PrimaryText>
                    Hello
                    <AiFillSmile />
                </PrimaryText>
                <WhiteText>{"I'm Emily"}</WhiteText>
                <JobText>Web Designer</JobText>
                <Button onClick={() => scroller.scrollTo("about-me", {
                    duration: 900,
                    smooth: true,
                    offset: -100,
                })}>
                    <ButtonText>More About Me</ButtonText>
                    <ButtonIcon>
                        <AiOutlineArrowDown />
                    </ButtonIcon>
                </Button>
                <Contacts>
                    <Contact>
                        <AiFillPhone />
                        (507) 238-8500
                    </Contact>
                    <Contact>
                        <AiFillMail />
                        jobs@example.com
                    </Contact>
                </Contacts>
            </Left>
            <ImageContainer>
                <Image
                    src={MainImage}
                    alt="Main Image"
                    width={700}
                    height={700}
                />
            </ImageContainer>
        </Container >
    )
}