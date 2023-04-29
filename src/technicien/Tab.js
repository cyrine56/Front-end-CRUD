import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
function Tab() {
  return (
    <div>
      <table
        className="table table-xss border shadow small mt-5"
        style={{ backgroundColor: "white" }}
      >
        <thead>
          <tr>
            <th scope="col">Num Ticket</th>
            <th scope="col">téléphonne</th>
            <th scope="col">Adresse panne </th>
            <th scope="col">Date Ouverture</th>
            <th scope="col">Rapport</th>
            <th scope="col">état panne</th>


          </tr>
        </thead>
        <tbody>
          <tr>
            <td>24</td>
            <td>24168598</td>
            <td>Lafayette</td>
            <td>2023-01-22 10:55:02</td>
            <td><button className="btn btn-outline-danger mt-2">
                rédiger
              </button> </td>

            <td><button className="btn btn-danger mt-2">
                en cours
              </button> </td>
         
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>24</td>
            <td>24168598</td>
            <td>Lafayette</td>
            <td>2023-01-22 10:55:02</td>
            <td><button className="btn btn-outline-success mt-2">
                envoyé
              </button> </td>
            <td><button className="btn btn-success mt-2">
                cloturée
              </button></td>
          
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>24</td>
            <td>24168598</td>
            <td>Lafayette</td>
            <td>2023-01-22 10:55:02</td>
            <td><button className="btn btn-outline-success mt-2">
                envoyé 
              </button> </td>
            <td><button className="btn btn-success mt-2">
                cloturée
              </button></td>
           
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tab;