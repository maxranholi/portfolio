import React from "react"
import { MainContainerProjects, Tittle, CardProject, Cards, CommingSoonCard, LinkImage, GitHubLinkImage , Images} from "./ProjectsStyled"
import Link from "../../../Assets/link.svg"
import GithubLink from "../../../Assets/githubLink.svg"

const ProjectPage = () => {
    return (
        <div id="projetos">
            <MainContainerProjects>
                <Tittle>Projetos</Tittle>
                <Cards>
                    <CardProject>
                        <CommingSoonCard><h4>Em breve, novidades!</h4></CommingSoonCard>
                        <h3>Nome do projeto</h3>
                        <h4>Explicação do projeto</h4>
                        <h5>Tecnologias usadas: </h5>
                        <Images>
                            <LinkImage src={Link} />
                            <GitHubLinkImage src={GithubLink} />
                        </Images>
                    </CardProject>
                    <CardProject>
                        <CommingSoonCard><h4>Em breve, novidades!</h4></CommingSoonCard>
                        <h3>Nome do projeto</h3>
                        <h4>Explicação do projeto</h4>
                        <h5>Tecnologias usadas: </h5>
                        <Images>
                            <LinkImage src={Link} />
                            <GitHubLinkImage src={GithubLink} />
                        </Images>
                    </CardProject>
                    <CardProject>
                        <CommingSoonCard><h4>Em breve, novidades!</h4></CommingSoonCard>
                        <h3>Nome do projeto</h3>
                        <h4>Explicação do projeto</h4>
                        <h5>Tecnologias usadas: </h5>
                        <Images>
                            <LinkImage src={Link} />
                            <GitHubLinkImage src={GithubLink} />
                        </Images>
                    </CardProject>
                    <CardProject>
                        <CommingSoonCard><h4>Em breve, novidades!</h4></CommingSoonCard>
                        <h3>Nome do projeto</h3>
                        <h4>Explicação do projeto</h4>
                        <h5>Tecnologias usadas: </h5>
                        <Images>
                            <LinkImage src={Link} />
                            <GitHubLinkImage src={GithubLink} />
                        </Images>
                    </CardProject>
                </Cards>
            </MainContainerProjects>
        </div>
    )
}

export default ProjectPage