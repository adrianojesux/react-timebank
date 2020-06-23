import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "./components/Loading";

import GlobalStyles from "./styles/global";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

const Routes = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
