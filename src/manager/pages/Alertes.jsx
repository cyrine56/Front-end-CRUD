import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Alertes() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      technician: "Ahmed",
      technicianType: "Helpdesk",
      timeAssigned: "2023-04-30T10:30:00Z",
      waitTime: "00:10:00",
    },
    {
      id: 2,
      technician: "Aymen",
      technicianType: "Sur terrain",
      timeAssigned: "2023-04-30T11:00:00Z",
      waitTime: "00:20:00",
    },
    {
      id: 3,
      technician: "Amir",
      technicianType: "Helpdesk",
      timeAssigned: "2023-04-30T11:30:00Z",
      waitTime: "00:05:00",
    },
  ]);

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" style={{height: "50vh"}}>
        <div className=" text-center">
          <h1>Alertes</h1>
        </div>
        <div className="col-md-12">
          <div className="row">
            {alerts.map((alert) => (
              <div key={alert.id} className="col-md-4">
                <div
                  className={`alert ${
                    alert.technicianType === "Helpdesk"
                      ? "alert-warning"
                      : "alert-primary"
                  }`}
                  style={{
                    marginTop: "20px",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <div>ID : {alert.id}</div>
                  <div>Technicien : {alert.technician}</div>
                  <div>Type de technicien : {alert.technicianType}</div>
                  <div>Heure d'affectation : {alert.timeAssigned}</div>
                  <div>Temps d'attente : {alert.waitTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .alert-warning {
          background-color: #fff3cd;
          border-color: #ffeeba;
          color: #856404;
        }

        .alert-primary {
          background-color: #cfe2ff;
          border-color: #b4c6e7;
          color: #1d3880;
        }
      `}</style>
    </div>
  );
}
