import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Sidebar from "./components/Sidebar";
function App() {
  const { sidebar } = useSelector(selectUser);
  return (
    <Router>
      <Header />
      <AppBody>
        <Switch>
          {sidebar ? <Sidebar /> : ""}
          <Route exact path="/"></Route>
        </Switch>
      </AppBody>
    </Router>
  );
}

export default App;

const AppBody = styled.div`
  top: 60px;
  display: flex;
  height: 100vh;
  transition: all 500ms ease-in-out;
`;
