import React from "react";
import "./Sendmail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from 'react-hook-form'

const Sendmail = () => {
  return (
    <div className="sendmail">
      <div className="sendmail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendmail__close"/>
      </div>

      <form>
        <input type="text" placeholder="To" />
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="Message..." className="sendmail__message"/>

        <div className="sendmail__options">
            <Button className='sendmail__send'>Send</Button>
        </div>
      </form>
    </div>
  );
};

export default Sendmail;
