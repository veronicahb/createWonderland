import GlobalStyle from "styles/GlobalStyle"
import {Link} from "react-router-dom";
import {
    Divbusca, Header, Nave, Naveul, Naveula, Txtbusca, Body, Entrar, Form, Iv, Imgbusca 
} from "styles/CadastrarStyle"

export default function Cadastrar(){
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
                    <section>
                        <Form action="/login" method="get">
                            <div><label>NOME:</label></div>
                            <input type="text" placeholder="NOME"/>
                            <div><label>EMAIL:</label></div>
                            <input type="email" placeholder="EMAIL"/>
                            <div><label>SENHA:</label></div>
                            <input type="password" placeholder="SENHA"/>
                            <div><input type="submit" value="REGISTRAR-SE"/></div>
                        </Form>
                        <Entrar>
                            <p>JÁ POSSUI UMA CONTA?</p> 
                            <Naveula><Link to="/login">LOGIN</Link></Naveula>
                        </Entrar>
                        <Iv>a</Iv>
                    </section>
            </Body>
        </>
    )
}