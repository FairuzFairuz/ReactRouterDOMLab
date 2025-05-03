import React, { useState } from "react";
import MailBoxForm from "./components/MailBoxForm";
import MailboxDetails from "./components/MailboxDetails";
import MailboxList from "./components/MailboxList";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mailBoxes, setMailBoxes] = useState(() => {
    const savedMailboxes = localStorage.getItem("mailboxes");
    return savedMailboxes ? JSON.parse(savedMailboxes) : [];
  });

  const addBox = (newBox) => {
    setMailBoxes((prev) => {
      const newID = prev.length > 0 ? prev[prev.length - 1]._id + 1 : 1; // Increment last ID
      const updatedMailboxes = [...prev, { ...newBox, _id: newID }];
      localStorage.setItem("mailboxes", JSON.stringify(updatedMailboxes));
      return updatedMailboxes;
    });
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Post Office</h1>} />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailBoxes} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailBoxForm addMailbox={addBox} />}
        />
        <Route
          path="/mailboxes/:mailboxID"
          element={<MailboxDetails mailboxes={mailBoxes} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
