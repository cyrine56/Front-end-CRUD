import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Alertes() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      technician: "John Doe",
      technicianType: "Helpdesk",
      timeAssigned: "2023-04-30T10:30:00Z",
      waitTime: "00:10:00",
    },
    {
      id: 2,
      technician: "Jane Doe",
      technicianType: "Sur terrain",
      timeAssigned: "2023-04-30T11:00:00Z",
      waitTime: "00:20:00",
    },
    {
      id: 3,
      technician: "Bob Smith",
      technicianType: "Helpdesk",
      timeAssigned: "2023-04-30T11:30:00Z",
      waitTime: "00:05:00",
    },
  ]);

  const renderAlerts = () => {
    return (
      <ul className="list-group">
        {alerts.map((alert) => (
          <li key={alert.id} className="list-group-item">
            <div>ID : {alert.id}</div>
            <div>Technicien : {alert.technician}</div>
            <div>Type de technicien : {alert.technicianType}</div>
            <div>Heure d'affectation : {alert.timeAssigned}</div>
            <div>Temps d'attente : {alert.waitTime}</div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container">
      <h1 className="text-center">Alertes</h1>
      {renderAlerts()}
    </div>
  );
}
