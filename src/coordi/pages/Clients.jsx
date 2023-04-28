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
    const result = await axios.get("http://localhost:8080/clients");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/client/${id}`);
    loadUsers();
  };

  return (
    <div >
                <h1 className="text-center">Clients</h1>

                <Link className="btn btn-outline-dark m-2" to="/coord/addequ">
            Ajouter nouveau Client
          </Link>
      <div >
        <table className="table table-xss border shadow small mt-5">
          <thead>
            <tr>
              <th scope="col">client</th>
              <th scope="col">adresse</th>
              <th scope="col" >contact</th>
              <th scope="col">téléphone</th>

            </tr>
          </thead>
          <tbody>
            {users.map((Client, index) => (
              <tr>
               

                <td>{Client.client}</td>
                <td>{Client.adresse}</td>
                <td>{Client.contact}</td>
                <td>{Client.telephone}</td>
               
                <td>
                  <Link
                    className="btn btn-primary mt-2"
                    to={`/dash/viewequ${Client.id}`}
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
                    onClick={() => deleteUser(Client.id)}
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