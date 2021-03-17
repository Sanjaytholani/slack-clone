import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Sidebar from "./components/Sidebar";
import { motion } from "framer-motion";
import Chat from "./components/Chat";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "./firebase";
function App() {
  const { sidebar } = useSelector(selectUser);
  const [channels, loading, error] = useCollection(
    db.collection("rooms").orderBy("name")
  );
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
    transition: { type: "spring", default: { duration: 1 } },
  };
  const SidebarContainer = styled(motion.div)`
    background-color: var(--slack-color);
    height: 100vh;
    flex: 0.2;
    display: ${sidebar ? "flex" : "none"};

    @media (max-width: 700px) {
      flex: 1;
    }
  `;
  const ChatContainer = styled.div`
    flex: ${sidebar ? 0.8 : 1};
    @media (max-width: 700px) {
      display: ${sidebar ? "none" : "block"};
    }
  `;

  return (
    <Router>
      <Header />
      <AppBody>
        <SidebarContainer
          animate={sidebar ? "open" : "closed"}
          variants={variants}
        >
          <Sidebar channels={channels} />
        </SidebarContainer>
        <Switch>
          <Route path="/">
            <ChatContainer>
              <Chat />
            </ChatContainer>
          </Route>
        </Switch>
      </AppBody>
    </Router>
  );
}

export default App;

const AppBody = styled.div`
  top: 60px;
  width: 100vw;
  display: flex;
  height: 100vh;
  transition: all 500ms ease-in-out;
`;
