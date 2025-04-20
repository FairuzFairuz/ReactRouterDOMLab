import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/mailboxes">Mailboxes</a>
        </li>
        <li>
          <a href="/new-mailbox">New Mailbox</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
