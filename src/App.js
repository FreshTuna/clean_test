import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App({ props }) {
    const location = useLocation();
  return (
      <TransitionGroup>
          <CSSTransition
              timeout={{enter:200}}
              classNames={'fade'}
              key={location.key}
          >
             <Switch>
                <Route exact path={"/"} render={ props => <LandingPage />} ></Route>
                <Route exact path={"/quiz"} render={ props => <QuizPage />} ></Route>
                <Route exact path={"/result/:id"} render={(props) => <ResultPage props={props} {...props} />} ></Route>
             </Switch>
          </CSSTransition>
      </TransitionGroup>
  );
}

export default App;
