import { Button, ButtonIcon, ButtonText, Container, Input, InputGroup, TextArea } from "./styles";
import { BsFillSendCheckFill } from "react-icons/bs";

export const Form = () => {
    return (
        <Container>
            <InputGroup>
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input placeholder="Your Subject" />
            </InputGroup>
            <TextArea
                rows={6}
                placeholder="Your Message"
            />
            <Button>
                <ButtonText>Send Message</ButtonText>
                <ButtonIcon>
                    <BsFillSendCheckFill />
                </ButtonIcon>
            </Button>
        </Container>
    )
}