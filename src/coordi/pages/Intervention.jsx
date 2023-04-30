import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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
          <Link className="btn btn-outline-dark m-2" to="/coord/addinterv">
            Ajouter une nouvelle intervention
          </Link>
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

                <button className="btn btn-success m-2" onClick={() => deleteUser(Interv.id)}>
  <FontAwesomeIcon icon={faEdit} className="text-white" />
</button>


                  <button className="btn btn-danger m-2 " onClick={() => deleteUser(Interv.id)}>
  <FontAwesomeIcon icon={faTrashAlt} className="text-white" />
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