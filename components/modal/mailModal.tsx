import type { NextPage } from "next";
import classNames from "classnames";
import styles from "./mailModal.module.scss";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { Dispatch, SetStateAction, useRef } from "react";

interface props {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const MailModal: NextPage<props> = ({ openModal, setOpenModal }) => {
  // send mail
  const onSubmitForm = (event: any) => {
    event.preventDefault();

    try {
      emailjs.sendForm(
        "service_2grrndr",
        "template_ci8aqdt",
        event.target,
        "LGFNXBpjo1tTzEFHb"
      );
    } catch (error) {
      alert("error!");
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.background} onClick={() => setOpenModal(false)}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          modalOpen!!
          <form onSubmit={onSubmitForm}>
            <label>Name *</label>
            <input type="text" name="name" required />

            <label>Email *</label>
            <input type="email" name="email" required />

            <label>Message *</label>
            <textarea name="message" />

            <input type="submit" value="submit" required />
          </form>
        </div>
      </div>
    </>
  );
};

export default MailModal;
