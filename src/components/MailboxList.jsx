import React from "react";
import { Link } from "react-router-dom";

function MailboxList({ mailboxes }) {
  if (!Array.isArray(mailboxes) || mailboxes.length === 0) {
    return <p>No mailboxes available!</p>;
  }

  return (
    <div
      className="mailbox-list"
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap", //to wrap in one line or subsequent lines
        justifyContent: "space-evenly", // Distributes items evenly
      }}
    >
      {mailboxes.map((mailbox) => (
        <div
          className="mail-box"
          style={{
            padding: "12px",
            border: "1px solid black",
            borderRadius: "8px",
            backgroundColor: "yellow",
            textAlign: "center",
            minWidth: "120px",
          }}
          key={mailbox._id}
        >
          <Link
            to={`/mailboxes/${mailbox._id}`}
            style={{ textDecoration: "none", color: "#333" }}
          >
            <p>Box Number: {mailbox._id}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MailboxList;
