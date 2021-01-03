import React from "react";
import "../styles/SendMail.css";

import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

import { useForm } from "react-hook-form";
import { closeSendMessage } from "../features/mailSlice";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import firebase from "firebase";

const SendMail = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (formData) => {
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          ref={register({ required: true })}
        />
        {errors.to && (
          <p className="sendMail__error">Atleast one recepient required.</p>
        )}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Can't send a mail without subject.</p>
        )}
        <input
          name="message"
          placeholder="Message"
          className="sendMail__message"
          type="text"
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">You can't leave this field empty.</p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
