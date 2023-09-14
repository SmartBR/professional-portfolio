import { SubSectionTitle } from "@/components/ui/section"
import { Container, Skill, SkillName, SkillProgress, SkillProgressText } from "./styles"

export const Skills = () => {
    return (
        <div>
            <SubSectionTitle>My Skills</SubSectionTitle>
            <Container>
                <Skill>
                    <SkillProgress $percent={50}>
                        <SkillProgressText>25%</SkillProgressText>
                    </SkillProgress>
                    <SkillName>HTML</SkillName>
                </Skill>
                <Skill>
                    <SkillProgress $percent={87}>
                        <SkillProgressText>87%</SkillProgressText>
                    </SkillProgress>
                    <SkillName>JavaScript</SkillName>
                </Skill>
                <Skill>
                    <SkillProgress $percent={90}>
                        <SkillProgressText>90%</SkillProgressText>
                    </SkillProgress>
                    <SkillName>CSS</SkillName>
                </Skill>
                <Skill>
                    <SkillProgress $percent={95}>
                        <SkillProgressText>95%</SkillProgressText>
                    </SkillProgress>
                    <SkillName>React</SkillName>
                </Skill>
                <Skill>
                    <SkillProgress $percent={60}>
                        <SkillProgressText>60%</SkillProgressText>
                    </SkillProgress>
                    <SkillName>PHP</SkillName>
                </Skill>
                <Skill>
                    <SkillProgress $percent={92}>
                        <SkillProgressText>92%</SkillProgressText>
                    </SkillProgress>
                    <SkillName>WorldPress</SkillName>
                </Skill>
                <Skill>
                    <SkillProgress $percent={92}>
                        <SkillProgressText>92%</SkillProgressText>
                    </SkillProgress>
                    <SkillName>JQuery</SkillName>
                </Skill>
                <Skill>
                    <SkillProgress $percent={60}>
                        <SkillProgressText>60%</SkillProgressText>
                    </SkillProgress>
                    <SkillName>Angular</SkillName>
                </Skill>
            </Container>
        </div>
    )

}