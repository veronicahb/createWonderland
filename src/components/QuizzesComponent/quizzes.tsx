import GlobalStyle from "styles/GlobalStyle"
import {Link} from "react-router-dom";
import {
    Body, Divbusca, Header, Nave, Naveul, Naveula, Section, Txtbusca, Divsec, Imgbusca
} from "styles/QuizzesStyle"

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
                            src="img/qual personagem.jpg"
                            alt="qual personagem"
                            width={493}
                            height={277}
                        />
                        <div>Descubra qual personagem você seria.</div>
                    </Divsec>
                    <Divsec>
                        <img
                            src="img/reino.jpg"
                            alt="reino"
                            width={493}
                            height={277}
                        />
                        <div>Descubra a qual reino você serviria.</div>
                    </Divsec>
                    <Divsec>
                        <img
                            src="img/qual chapeu.jpg"
                            alt="qual chapeu"
                            width={493}
                            height={277}
                        />
                        <div>Descubra qual chapéu o Chapeleiro faria para você.</div>
                    </Divsec>
                    <Divsec>
                        <img
                            src="img/disse a frase.jpg"
                            alt="disse a frase"
                            width={493}
                            height={277}
                        />
                        <div>Você sabe qual personagem disse essa frase?</div>
                    </Divsec>
                </Section>
            </Body>
        </>
    )
}