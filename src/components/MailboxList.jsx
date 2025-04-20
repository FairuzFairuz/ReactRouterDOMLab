import React from "react";
import { Link } from "react-router-dom";

function MailboxList({ mailboxes }) {
  if (!Array.isArray(mailboxes) || mailboxes.length === 0) {
    return <p>No mailboxes available!</p>;
  }

  return (
    <div>
      {mailboxes.map((mailbox) => (
        <div className="mail-box" key={mailbox._id}>
          <Link to={`/mailboxes/${mailbox._id}`}>
            <p>Box Number: {mailbox._id}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MailboxList;
