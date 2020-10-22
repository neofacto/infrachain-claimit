import React from "react";
import { Switch, Route } from "react-router-dom";

import ClaimITComponent from "../components/ClaimITComponent";
import ClaimITContainer from "../containers/ClaimITContainer";

import OnBoardingComponent from "../components/OnBoardingComponent";
import OnBoardingContainer from "../containers/OnBoardingContainer";

import Error from "../components/Error";

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={(props) => (
        <OnBoardingContainer {...props} Layout={OnBoardingComponent} />
      )}
    />
    <Route
      exact
      path="/process"
      render={(props) => (
        <ClaimITContainer {...props} Layout={ClaimITComponent} />
      )}
    />
    <Route
      render={(props) => (
        <Error
          {...props}
          title="404"
          content="Sorry, the route you requested does not exist"
        />
      )}
    />
  </Switch>
);

export default Index;
