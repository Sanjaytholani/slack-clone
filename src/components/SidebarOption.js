import React from "react";
import styled from "styled-components";

function SidebarOption({ Icon, title }) {
  return (
    <SidebarOptionContainer>
      {Icon && <Icon fontSoze="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> <h3>{title}</h3>
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }
`;
const SidebarOptionChannel = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }
  > span {
    padding: 15px;
    font-size: 20px;
  }
`;
