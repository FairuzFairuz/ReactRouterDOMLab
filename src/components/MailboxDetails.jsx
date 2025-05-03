import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxID } = useParams();
  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id.toString() === mailboxID
  );

  return (
    <div>
      {selectedBox ? (
        <div>
          <h2>Details</h2>
          <p>Box Number: {selectedBox._id}</p>
          <p>Box Owner: {selectedBox.boxOwner}</p>
          <p>Box Size: {selectedBox.boxSize}</p>
        </div>
      ) : (
        <p> Mailbox Not Found!</p>
      )}
    </div>
  );
};

export default MailboxDetails;
