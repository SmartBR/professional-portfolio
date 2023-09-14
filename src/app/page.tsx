import { Header } from "@/components/header";
import { Content, Page, Scrollable } from "./styles";
import { Main } from "@/components/main";
import { GlobalStatistics } from "@/components/global-statistics";
import { AboutMe } from "@/components/about-me";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <Page>
      <Header />
      <Scrollable>
        <Content>
          <Main />
          <GlobalStatistics />
          <AboutMe />
          <Projects />
          <Contact />
        </Content>
      </Scrollable>
    </Page>
  )
}
