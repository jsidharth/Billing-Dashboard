import React from "react";
import { Route, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import MonthlyDetail from "./components/MonthlyDetail";
import Billing from "./components/Billing";
import Account from "./components/Account";
import Payment from "./components/Payment";

const Routes = () => {
  return (
    <main class="col bg-faded py-3 flex-grow-1">
      <Route exact path="/billing" component={Billing} />
      <Route exact path="/datausage" component={Dashboard} />
      <Route exact path="/data/month/:monthidx" component={MonthlyDetail} />
      <Route exact path="/account" component={Account} />
      <Route exact path="/payment" component={Payment} />
      <Redirect exact path="/" to="/billing"/>
    </main>
  );
};

export default Routes;
