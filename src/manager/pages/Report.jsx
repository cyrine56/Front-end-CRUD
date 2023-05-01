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
    const result = await axios.get("http://localhost:8080/rapports");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/rapport/${id}`);
    loadUsers();
  };

  return (
    <div >
          <h1 className="text-center">Rapports des helpdesks</h1>
      <div >
        <table className="table table-xss border shadow small m-5">
          <thead>
            <tr>
              <th scope="col">code réclamation</th>
              <th scope="col">technicien</th>
              <th scope="col" >déscription</th>
  


            </tr>
          </thead>
          <tbody>
            {users.map((Report, index) => (
              <tr>
               

                <td>{Report.codeReclam}</td>
           
                <td>{Report.technicien}</td>
                <td>{Report.description}</td>
     
          
                <td>
                <button className="btn btn-success m-2" onClick={() => deleteUser(Report.id)}>
  <FontAwesomeIcon icon={faEdit} className="text-white" />
</button>


                  <button className="btn btn-danger m-2 " onClick={() => deleteUser(Report.id)}>
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