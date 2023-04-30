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
    const result = await axios.get("http://localhost:8080/customs");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/custom/${id}`);
    loadUsers();
  };

  return (
    <div >
                <h1 className="text-center">Clients</h1>

                <Link className="btn btn-outline-dark m-2" to="/coord/addclient">
            Ajouter nouveau Client
          </Link>
      <div >
        <table className="table table-xss border shadow small mt-5 ">
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
               

                <td>{Client.nom}</td>
                <td>{Client.adresse}</td>
                <td>{Client.contact}</td>
                <td>{Client.telephone}</td>
               
                <td>
            
                <button className="btn btn-success m-2" onClick={() => deleteUser(Client.id)}>
  <FontAwesomeIcon icon={faEdit} className="text-white" />
</button>


                  <button className="btn btn-danger m-2 " onClick={() => deleteUser(Client.id)}>
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