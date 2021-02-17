import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import { AuthProvider } from "./auth/AuthProvider";
import Menu from "./components/Menu";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import IndividualPlan from "./components/IndividualPlan";
import ManagementPlan from "./components/ManagementPlan";
import MonthlyShift from "./components/MonthlyShift";
import PasswordChange from "./components/PasswordChange";
import UserManagement from "./components/UserManagement";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Menu} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/individualplan" component={IndividualPlan} />
          <Route exact path="/managementplan" component={ManagementPlan} />
          <Route exact path="/monthlyshift" component={MonthlyShift} />
          <Route exact path="/passwordchange" component={PasswordChange} />
          <Route exact path="/usermanagement" component={UserManagement} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;