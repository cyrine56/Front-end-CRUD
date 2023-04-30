import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  const [tech, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/techniciens");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/tech/${id}`);
    loadUsers();
  };

  return (
    <div >
                <h1 className="text-center">Techniciens</h1>

                <Link className="btn btn-outline-dark m-2" to="/coord/addtech">
            Ajouter nouveau technicien
          </Link>
      <div >
        <table className="table table-xss border shadow small mt-5 ">
          <thead>
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Prénom</th>
              <th scope="col" >Numéro GSM</th>
              <th scope="col">Zone</th>

            </tr>
          </thead>
          <tbody>
            {tech.map((tech, index) => (
              <tr>
               

                <td>{tech.nom}</td>
                <td>{tech.prénom}</td>
                <td>{tech.gsm}</td>
                <td>{tech.zone}</td>
               
                <td>
            
                <button className="btn btn-success m-2" onClick={() => deleteUser(tech.id)}>
  <FontAwesomeIcon icon={faEdit} className="text-white" />
</button>


                  <button className="btn btn-danger m-2 " onClick={() => deleteUser(tech.id)}>
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