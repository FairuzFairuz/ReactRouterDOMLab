import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailBoxForm = ({ addMailbox }) => {
  const [boxOwner, setBoxOwner] = useState("");
  const [boxSize, setBoxSize] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMailbox = {
      boxOwner,
      boxSize,
    };
    addMailbox(newMailbox);
    navigate("/mailboxes");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Box Owner:
        <br />
        <input
          type="text"
          value={boxOwner}
          onChange={(e) => setBoxOwner(e.target.value)}
        />
      </label>
      <br />
      <label>
        Box Size:
        <br />
        <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
          <option value="">Select</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <br />
      <br />
      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default MailBoxForm;
