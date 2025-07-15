/** @format */

// src/App.jsx
import React from "react";
import ProjectList from "./components/ProjectList";
import ClientList from "./components/ClientList";
import ContactList from "./components/ContactList";
import SubscriberList from "./components/SubscriberList";
import "./style/AdminPanel.css";

function App() {
  return (
    <div>
      <h1 className="admin-panel-heading">Admin Panel</h1>
      <center>
        <ProjectList />
        <ClientList />
        <ContactList />
        <SubscriberList />
      </center>
    </div>
  );
}
export default App;
