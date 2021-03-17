import { useMediaQuery } from "@material-ui/core";
import { InfoOutlined, StarOutline } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUser } from "../features/userSlice";
import ChatInput from "./ChatInput";

function Chat() {
  const { sidebar } = useSelector(selectUser);
  const matches = useMediaQuery("(min-width:700px)");
  const ChatContainer = styled.div`
    flex: 1;
    margin-left: 10px;
    @media (max-width: 700px) {
      display: ${sidebar ? "none" : "flex"};
    }
  `;
  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <strong>
            <h4>#Room-name</h4>
          </strong>
          <StarOutline />
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoOutlined /> Details
          </p>
        </HeaderRight>
      </Header>
      <ChatMessages></ChatMessages>
      {matches ? (
        <ChatInputContainer>
          <ChatInput />
        </ChatInputContainer>
      ) : (
        <ChatInput />
      )}
    </ChatContainer>
  );
}

export default Chat;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  @media (max-width: 700px) {
    width: 100%;
    margin: 0 5px;
  }
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > strong > h4 {
    text-transform: lowercase;
    margin-right: 10px;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
  }
  > p > .MuiSvgIcon-root {
    margin-right: 5px;
    font-size: 16px;
  }
`;

const ChatMessages = styled.div``;

const ChatInputContainer = styled.div`
  @media (min-width: 700px) {
    margin: 20px;
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;
