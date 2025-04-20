import React, { useState } from "react";
import MailBoxForm from "./components/MailBoxForm";
import MailboxDetails from "./components/MailboxDetails";
import MailboxList from "./components/MailboxList";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mailBoxes, setMailBoxes] = useState([]);

  const addBox = (newBox) => {
    const newID = mailBoxes.length + 1;
    const mailboxWithID = { ...newBox, _id: newID };
    setMailBoxes([...mailBoxes, mailboxWithID]);
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
