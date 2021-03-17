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
  Add,
  ExpandMore,
} from "@material-ui/icons";
import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";

function Sidebar({ channels }) {
  const [showChannels, setShowChannels] = useState(true);

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: 1 },
    },
  };
  const subVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  const handelChannels = (e) => {
    e.preventDefault();
    setShowChannels(!showChannels);
  };
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
      <hr />
      <SidebarOption Icon={Add} addChannel title="Add Channel" />
      <SidebarButton onClick={handelChannels}>
        <SidebarOption
          Icon={showChannels ? ExpandLess : ExpandMore}
          title="Channels"
        />
      </SidebarButton>
      <motion.nav
        animate={showChannels ? "open" : "closed"}
        variants={variants}
      >
        {channels?.docs.map((doc) => (
          <motion.div id={doc.id} key={doc.id} variants={subVariants}>
            <SidebarOption
              selectChannelId
              onClick={(e) => e.preventDefault()}
              id={doc.id}
              title={doc.data().name}
            />
          </motion.div>
        ))}
      </motion.nav>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  display: flex;
  flex-direction: column;
  flex: 1;
  color: white;
  align-center: center;
  > hr {
    margin: 10px 0;
    border: 0;
    border-bottom: 1px solid #49274b;
  }
  overflow-y: scroll;
`;
const SidebarInfo = styled.div`
  margin-bottom: 5px;
  padding-left: 10px;

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
const SidebarButton = styled.div`
  background-color: none;
  outline: none;
  border: none;
`;
