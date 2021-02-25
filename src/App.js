import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Sidebar from "./components/Sidebar";
import { motion } from "framer-motion";
function App() {
  const { sidebar } = useSelector(selectUser);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
    transition: { type: "spring", duration: 1.5 },
  };
  return (
    <Router>
      <Header />
      <AppBody>
        <Switch>
          <SidebarContainer
            animate={sidebar ? "open" : "closed"}
            variants={variants}
          >
            <Sidebar />
          </SidebarContainer>
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

const SidebarContainer = styled(motion.div)`
  background-color: var(--slack-color);
  height: 100%;
  flex: 0.2;
  display: flex;
  @media (max-width: 700px) {
    flex: 1;
  }
`;
