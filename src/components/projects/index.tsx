import { Section, SectionTitle } from "../ui/section";
import { Container, Project, ProjectHover, ProjectName } from "./styles";
import { AiFillEye } from "react-icons/ai";
import Image from "next/image";
import NetflixCloneImage from "@/../public/images/netflix-clone.jpg";
import SpotifyCloneImage from "@/../public/images/spotify-clone.jpg";
import YoutubeCloneImage from "@/../public/images/youtube-clone.png";
import TwitterCloneImage from "@/../public/images/twitter-clone.jpg";

export const Projects = () => {
    return (
        <Section id="projects">
            <SectionTitle>Projects</SectionTitle>
            <Container>
                <Project>
                    <a href="https://example-project.com" target="_blank">
                        <Image
                            src={NetflixCloneImage}
                            alt="Netflix Clone"
                            width={500}
                            height={500}
                        />
                        <ProjectName>Netflix Clone</ProjectName>
                        <ProjectHover>
                            <AiFillEye />
                        </ProjectHover>
                    </a>
                </Project>
                <Project>
                    <a href="https://example-project.com" target="_blank">
                        <Image
                            src={SpotifyCloneImage}
                            alt="Spotify Clone"
                            width={500}
                            height={500}
                        />
                        <ProjectName>Spotify Clone</ProjectName>
                        <ProjectHover>
                            <AiFillEye />
                        </ProjectHover>
                    </a>
                </Project>
                <Project>
                    <a href="https://example-project.com" target="_blank">
                        <Image
                            src={YoutubeCloneImage}
                            alt="Youtube Clone"
                            width={500}
                            height={500}
                        />
                        <ProjectName>Youtube Clone</ProjectName>
                        <ProjectHover>
                            <AiFillEye />
                        </ProjectHover>
                    </a>
                </Project>
                <Project>
                    <a href="https://example-project.com" target="_blank">
                        <Image
                            src={TwitterCloneImage}
                            alt="Twitter Clone"
                            width={500}
                            height={500}
                        />
                        <ProjectName>Twitter Clone</ProjectName>
                        <ProjectHover>
                            <AiFillEye />
                        </ProjectHover>
                    </a>
                </Project>
            </Container>
        </Section>
    )
}