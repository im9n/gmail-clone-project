import React from "react";
import "./Sendmail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase";
import { timestamp } from '../firebase';

const Sendmail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
     to: formData.to,
     subject: formData.subject,
     message: formData.message,
     timestamp: timestamp
    });

    dispatch(closeSendMessage())
  };

  return (
    <div className="sendmail">
      <div className="sendmail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendmail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="email"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendmail__error">To is required</p>}
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendmail__error">Subject is required</p>
        )}
        <input
          name="message"
          type="text"
          placeholder="Message..."
          className="sendmail__message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendmail__error">Message is required</p>
        )}
        <div className="sendmail__options">
          <Button className="sendmail__send" variant="contained" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Sendmail;
