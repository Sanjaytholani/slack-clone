import { Avatar, IconButton } from "@material-ui/core";
import { Close, Edit, Menu, Search } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { isSidebar, selectUser } from "../features/userSlice";

function Header() {
  const dispatch = useDispatch();
  const { sidebar } = useSelector(selectUser);

  const handelSidebar = (e) => {
    e.preventDefault();
    dispatch(isSidebar());
  };
  const HeaderCenter = styled.div`
    flex: 0.6;
    display: flex;
    > .MuiSvgIcon-root {
      margin-right: 10px;
    }
    @media (max-width: 700px) {
      display: ${sidebar ? "none" : "flex"};
    }
  `;
  return (
    <HeaderContainer>
      <HeaderLeft>
        {sidebar ? (
          <CloseContainer>
            <IconButton
              onClick={(e) => {
                handelSidebar(e);
              }}
            >
              <Close />
            </IconButton>
            <h2>Slack</h2>
            <Edit />
          </CloseContainer>
        ) : (
          <IconButton
            onClick={(e) => {
              handelSidebar(e);
            }}
          >
            <Menu />
          </IconButton>
        )}
      </HeaderLeft>
      <HeaderCenter>
        <HeaderInput>
          <Search />
          <input placeholder="search" />
        </HeaderInput>
      </HeaderCenter>
      <HeaderRight>
        <HeaderAvatar />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  z-index: 2;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--slack-color);
  color: white;
  border-bottom: 1px solid #49274b;
`;
const HeaderLeft = styled.div`
  flex: 0.2;
  display: flex;
  align-items: center;
  > .MuiIconButton-root {
    color: white;
  }
`;
const CloseContainer = styled.div`
  flex: 0.2;
  margin-right: 5px;
  display: flex;

  justify-content: space-between;
  > h2 {
    font-size: 1rem;
    font-weight: 400;
  }
  > .MuiIconButton-root {
    color: white;
  }
  align-items: center;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    background-color: white;
    font-size: 18px;
    border-radius: 100%;
    margin-left: 30px;
  }
`;

const HeaderInput = styled.div`
  background-color: #421f44;
  border-radius: 6px;
  opacity: 1;
  text-align: center;
  display: flex;
  align-items: center;
  color: gray;
  width: 30vw;
  border: 1px solid gray;

  > input {
    outline: 0;
    border: 0;
    background: transparent;
    color: white;
    margin-left: 5px;
  }

  @media (max-width: 700px) {
    width: 90%;
  }
`;
const HeaderRight = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: flex-end;
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
