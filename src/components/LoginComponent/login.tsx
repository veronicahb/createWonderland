import GlobalStyle from "styles/GlobalStyle"
import {Link} from "react-router-dom";
import {
    Divbusca, Header, Nave, Naveul, Naveula, Txtbusca, Body, Entrar, Form, Iv, Imgbusca
} from "styles/LoginStyle"

export default function Login(){
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
                    <Form action="/" method="get">
                        <div><label>EMAIL:</label></div>
                        <input type="email" placeholder="EMAIL"/>
                        <div><label>SENHA:</label></div>
                        <input type="password" placeholder="SENHA"/>
                        <div><input type="submit" value="ENTRAR"/></div>
                    </Form>
                    <Entrar>
                        <p>NÃO POSSUI UMA CONTA?</p> 
                        <Naveula><Link to="/cadastrar">CADASTRAR</Link></Naveula>
                    </Entrar>
                    <Iv>a</Iv>
                </section>
            </Body>
        </>
    )
}