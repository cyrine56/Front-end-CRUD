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
    const result = await axios.get("http://localhost:8080/equipements");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/equipement/${id}`);
    loadUsers();
  };

  return (
    <div >
                <h1 className="text-center">Equipements</h1>

                <Link className="btn btn-outline-dark m-2" to="/coord/addequ">
            Ajouter nouveau Equipement
          </Link>
      <div >
        <table className="table table-xss border shadow small mt-5">
          <thead>
            <tr>
              <th scope="col">codeb</th>
              <th scope="col">bur</th>
              <th scope="col" >numéro Serie GAB</th>
              <th scope="col">date deVisite pre</th>
              <th scope="col">dateLiv</th>
              <th scope="col">date Mise En Service</th>
              <th scope="col">date Formation</th>
              <th scope="col">telephone</th>
              <th scope="col">model PC</th>
              <th scope="col">model Ecran</th>
              <th scope="col">os</th>
              <th scope="col">parametre Reseau</th>
              <th scope="col">tech</th>
              <th scope="col">fiche</th>
              <th scope="col">observation</th>
              <th scope="col">etat</th>
              <th scope="col">dateReception</th>


            </tr>
          </thead>
          <tbody>
            {users.map((Equipement, index) => (
              <tr>
               

                <td>{Equipement.codeb}</td>
                <td>{Equipement.bur}</td>
                <td>{Equipement.numSerieGAB}</td>
                <td>{Equipement.dateVisitepre}</td>
                <td>{Equipement.dateLiv}</td>
                <td>{Equipement.dateMiseEnService}</td>
                <td>{Equipement.dateFormation}</td>
                <td>{Equipement.telephone}</td>
                <td>{Equipement.modelPC}</td>
                <td>{Equipement.modelEcran}</td>
                <td>{Equipement.os}</td>
                <td>{Equipement.paramReseau}</td>
                <td>{Equipement.tech}</td>
                <td>{Equipement.fiche}</td>
                <td>{Equipement.observation}</td>
                <td>{Equipement.etat}</td>
                <td>{Equipement.dateReception}</td>
                <td>
                  <Link
                    className="btn btn-primary mt-2"
                    to={`/dash/viewequ${Equipement.id}`}
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
                    onClick={() => deleteUser(Equipement.id)}
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