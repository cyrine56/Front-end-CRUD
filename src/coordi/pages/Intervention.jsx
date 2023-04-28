import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/intervs");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/interv/${id}`);
    loadUsers();
  };

  return (
    <div >
          <h1 className="text-center">Interventions</h1>
      <div >
        <table className="table table-xss border shadow small m-5">
          <thead>
            <tr>
              <th scope="col">date</th>
              <th scope="col">heure</th>
              <th scope="col" >client</th>
              <th scope="col">modelMachine</th>
              <th scope="col">panne</th>
              <th scope="col">technicien</th>
              <th scope="col">dateDebut</th>
              <th scope="col">heureDebut</th>
              <th scope="col">dateFIN</th>
              <th scope="col">heureFin</th>
              <th scope="col">numFiche</th>


            </tr>
          </thead>
          <tbody>
            {users.map((Interv, index) => (
              <tr>
               

                <td>{Interv.date}</td>
                <td>{Interv.heure}</td>
                <td>{Interv.client}</td>
                <td>{Interv.modelMachine}</td>
                <td>{Interv.panne}</td>
                <td>{Interv.technicien}</td>
                <td>{Interv.dateDebut}</td>
                <td>{Interv.heureDebut}</td>
                <td>{Interv.dateFIN}</td>
                <td>{Interv.heureFin}</td>
                <td>{Interv.numFiche}</td>
          
                <td>
                  <Link
                    className="btn btn-primary mt-2"
                    to={`/dash/viewequ${Interv.id}`}
                  >
                    Voir
                  </Link>
                  <Link
                    className="btn btn-outline-primary mt-2"
                    to={`/dash/editequ`}
                  >
                    Editer
                  </Link>
                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => deleteUser(Interv.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}