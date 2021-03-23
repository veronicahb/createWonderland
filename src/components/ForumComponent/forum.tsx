import GlobalStyle from "styles/GlobalStyle"
import {Link} from "react-router-dom";
import {
    Body, Divbusca, Header, Nave, Naveul, Naveula, Section, Txtbusca, Divsec, P, Imgbusca
} from "styles/ForumStyle"

export default function Inicio(){
    return (
        <>
            <GlobalStyle/>
            <Body>
                <Header>
                    <img
                        src="img/direito.png"
                        alt="direito"
                        width={281}
                        height={174}
                    />
                    <img
                        src="img/logooo.png"
                        alt="logo"
                        width={621}
                        height={198}
                    />
                    <img
                        src="img/esquerdo.png"
                        alt="esquerdo"
                        width={281}
                        height={174}
                    />
                </Header>
                <Nave>
                    <Naveul>
                        <Naveula>
                            <Link to="/">Início</Link>
                            <Link to="/forum">Fórum</Link>
                            <Link to="/produtos">Produtos</Link>
                            <Link to="/quizzes">Quizzes</Link>
                            <Link to="/login">Login</Link>
                        </Naveula>
                    </Naveul>
                    <Divbusca>
                        <Txtbusca type="text" placeholder="Pesquisar"/>
                        <Imgbusca
                            src="img/pesquisa.png"
                            alt="pesquisa"
                            width={45}
                            height={45}
                        />
                    </Divbusca>
                </Nave>
                <Section>
                    <Divsec>
                        <img
                            src="img/alice.png"
                            alt="alice"
                            width={173}
                            height={165}
                        />
                        <P>Alice Kingsleigh</P>
                    </Divsec>
                    <Divsec>
                        <img
                            src="img/chapeleiro.png"
                            alt="chapeleiro"
                            width={173}
                            height={165}
                        />
                        <P>Chapeleiro Maluco</P>
                    </Divsec>
                    <Divsec>
                        <img
                            src="img/rainha branca.png"
                            alt="rainha branca"
                            width={173}
                            height={165}
                        />
                        <P>Rainha Branca</P>
                    </Divsec>
                    <Divsec>
                        <img
                            src="img/rainha vermelha.png"
                            alt="rainha vermelha"
                            width={173}
                            height={165}
                        />
                        <P>Rainha Vermelha</P>
                    </Divsec>
                    <Divsec>
                        <img
                            src="img/jaguadarte.png"
                            alt="jaguadarte"
                            width={173}
                            height={165}
                        />
                        <P>Jaguadarte</P>
                    </Divsec>
                    <Divsec >
                        <img
                            src="img/absolem.png"
                            alt="absolem"
                            width={173}
                            height={165}
                        />
                        <P>Absolem</P>
                    </Divsec>
                </Section>
            </Body>
        </>
    )
}