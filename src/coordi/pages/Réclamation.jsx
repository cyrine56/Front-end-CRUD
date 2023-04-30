import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [reclams, setReclams] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadReclams();
  }, []);

  const loadReclams = async () => {
    const result = await axios.get("http://localhost:8080/reclams");//elle n'existe pas encore en backend
    setReclams(result.data);
  };

  const deleteReclam = async (id) => {
    await axios.delete(`http://localhost:8080/reclam/${id}`);
    loadReclams();
  };

  return (
    <div >
                <h1 className="text-center">Réclamation</h1>

                <Link className="btn btn-outline-dark m-2" to="/coord/addreclam">
            Créer une nouvelle réclamation
          </Link>
      <div >
        <table className="table table-xss border shadow small mt-5">
          <thead>
            <tr>
              <th scope="col">Client</th>
              <th scope="col">téléphonne</th>
              <th scope="col" >date</th>
              <th scope="col">heure</th>
              <th scope="col">affecté à </th>
              <th scope="col">type panne</th>
              <th scope="col">état</th>
              


            </tr>
          </thead>
          <tbody>
              <tr>
               
                <td>Tunis RP</td>
                <td>24168598</td>
                <td>2023-02-05</td>
                <td>12h</td>
                <td>Ahmed</td>
                <td></td>
                <td>Cloturés</td>

                <td>

                <button className="btn btn-success m-2" onClick={() => deleteReclam(reclams.id)}>
  <FontAwesomeIcon icon={faEdit} className="text-white" />
</button>


                  <button className="btn btn-danger m-2 " onClick={() => deleteReclam(reclams.id)}>
  <FontAwesomeIcon icon={faTrashAlt} className="text-white" />
</button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}