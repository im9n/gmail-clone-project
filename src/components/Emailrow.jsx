import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import "./Emailrow.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/mailSlice";

const Emailrow = ({ id, title, subject, description, timestamp }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        timestamp,
      })
    );

    navigate("/mail")
  };

  return (
    <div onClick={openMail} className="emailrow">
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
        <p className="emailrow__time">{timestamp}</p>
      </div>
    </div>
  );
};

export default Emailrow;
