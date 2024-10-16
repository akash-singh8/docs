import { useState } from "react";
import styles from "./styles.module.css";

const FooterFeedback = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setSelectedEmoji(null);
    setFeedback("");
  };

  const handleEmojiClick = (emoji) => {
    setIsOpen(true);
    setSelectedEmoji(emoji);
    // You can add more logic here like sending data to the server
  };

  return (
    <div className={`${styles.container} ${isOpen && styles.expanded}`}>
      <div className={styles.feedback}>
        <p>Was this helpful?</p>
        <div className={styles.emojis}>
          <span
            className={selectedEmoji === "great" ? styles.selected : ""}
            onClick={() => handleEmojiClick("great")}
          >
            😊
          </span>
          <span
            className={selectedEmoji === "good" ? styles.selected : ""}
            onClick={() => handleEmojiClick("good")}
          >
            😐
          </span>
          <span
            className={selectedEmoji === "neutral" ? styles.selected : ""}
            onClick={() => handleEmojiClick("neutral")}
          >
            😕
          </span>
          <span
            className={selectedEmoji === "sad" ? styles.selected : ""}
            onClick={() => handleEmojiClick("sad")}
          >
            😢
          </span>
        </div>
      </div>

      {isOpen && (
        <form className={styles.popup} onSubmit={handleSubmit}>
          <div className={styles.popupField}>
            <textarea
              id="feedback"
              value={feedback}
              placeholder="Your feedback..."
              onChange={(e) => setFeedback(e.target.value)}
              className={styles.popupTextarea}
              rows="4"
              autoFocus
              required
            ></textarea>
          </div>

          <div className={styles.popupActions}>
            <button type="submit" className={`${styles.popupButton} CTA`}>
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FooterFeedback;
