import {
  Apps,
  BookmarkBorder,
  Drafts,
  ExpandLess,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarInfo>
        <h3>
          <FiberManualRecord />
          Sanjay Tholani
        </h3>
      </SidebarInfo>
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <SidebarOption title="General" />
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  display: flex;
  flex-direction: column;
  flex: 0.3;
  color: white;
  padding-left: 20px;
  @media (max-width: 700px) {
    flex: 1;
  }
`;
const SidebarInfo = styled.div`
  margin-bottom: 5px;
  .MuiSvgIcon-root {
    color: green;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
`;
