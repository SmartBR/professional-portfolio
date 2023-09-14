import { SubSectionTitle } from "@/components/ui/section";
import { Container, InfoColumn, InfoContainer, InfoName, InfoValue } from "./styles";

const Info = ({ name, value }: {
    name: string,
    value: string
}) => {
    return (
        <InfoContainer>
            <InfoName>{name}</InfoName>
            <InfoValue>{value}</InfoValue>
        </InfoContainer>
    )
}

export const PersonalInfos = () => {
    return (
        <div>
            <SubSectionTitle>Personal Infos</SubSectionTitle>
            <Container>
                <InfoColumn>
                    <Info name="Name" value="Emily Smith" />
                    <Info name="Age" value="22 years" />
                    <Info name="Nationality" value="American" />
                    <Info name="Freelance" value="Available" />
                </InfoColumn>
                <InfoColumn>
                    <Info name="Address" value="Brooklyn, New York" />
                    <Info name="Phone" value="+21621184010" />
                    <Info name="Email" value="jobs@example.com" />
                    <Info name="Langages" value="French, English" />
                </InfoColumn>
            </Container>
        </div>
    )
}