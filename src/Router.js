import React from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";

import Header from "./containers/Header";
import Footer from "./containers/Footer";

import MainPage from "./pages/Main";

import Menu from "./UI/Menu";
const JobsPage = ({ Link }) => (
  <>
    Jobs<Link to="/freelansers">Go to Freelansers</Link>
  </>
);
const FreelansersPage = ({ Link }) => (
  <>
    Freelansers<Link to="/">Go to Reports</Link>
  </>
);
const ReportsPage = ({ Link }) => (
  <>
    Reports<Link to="/freelansers">Go to Main</Link>
  </>
);
export default class Router extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Header Link={Link} />
        <Switch>
          <Route exact path="/" component={() => <MainPage Link={Link} />} />
          <Route
            exact
            path="/jobs"
            component={() => <JobsPage Link={Link} />}
          />
          <Route
            exact
            path="/freelansers"
            component={() => <FreelansersPage Link={Link} />}
          />
          <Route
            exact
            path="/report"
            component={() => <ReportsPage Link={Link} />}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
