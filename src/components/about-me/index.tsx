import { Section, SectionParagraph, SectionTitle, SubSections } from "../ui/section"
import { PersonalInfos } from "./personal-infos"
import { Skills } from "./skills"

export const AboutMe = () => {
    return (
        <Section id="about-me">
            <SectionTitle>About Me</SectionTitle>
            <SectionParagraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt ea sit fuga, natus tenetur accusamus ut culpa dignissimos ipsum, autem asperiores perferendis reprehenderit minima vel iusto reiciendis nisi praesentium! Doloremque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore officia consequuntur nihil maxime hic vitae quae, numquam eius quidem consequatur a ullam sint amet voluptatibus voluptatem harum odit libero! Sint?
            </SectionParagraph>
            <SubSections>
                <PersonalInfos />
                <Skills />
            </SubSections>
        </Section>
    )
}