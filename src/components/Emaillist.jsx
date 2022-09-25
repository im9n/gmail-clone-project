import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import { Checkbox, Icon, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Emaillist.css";
import Section from "./Section";
import Emailrow from "./Emailrow";
import { db } from "../firebase";

const Emaillist = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((email) => ({
            id: email.id,
            data: email.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settings--left">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          <IconButton></IconButton>
        </div>

        <div className="emailList__settings--right">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section
          icon={<InboxIcon />}
          title="Primary"
          colour="red"
          selected={true}
        />
        <Section
          icon={<PeopleIcon />}
          title="Social"
          colour="green"
          selected={false}
        />
        <Section
          icon={<LocalOfferIcon />}
          title="Promotions"
          colour="blue"
          selected={false}
        />
      </div>

      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <Emailrow
            key={id}
            id={id}
            title={to}
            subject={subject}
            description={message}
            timestamp={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />
          <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />
          <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />
          <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />
          <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />
          <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />
          <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />
          <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />
          <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />
          <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />
          <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />
          <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />
          <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />
          <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />

          <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          /><Emailrow
          title='gmail@gmmail.com'
          subject='subject'
          description='description'
          timestamp='10pm'
        />
        <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />
          <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />
          <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />
          <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />
          <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />
          <Emailrow
            title='gmail@gmmail.com'
            subject='subject'
            description='description'
            timestamp='10pm'
          />
          
      </div>
    </div>
  );
};

export default Emaillist;
