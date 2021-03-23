import React from "react";
import {Switch, Route} from "react-router-dom";
import index from "pages/index/index";
import cadastrar from "pages/cadastrar/cadastrar";
import produtos from "pages/produtos/produtos";
import login from "pages/login/login";
import quizzes from "pages/quizzes/quizzes";
import forum from "pages/forum/forum";

const Routes =()=>{
    return(
        <Switch>
            <Route exact path="/" component={index}/>
            <Route exact path="/login" component={login}/>
            <Route exact path="/forum" component={forum}/>
            <Route exact path="/cadastrar" component={cadastrar}/>
            <Route exact path="/produtos" component={produtos}/>
            <Route exact path="/quizzes" component={quizzes}/>
        </Switch>
    );
};

export default Routes;

