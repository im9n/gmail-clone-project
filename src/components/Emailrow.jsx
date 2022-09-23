import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import "./Emailrow.css";
import { useNavigate } from "react-router-dom"

const Emailrow = ({ title, subject, description, time, id }) => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate("/mail")} className="emailrow">
      <div className="emailrow__options">
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className="emailrow__title">{title}</h3>

      <div className="emailrow__message">
        <h4>
          {subject} -{" "}
          <span className="emailrow__description">{description}</span>
        </h4>
      </div>
      <div className="emailrow__description">
        <p className="emailrow__time">{time}</p>
      </div>
    </div>
  );
};

export default Emailrow;
