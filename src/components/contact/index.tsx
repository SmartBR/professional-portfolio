import { Section, SectionTitle } from "../ui/section";
import { Form } from "./form";
import { Container, Info, ContactComponent, SocialNetworks } from "./styles";
import { AiFillMail } from "react-icons/ai";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";

export const Contact = () => {
    return (
        <Section id="contact">
            <SectionTitle>Contact me</SectionTitle>
            <Container>
                <Info>
                    <h1>DON'T BE SHY !</h1>
                    <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <ContactComponent>
                        <AiFillMail />
                        <div>
                            <span>Mail Me</span>
                            <span>jobs@example.com</span>
                        </div>
                    </ContactComponent>
                    <ContactComponent>
                        <FaPhoneSquareAlt />
                        <div>
                            <span>Call Me</span>
                            <span>(507) 238-8500</span>
                        </div>
                    </ContactComponent>
                    <SocialNetworks>
                        <a href="https://twitter.com" target="_blank">
                            <AiOutlineTwitter />
                        </a>
                        <a href="https://fb.com" target="_blank">
                            <BiLogoFacebook />
                        </a>
                        <a href="https://youtube.com" target="_blank">
                            <AiFillYoutube />
                        </a>
                        <a href="https://linkedin.com" target="_blank">
                            <BiLogoLinkedin />
                        </a>
                    </SocialNetworks>
                </Info>
                <Form />
            </Container>
        </Section>
    )
}