import React from "react";
import { Button, IconButton } from "@mui/material";

import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";

import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button startIcon={<AddIcon />} className="sidebar__compose">
        Compose
      </Button>

      <SidebarOption
        icon={<InboxIcon />}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption icon={<StarIcon />} title="Starred" number={54} />
      <SidebarOption icon={<AccessTimeIcon />} title="Snoozed" number={54} />
      <SidebarOption
        icon={<LabelImportantIcon />}
        title="Important"
        number={54}
      />
      <SidebarOption icon={<NearMeIcon />} title="Sent" number={54} />
      <SidebarOption icon={<NoteIcon />} title="Drafts" number={54} />
      <SidebarOption icon={<ExpandMoreIcon />} title="More" number={54} />

      <div className="sidebar__footer">
        <div className="sidebar__footer--icons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
