import { IconButton } from "@material-ui/core";
import { SendSharp } from "@material-ui/icons";
import { useRef } from "react";
import styled from "styled-components";

const ChatInput = () => {
  const textRef = useRef(null);
  const handelSubmit = (e) => {
    e.preventDefault();
    textRef.current.value = "";
  };
  return (
    <ChatInputContainer>
      <input
        ref={textRef}
        type="text"
        spellcheck="true"
        placeholder="Enter any message "
      />
      <IconButton type="submit" onClick={handelSubmit}>
        <SendSharp />
      </IconButton>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.form`
  cursor: auto;
  border: 1px solid gray;
  padding: 5px;
  position: fixed;
  bottom: 30px;
  width: 60%;
  display: flex;
  @media (max-width: 700px) {
    width: 80%;
    margin: 20px;
  }
  justify-content: space-between;
  > input {
    flex: 0.9;
    margin-left: 5px;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 400;
    @media (max-width: 700px) {
      flex: 0.8;
    }
  }
`;
