import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";

const FeedbackPopup = ({ isOpen, onClose, onSubmit }) => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const popupRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, feedback });
    setEmail("");
    setFeedback("");
    onClose();
    setSelectedEmoji("");
  };

  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setTimeout(onClose, 200);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <form className={styles.popup} onSubmit={handleSubmit} ref={popupRef}>
      <div className={styles.popupField}>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Email address"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
          className={styles.popupInput}
          required
        />
      </div>
      <div className={styles.popupField}>
        <textarea
          id="feedback"
          value={feedback}
          placeholder="Your feedback..."
          onChange={(e) => setFeedback(e.target.value)}
          className={styles.popupTextarea}
          rows="4"
          required
        ></textarea>
      </div>

      <div className={styles.popupActions}>
        <div className={styles.emojis}>
          <span
            className={selectedEmoji === "great" ? styles.selected : ""}
            onClick={() => setSelectedEmoji("great")}
          >
            😊
          </span>
          <span
            className={selectedEmoji === "good" ? styles.selected : ""}
            onClick={() => setSelectedEmoji("good")}
          >
            😐
          </span>
          <span
            className={selectedEmoji === "neutral" ? styles.selected : ""}
            onClick={() => setSelectedEmoji("neutral")}
          >
            😕
          </span>
          <span
            className={selectedEmoji === "sad" ? styles.selected : ""}
            onClick={() => setSelectedEmoji("sad")}
          >
            😢
          </span>
        </div>
        <button type="submit" className={`${styles.popupButton} CTA`}>
          Send
        </button>
      </div>
    </form>
  );
};

const FeedbackButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = ({ email, feedback }) => {
    console.log("Feedback submitted:", { email, feedback });
  };

  return (
    <>
      <button
        className={`${styles.feedbackButton} CTA`}
        onClick={() => setIsPopupOpen(!isPopupOpen)}
      >
        Feedback
      </button>
      <FeedbackPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default FeedbackButton;
