import GlobalStyle from "styles/GlobalStyle"
import {Link} from "react-router-dom";
import {
    Body, Divbusca, Header, Nave, Naveul, Naveula, Section, Txtbusca, Divsec, Imgbusca
} from "styles/ProdutosStyle"

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
                            src="img/eat me.png"
                            alt="coma me"
                            width={193}
                            height={181}
                        />
                        <div >Coma-me</div>
                        <p>Fora de estoque por que a Alice entra em muitos lugares pequenos.</p>
                    </Divsec>
                    <Divsec>
                        <img
                            src="img/drink me.png"
                            alt="beba me"
                            width={193}
                            height={181}
                        />
                        <div>Beba-me</div>
                        <p>Fora de estoque por que a Lebre achou que era chá.</p>
                    </Divsec>
                    <Divsec>
                        <img
                            src="img/cartola.png"
                            alt="cartola"
                            width={193}
                            height={181}
                        />
                        <div>Cartola do Chapeleiro</div>
                        <p>Fora de estoque por que o Chapeiro não quer mais vender copias.</p>
                    </Divsec>
                    <Divsec>
                        <img
                            src="img/relogioo.png"
                            alt="relogio"
                            width={193}
                            height={181}
                        />
                        <div>Relógio do Coelho</div>
                        <p>Fora de estoque por que o Coelho distribuiu para todo mundo não se atrasar.</p>
                    </Divsec>
                    <Divsec>
                        <img
                            src="img/porquinho.png"
                            alt="porquinho"
                            width={193}
                            height={181}
                        />
                        <div>Porquinho esquenta pé</div>
                        <p>Fora de estoque por que a Rainha Vermelha ordenou.</p>
                    </Divsec>
                    <Divsec>
                        <img
                            src="img/xicara.png"
                            alt="xicara"
                            width={193}
                            height={181}
                        />
                        <div>Louça de chá</div>
                        <p>Fora de estoque por que a Lebre quebrou todas.</p>
                    </Divsec>
                </Section>
            </Body>
        </>
    )
}