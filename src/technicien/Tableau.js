import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Tableau() {
  return (
    <div>
        
      <p className="ticketName"> Tickets reçues</p>
      <table className="table table-xss border shadow small mt-5">
        <thead>
          <tr>
            <th scope="col">Num Ticket</th>
            <th scope="col">téléphonne</th>
            <th scope="col">Adresse panne </th>
            <th scope="col">Date Ouverture</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>24</td>
            <td>24168598</td>
            <td>Lafayette</td>
            <td>2023-01-22 10:55:02</td>
            <td></td>
            <td>
              <button className="btn btn-danger mt-2">Accepter</button>
              <button className="btn btn-secondary mt-2">
                Details reclamations
              </button>
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th scope="col">Num Ticket</th>
            <th scope="col">téléphonne</th>
            <th scope="col">Adresse panne </th>
            <th scope="col">Date Ouverture</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>24</td>
            <td>24168598</td>
            <td>Lafayette</td>
            <td>2023-01-22 10:55:02</td>
            <td></td>
            <td>
              <button className="btn btn-danger mt-2">Accepter</button>
              <button className="btn btn-secondary mt-2">
                Details reclamations
              </button>
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th scope="col">Num Ticket</th>
            <th scope="col">téléphonne</th>
            <th scope="col">Adresse panne </th>
            <th scope="col">Date Ouverture</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>24</td>
            <td>24168598</td>
            <td>Lafayette</td>
            <td>2023-01-22 10:55:02</td>
            <td></td>
            <td>
              <button className="btn btn-danger mt-2">Accepter</button>
              <button className="btn btn-secondary mt-2">
                Details reclamations
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tableau;