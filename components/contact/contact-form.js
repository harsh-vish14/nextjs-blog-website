import { useRef, useState } from "react";
import Notification from "../ui/notification";
import classes from "./contact-form.module.css";

const ContactForm = () => {
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notification, setNotification] = useState({
    title: "",
    message: "Loading.....",
    status: "",
  });
  const formHandler = async (e) => {
    e.preventDefault();
    setShowNotifications(true);
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: name.current.value,
        email: email.current.value,
        message: message.current.value,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((data) => {
          throw new Error(data.err);
        });
      })
      .then((data) => {
        name.current.value = "";
        email.current.value = "";
        message.current.value = "";
        setNotification({
          title: "Successfully",
          message: data.message,
          status: "success",
        });
        setShowNotifications(true);
      })
      .catch((error) => {
        setNotification({
          title: "Error!!",
          message: error.message,
          status: "error",
        });
        setShowNotifications(true);
      });
  };
  const disableNotifications = () => {
    setShowNotifications(false);
    setNotification({
      title: "",
      message: "Loading.....",
      status: "",
    });
  };
  return (
    <section className={classes.contact}>
      <h1>How can I Help?</h1>
      <form className={classes.form} onSubmit={formHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input ref={email} type="email" id="email" required></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input ref={name} type="text" id="name" required></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea ref={message} id="message" rows="5" required></textarea>
          </div>
          <div className={classes.action}>
            <button>Send Message</button>
          </div>
        </div>
      </form>
      {showNotifications && (
        <div onClick={disableNotifications}>
          <Notification
            title={notification.title}
            message={notification.message}
            status={notification.status}
          />
        </div>
      )}
    </section>
  );
};

export default ContactForm;
