import {BrowserRouter} from "react-router-dom";
import GlobalStyled from "styles/GlobalStyle";
import Routes from "router/Routes";

const App = ()=>{
  return(
    <BrowserRouter>
      <Routes/>
      <GlobalStyled/>
    </BrowserRouter>         
  )
}

export default App;
